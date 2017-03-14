import {Service} from "../Service/Service";


export abstract class Parser implements Service {

    readonly type: string = 'Parser';
    readonly name: string;
    readonly requires: Array<Service>;

    abstract getInstance(args: Object): Service;

    abstract getParsedData(source: Object): Object;

}