import {JSWorksInternal} from '../Common/InternalDecorator';
import {RouteConfig} from './RouteConfig';
import {ApplicationContext} from '../ApplicationContext/ApplicationContext';
import {HTMLParserService} from '../Parser/HTML/HTMLParserService';
import {IDOMParsed} from '../Parser/HTML/IDOMParsed';
import {Route} from './Route';
import {WrongRouterNameError} from '../Error/WrongRouterNameError';
import {AttributeNotFoundError} from '../Error/AttributeNotFoundError';
import {RouteAlreadyExistError} from '../Error/RouteAlreadyExistError';
import {IEventEmitter} from '../EventManager/IEventEmitter';
import {IEvent} from '../EventManager/IEvent';
import {EventType} from '../EventManager/EventType';


declare const JSWorks: any;


@JSWorksInternal
export class RouteHolder implements IEventEmitter {


    private routes: object = {};
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
                this.parseRoute(routeTag, appContext.routeHolder.root, '');
            });
        });

        this.emitEvent({ type: EventType.LOAD, data: this });
    }


    get root(): Route {
        return this._root;
    }

    /**
     * вернуть роут по имени
     * @param name
     * @returns {any}
     */
    public getRoute(name: string): Route {
        return this.routes[name];
    }

    // public getRouteByMatch(name: string): Route {
    //
    // }


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

            if (typeof parsedRoute.attributes['default'] === 'string') {
                parsedRoute.attributes['match'] = '';
            } else {
                throw new AttributeNotFoundError('match');
            }

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
                throw new AttributeNotFoundError('page');
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

    public emitEvent(event: IEvent): void {}  // tslint:disable-line


}
