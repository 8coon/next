import {ApplicationInfoProvider} from '../ApplicationInfo/ApplicationInfoProvider';
import {ConfigurationService} from '../Configuration/ConfigurationService';
import {ServiceHolder} from '../Service/ServiceHolder';


export class ApplicationContext {


    /**
     * Все view, models, routes и controllers хранятся тут
     * @type {ApplicationInfoProvider}
     */
    public readonly infoProvider: ApplicationInfoProvider;


    /**
     * Все сервисы хранятся тут
     * @type {ServiceHolder}
     */
    public readonly serviceHolder: ServiceHolder = new ServiceHolder();

    private configuration: ConfigurationService;


    public get config() {
        return this.configuration;
    }


    /**
     * Точка входа в приложение JSWorks
     */
    public run(): void {
        this.serviceHolder.instantiateServices();
        this.configuration = <ConfigurationService> this.serviceHolder.getService('Configuration');
    }

}
