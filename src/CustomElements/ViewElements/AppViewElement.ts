import {SimpleVirtualDOMElementExt} from '../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElementExt';
import {JSWorksInternal} from '../../Common/InternalDecorator';
import {JSWorksCustomElement} from '../CustomElementDecorator';
import {ViewConfig} from '../../View/ViewConfig';
import {SimpleVirtualDOM} from '../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOM';
import {EventType} from '../../EventManager/EventType';
import {ViewHolder} from '../../View/ViewHolder';
import {View} from '../../View/View';
import {UnresolvableViewInheritanceError} from '../../Error/UnresolvableViewInheritanceError';
import {IVirtualDOMElement} from '../../VirtualDOM/IVirtualDOMElement';


declare const JSWorks: any;


@JSWorksInternal
@JSWorksCustomElement(ViewConfig.VIEW_TAG)
export class AppViewElement extends SimpleVirtualDOMElementExt {


    private static listening: boolean = false;


    private static renderViewInheritance(viewHolder: ViewHolder): void {
        const rendered = {};
        const viewNames: string[] = Object.keys(viewHolder.views);
        let renderedCount = 0;

        for (let i = 0; i < 100; i++) {
            viewNames.forEach((viewName) => {
                if (rendered[viewName]) {
                    return;
                }

                const view: View = viewHolder.getView(viewName);

                if (!view.DOMRoot.hasAttribute('extends')) {
                    rendered[viewName] = view;
                    renderedCount++;
                    return;
                }

                const extendsName: string = view.DOMRoot.getAttribute('extends');
                const extendsView = rendered[extendsName];

                if (extendsView) {
                    (<AppViewElement> view.DOMRoot).extend(extendsView);
                    rendered[viewName] = view;
                    renderedCount++;
                }
            });

            if (renderedCount === viewNames.length) {
                JSWorks.applicationContext.emitEvent({ type: EventType.ViewsInheritanceRendered, data: undefined });
                return;
            }
        }

        throw new UnresolvableViewInheritanceError();
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

        return new AppViewElement(SimpleVirtualDOM.NextHash());
    }


    /**
     * Унаследовать текущую View от данной
     * @param extending
     */
    public extend(extending: View): void {
        const viewDOM: IVirtualDOMElement = extending.DOMRoot.cloneNode();
        const includes = viewDOM.querySelector(ViewConfig.VIEW_YIELD_TAG);

        if (includes) {
            includes.parentNode.replaceChild(this._children, includes);
        }

        this._children = [];

        (<AppViewElement> viewDOM)._children.forEach((child) => {
            this.appendChild(child);
        });

        this.emitMutilationEvent({ type: EventType.ViewExtended, data: this });
    }


}
