import { IDOMParsed } from '../../Parser/HTML/IDOMParsed';
import { SimpleVirtualDOMElement } from './SimpleVirtualDOMElement';
import { VirtualDOM } from '../VirtualDOM';
import { SimpleVirtualDOMElementExt } from './SimpleVirtualDOMElementExt';
export declare type Selector = (IAbstractVirtualDOMElement) => boolean | SimpleVirtualDOMElement | SimpleVirtualDOMElement[];
export declare class SimpleVirtualDOM implements VirtualDOM {
    /**
     * Получить следующий уникальный номер и последовательности уникальных номеров нод
     * @returns {number}
     * @constructor
     */
    static NextHash(): number;
    /**
     * Возвращает функцию-селектор для данного запроса
     * @param selector
     * @returns {any}
     */
    static prepareSelector(selector: string): Selector;
    private static lastNodeHash;
    private static preparedSelectors;
    private static selectorFactory;
    private hTMLParser;
    private customElements;
    /**
     * Создаёт элемент виртуального DOM по образу реального
     * @param element
     * @returns {SimpleVirtualDOMElement}
     */
    createFromDOM(element: HTMLElement): SimpleVirtualDOMElement;
    /**
     * Создаёт текстовый узел виртуального DOM
     * @param text
     * @returns {SimpleVirtualDOMElement}
     */
    createTextElement(text: string): SimpleVirtualDOMElement;
    /**
     * Создать виртуальный DOM элемент
     * @param data IDOMParsed либо tagName элемента
     * @returns {SimpleVirtualDOMElement}
     */
    createElement(data?: IDOMParsed | string): SimpleVirtualDOMElement;
    /**
     * Решистрирует прототип пользовательского элемента. Новые элементы будут создаваться с
     * помощью elementProto.createElement(). Также для элемента будет выпущено событие EventType.CREATE.
     * @param tagName
     * @param elementProto
     */
    registerCustomElement(tagName: string, elementProto: SimpleVirtualDOMElementExt): void;
}
