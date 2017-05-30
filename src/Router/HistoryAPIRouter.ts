import {Router} from './Router';
import {Route} from './Route';
import {JSWorksInternal} from '../Common/InternalDecorator';
import {EventManager} from '../EventManager/EventManager';
import {EventType} from '../EventManager/EventType';
import {InterceptorType} from '../Interceptor/InterceptorType';
import {JSWorksLib} from '../jsworks';


declare const JSWorks: JSWorksLib;


/**
 * Элемент очереди отложенных переходов
 */
interface INavigatingQueueElement {
    route: Route;
    pathVariables: object;
    replace: boolean;
}


@JSWorksInternal
export class HistoryAPIRouter extends Router {

    private navigating: boolean = false;
    private navigatingQueue: INavigatingQueueElement[] = [];


    constructor(baseUrl: string) {
        super(baseUrl);

        window.addEventListener('popstate', (event) => {
            if ((<any> JSWorks).__router_disabled__) {
                return;
            }

            if (event.state && event.state.name) {
                const route: Route = JSWorks.applicationContext.routeHolder.getRoute(String(event.state.name));

                this.navigate(route, event.state.pathVariables, true);
                return;
            }
        });

        EventManager.subscribe(this, JSWorks.applicationContext, EventType.ApplicationLoaded, (event) => {
            const path = window.location.href.split('/').slice(3).join('/');
            const state = this.pathChange(path);

            this.navigate(state.route, state.pathVariables, true);

            window.history.replaceState({name: state.route.name, pathVariables: state.pathVariables},
                state.route.name, this.baseUrl + state.route.getPath(state.pathVariables));
        });
    }


    /**
     * активировать роут и добавить новую запись в историю
     * @param route
     * @param pathVariables
     * @param replace
     */
    public navigate(route: Route, pathVariables?: object, replace: boolean = false): Promise<any> {
        if (this.navigating) {
            this.navigatingQueue.push({route, pathVariables, replace});
            return;
        }

        this.navigating = true;
        const path = route.getPath(pathVariables);
        const interceptorHolder = JSWorks.applicationContext.interceptorHolder;
        const bodyDisplay: string = document.body.style.display;

        if (JSWorks.config['hidePageOnNavigating']) {
            document.body.style.display = 'none';
        }

        const endNavigation = () => {
            this.navigating = false;

            new Promise<any>((resolve, reject) => {
                const promises: Promise<any>[] = [];  // tslint:disable-line

                this.navigatingQueue.forEach((element: INavigatingQueueElement) => {
                    promises.push(this.navigate(element.route, element.pathVariables, element.replace));
                });

                this.navigatingQueue = [];
                return Promise.all(promises);
            }).then(() => {
                this.navigating = true;

                if (JSWorks.config['hidePageOnNavigating']) {
                    document.body.style.display = bodyDisplay;
                }
            }).catch((error) => {
                this.navigating = true;
                throw error;
            });
        };

        try {
            const prevPage = JSWorks.applicationContext.currentPage;

            return interceptorHolder.triggerByType(
                    InterceptorType.RouteBeforeNavigateInterceptor,
                    {
                        prevPage: prevPage,
                        nextPage: JSWorks.applicationContext.componentHolder.getPage(route.pageName),
                    },
                )
                .then( () => {
                    route.fire(pathVariables);
                    const state = {name: route.name, path: path, pathVariables: pathVariables};

                    if (!replace) {
                        window.history.pushState(state, route.name, this.baseUrl + path);
                    }

                    endNavigation();
                    return Promise.resolve();
                })
                .then( () => interceptorHolder.triggerByType(
                        InterceptorType.RouteAfterNavigateInterceptor,
                        {
                            prevPage: prevPage,
                            nextPage: JSWorks.applicationContext.currentPage,
                        },
                    ))
                .then( () => this.navigating = false )
                .catch( (rejected) => {
                    console.error(rejected);
                    endNavigation();
                } );
        } catch (err) {
            route.fire(pathVariables);
            const state = {name: route.name, path: path, pathVariables: pathVariables};

            if (!replace) {
                window.history.pushState(state, route.name, this.baseUrl + path);
            }

            endNavigation();
            return Promise.resolve();
        }
    }


}
