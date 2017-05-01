import { IEventEmitter } from '../EventManager/IEventEmitter';
import { IEvent } from '../EventManager/IEvent';
export declare class Route implements IEventEmitter {
    /**
     * вложенные роуты
     */
    children: object;
    /**
     * имя переменной пути, начинается с ':', может быть нулл
     */
    pathVariableName: string;
    /**
     * имя роута
     */
    name: string;
    /**
     *  часть адреса url, данного роута, если этот роут матчится по path variable, то match = '*'
     */
    match: string;
    /**
     * url
     */
    path: string;
    /**
     * Имя страницы, к которой ведёт данный маршрут
     */
    pageName: string;
    constructor(match: string, path: string, pathVariableName?: string, name?: string, pageName?: string);
    /**
     * Метод вызывается, когда на маршрут переходят
     * @param pathVariables
     */
    fire(pathVariables: object): void;
    /**
     * вернуть реальный url
     * @param args объект с переменными пути
     * @returns {string}
     */
    getPath(args: object): string;
    emitEvent(event: IEvent): void;
}
