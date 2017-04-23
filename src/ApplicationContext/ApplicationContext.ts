import {ServiceHolder} from '../Service/ServiceHolder';
import {JSWorksInternal} from '../Common/InternalDecorator';
import {ViewHolder} from '../View/ViewHolder';
import {ControllerHolder} from '../Controller/ControllerHolder';
import {RouteHolder} from '../Router/RouteHolder';
import {Router} from '../Router/Router';
import {ComponentHolder} from '../Component/ComponentHolder';
import {EventManager} from '../EventManager/EventManager';
import {EventType} from '../EventManager/EventType';
import {IEvent} from '../EventManager/IEvent';
import {IEventEmitter} from '../EventManager/IEventEmitter';
import {CustomElementHolder} from '../CustomElements/CustomElementHolder';
import {HistoryAPIRouter} from '../Router/HistoryAPIRouter';
import {InterceptorHolder} from '../Interceptor/InterceptorHolder';
import {ModelHolder} from '../Model/ModelHolder';


declare const JSWorks: any;


@JSWorksInternal
export class ApplicationContext implements IEventEmitter {

    /**
     * Флаг, устанавливающийся в true при полной загрузке приложения.
     * @returns {boolean}
     */
    public get loaded(): boolean {
        return this._loaded;
    }


    /**
     * Роутер
     * @returns {Router}
     */
    get router(): Router {
        return this._router;
    }

    /**
     * Все перехватчики хранятся тут
     * @returns {InterceptorHolder}
     */
    get interceptorHolder(): InterceptorHolder {
        return this._interceptorHolder;
    }

    /**
     * Все контроллеры хранятся тут
     * @returns {ControllerHolder}
     */
    public get controllerHolder(): ControllerHolder {
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


    /**
     * Все компоненты и страницы хранятся тут
     * @returns {ComponentHolder}
     */
    public get componentHolder(): ComponentHolder {
        return this._componentHolder;
    }


    /**
     * Все пользовательские элементы DOM хранятся тут
     * @returns {CustomElementHolder}
     */
    public get customElementHolder(): CustomElementHolder {
        return this._customElementHolder;
    }


    /**
     * Все модели хранятся тут
     * @returns {ModelHolder}
     */
    public get modelHolder(): ModelHolder {
        return this._modelHolder;
    }


    /**
     * Все роуты хранятся тут
     * @returns {RouteHolder}
     */
    public get routeHolder(): RouteHolder {
        return this._routeHolder;
    }


    private _serviceHolder: ServiceHolder;
    private _viewHolder: ViewHolder;
    private _controllerHolder: ControllerHolder;
    private _router: Router;
    private _routeHolder: RouteHolder;
    private _interceptorHolder: InterceptorHolder;
    private _componentHolder: ComponentHolder;
    private _customElementHolder: CustomElementHolder;
    private _modelHolder: ModelHolder;
    private _loaded: boolean = false;


    /**
     *
     * @param services
     */
    constructor(services: ServiceHolder) {
        this._serviceHolder = services;
        this._viewHolder = new ViewHolder();
        this._controllerHolder = new ControllerHolder();
        this._componentHolder = new ComponentHolder();
        this._customElementHolder = new CustomElementHolder();
        this._routeHolder = new RouteHolder();
        this._interceptorHolder = new InterceptorHolder();
        this._modelHolder = new ModelHolder();
    }


    /**
     * Точка входа в приложение JSWorks
     */
    public run(): void {
        this.serviceHolder.instantiateServices();

        EventManager.subscribe({}, this.viewHolder, EventType.LOAD, (event: IEvent) => {

            EventManager.subscribe({}, this, undefined, (event2) => {
                switch (event2.type) {

                    default: break;

                    /* case EventType.ViewIncludesRendered: {
                        this.componentHolder.load(this.viewHolder, this.controllerHolder);
                        this.customElementHolder.load();

                        this.emitEvent({ type: EventType.InstallViewsListeners, data: this });
                        this.emitEvent({ type: EventType.ViewsListenersInstalled, data: this });
                    } break; */

                    case EventType.ViewsListenersInstalled: {
                        this._loaded = true;

                        this.routeHolder.load();
                        this.interceptorHolder.load();

                        if (!JSWorks.__router_disabled__) {
                            const host = `${location.href.split(':')[0]}://${location.host}`;
                            this._router = new HistoryAPIRouter(host);
                        }

                        this.emitEvent({ type: EventType.ApplicationLoaded, data: this });

                        return;
                    }

                }
            });

            this.componentHolder.load(this.viewHolder, this.controllerHolder);
            this.viewHolder.renderIncludesAndInheritance();
            this.customElementHolder.load();
            this.viewHolder.renderViews();

            this.emitEvent({ type: EventType.InstallViewsListeners, data: this });
            this.emitEvent({ type: EventType.ViewsListenersInstalled, data: this });
            this.emitEvent({ type: EventType.LOAD, data: this });
        });

        // this.customElementHolder.load();
        this.viewHolder.load();
        this.controllerHolder.load();
        this.modelHolder.load();
    }


    public emitEvent(event: IEvent) {}  // tslint:disable-line


}
