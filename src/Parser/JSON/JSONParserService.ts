import {Service} from '../../Service/Service';
import {ParserService} from '../ParserService';


export class JSONParserService extends ParserService {


    /**
     * Имя сервиса -- JSONParser
     * @type {string}
     */
    public readonly name: string = 'JSONParser';


    /**
     * Зависимости сервиса
     * @type {Array}
     */
    // public requires: Service[];


    constructor() {
        super();
    }


    /**
     * Парсит JSON-строку и возвращает объект. В случае неуспеха возвращает undefined.
     * @param data
     * @returns {Object}
     */
    public parseString(data: string): Object {
        try {
            return JSON.parse(data);
        } catch (error) {
            console.error(`JSONParserService encountered a JSON error and returned 'undefined'.`);
            return undefined;
        }
    }


    /**
     * Парсит текст, содержащийся в элементе, как JSON и возвращает объект или undefined.
     * @param element
     * @returns {undefined}
     */
    public parseDOM(element: HTMLElement): Object {
        return this.parseString(element.innerText);
    }


    /**
     * См. Service.getInstance
     * @param args
     * @returns {JSONParserService}
     */
    public getInstance(args: Object): Service {
        return super.getInstance(args);
    }

}
