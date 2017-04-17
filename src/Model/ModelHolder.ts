import {JSWorksInternal} from '../Common/InternalDecorator';
import {DuplicateModelError} from '../Error/DuplicateModelError';
import {CollectionProperty} from '../Component/CollectionProperty';


declare const __JSWorks_models__: object;


/**
 * Метаданные модели
 */
interface IModelMetadata {
    createMethod?: string;
    readMethod?: string;
    updateMethod?: string;
    deleteMethod?: string;

    primaryKey?: string;
    fields?: string[];
}


/**
 * Интерфейс модели
 */
interface IModel {
    items: CollectionProperty;
    modelMetadata: IModelMetadata;
    proto: object;

    query(params?: object): IModel;
    one(pk: number | string): IModel;
}


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
                get(): void {
                    return this[name];
                },

                set(value: any): void {
                    this[name] = value;
                    this.__dirty__ = true;

                    // ToDo: Event emit
                }
                /* tslint:enable */
            });
        });
    }



    private initModelMethods(model: IModel) {

        /* tslint:disable */
        model.query = function(params: object = {}): IModel {
            const newModel: IModel = new (this.proto)();
            newModel.items = this[this.modelMetadata.readMethod](params);

            return newModel;
        };


        model.one = function(pk: number | string): IModel {
            return this.query({ pk });
        };
        /* tslint:enable */

    }


}
