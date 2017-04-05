import {ServiceHolder} from '../Service/ServiceHolder';
import {JSWorksInternal} from '../Common/InternalDecorator';
import {ViewHolder} from '../View/ViewHolder';
import {ControllerHolder} from '../Controller/ControllerHolder';
import {RouteHolder} from '../Router/RouteHolder';
import {Router} from '../Router/Router';


declare const JSWorks: any;


@JSWorksInternal
export class ApplicationContext {

    /**
     * Роутер
     * @returns {Router}
     */
    get router(): Router {
        return this._router;
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
    private _viewHolder: ViewHolder;
    private _controllerHolder: ControllerHolder;
    private _router: Router;


    /**
     *
     * @param services
     * @param controllers
     * @param router
     */
    constructor(services: ServiceHolder, controllers: ControllerHolder, router: Router) {
        this._serviceHolder = services;
        this._viewHolder = new ViewHolder();
        this._controllerHolder = controllers;
        this._router = router;
    }


    /**
     * Точка входа в приложение JSWorks
     */
    public run(): void {
        this.serviceHolder.instantiateServices();
        this._viewHolder.load();
        this._router.routeHolder.load();
    }

}
