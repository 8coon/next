
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
     * имя переменной пути, начинается с ':', может быть нулл
     */
    public pathVariableName: string;

    /**
     * имя роута
     */
    public name: string;

    /**
     *  часть адреса url, данного роута, если этот роут матчится по path variable, то match = '*'
     */
    public match: string;


    constructor(match: string, pathVariableName:string = null, name: string = null, pageName: string = null) {
        this.match = match;
        this.pathVariableName = pathVariableName;
        this.name = name;
        this.pageName = pageName;
    }


    public fire(pathVariables: object): void {}  // tslint:disable-line

}