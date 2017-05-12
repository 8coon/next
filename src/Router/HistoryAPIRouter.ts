import {Router} from './Router';
import {Route} from './Route';
import {JSWorksInternal} from '../Common/InternalDecorator';
import {EventManager} from '../EventManager/EventManager';
import {EventType} from '../EventManager/EventType';
import {InterceptorType} from '../Interceptor/InterceptorType';
import {JSWorksLib} from '../jsworks';


declare const JSWorks: JSWorksLib;


@JSWorksInternal
export class HistoryAPIRouter extends Router {

    constructor(baseUrl: string) {
        super(baseUrl);

        window.addEventListener('popstate', (event) => {
            if ((<any> JSWorks).__router_disabled__) {
                return;
            }

            if (event.state && event.state.name) {
                const route: Route = JSWorks.applicationContext.routeHolder.getRoute(String(event.state.name));

                route.fire(event.state.pathVariables);
                return;
            }
        });

        EventManager.subscribe(this, JSWorks.applicationContext, EventType.ApplicationLoaded, (event) => {
            const path =  window.location.href.split('/', 4)[3];
            const state = this.pathChange(path);

            console.log(path, state);

            state.route.fire(state.pathVariables);

            window.history.replaceState({name: state.route.name, pathVariables: state.pathVariables},
                state.route.name, this.baseUrl + state.route.getPath(state.pathVariables));
        });
    }


    /**
     * активировать роут и добавить новую запись в историю
     * @param route
     * @param pathVariables
     */
    public navigate(route: Route, pathVariables?: object): Promise<any> {
        const path = route.getPath(pathVariables);
        const interceptorHolder = JSWorks.applicationContext.interceptorHolder;

        return interceptorHolder.triggerByType(InterceptorType.RouteBeforeNavigateInterceptor, {})
            .then( () => {
                route.fire(pathVariables);
                const state = {name: route.name, path: path, pathVariables: pathVariables};
                window.history.pushState(state, route.name, this.baseUrl + path);

                return Promise.resolve();
            })
            .then( () => interceptorHolder.triggerByType(InterceptorType.RouteAfterNavigateInterceptor, {}))
            .catch( (rejected) => console.error(rejected) )
        ;
    }


}
