import {Service} from "../Service/Service";


export abstract class Parser implements Service {

    readonly name: string = 'Parser';

    abstract getInstance(args: Object): Parser;

    abstract getParsedData(source: Object): Object;

    abstract register(serviceHolder: any): void;

}