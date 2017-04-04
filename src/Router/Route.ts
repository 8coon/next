
import {Controller} from '../Controller/Controller';
import {View} from '../View/View';
import {JSWorksInternal} from '../Common/InternalDecorator';


@JSWorksInternal
export class Route {

    private pageName: string;


    /**
     * вложенные роуты
     */
    public children: object;

    /**
     * имя роута
     */
    public name: string;

    /**
     *  часть адреса url, данного роута
     */
    public match: string;

    constructor(match: string, pathVariableName?:string, name?: string, pageName?: string) {
        this.name = name;
        this.pageName = pageName;
    }


    public fire(pathVariables: object): void {}  // tslint:disable-line

}