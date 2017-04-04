
import {Controller} from '../Controller/Controller';
import {View} from '../View/View';
import {JSWorksInternal} from '../Common/InternalDecorator';


@JSWorksInternal
export class Route {
    get name(): string {
        return this._name;
    }

    private pageName: string;


    /**
     * вложенные роуты
     */
    public children: Route[];

    private _name: string;

    /**
     *  часть адреса url, данного роута
     */
    public match: string;

    constructor(match: string, name?: string, pageName?: string) {
        this._name = name;
        this.pageName = pageName;
    }

}