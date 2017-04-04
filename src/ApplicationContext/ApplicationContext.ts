import {ServiceHolder} from '../Service/ServiceHolder';
import {JSWorksInternal} from '../Common/InternalDecorator';
import {ViewHolder} from '../View/ViewHolder';
import {ControllerHolder} from '../Controller/ControllerHolder';
import {RouteHolder} from '../Router/RouteHolder';


declare const JSWorks: any;


@JSWorksInternal
export class ApplicationContext {
    get routeHolder(): RouteHolder {
        return this._routeHolder;
    }

    /**
     * Все контроллеры хранятся тут
     * @returns {ControllerHolder}
     */
    get controllerHolder(): ControllerHolder {
        return this._controllerHolder;
    }

    /**
     * Все сервисы хранятся тут
     * @type {ServiceHolder}
     */
    public get serviceHolder(): ServiceHolder {
        return this._serviceHolder;
    }


    /**
     * Все View хранятся тут
     * @returns {ViewHolder}
     */
    public get viewHolder(): ViewHolder {
        return this._viewHolder;
    }



    private _serviceHolder: ServiceHolder;
    private _routeHolder: RouteHolder;
    private _viewHolder: ViewHolder;
    private _controllerHolder: ControllerHolder;


    /**
     *
     * @param services
     * @param controllers
     */
    constructor(services: ServiceHolder, controllers: ControllerHolder) {
        this._serviceHolder = services;
        this._viewHolder = new ViewHolder();
        this._controllerHolder = controllers;
    }


    /**
     * Точка входа в приложение JSWorks
     */
    public run(): void {
        this.serviceHolder.instantiateServices();
        this._viewHolder.load();
    }

}
