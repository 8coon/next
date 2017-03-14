import {ConfigurationService} from '../ConfigurationService';

import {JSONParserService} from '../../Parser/JSON/JSONParserService';
import {Service} from '../../Service/Service';


export class JSONConfigurationService extends ConfigurationService {

    /**
     * Имя сервиса -- JSONConfiguration
     */
    public readonly name: string = 'JSONConfiguration';


    /**
     * Зависимости сервиса == JSONParserService
     * @type {[JSONParserService]}
     */
    public readonly requires: Service[] = [new JSONParserService()];
    private jsonParser = undefined;


    /**
     * См. Service.getInstance
     * @param args
     * @returns {JSONConfigurationService}
     */
    public getInstance(args: Object): Service {
        this.jsonParser = args['JSONParser'];
        return this;
    }


    /*
    public getParserName(): string {
        return "";
    }


    public getApplicationInfoProviderName(): string {
        return "";
    }
    */

}
