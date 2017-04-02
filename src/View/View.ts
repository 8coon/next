import {IEventEmitter} from '../EventManager/IEventEmitter';
import {IEventReceiver} from '../EventManager/IEventReceiver';
import {IEvent} from '../EventManager/IEvent';
import {IViewParsed} from './IViewParsed';
import {IAbstractVirtualDOMElement} from '../VirtualDOM/IAbstractVirtualDOMElement';
import {ApplicationContext} from '../ApplicationContext/ApplicationContext';
import {VirtualDOM} from '../VirtualDOM/VirtualDOM';
import {ViewConfig} from './ViewConfig';
import {JSWorksInternal} from '../Common/InternalDecorator';


declare const JSWorks: any;


@JSWorksInternal
export class View implements IEventEmitter, IEventReceiver {

    private _id: string;
    private template: HTMLElement;
    private _DOMRoot: IAbstractVirtualDOMElement;

    private appContext: ApplicationContext;
    private virtualDOM: VirtualDOM;


    constructor(data: IViewParsed) {
        this._id = data.id;
        this.template = data.template;

        this.appContext = JSWorks.applicationContext;
        this.virtualDOM = this.appContext.serviceHolder.getService('VirtualDOM');

        this._DOMRoot = this.virtualDOM.createElement(ViewConfig.VIEW_TAG);
        this._DOMRoot.id = this._id;
        this._DOMRoot.innerHTML = this.template.innerHTML;
    }


    /**
     * ID текущей View
     * @returns {string}
     */
    public get id(): string {
        return this._id;
    }


    /**
     * См. {EventManager}
     * @param event
     */
    public emitEvent(event: IEvent): void {} // tslint:disable-line


    /**
     * См. {EventManager}
     * @param event
     * @param emitter
     */
    public receiveEvent(event: IEvent, emitter: IEventEmitter) {} // tslint:disable-line

}
