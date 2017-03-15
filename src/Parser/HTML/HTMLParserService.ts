import {MethodNotImplementedError} from '../../Service/Error/MethodNotImplementedError';
import {Service} from '../../Service/Service';
import {ParserService} from '../ParserService';


export class HTMLParserService extends ParserService {

    /**
     * Имя сервиса -- HTMLParser
     * @type {string}
     */
    public readonly name: string = 'HTMLParser';


    /**
     * Зависимости сервиса
     * @type {Array}
     */
    // public readonly requires: Service[] = [];


    /**
     * См. Service.getInstance
     * @param args
     * @returns {HTMLParserService}
     */
    public getInstance(args: Object): Service {
        return super.getInstance(this);
    }


    /**
     * Парсит строку как HTML и возвращает объект.
     * @param data
     * @returns {Object}
     */
    public parseString(data: string): Object {
        throw new MethodNotImplementedError('HTMLParserService.parseString');
    }


    /**
     * Парсит данные DOM-элемента и возвращает объект.
     * @param element
     * @returns {Object}
     */
    public parseDOM(element: HTMLElement): Object {
        throw new MethodNotImplementedError('HTMLParserService.parseDOM');
    }

}
