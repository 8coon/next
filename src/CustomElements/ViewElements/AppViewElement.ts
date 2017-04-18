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


type renderCallback = (viewName: string, view: View) => void;
type resolveCallback = (viewName: string, view: View, rendered: object, render: renderCallback) => void;
type successCallback = () => void;
type errorCallback = () => void;


@JSWorksInternal
@JSWorksCustomElement(ViewConfig.VIEW_TAG)
export class AppViewElement extends SimpleVirtualDOMElementExt {


    private static listening: boolean = false;


    private static resolveCircular(viewHolder: ViewHolder, callback: resolveCallback,
            success: successCallback, error: errorCallback): void {
        const rendered = {};
        const viewNames: string[] = Object.keys(viewHolder.views);
        let renderedCount = 0;

        for (let i = 0; i < 100; i++) {
            viewNames.forEach((viewName) => {
                if (rendered[viewName]) {
                    return;
                }

                callback(viewName, viewHolder.getView(viewName), rendered,
                    (renderViewName: string, view: View): void => {
                        rendered[renderViewName] = view;
                        renderedCount++;
                    });
            });

            if (renderedCount === viewNames.length) {
                success();
                return;
            }
        }

        error();
    }


    private static renderViewInheritance(viewHolder: ViewHolder): void {

        AppViewElement.resolveCircular(viewHolder,

            (viewName: string, view: View, rendered: object, render: renderCallback): void => {
                if (!view.DOMRoot.hasAttribute('extends')) {
                    render(viewName, view);
                    return;
                }

                const extendsName: string = view.DOMRoot.getAttribute('extends');
                const extendsView = rendered[extendsName];

                if (extendsView) {
                    (<AppViewElement> view.DOMRoot).extend(extendsView);
                    render(viewName, view);
                }
            },

            (): void => {
                JSWorks.applicationContext.emitEvent({ type: EventType.ViewsInheritanceRendered, data: undefined });
            },

            (): void => {
                throw new UnresolvableViewInheritanceError();
            },
        );
    }


    /* private static renderViewIncludes(viewHolder: ViewHolder): void {

    } */


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
     * Унаследовать текущую View от переданной
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
