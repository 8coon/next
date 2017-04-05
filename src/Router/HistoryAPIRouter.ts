

import {Router} from './Router';
import {Route} from './Route';
import {JSWorksInternal} from '../Common/InternalDecorator';

@JSWorksInternal
export class HistoryAPIRouter extends Router {


    constructor(baseUrl: string) {
        super(baseUrl);
        window.addEventListener('popstate', (event) => {
            if (event.state && event.state.name) {
                const route: Route = this.routeHolder.getRoute(String(event.state.name));
                console.log(route);
                route.fire(event.state.pathVariables);
                return;
            }

            const path =  window.location.href.split('/', 4)[3];
            // const state = this.pathChange(path);
            const state = this.pathChange(path);
            this.navigate(state.route, state.pathVariables);
            // window.history.replaceState(state, state.name, this.baseUrl + state.path);
        });
    }


    /**
     * активировать роут и добавить новую запись в историю
     * @param route
     * @param pathVariables
     */
    public navigate(route: Route, pathVariables?: object): void {
        const path = route.getPath(pathVariables);
        route.fire(pathVariables);
        const state = {name: route.name, path: path, pathVariables: pathVariables};
        window.history.pushState(state, route.name, this.baseUrl + path);
    }


}
