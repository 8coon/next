import {HTTPMethod} from '../Network/HTTPMethod';
import {NetworkService} from '../Network/NetworkService';
import {HTTPResponse} from '../Network/HTTPResponse';


export abstract class ParserService {

    /**
     * Network Service
     */
    public network: NetworkService;


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
