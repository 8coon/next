import {VirtualDOMElementArray} from './VirtualDOMElementArray';
import {IEventEmitter} from '../EventManager/IEventEmitter';
import {IEventReceiver} from '../EventManager/IEventReceiver';


/**
 * Базовый узел VirtualDOM. Может быть как текстовым, так и отражать HTMLElement.
 */
export interface IAbstractVirtualDOMElement extends IEventEmitter, IEventReceiver {

    tagName: string;
    innerHTML: string;
    id: string;
    className: string;
    parentNode: IAbstractVirtualDOMElement;
    children: VirtualDOMElementArray;
    text: string;
    readonly style: Object;


    getAttribute(name: string): any;


    setAttribute(name: string, value?: any): void;


    hasAttribute(name: string): boolean;


    toggleClass(name: string, on: boolean): void;


    appendChild(child: IAbstractVirtualDOMElement): void;


    removeChild(child: IAbstractVirtualDOMElement): void;


    remove(): void;


    getOuterHTML(): string;


    isText(): boolean;

}
