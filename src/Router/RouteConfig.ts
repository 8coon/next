import {JSWorksInternal} from '../Common/InternalDecorator';


export enum RouteMethod {
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


    /**
     * тег для Routes
     * @type {string}
     */
    public static readonly ROUTES_TAG: string = 'APP-ROUTES';


    /**
     * enum
     * @type {RouteMethod}
     */
    public static readonly RouteMethod = RouteMethod;
}
