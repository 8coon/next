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
    public readonly requires: Service[] = [];


    /**
     * См. Service.getInstance
     * @param args
     * @returns {HTMLParserService}
     */
    public getInstance(args: Object): Service {
        return this;
    }

    /*getParsedData(source: Object): Object {
        return {message: 'It works!'}
    }*/

}
