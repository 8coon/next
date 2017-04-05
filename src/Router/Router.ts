
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
        const appContext: ApplicationContext = JSWorks.applicationContext;
        this.routeHolder = new RouteHolder();
        this.baseUrl = baseUrl;
    }


    /**
     * Найти роут и, если он существует, активировать его
     * @param path
     */
    public pathChange(path: string): void {
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

        if (!parent.children[match]) {
            const pathVarChild = parent.children['*'];

            if (pathVarChild) {
                pathVariables[pathVarChild.pathVariableName] = match;
                return pathVarChild;
            }

            return undefined;
        }

        return parent.children[match];
    }

}
