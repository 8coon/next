import {ViewHolder} from '../View/ViewHolder';
import {ControllerHolder} from '../Controller/ControllerHolder';
import {ComponentConfig} from './ComponentConfig';
import {JSWorksInternal} from '../Common/InternalDecorator';


declare const JSWorks: any;
declare const __JSWorks_components__: any[];


@JSWorksInternal
export class ComponentHolder {

    private components: object = {};
    private pages: object = {};


    /**
     * Загрузить все компоненты. Должен быть вызван после загрузки всех View.
     */
    public load(views: ViewHolder, controllers: ControllerHolder): void {
        __JSWorks_components__.forEach((componentProto) => {
            const component = new componentProto();

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
        });
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
     * Получить страницу по имени
     * @param name
     * @returns {any}
     */
    public getPage(name: string) {
        return this.pages[name];
    }

}
