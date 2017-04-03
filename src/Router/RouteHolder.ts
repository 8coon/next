
import {JSWorksInternal} from '../Common/InternalDecorator';
import {RouteConfig} from './RouteConfig';
import {ApplicationContext} from '../ApplicationContext/ApplicationContext';
import {HTMLParserService} from '../Parser/HTML/HTMLParserService';
import {IDOMParsed} from '../Parser/HTML/IDOMParsed';
import {Route} from './Route';

@JSWorksInternal
export class RouteHolder {

    private routes: object;
    private root: Route;

    public load(): void {
        const routes: Element[] = Array.from(document.querySelectorAll(RouteConfig.ROUTE_TAG));

        routes.forEach((route) => {
            this.parseRoute(route, '');
        })

    }

    public parseRoute(routeTag: Element, match: string) {
        const appContext: ApplicationContext = JSWorks.applicationContext;
        const htmlParser: HTMLParserService = appContext.serviceHolder.getServiceByName('HTMLParser');

        const parsedRoute: IDOMParsed = htmlParser.parseDOM(routeTag);
        match = match + '/' + parsedRoute['match'];
        if (routeTag.children.length === 0) {
            this.routes[match] = parsedRoute['pages'];
            return;
        }

        Array.from(routeTag.children).forEach((innerRoute) => {
            this.parseRoute(innerRoute, match);
        })

    }
}