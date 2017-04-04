
import {JSWorksInternal} from '../Common/InternalDecorator';
import {View} from '../View/View';
import {JSWorksService} from '../Service/ServiceDecorator';
import {RouteHolder} from './RouteHolder';
import {ApplicationContext} from '../ApplicationContext/ApplicationContext';

@JSWorksInternal
export class Router {

    private routeHolder: RouteHolder;

    constructor() {
        const appContext: ApplicationContext = JSWorks.applicationContext;
        this.routeHolder = appContext.routeHolder;
    }




}