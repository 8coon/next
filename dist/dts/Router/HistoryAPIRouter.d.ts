import { Router } from './Router';
import { Route } from './Route';
export declare class HistoryAPIRouter extends Router {
    constructor(baseUrl: string);
    /**
     * активировать роут и добавить новую запись в историю
     * @param route
     * @param pathVariables
     * @param replace
     */
    navigate(route: Route, pathVariables?: object, replace?: boolean): Promise<any>;
}
