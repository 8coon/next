

import {Router} from './Router';
import {Route} from './Route';
import {JSWorksInternal} from '../Common/InternalDecorator';

@JSWorksInternal
export class HistoryAPIRouter extends Router {


    constructor(baseUrl: string) {
        super(baseUrl);
        window.addEventListener('popstate', (event) => {
            const route: Route = event.state.route;
            route.fire(event.state.pathVariables);
        });
    }


    /**
     * активировать роут и добавить новую запись в историю
     * @param route
     * @param pathVariables
     */
    public navigate(route: Route, pathVariables: object): void {
        const path = route.getPath(pathVariables);
        route.fire(pathVariables);
        window.history.pushState({route: route, pathVariables: pathVariables}, route.name, this.baseUrl + path);
    }


}
