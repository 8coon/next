import { Router } from './Router';
import { Route } from './Route';
export declare class HistoryAPIRouter extends Router {
    constructor(baseUrl: string);
    /**
     * активировать роут и добавить новую запись в историю
     * @param route
     * @param pathVariables
     */
    navigate(route: Route, pathVariables?: object): Promise<any>;
}
