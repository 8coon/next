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
    public readonly requires: Service[] = [];


    constructor() {
        super();
    }


    /**
     * См. Service.getInstance
     * @param args
     * @returns {JSONParserService}
     */
    public getInstance(args: Object): Service {
        return this;
    }

    /*getParsedData(source: Object): Object {
        return undefined;
    }*/

}
