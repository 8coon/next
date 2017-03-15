

/**
 * Базовый узел VirtualDOM. Может быть как текстовым, так и отражать HTMLElement.
 */
export interface IAbstractVirtualDOMElement {

    readonly tagName: string;
    readonly innerHTML: string;
    readonly id: string;
    readonly className: string;
    readonly parentNode: IAbstractVirtualDOMElement;
    readonly children: IAbstractVirtualDOMElement[];
    readonly text: string;


    getAttribute(name: string): any;


    setAttribute(name: string, value?: any): void;


    hasAttribute(name: string): boolean;

}
