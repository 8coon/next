import {JSWorksInternal} from '../Common/InternalDecorator';
import {SimpleVirtualDOM} from '../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOM';
import {ApplicationContext} from '../ApplicationContext/ApplicationContext';
import {UnknownCustomElementError} from '../Error/UnknownCustomElementError';


declare const JSWorks: any;
declare const __JSWorks_custom_elements__: any[];


@JSWorksInternal
export class CustomElementHolder {

    private elements: object = {};


    /**
     * Загружает все пользовательские DOM элементы
     */
    public load() {
        const appContext: ApplicationContext = JSWorks.applicationContext;
        const virtualDOM: SimpleVirtualDOM = appContext.serviceHolder.getServiceByName('SimpleVirtualDOM');

        __JSWorks_custom_elements__.forEach((elementProto) => {
            const element = new elementProto(SimpleVirtualDOM.NextHash());
            const tagName = elementProto.__tagName__.toUpperCase();

            virtualDOM.registerCustomElement(tagName, element);
            this.elements[tagName] = element;
        });
    }


    /**
     * Получить пользовательский элемент по тэгу
     * @param tagName
     * @returns {any}
     */
    public getElement(tagName: string) {
        tagName = tagName.toUpperCase();

        if (this.elements[tagName]) {
            return this.elements[tagName];
        }

        throw new UnknownCustomElementError(tagName);
    }


}
