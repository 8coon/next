import {JSWorksInternal} from '../Common/InternalDecorator';
import {RouteConfig} from './RouteConfig';
import {ApplicationContext} from '../ApplicationContext/ApplicationContext';
import {HTMLParserService} from '../Parser/HTML/HTMLParserService';
import {IDOMParsed} from '../Parser/HTML/IDOMParsed';
import {Route} from './Route';
import {WrongRouterNameError} from './Error/WrongRouterNameError';
import {AttributeNotFound} from './Error/AttributeNotFound';


@JSWorksInternal
export class RouteHolder {


    private routes: object;
    private root: Route = new Route('');
    private htmlParser: HTMLParserService;


    public load(): void {
        const routes: Element[] = Array.from(document.querySelectorAll(RouteConfig.ROUTES_TAG));

        const appContext: ApplicationContext = JSWorks.applicationContext;
        this.htmlParser = appContext.serviceHolder.getServiceByName('HTMLParser');

        routes.forEach((route) => {
            Array.from(route.children).forEach((routeTag) => {
                this.parseRoute(routeTag, this.root);
            })
        });

    }


    public parseRoute(routeTag: Element, parent: Route) {
        const parsedRoute: IDOMParsed = this.htmlParser.parseDOM(routeTag);

        if (parsedRoute.tagName !== RouteConfig.ROUTE_TAG) {
            throw new WrongRouterNameError(parsedRoute.tagName);
        }

        if (!parsedRoute.attributes['match']) {
            throw new AttributeNotFound('match');
        }

        let route;

        if (parsedRoute.id) {
            if (!parsedRoute.attributes['page']) {
                throw new AttributeNotFound('page');
            }

            route = new Route(parsedRoute.attributes['match'], parsedRoute.id, parsedRoute.attributes['page']);
            this.routes[parsedRoute.id] = route;
        } else {
            route = new Route(parsedRoute.attributes['match']);
        }

        parent.children.push(route);

        Array.from(routeTag.children).forEach((innerRoute) => {
            this.parseRoute(innerRoute, route);
        });
    }


}