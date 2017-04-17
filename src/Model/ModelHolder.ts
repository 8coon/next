import {JSWorksInternal} from '../Common/InternalDecorator';
import {DuplicateModelError} from '../Error/DuplicateModelError';
import {IModel} from './IModel';


declare const JSWorks: any;
declare const __JSWorks_models__: object;



@JSWorksInternal
export class ModelHolder {

    /**
     * Словарь всех моделей
     * @type {{}}
     */
    public models: object = {};


    /**
     * Загрузить все объявленные модели
     */
    public load(): void {
        Object.keys(__JSWorks_models__).forEach((name) => {
            if (this.models[name]) {
                throw new DuplicateModelError(name);
            }

            const model: IModel = new (__JSWorks_models__[name].proto)();
            this.models[name] = model;

            model.modelMetadata = __JSWorks_models__[name];
            model.proto = __JSWorks_models__[name].proto;
            this.initModel(model);
        });
    }


    /**
     * Возвращает модель по её имени
     * @param name
     * @returns {any}
     */
    public getModel(name: string): IModel {
        return this.models[name];
    }


    private initModel(model: IModel): void {
        this.initModelFields(model);
        this.initModelMethods(model);
    }


    private initModelFields(model: IModel): void {
        (model.modelMetadata.fields || []).forEach((fieldName: string) => {
            const name = `__${fieldName}_value__`;

            Object.defineProperty(model, fieldName, {
                configurable: false,
                enumerable: false,

                /* tslint:disable */
                get: function(): void {
                    return this[name];
                },

                set: function(value: any): void {
                    this[name] = value;
                    this.__dirty__ = true;

                    // ToDo: Event emit
                }
                /* tslint:enable */
            });
        });
    }


    private initModelMethods(model: IModel) {
        const modelHolder: ModelHolder = this;

        model['__create__'] = model[model.modelMetadata.createMethod];
        model['__read__'] = model[model.modelMetadata.readMethod];
        model['__update__'] = model[model.modelMetadata.updateMethod];
        model['__delete__'] = model[model.modelMetadata.deleteMethod];
        model['__query__'] = model[model.modelMetadata.queryMethod];

        model.create = model['__create__'];
        model.read = model['__read__'];
        model['delete'] = model['__delete__'];
        model.query = model['__query__'];
        model.remove = model['delete'];

        model.jsonParser = JSWorks.applicationContext.serviceHolder.getServiceByName('JSONParser');


        // tslint:disable
        model.isDirty = function(): boolean {
            return this['__dirty__'] === true;
        };

        model.setDirty = function(value: boolean = false): void {
            this['__dirty__'] = value;
        };

        model.update = function(): Promise<IModel> {
            return this['__update__']().then(() => {
                this.setDirty(false);
            });
        };

        model.from = function(data?: object): IModel {
            if (typeof data !== 'object') {
                data = undefined;
            }

            const newModel: IModel = new this.proto();

            newModel.modelMetadata = this.modelMetadata;
            newModel.proto = this.proto;
            modelHolder.initModel(newModel);

            newModel.apply(data);
            newModel.setDirty(false);

            return newModel;
        };

        model.persist = function(): Promise<IModel> {
            if (this.id) {
                return this.update();
            }

            return this.create();
        };

        model.save = function(): Promise<IModel> {
            if (!this.isDirty()) {
                return Promise.resolve(this);
            }

            return this.persist();
        };

        model.gist = function(): object {
            const fields: object = {};

            (model.modelMetadata.fields || []).forEach((fieldName: string) => {
                fields[fieldName] = this[fieldName];
            });

            return fields;
        };

        model.apply = function(fields?: object): void {
            if (typeof fields !== 'object') {
                return;
            }

            Object.keys(fields).forEach((fieldName: string) => {
                this[fieldName] = fields[fieldName];
            });
        };
        // tslint:enable
    }


}
