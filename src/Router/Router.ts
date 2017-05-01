import {Route} from './Route';
import {PathNotFoundError} from '../Error/PathNotFoundError';
import {JSWorksInternal} from '../Common/InternalDecorator';
import {JSWorksLib} from '../jsworks';


declare const JSWorks: JSWorksLib;


@JSWorksInternal
export abstract class Router {

    /**
     * старторвый домен
     */
    public baseUrl: string;


    constructor(baseUrl: string) {
        if (baseUrl.endsWith('/')) {
            baseUrl = baseUrl.slice(0, -1);
        }

        this.baseUrl = baseUrl;
    }


    /**
     * Найти роут, если он существует
     * @param path
     */
    public pathChange(path: string): {route: Route, pathVariables: object} {
        const matches = path.split('/');
        const pathVariables = {};
        let route = JSWorks.applicationContext.routeHolder.root;

        matches.forEach((match) => {
            route = this.findRoute(route, match, pathVariables);

            if (!route) {
                throw new PathNotFoundError(path);
            }
        });

        // this.navigate(route, pathVariables);
        // return {name: route.name, path: route.getPath(pathVariables), pathVariables};
        return {route, pathVariables};
    }


    /**
     * активировать роут и добавить новую запись в историю
     * @param route
     * @param pathVariable
     */
    public abstract navigate(route: Route, pathVariable: object): Promise<any>;


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
