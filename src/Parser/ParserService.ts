import {HTTPMethod} from '../Network/HTTPMethod';
import {MethodNotImplementedError} from '../Service/Error/MethodNotImplementedError';
import {NetworkService} from '../Network/NetworkService';
import {Service} from '../Service/Service';
import {HTTPResponse} from '../Network/HTTPResponse';


export abstract class ParserService implements Service {


    /**
     * NetworkService
     * @returns {NetworkService}
     */
    protected get network(): NetworkService {
        return this._network;
    }


    /**
     * Тип сервиса -- Parser
     * @type {string}
     */
    public readonly type: string = 'Parser';


    /**
     * Имя сервиса
     */
    public readonly name: string;

    /**
     * Зависимости сервиса
     * @type {Array}
     */
    public readonly requires: Service[] = [new NetworkService()];


    private _network: NetworkService;


    /**
     * См. Service.getInstance
     * @param args
     */
    public getInstance(args: Object): Service {
        this._network = args['Network'];
        return this;
    }


    /**
     * Преобразовывает строку в объект с соответствующей структурой.
     * @param data
     */
    public abstract parseString(data: string): Object;


    /**
     * Преобразовывает DOM-элемент в объект с соответствующей структурой
     * @param element
     */
    public abstract parseDOM(element: HTMLElement): Object;


    /**
     * Загружает данные по удалённому адресу.
     * @param url
     * @param method
     * @returns {undefined}
     */
    public parseURL(url: string, method: HTTPMethod = HTTPMethod.GET): Object {
        return this.parseString(this.network.fetch(url, method).data);
    }


    /**
     * Загружает данные по удалённому адресу асинхронно и вызывает callback.
     * @param url
     * @param callback
     * @param method
     */
    public parseURLCallback(url: string, callback: (parsed: Object) => void,
                            method: HTTPMethod = HTTPMethod.GET): void {
        this.network.fetchAsync(url, method).then((response: HTTPResponse) => {
            callback(this.parseString(response.data));
        });
    }


    /**
     * Возвращает Promise, который разрешается данными, загруженными с сервера.
     * @param url
     * @param method
     */
    public parseURLAsync(url: string, method: HTTPMethod = HTTPMethod.GET): Promise<Object> {
        return new Promise((resolve, reject) => {
            this.parseURLCallback(url, (parsed: Object) => {
                resolve(parsed);
            }, method);
        });
    }

}
