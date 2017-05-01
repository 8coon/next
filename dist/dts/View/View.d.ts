import { IEventEmitter } from '../EventManager/IEventEmitter';
import { IEventReceiver } from '../EventManager/IEventReceiver';
import { IEvent } from '../EventManager/IEvent';
import { IViewParsed } from './IViewParsed';
import { IVirtualDOMElement } from '../VirtualDOM/IVirtualDOMElement';
import { ApplicationContext } from '../ApplicationContext/ApplicationContext';
export declare class View implements IEventEmitter, IEventReceiver {
    /**
     * Связанный с данной View компонент
     */
    component: any;
    /**
     * Контекст приложения (Задаётся после загрузки соответствующего компонента/страницы).
     */
    applicationContext: ApplicationContext;
    private _id;
    private _DOMRoot;
    private appContext;
    private virtualDOM;
    private renderQueued;
    constructor(data: IViewParsed);
    /**
     * ID текущей View
     * @returns {string}
     */
    readonly id: string;
    /**
     * Корневой элемент DOM данной View.
     * @returns {IVirtualDOMElement}
     * @constructor
     */
    readonly DOMRoot: IVirtualDOMElement;
    /**
     * Склонировать текущий корневой элемент, присвоим ему переданный view
     * @param view
     */
    cloneDOMRoot(view: View): void;
    /**
     * Создать копию текущей View
     * @returns {View}
     */
    clone(id?: string): View;
    /**
     * :P
     */
    askToRender(): void;
    /**
     * Сообрает View, что в виртуальном DOM произошли изменения, и было бы неплохо когда-нибудь их
     * отразить в реальном DOM.
     */
    askToRenderPolitely(): void;
    /**
     * Обновляет виртуальный DOM этой View.
     */
    render(): void;
    /**
     * См. {EventManager}
     * @param event
     */
    emitEvent(event: IEvent): void;
    /**
     * См. {EventManager}
     * @param event
     * @param emitter
     */
    receiveEvent(event: IEvent, emitter: IEventEmitter): void;
}
