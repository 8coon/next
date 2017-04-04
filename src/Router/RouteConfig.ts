
import {JSWorksInternal} from '../Common/InternalDecorator';


enum RouteMethod {
    HASH,
    HISTORY_API,
}


@JSWorksInternal
export class RouteConfig {

    /**
     * Тэг Route
     * @type {string}
     */
    public static readonly ROUTE_TAG: string  = 'APP-ROUTE';


    public static readonly ROUTES_TAG: string = 'APP-ROUTES';


    public static readonly RouteMethod = RouteMethod;
}