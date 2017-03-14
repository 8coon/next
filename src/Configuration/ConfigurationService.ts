import {Service} from '../Service/Service';


export abstract class ConfigurationService implements Service {

    /**
     * Имя сервиса конфигурации
     */
    public readonly name: string;


    /**
     * Тип сервиса -- Configuration
     * @type {string}
     */
    public readonly type: string = 'Configuration';

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

    /* public abstract getParserName(): string;
    public abstract getApplicationInfoProviderName(): string; */

}
