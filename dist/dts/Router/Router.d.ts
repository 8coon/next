import { Route } from './Route';
export declare abstract class Router {
    /**
     * старторвый домен
     */
    baseUrl: string;
    constructor(baseUrl: string);
    /**
     * Найти роут, если он существует
     * @param path
     */
    pathChange(path: string): {
        route: Route;
        pathVariables: object;
    };
    /**
     * активировать роут и добавить новую запись в историю
     * @param route
     * @param pathVariable
     */
    abstract navigate(route: Route, pathVariable: object): Promise<any>;
    /**
     * Поиск роута в детях родителя
     * @param parent
     * @param match
     * @param pathVariables
     * @returns {Route}
     */
    findRoute(parent: Route, match: string, pathVariables: object): Route;
}
