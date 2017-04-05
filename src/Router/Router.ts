
import {RouteHolder} from './RouteHolder';
import {ApplicationContext} from '../ApplicationContext/ApplicationContext';
import {Route} from './Route';
import {PathNotFoundError} from './Error/PathNotFoundError';
import {JSWorksInternal} from '../Common/InternalDecorator';


@JSWorksInternal
export abstract class Router {

    /**
     * старторвый домен
     */
    public baseUrl: string;

    /**
     * загрузщик роутов
     */
    public routeHolder: RouteHolder;


    constructor(baseUrl: string) {
        this.routeHolder = new RouteHolder();

        if (baseUrl.endsWith('/')) {
            baseUrl = baseUrl.slice(0, -1);
        }

        this.baseUrl = baseUrl;
    }


    /**
     * Найти роут и, если он существует, активировать его
     * @param path
     */
    public pathChange(path: string): {route: Route, pathVariables: object} {
        const matches = path.split('/');
        const pathVariables = {};
        let route = this.routeHolder.root;

        matches.forEach((match) => {
            route = this.findRoute(route, match, pathVariables);

            if (!route) {
                throw new PathNotFoundError(path);
            }
        });

        this.navigate(route, pathVariables);
        // return {name: route.name, path: route.getPath(pathVariables), pathVariables};
        return {route, pathVariables};
    }


    /**
     * активировать роут и добавить новую запись в историю
     * @param route
     * @param pathVariable
     */
    public abstract navigate(route: Route, pathVariable: object): void;


    /**
     * Поиск роута в детях родителя
     * @param parent
     * @param match
     * @param pathVariables
     * @returns {Route}
     */
    public findRoute(parent: Route, match: string, pathVariables: object): Route {

        if (parent.children[match] === undefined) {
            const pathVarChild = parent.children['*'];

            if (pathVarChild) {
                pathVariables[pathVarChild.pathVariableName] = match;
                return pathVarChild;
            }

            return;
        }

        return parent.children[match];
    }

}
