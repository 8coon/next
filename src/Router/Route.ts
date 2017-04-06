
import {Controller} from '../Controller/Controller';
import {View} from '../View/View';
import {JSWorksInternal} from '../Common/InternalDecorator';
import {IEventEmitter} from '../EventManager/IEventEmitter';
import {IEvent} from '../EventManager/IEvent';
import {EventType} from '../EventManager/EventType';


@JSWorksInternal
export class Route implements IEventEmitter {

    /**
     * вложенные роуты
     */
    public children: object = {};

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

    /**
     * url
     */
    public path: string;

    private pageName: string;


    constructor(match: string, path: string, pathVariableName?: string, name?: string, pageName?: string) {
        this.match = match;
        this.path = path;
        this.pathVariableName = pathVariableName;
        this.name = name;
        this.pageName = pageName;
    }


    public fire(pathVariables: object): void { this.emitEvent({ type: EventType.ROUTE_FIRED, data: this });}  // tslint:disable-line


    /**
     * вернуть реальный url
     * @param args объект с переменными пути
     * @returns {string}
     */
    public getPath(args: object): string {
        let path = this.path;

        if (args) {
            Object.keys(args).forEach((pathVar) => {
                const regexp = new RegExp(pathVar);
                path = path.replace(regexp, args[pathVar]);
            });
        }

        return path;
    }

    public emitEvent(event: IEvent): void {}  // tslint:disable-line
}
