export declare enum RouteMethod {
    HASH = 0,
    HISTORY_API = 1,
}
export declare class RouteConfig {
    /**
     * Тэг Route
     * @type {string}
     */
    static readonly ROUTE_TAG: string;
    /**
     * тег для Routes
     * @type {string}
     */
    static readonly ROUTES_TAG: string;
    /**
     * enum
     * @type {RouteMethod}
     */
    static readonly RouteMethod: typeof RouteMethod;
}
