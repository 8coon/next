import {IAbstractVirtualDOMElement} from './IAbstractVirtualDOMElement';
import {IDOMParsed} from '../Parser/HTML/IDOMParsed';
import {IVirtualDOMElementFactory} from './IVirtualDOMElementFactory';


export abstract class VirtualDOM {

    /**
     * Создаёт элемент виртуального DOM по образу реального.
     * @param element
     */
    public abstract createFromDOM(element: HTMLElement): IAbstractVirtualDOMElement;


    /**
     * Создаёт текстовый узел виртуального DOM.
     * @param text
     */
    public abstract createTextElement(text: string): IAbstractVirtualDOMElement;


    /**
     * Создаёт виртуальный DOM элемент. В случае передачи параметром строки создастся элемент
     * с именем тэга, соответствующему этой строке.
     * @param data {IDOMParsed | string}
     */
    public abstract createElement(data: IDOMParsed | string): IAbstractVirtualDOMElement;


    // public abstract createCustomElement(factory: IVirtualDOMElementFactory, args: object):
    //     IAbstractVirtualDOMElement;

}
