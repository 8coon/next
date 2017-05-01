import { ServiceHolder } from '../Service/ServiceHolder';
import { ViewHolder } from '../View/ViewHolder';
import { ControllerHolder } from '../Controller/ControllerHolder';
import { RouteHolder } from '../Router/RouteHolder';
import { Router } from '../Router/Router';
import { ComponentHolder } from '../Component/ComponentHolder';
import { IEvent } from '../EventManager/IEvent';
import { IEventEmitter } from '../EventManager/IEventEmitter';
import { CustomElementHolder } from '../CustomElements/CustomElementHolder';
import { InterceptorHolder } from '../Interceptor/InterceptorHolder';
import { ModelHolder } from '../Model/ModelHolder';
export declare type NameLookup = (name: string) => boolean;
export declare class ApplicationContext implements IEventEmitter {
    /**
     * Возвращает уникальное сгенерированное имя на основе данного
     * @param origName
     * @param lookup
     * @constructor
     */
    static UniqueName(origName: string, lookup: NameLookup): string;
    /**
     * Флаг, устанавливающийся в true при полной загрузке приложения.
     * @returns {boolean}
     */
    readonly loaded: boolean;
    /**
     * Роутер
     * @returns {Router}
     */
    readonly router: Router;
    /**
     * Все перехватчики хранятся тут
     * @returns {InterceptorHolder}
     */
    readonly interceptorHolder: InterceptorHolder;
    /**
     * Все контроллеры хранятся тут
     * @returns {ControllerHolder}
     */
    readonly controllerHolder: ControllerHolder;
    /**
     * Все сервисы хранятся тут
     * @type {ServiceHolder}
     */
    readonly serviceHolder: ServiceHolder;
    /**
     * Все View хранятся тут
     * @returns {ViewHolder}
     */
    readonly viewHolder: ViewHolder;
    /**
     * Все компоненты и страницы хранятся тут
     * @returns {ComponentHolder}
     */
    readonly componentHolder: ComponentHolder;
    /**
     * Все пользовательские элементы DOM хранятся тут
     * @returns {CustomElementHolder}
     */
    readonly customElementHolder: CustomElementHolder;
    /**
     * Все модели хранятся тут
     * @returns {ModelHolder}
     */
    readonly modelHolder: ModelHolder;
    /**
     * Все роуты хранятся тут
     * @returns {RouteHolder}
     */
    readonly routeHolder: RouteHolder;
    private _serviceHolder;
    private _viewHolder;
    private _controllerHolder;
    private _router;
    private _routeHolder;
    private _interceptorHolder;
    private _componentHolder;
    private _customElementHolder;
    private _modelHolder;
    private _loaded;
    /**
     *
     * @param services
     */
    constructor(services: ServiceHolder);
    /**
     * Точка входа в приложение JSWorks
     */
    run(): void;
    emitEvent(event: IEvent): void;
}
