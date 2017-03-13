import {Service} from "../Service/Service";


export abstract class ApplicationInfoProvider extends Service {

    abstract getInstance(args: Object): ApplicationInfoProvider;


    abstract getControllerData(): Object;


    abstract getViewData(): Object;


    abstract getRouteData(): Object;

}