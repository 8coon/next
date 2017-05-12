import {ViewHolder} from '../View/ViewHolder';
import {ControllerHolder} from '../Controller/ControllerHolder';
import {ComponentConfig} from './ComponentConfig';
import {JSWorksInternal} from '../Common/InternalDecorator';
import {EventType} from '../EventManager/EventType';
import {CollectionProperty} from './CollectionProperty';
import {EventManager} from '../EventManager/EventManager';
import {IEvent} from '../EventManager/IEvent';
import {ApplicationContext} from '../ApplicationContext/ApplicationContext';
import {JSWorksLib} from '../jsworks';


declare const JSWorks: JSWorksLib;
declare const __JSWorks_components__: any[];
declare const __JSWorks_component_fields__: any;


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
            this.initComponent(componentProto);
        });
    }


    /**
     * Создать дубликат компонента из прототипа и вернуть его имя
     * @param componentProto
     */
    public duplicateComponent(componentProto): string {
        const appContext: ApplicationContext = JSWorks.applicationContext;

        const viewName: string = appContext.viewHolder.duplicateView(componentProto.__view_name__);
        const controllerName: string = appContext.controllerHolder.duplicateController(
                componentProto.__controller_name__);

        const name: string = ApplicationContext.UniqueName(componentProto.name,
                (cname: string) => { return this.components[cname]; });

        this.initComponent(componentProto, name, viewName, controllerName);

        return name;
    }


    /**
     * Инициализировать компонент из прототипа
     * @param componentProto
     * @param name
     * @param viewName
     * @param controllerName
     */
    public initComponent(componentProto, name?: string, viewName?: string, controllerName?: string) {
        const views: ViewHolder = JSWorks.applicationContext.viewHolder;
        const controllers: ControllerHolder = JSWorks.applicationContext.controllerHolder;

        name = name || componentProto.name;
        viewName = viewName || componentProto.__view_name__;
        controllerName = controllerName || componentProto.__controller_name__;

        this.prototypes[name] = componentProto;
        const component = new componentProto();
        component.variables = {};
        component.id = name;
        component.fields = (__JSWorks_component_fields__[componentProto.name] || []).map((nm) => { return nm; } );


        component.setVariable = (cname: string, value: any) => {
            component.variables[cname] = value;

            if (component.emitEvent) {
                component.emitEvent({ type: EventType.UPDATE, data: undefined });
            }
        };


        component.getVariable = (cname: string) => {
            return component.variables[cname];
        };

        component.subscribeCollection = (cname: string) => {
            if (component[cname].__subscribed__) {
                return;
            }

            const oldCollection: CollectionProperty = component[cname];
            component[cname] = new CollectionProperty();
            component[cname].__subscribed__ = true;

            EventManager.subscribe({}, component[cname], EventType.UPDATE, (event: IEvent) => {
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


        (componentProto.__collections__ || []).forEach((cname) => {
            component.subscribeCollection(cname);
        });

        const view = views.getView(viewName);
        view.component = component;
        view.applicationContext = JSWorks.applicationContext;

        component.view = view;
        component.controller = controllers.getController(controllerName);
        component.applicationContext = JSWorks.applicationContext;
        component.type = componentProto.__type__;

        component.controller.component = component;
        component.controller.view = view;
        component.controller.applicationContext = JSWorks.applicationContext;

        switch (componentProto.__type__) {

            case ComponentConfig.Types.PAGE: {
                this.pages[name] = component;
            } break;

            case ComponentConfig.Types.COMPONENT: {
                this.components[name] = component;
            } break;

            default: {
                throw new Error(`Unknown component type: ${componentProto.__type__}`);
            }

        }

        if (component.emitEvent) {
            component.emitEvent({ type: EventType.CREATE, data: component });
        }

        if (component.controller.onCreate) {
            component.controller.onCreate();
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
