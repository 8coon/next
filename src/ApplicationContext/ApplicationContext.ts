import {ApplicationInfoProvider} from "../ApplicationInfo/ApplicationInfoProvider";
import {ServiceHolder} from "../Service/ServiceHolder";


export class ApplicationContext {

    public readonly infoProvider: ApplicationInfoProvider;
    public readonly serviceHolder: ServiceHolder = new ServiceHolder();


    public run(): void {
        this.serviceHolder.instantiateServices();
    }

}