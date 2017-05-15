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
    public abstract parseString(data: string): object;


    /**
     * Преобразовывает DOM-элемент в объект с соответствующей структурой
     * @param element
     */
    public abstract parseDOM(element: HTMLElement): object;


    /**
     * Загружает данные по удалённому адресу.
     * @param url
     * @param method
     * @param data
     * @param headers
     * @returns {undefined}
     */
    public parseURL(url: string, method: HTTPMethod = HTTPMethod.GET, data?: any,
            headers: object = {}): object {
        return this.parseString(this.network.fetch(url, method, data, headers).data);
    }


    /**
     * Загружает данные по удалённому адресу асинхронно и вызывает callback.
     * @param url
     * @param callback
     * @param method
     * @param data
     * @param headers
     */
    public parseURLCallback(url: string, callback: (parsed: object) => void,
                            method: HTTPMethod = HTTPMethod.GET, data?: any,
                            headers: object = {}): void {
        this.network.fetchAsync(url, method, data, headers).then((response: HTTPResponse) => {
            callback(this.parseString(response.data));
        });
    }


    /**
     * Возвращает Promise, который разрешается данными, загруженными с сервера.
     * @param url
     * @param method
     * @param data
     * @param headers
     */
    public parseURLAsync(url: string, method: HTTPMethod = HTTPMethod.GET, data?: any,
            headers: object = {}): Promise<object> {
        return new Promise((resolve, reject) => {
            this.parseURLCallback(url, (parsed: object) => {
                resolve(parsed);
            }, method, data, headers);
        });
    }

}
