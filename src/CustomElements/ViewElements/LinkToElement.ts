import {JSWorksInternal} from '../../Common/InternalDecorator';
import {JSWorksCustomElement} from '../CustomElementDecorator';
import {ViewConfig} from '../../View/ViewConfig';
import {SimpleVirtualDOM} from '../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOM';
import {SimpleVirtualDOMElementExt} from '../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElementExt';
import {JSWorksLib} from '../../jsworks';
import {Route} from '../../Router/Route';


declare const JSWorks: JSWorksLib;


@JSWorksInternal
@JSWorksCustomElement(ViewConfig.LINK_TO_TAG)
export class LinkToElement extends SimpleVirtualDOMElementExt {


    /**
     * Фабрика LinkToElement
     * @returns {undefined}
     */
    public createElement(): LinkToElement {
        return new LinkToElement(SimpleVirtualDOM.NextHash());
    }


    /*
        <link-to route="MainRoute" args="{}">Kek</link-to>
     */
    /**
     * Рендер ноды
     */
    public render(): void {
        if (!this.rendered) {
            this.rendered = document.createElement('A');
            this.mergeChildren();
        }

        const route: Route = JSWorks.applicationContext.routeHolder.getRoute(this.getAttribute('route'));

        if (!route) {
            return;
        }

        const args = this.execStatement(this.getAttribute('args') || 'undefined');
        const href: string = route.getPath(args);

        if ((<HTMLElement> this.rendered).getAttribute('href') !== href) {
            (<HTMLElement> this.rendered).setAttribute('href', href);
        }

        if (!this.rendered['_linkPatched']) {
            this.rendered.addEventListener('click', (event) => {
                event.preventDefault();
                route.fire(args);
            });
        }

        this.rendered['_linkPatched'] = true;
    }

}
