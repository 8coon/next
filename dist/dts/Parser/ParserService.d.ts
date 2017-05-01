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
     * @returns {undefined}
     */
    parseURL(url: string, method?: HTTPMethod, data?: any): object;
    /**
     * Загружает данные по удалённому адресу асинхронно и вызывает callback.
     * @param url
     * @param callback
     * @param method
     * @param data
     */
    parseURLCallback(url: string, callback: (parsed: object) => void, method?: HTTPMethod, data?: any): void;
    /**
     * Возвращает Promise, который разрешается данными, загруженными с сервера.
     * @param url
     * @param method
     * @param data
     */
    parseURLAsync(url: string, method?: HTTPMethod, data?: any): Promise<object>;
}
