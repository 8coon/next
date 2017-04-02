import {ServiceHolder} from '../Service/ServiceHolder';
import {JSWorksInternal} from '../Common/InternalDecorator';
import {ViewHolder} from '../View/ViewHolder';


declare const JSWorks: any;


@JSWorksInternal
export class ApplicationContext {

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


    /**
     *
     * @param services
     */
    constructor(services: ServiceHolder) {
        this._serviceHolder = services;
        this._viewHolder = new ViewHolder();
    }


    /**
     * Точка входа в приложение JSWorks
     */
    public run(): void {
        this.serviceHolder.instantiateServices();
        this._viewHolder.load();
    }

}
