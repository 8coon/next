import {JSWorksInternal} from '../Common/InternalDecorator';
import {RouteConfig} from './RouteConfig';
import {ApplicationContext} from '../ApplicationContext/ApplicationContext';
import {HTMLParserService} from '../Parser/HTML/HTMLParserService';
import {IDOMParsed} from '../Parser/HTML/IDOMParsed';
import {Route} from './Route';
import {WrongRouterNameError} from './Error/WrongRouterNameError';
import {AttributeNotFound} from './Error/AttributeNotFound';
import {RouteAlreadyExistError} from './Error/RouteAlreadyExistError';


@JSWorksInternal
export class RouteHolder {


    private routes: object;
    private _root: Route = new Route('', '');
    private htmlParser: HTMLParserService;


    /**
     * загрузить все роуты из html
     */
    public load(): void {
        const routes: Element[] = Array.from(document.querySelectorAll(RouteConfig.ROUTES_TAG));

        const appContext: ApplicationContext = JSWorks.applicationContext;
        this.htmlParser = appContext.serviceHolder.getServiceByName('HTMLParser');

        routes.forEach((route) => {
            Array.from(route.children).forEach((routeTag) => {
                this.parseRoute(routeTag, this._root, '');
            });
        });

    }


    get root(): Route {
        return this._root;
    }


    /**
     * рекурсивный обход вложенных тегов
     * @param routeTag
     * @param parent
     * @param path
     */
    public parseRoute(routeTag: Element, parent: Route, path: string) {
        const parsedRoute: IDOMParsed = this.htmlParser.parseDOM(routeTag);

        if (parsedRoute.tagName !== RouteConfig.ROUTE_TAG) {
            throw new WrongRouterNameError(parsedRoute.tagName);
        }

        if (!parsedRoute.attributes['match']) {
            throw new AttributeNotFound('match');
        }

        path = path + '/' + parsedRoute.attributes['match'];

        let route;
        let pathVariableName;
        let match = parsedRoute.attributes['match'];

        if (match.startsWith(':')) {
            pathVariableName = match;
            match = '*';
        }

        if (parsedRoute.id) {
            if (!parsedRoute.attributes['page']) {
                throw new AttributeNotFound('page');
            }

            route = new Route(match, path, pathVariableName, parsedRoute.id, parsedRoute.attributes['page']);
            this.routes[parsedRoute.id] = route;
        } else {
            route = new Route(match, path);
        }

        if (parent.children[match]) {
            throw new RouteAlreadyExistError(match);
        }

        parent.children[match] = route;

        Array.from(routeTag.children).forEach((innerRoute) => {
            this.parseRoute(innerRoute, route, path);
        });
    }


}
