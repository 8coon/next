import {IVirtualDOMElement} from './IVirtualDOMElement';
import {IDOMParsed} from '../Parser/HTML/IDOMParsed';


export abstract class VirtualDOM {

    /**
     * Создаёт элемент виртуального DOM по образу реального.
     * @param element
     */
    public abstract createFromDOM(element: HTMLElement): IVirtualDOMElement;


    /**
     * Создаёт текстовый узел виртуального DOM.
     * @param text
     */
    public abstract createTextElement(text: string): IVirtualDOMElement;


    /**
     * Создаёт виртуальный DOM элемент. В случае передачи параметром строки создастся элемент
     * с именем тэга, соответствующему этой строке.
     * @param data {IDOMParsed | string}
     */
    public abstract createElement(data: IDOMParsed | string): IVirtualDOMElement;

}
