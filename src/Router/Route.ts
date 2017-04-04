
import {Controller} from '../Controller/Controller';
import {View} from '../View/View';
import {JSWorksInternal} from '../Common/InternalDecorator';


@JSWorksInternal
export class Route {

    private pageName: string;


    /**
     * вложенные роуты
     */
    public children: Route[];

    /**
     * имя роута
     */
    public name: string;

    /**
     *  часть адреса url, данного роута
     */
    public match: string;

    constructor(match: string, name?: string, pageName?: string) {
        this.name = name;
        this.pageName = pageName;
    }


    public fire(): void {}  // tslint:disable-line

}