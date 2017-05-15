import {HTTPError} from '../Error/HTTPError';
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
     * @param headers
     * @returns {HTTPResponse}
     */
    public fetch(url: string, method: HTTPMethod = HTTPMethod.GET, data?: any,
                 headers: object = {}): HTTPResponse {
        let result: HTTPResponse;
        let err: HTTPError;

        this.xmlHTTPRequest(url, method, false, data, (response: HTTPResponse) => {
            result = response;
        }, (error: HTTPError) => {
            err = error;
        }, headers);

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
     * @param headers
     * @returns {undefined}
     */
    public fetchAsync(url: string, method: HTTPMethod = HTTPMethod.GET, data?: any,
            headers: object = {}): Promise<HTTPResponse> {
        return new Promise<HTTPResponse>((resolve, reject) => {
            this.xmlHTTPRequest(url, method, true, data, (response: HTTPResponse) => {
                resolve(response);
            }, (error: HTTPError) => {
                reject(error);
            }, headers);
        });
    }


    private xmlHTTPRequest(url: string, method: HTTPMethod, async: boolean, data: any,
                           callback: (response: HTTPResponse) => void,
                           error: (error: HTTPError) => void,
                           headers: object = {}): void {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url, async);
        xhr.withCredentials = async;

        Object.keys(headers).forEach((headerName: string) => {
            xhr.setRequestHeader(headerName, headers[headerName]);
        });

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
