import {ViewHolder} from '../View/ViewHolder';
import {ControllerHolder} from '../Controller/ControllerHolder';
import {ComponentConfig} from './ComponentConfig';
import {JSWorksInternal} from '../Common/InternalDecorator';
import {EventType} from '../EventManager/EventType';
import {CollectionProperty} from './CollectionProperty';
import {EventManager} from '../EventManager/EventManager';
import {IEvent} from '../EventManager/IEvent';
import {ApplicationContext} from '../ApplicationContext/ApplicationContext';


declare const JSWorks: any;
declare const __JSWorks_components__: any[];


@JSWorksInternal
export class ComponentHolder {

    private components: object = {};
    private pages: object = {};
    private prototypes: object = {};


    /**
     * Загрузить все компоненты. Должен быть вызван после загрузки всех View.
     */
    public load(): void {
        __JSWorks_components__.forEach((componentProto) => {
            this.prototypes[componentProto.name] = componentProto;
            this.initComponent(componentProto);
        });
    }


    /**
     * Инициализировать компонент из прототипа
     * @param componentProto
     */
    public initComponent(componentProto) {
        const views: ViewHolder = JSWorks.applicationContext.viewHolder;
        const controllers: ControllerHolder = JSWorks.applicationContext.controllerHolder;

        const component = new componentProto();
        component.variables = {};


        component.setVariable = (name: string, value: any) => {
            component.variables[name] = value;

            if (component.emitEvent) {
                component.emitEvent({ type: EventType.UPDATE, data: undefined });
            }
        };


        component.getVariable = (name: string) => {
            return component.variables[name];
        };

        component.subscribeCollection = (name: string) => {
            if (component[name].__subscribed__) {
                return;
            }

            const oldCollection: CollectionProperty = component[name];
            component[name] = new CollectionProperty();
            component[name].__subscribed__ = true;

            EventManager.subscribe({}, component[name], EventType.UPDATE, (event: IEvent) => {
                const emit = () => {

                    if (component.emitEvent) {
                        component.emitEvent({ type: EventType.UPDATE, data: {} });
                        component.emitEvent({ type: EventType.PostUpdate, data: {} });
                    }
                };

                const appContext: ApplicationContext = JSWorks.applicationContext;

                if (appContext.loaded) {
                    emit();
                    return;
                }

                JSWorks.EventManager.subscribe(this, appContext, EventType.ViewsListenersInstalled, (ev) => {
                    emit();
                });
            });

            if (oldCollection && oldCollection.length > 0) {
                component[name].setValues(oldCollection.getValues());
            }
        };


        (componentProto.__collections__ || []).forEach((name) => {
            component.subscribeCollection(name);
        });

        const view = views.getView(componentProto.__view_name__);
        view.component = component;
        view.applicationContext = JSWorks.applicationContext;

        component.view = view;
        component.controller = controllers.getController(componentProto.__controller_name__);
        component.applicationContext = JSWorks.applicationContext;
        component.type = componentProto.__type__;

        component.controller.component = component;
        component.controller.applicationContext = JSWorks.applicationContext;

        switch (componentProto.__type__) {

            case ComponentConfig.Types.PAGE: {
                this.pages[componentProto.name] = component;
            } break;

            case ComponentConfig.Types.COMPONENT: {
                this.components[componentProto.name] = component;
            } break;

            default: {
                throw new Error(`Unknown component type: ${componentProto.__type__}`);
            }

        }

        if (component.emitEvent) {
            component.emitEvent({ type: EventType.CREATE, data: component });
        }
    }


    /**
     * Получить компонент по имени
     * @param name
     * @returns {any}
     */
    public getComponent(name: string) {
        return this.components[name];
    }


    /**
     * Получить прототип компонента по имени
     * @param name
     * @returns {any}
     */
    public getComponentPrototype(name: string) {
        return this.prototypes[name];
    }


    /**
     * Получить страницу по имени
     * @param name
     * @returns {any}
     */
    public getPage(name: string) {
        return this.pages[name];
    }

}
