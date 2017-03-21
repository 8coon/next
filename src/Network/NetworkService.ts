import {HTTPError} from '../Service/Error/HTTPError';
import {HTTPMethod} from './HTTPMethod';
import {HTTPResponse} from './HTTPResponse';

import {JSWorksService} from '../Service/ServiceDecorator';
import {JSWorksInternal} from '../Common/InternalDecorator';


@JSWorksInternal
@JSWorksService('Network', 'Network')
export class NetworkService {

    /**
     * Выполняет синхроный запрос к серверу и возвращает результат.
     * Выбрасывает HTTPError в случае кода ответа >= 400.
     * @param url
     * @param method
     * @param data
     * @returns {HTTPResponse}
     */
    public fetch(url: string, method: HTTPMethod = HTTPMethod.GET, data?: any): HTTPResponse {
        let result: HTTPResponse;
        let err: HTTPError;

        this.xmlHTTPRequest(url, method, false, data, (response: HTTPResponse) => {
            result = response;
        }, (error: HTTPError) => {
            err = error;
        });

        if (err) {
            throw err;
        }

        return result;
    }


    /**
     * Совершает асинхронный запрос и возвращает объект Promise. В случае успешного выполнения
     * Promise будет разрешён с помощью экземпляра класса HTTPResponse.
     * @param url
     * @param method
     * @param data
     * @returns {undefined}
     */
    public fetchAsync(url: string, method: HTTPMethod = HTTPMethod.GET, data?: any): Promise<HTTPResponse> {
        return new Promise<HTTPResponse>((resolve, reject) => {
            this.xmlHTTPRequest(url, method, true, data, (response: HTTPResponse) => {
                resolve(response);
            }, (error: HTTPError) => {
                reject(error);
            });
        });
    }


    private xmlHTTPRequest(url: string, method: HTTPMethod, async: boolean, data: any,
                           callback: (response: HTTPResponse) => void,
                           error: (error: HTTPError) => void): void {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url, async);
        xhr.withCredentials = async;

        xhr.onreadystatechange = (event: ProgressEvent) => {
            if (xhr.readyState === 4) {
                if (xhr.status < 400) {
                    callback(new HTTPResponse(xhr.responseText, xhr.status));
                } else {
                    error(new HTTPError(method, url, xhr.status));
                }
            }
        };

        xhr.send(data);
    }

}
