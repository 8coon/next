import { Route } from './Route';
import { IEventEmitter } from '../EventManager/IEventEmitter';
import { IEvent } from '../EventManager/IEvent';
export declare class RouteHolder implements IEventEmitter {
    private routes;
    private _root;
    private htmlParser;
    /**
     * загрузить все роуты из html
     */
    load(): void;
    readonly root: Route;
    /**
     * вернуть роут по имени
     * @param name
     * @returns {any}
     */
    getRoute(name: string): Route;
    /**
     * рекурсивный обход вложенных тегов
     * @param routeTag
     * @param parent
     * @param path
     */
    parseRoute(routeTag: Element, parent: Route, path: string): void;
    emitEvent(event: IEvent): void;
}
