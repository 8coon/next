
import {RouteHolder} from './RouteHolder';
import {ApplicationContext} from '../ApplicationContext/ApplicationContext';
import {Route} from './Route';
import {PathNotFoundError} from './Error/PathNotFoundError';


export abstract class Router {

    /**
     * загрузщик роутов
     */
    protected routeHolder: RouteHolder;


    constructor() {
        const appContext: ApplicationContext = JSWorks.applicationContext;
        this.routeHolder = appContext.routeHolder;
    }


    /**
     * проверка
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
     * Найти рекурсивный поиск роута в детях родителя
     * @param parent
     * @param match
     * @param pathVariables
     * @returns {Route}
     */
    protected findRoute(parent: Route, match: string, pathVariables: object): Route {

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
