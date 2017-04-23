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
import {DuplicateViewParamError} from '../../Error/DuplicateViewParamError';
import {UnresolvableViewIncludeError} from '../../Error/UnresolvableViewIncludeError';
import {AttributeNotFoundError} from '../../Error/AttributeNotFoundError';
import {SimpleVirtualDOMElement} from '../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElement';


declare const JSWorks: any;


type renderCallback = (viewName: string, view: View) => void;
type resolveCallback = (viewName: string, view: View, rendered: object, render: renderCallback) => void;
type successCallback = () => void;
type errorCallback = () => void;


@JSWorksInternal
@JSWorksCustomElement(ViewConfig.VIEW_TAG)
export class AppViewElement extends SimpleVirtualDOMElementExt {


    // private static listening: boolean = false;


    /**
     * Отрисовать наследование
     * @param viewHolder
     */
    public static renderViewInheritance(viewHolder: ViewHolder): void {

        AppViewElement.resolveCircular(viewHolder,

            (viewName: string, view: View, rendered: object, render: renderCallback): void => {
                if (!view.DOMRoot.hasAttribute('extends')) {
                    render(viewName, view);
                    return;
                }

                const extendsName: string = view.DOMRoot.getAttribute('extends');
                const extendsView = rendered[extendsName];

                if (extendsView) {
                    AppViewElement.extend(<SimpleVirtualDOMElement> view.DOMRoot, extendsView);
                    // (<AppViewElement> view.DOMRoot).extend(extendsView);
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


    /**
     * Отрисовать включения
     * @param viewHolder
     */
    public static renderViewIncludes(viewHolder: ViewHolder): void {

        AppViewElement.resolveCircular(viewHolder,

            (viewName: string, view: View, rendered: object, render: renderCallback): void => {
                const includes: IVirtualDOMElement[] = view.DOMRoot.querySelectorAll(
                    ViewConfig.VIEW_INCLUDE_TAG);

                const includeCount: number = includes.length;
                let renderedCount: number = 0;

                includes.forEach(
                        (tag: SimpleVirtualDOMElement) => {
                    const paramValues: object = {};
                    const includeName: string = tag.getAttribute('name');

                    if (!tag.hasAttribute('name')) {
                        throw new AttributeNotFoundError('name', 'View-include');
                    }

                    if (!rendered[includeName]) {
                        return;
                    }

                    tag.querySelectorAll(ViewConfig.VIEW_PARAM_TAG).forEach(
                            (paramTag: SimpleVirtualDOMElement) => {
                        const name: string = paramTag.getAttribute('name');

                        if (paramTag.hasAttribute('resolved')) {
                            return;
                        }

                        if (paramValues[name]) {
                            throw new DuplicateViewParamError(name, viewName);
                        }

                        paramTag.ready = false;
                        paramValues[name] = paramTag.cloneNode();
                        paramValues[name].setAttribute('resolved', 'true');
                    });

                    const cloned: SimpleVirtualDOMElement = rendered[includeName].DOMRoot.cloneNode();

                    cloned.querySelectorAll(ViewConfig.VIEW_PARAM_TAG).forEach(
                            (paramTag: SimpleVirtualDOMElement) => {
                        paramTag.removeChildren();
                        paramTag.appendChild(paramValues[paramTag.getAttribute('name')]._children);
                        paramTag.setAttribute('resolved', 'true');
                    });

                    tag.removeChildren();
                    tag.appendChild((<any> cloned)._children);

                    renderedCount++;
                });

                if (includeCount === renderedCount) {
                    render(viewName, view);

                    // (<SimpleVirtualDOMElement> view.DOMRoot).customClear();
                    // (<SimpleVirtualDOMElement> view.DOMRoot).propagateView(undefined);
                    // (<SimpleVirtualDOMElement> view.DOMRoot).propagateView(view);
                }
            },

            (): void => {
                // JSWorks.applicationContext.emitEvent({ type: EventType.ViewIncludesRendered, data: undefined });
                return;
            },

            (): void => {
                throw new UnresolvableViewIncludeError();
            },
        );
    }


    /**
     * Унаследовать текущую View от переданной
     * @param source
     * @param extending
     */
    public static extend(source: SimpleVirtualDOMElement, extending: View): void {
        const viewDOM: IVirtualDOMElement = extending.DOMRoot.cloneNode();
        const includes = viewDOM.querySelector(ViewConfig.VIEW_YIELD_TAG);

        if (includes) {
            includes.parentNode.replaceChild((<any> source)._children, includes);
        }

        (<any> source)._children = [];

        (<AppViewElement> viewDOM)._children.forEach((child) => {
            source.appendChild(child);
        });

        (<any> source).emitMutilationEvent({ type: EventType.ViewExtended, data: this });
    }


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



    /**
     * Фабрика AppViewElement
     * @returns {AppViewElement}
     */
    public createElement(): AppViewElement {
        return new AppViewElement(SimpleVirtualDOM.NextHash());
    }


    /**
     * См. SimpleVirtualDOMElement.render
     */
    public render(): void {
        super.render();

        if (this.tagName === undefined) {
            return;
        }

        (<HTMLElement> this.rendered).removeAttribute('id');
    }

}
