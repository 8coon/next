import {SimpleVirtualDOMElementExt} from '../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElementExt';
import {JSWorksInternal} from '../../Common/InternalDecorator';
import {JSWorksCustomElement} from '../CustomElementDecorator';
import {ViewConfig} from '../../View/ViewConfig';
import {SimpleVirtualDOM} from '../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOM';
import {ApplicationContext} from '../../ApplicationContext/ApplicationContext';
import {EventType} from '../../EventManager/EventType';
import {ViewHolder} from '../../View/ViewHolder';
import {View} from '../../View/View';
import {SimpleVirtualDOMElement} from '../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElement';


declare const JSWorks: any;


@JSWorksInternal
@JSWorksCustomElement(ViewConfig.VIEW_TAG)
export class AppViewElement extends SimpleVirtualDOMElementExt {


    private static listening: boolean = false;


    private static renderViewInheritance(viewHolder: ViewHolder): void {
        // const rendered = 0;

        Object.keys(viewHolder.views).forEach((viewName) => {
            const view: View = viewHolder.getView(viewName);

            console.dir(view.DOMRoot);
        });
    }


    /**
     * Фабрика AppViewElement
     * @returns {AppViewElement}
     */
    public createElement(): AppViewElement {
        if (!AppViewElement.listening) {
            AppViewElement.listening = true;

            JSWorks.EventManager.subscribe({}, JSWorks.applicationContext, EventType.LOAD, (event) => {
                AppViewElement.renderViewInheritance(JSWorks.applicationContext.viewHolder);
            });
        }
        console.log('view created');

        return new AppViewElement(SimpleVirtualDOM.NextHash());
    }


    /**
     * appendChild
     * @param child
     */
    // public appendChild(child: SimpleVirtualDOMElement): void {
    //     console.dir(this, child);
    //     super.appendChild(child);
    // }


    /**
     * Нужно перерисовать элемент при изменении значения атрибута extends
     * @param name
     * @param value
     */
    // public setAttribute(name: string, value: any): void {
        /* if (name.toLowerCase() === 'extends') {
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
        } */

    //     super.setAttribute(name, value);
    // }


}
