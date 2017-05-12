import {IDOMParsed} from '../Parser/HTML/IDOMParsed';
import {SimpleVirtualDOMElement} from './SimpleVirtualDOM/SimpleVirtualDOMElement';


export abstract class VirtualDOM {

    /**
     * Создаёт элемент виртуального DOM по образу реального.
     * @param element
     */
    public abstract createFromDOM(element: HTMLElement): SimpleVirtualDOMElement;


    /**
     * Создаёт текстовый узел виртуального DOM.
     * @param text
     */
    public abstract createTextElement(text: string): SimpleVirtualDOMElement;


    /**
     * Создаёт виртуальный DOM элемент. В случае передачи параметром строки создастся элемент
     * с именем тэга, соответствующему этой строке.
     * @param data {IDOMParsed | string}
     */
    public abstract createElement(data: IDOMParsed | string): SimpleVirtualDOMElement;

}
