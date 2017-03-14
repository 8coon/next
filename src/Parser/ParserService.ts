import {MethodNotImplementedError} from '../Service/Error/MethodNotImplementedError';
import {Service} from '../Service/Service';


export abstract class ParserService implements Service {

    /**
     * Тип сервиса -- 'Parserэ
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
    public readonly requires: Service[] = [];


    /**
     * См. Service.getInstance
     * @param args
     */
    public abstract getInstance(args: Object): Service;


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
     * @returns {undefined}
     */
    public parseURL(url: string): Object {
        throw new MethodNotImplementedError('ParserService.parseURL');
    }


    /**
     * Загружает данные по удалённому адресу асинхронно и вызывает callback.
     * @param url
     * @param callback
     */
    public parseURLAsync(url: string, callback: (parsed: Object) => void): Object {
        throw new MethodNotImplementedError('ParserService.parseURLAsync');
    }

}
