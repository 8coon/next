import { HTTPMethod } from './HTTPMethod';
import { HTTPResponse } from './HTTPResponse';
export declare class NetworkService {
    /**
     * Выполняет синхроный запрос к серверу и возвращает результат.
     * Выбрасывает HTTPError в случае кода ответа >= 400.
     * @param url
     * @param method
     * @param data
     * @returns {HTTPResponse}
     */
    fetch(url: string, method?: HTTPMethod, data?: any): HTTPResponse;
    /**
     * Совершает асинхронный запрос и возвращает объект Promise. В случае успешного выполнения
     * Promise будет разрешён с помощью экземпляра класса HTTPResponse.
     * @param url
     * @param method
     * @param data
     * @returns {undefined}
     */
    fetchAsync(url: string, method?: HTTPMethod, data?: any): Promise<HTTPResponse>;
    private xmlHTTPRequest(url, method, async, data, callback, error);
}
