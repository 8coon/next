import {ServiceHolder} from '../Service/ServiceHolder';
import {JSWorksInternal} from '../Common/InternalDecorator';
import {ViewHolder} from '../View/ViewHolder';
import {ControllerHolder} from '../Controller/ControllerHolder';
import {ComponentHolder} from '../Component/ComponentHolder';
import {EventManager} from '../EventManager/EventManager';
import {EventType} from '../EventManager/EventType';
import {IEvent} from '../EventManager/IEvent';
import {IEventEmitter} from '../EventManager/IEventEmitter';


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


    private _serviceHolder: ServiceHolder;
    private _viewHolder: ViewHolder;
    private _controllerHolder: ControllerHolder;
    private _componentHolder: ComponentHolder;
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
    }


    /**
     * Точка входа в приложение JSWorks
     */
    public run(): void {
        this.serviceHolder.instantiateServices();

        EventManager.subscribe({}, this.viewHolder, EventType.LOAD, (event: IEvent) => {
            this.componentHolder.load(this.viewHolder, this.controllerHolder);

            this._loaded = true;
            this.emitEvent({ type: EventType.LOAD, data: this });
        });

        this.viewHolder.load();
        this.controllerHolder.load();
    }


    public emitEvent(event: IEvent) {}  // tslint:disable-line


}
