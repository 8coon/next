import { HTTPMethod } from '../Network/HTTPMethod';
import { NetworkService } from '../Network/NetworkService';
export declare abstract class ParserService {
    /**
     * Network Service
     */
    network: NetworkService;
    /**
     * Преобразовывает строку в объект с соответствующей структурой.
     * @param data
     */
    abstract parseString(data: string): object;
    /**
     * Преобразовывает DOM-элемент в объект с соответствующей структурой
     * @param element
     */
    abstract parseDOM(element: HTMLElement): object;
    /**
     * Загружает данные по удалённому адресу.
     * @param url
     * @param method
     * @param data
     * @param headers
     * @returns {undefined}
     */
    parseURL(url: string, method?: HTTPMethod, data?: any, headers?: object): object;
    /**
     * Загружает данные по удалённому адресу асинхронно и вызывает callback.
     * @param url
     * @param callback
     * @param method
     * @param data
     * @param headers
     */
    parseURLCallback(url: string, callback: (parsed: object) => void, method?: HTTPMethod, data?: any, headers?: object): void;
    /**
     * Возвращает Promise, который разрешается данными, загруженными с сервера.
     * @param url
     * @param method
     * @param data
     * @param headers
     */
    parseURLAsync(url: string, method?: HTTPMethod, data?: any, headers?: object): Promise<object>;
}
