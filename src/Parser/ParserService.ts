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


    // abstract getParsedData(source: Object): Object;

}
