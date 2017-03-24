import {ServiceHolder} from '../Service/ServiceHolder';
import {JSWorksInternal} from '../Common/InternalDecorator';


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


    private _serviceHolder: ServiceHolder;
    private _views;


    /**
     *
     * @param services
     */
    constructor(services: ServiceHolder) {
        this._serviceHolder = services;
    }


    /**
     * Точка входа в приложение JSWorks
     */
    public run(): void {
        this.serviceHolder.instantiateServices();
    }

}
