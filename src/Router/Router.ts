
import {JSWorksInternal} from '../Common/InternalDecorator';
import {View} from '../View/View';
import {JSWorksService} from '../Service/ServiceDecorator';
import {RouteHolder} from './RouteHolder';
import {ApplicationContext} from '../ApplicationContext/ApplicationContext';
import {IEventReceiver} from '../EventManager/IEventReceiver';
import {EventManager} from '../EventManager/EventManager';
import {EventType} from '../EventManager/EventType';
import {RouteConfig} from './RouteConfig';
import {MethodNotImplementedError} from '../Service/Error/MethodNotImplementedError';
import {Route} from './Route';
import {PathNotFoundError} from './Error/PathNotFoundError';


@JSWorksInternal
export class Router {

    private routeHolder: RouteHolder;


    constructor(routeMethod = RouteConfig.RouteMethod.HISTORY_API) {
        const appContext: ApplicationContext = JSWorks.applicationContext;
        this.routeHolder = appContext.routeHolder;

        switch (routeMethod) {

            case RouteConfig.RouteMethod.HASH: {
                throw new MethodNotImplementedError('RouteMethod.HASH');
            }

            case RouteConfig.RouteMethod.HISTORY_API: {
                window.addEventListener('', (event) => {

                });
            } break;

            default: {
                throw new Error('');
            }

        }
    }


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

        route.fire(pathVariables);
    }


    private findRoute(parent: Route, match: string, pathVariables: object): Route {
        Array.from(parent.children).forEach((child) => {
           if (child.match === match) {
               return child;
           }
        });

        return null;
    }


}