import {Parser} from "../Parser";
import {Service} from "../../Service/Service";


export class HTMLParser extends Parser {

    readonly name: string = 'HTMLParser';
    readonly requires: Array<Service> = [];


    getInstance(args: Object): Service {
        return undefined;
    }

    getParsedData(source: Object): Object {
        return {message: 'It works!'}
    }

}