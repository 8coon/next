import { IVirtualDOMElement } from './IVirtualDOMElement';
import { IDOMParsed } from '../Parser/HTML/IDOMParsed';
export declare abstract class VirtualDOM {
    /**
     * Создаёт элемент виртуального DOM по образу реального.
     * @param element
     */
    abstract createFromDOM(element: HTMLElement): IVirtualDOMElement;
    /**
     * Создаёт текстовый узел виртуального DOM.
     * @param text
     */
    abstract createTextElement(text: string): IVirtualDOMElement;
    /**
     * Создаёт виртуальный DOM элемент. В случае передачи параметром строки создастся элемент
     * с именем тэга, соответствующему этой строке.
     * @param data {IDOMParsed | string}
     */
    abstract createElement(data: IDOMParsed | string): IVirtualDOMElement;
}
