import {VirtualDOMElementArray} from './VirtualDOMElementArray';
import {IEventEmitter} from '../EventManager/IEventEmitter';
import {IEventReceiver} from '../EventManager/IEventReceiver';
import {View} from '../View/View';


/**
 * Базовый узел VirtualDOM. Может быть как текстовым, так и отражать HTMLElement.
 */
export interface IVirtualDOMElement extends IEventEmitter, IEventReceiver {

    tagName: string;
    innerHTML: string;
    id: string;
    className: string;
    parentNode: IVirtualDOMElement;
    children: VirtualDOMElementArray;
    text: string;
    readonly style: object;
    view?: View;


    getAttribute(name: string): any;


    setAttribute(name: string, value?: any): void;


    hasAttribute(name: string): boolean;


    toggleClass(name: string, on: boolean): void;


    appendChild(child: IVirtualDOMElement | IVirtualDOMElement[]): void;


    insertBefore(child: IVirtualDOMElement, reference: IVirtualDOMElement): void;


    removeChild(child: IVirtualDOMElement): void;


    removeChildren(): void;


    replaceChild(newChild: IVirtualDOMElement | IVirtualDOMElement[], oldChild: IVirtualDOMElement): void;


    remove(): void;


    getOuterHTML(): string;


    isText(): boolean;


    querySelector(query: string): IVirtualDOMElement;


    querySelectorAll(query: string): IVirtualDOMElement[];


    render(): void;


    cloneNode(): IVirtualDOMElement;

}
