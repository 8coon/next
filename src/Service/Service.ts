import {Instantiable} from "../Common/Instantiable";


export abstract class Service implements Instantiable {

    abstract getInstance(args: Object): Service;
    abstract register(serviceHolder: any): void;

    readonly name: string;
    readonly requires: Array<Service>;

}