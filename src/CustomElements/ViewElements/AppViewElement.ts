import {SimpleVirtualDOMElementExt} from '../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElementExt';
import {JSWorksInternal} from '../../Common/InternalDecorator';
import {JSWorksCustomElement} from '../CustomElementDecorator';
import {ViewConfig} from '../../View/ViewConfig';
import {SimpleVirtualDOM} from '../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOM';
import {ApplicationContext} from '../../ApplicationContext/ApplicationContext';
import {EventType} from '../../EventManager/EventType';


declare const JSWorks: any;


@JSWorksInternal
@JSWorksCustomElement(ViewConfig.VIEW_TAG)
export class AppViewElement extends SimpleVirtualDOMElementExt {


    /**
     * Фабрика AppViewElement
     * @returns {AppViewElement}
     */
    public createElement(): AppViewElement {
        return new AppViewElement(SimpleVirtualDOM.NextHash());
    }


    /**
     * Нужно перерисовать элемент при изменении значения атрибута extends
     * @param name
     * @param value
     */
    public setAttribute(name: string, value: any): void {
        if (name.toLowerCase() === 'extends') {
            const appContext: ApplicationContext = JSWorks.applicationContext;
            value = String(value);

            const viewDOM = appContext.viewHolder.getView(value).DOMRoot.cloneNode(true);
            const includes = viewDOM.querySelector(ViewConfig.VIEW_YIELD_TAG);

            if (includes) {
                includes.parentNode.replaceChild(this._children, includes);
            }

            this._children = [];

            viewDOM._children.forEach((child) => {
                this.appendChild(child);
            });

            this.emitMutilationEvent({ type: EventType.ViewExtended, data: this });
            return;
        }

        super.setAttribute(name, value);
    }


}
