import {ServiceHolder} from '../Service/ServiceHolder';
import {JSWorksInternal} from '../Common/InternalDecorator';
import {ViewHolder} from '../View/ViewHolder';
import {ControllerHolder} from '../Controller/ControllerHolder';
import {ComponentHolder} from '../Component/ComponentHolder';
import {EventManager} from '../EventManager/EventManager';
import {EventType} from '../EventManager/EventType';
import {IEvent} from '../EventManager/IEvent';
import {IEventEmitter} from '../EventManager/IEventEmitter';
import {CustomElementHolder} from '../CustomElements/CustomElementHolder';


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


    private _serviceHolder: ServiceHolder;
    private _viewHolder: ViewHolder;
    private _controllerHolder: ControllerHolder;
    private _componentHolder: ComponentHolder;
    private _customElementHolder: CustomElementHolder;
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
    }


    /**
     * Точка входа в приложение JSWorks
     */
    public run(): void {
        this.serviceHolder.instantiateServices();

        EventManager.subscribe({}, this.viewHolder, EventType.LOAD, (event: IEvent) => {
            this.componentHolder.load(this.viewHolder, this.controllerHolder);

            EventManager.subscribe({}, this, undefined, (event2) => {
                switch (event2.type) {

                    default: break;

                    case EventType.ViewsInheritanceRendered: {
                        this.emitEvent({ type: EventType.InstallViewsListeners, data: this });
                        this.emitEvent({ type: EventType.ViewsListenersInstalled, data: this });
                    } break;

                    case EventType.ViewsListenersInstalled: {
                        this._loaded = true;
                        this.emitEvent({ type: EventType.ApplicationLoaded, data: this });

                        return;
                    }

                }
            });

            this.emitEvent({ type: EventType.LOAD, data: this });
        });

        this.customElementHolder.load();
        this.viewHolder.load();
        this.controllerHolder.load();
    }


    public emitEvent(event: IEvent) {}  // tslint:disable-line


}
