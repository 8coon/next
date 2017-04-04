
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
    }

    private


}