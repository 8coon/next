import {Instantiable} from "../Common/Instantiable";


export abstract class Service implements Instantiable {

    abstract getInstance(args: Object): Service;

    readonly name: string;
    readonly type: string;
    readonly requires: Array<Service>;

}