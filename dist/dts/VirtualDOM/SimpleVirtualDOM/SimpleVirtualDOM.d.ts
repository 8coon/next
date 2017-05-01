import { IVirtualDOMElement } from '../IVirtualDOMElement';
import { IDOMParsed } from '../../Parser/HTML/IDOMParsed';
import { VirtualDOM } from '../VirtualDOM';
import { SimpleVirtualDOMElementExt } from './SimpleVirtualDOMElementExt';
export declare type Selector = (IAbstractVirtualDOMElement) => boolean | IVirtualDOMElement | IVirtualDOMElement[];
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
     * @returns {IVirtualDOMElement}
     */
    createFromDOM(element: HTMLElement): IVirtualDOMElement;
    /**
     * Создаёт текстовый узел виртуального DOM
     * @param text
     * @returns {IVirtualDOMElement}
     */
    createTextElement(text: string): IVirtualDOMElement;
    /**
     * Создать виртуальный DOM элемент
     * @param data IDOMParsed либо tagName элемента
     * @returns {SimpleVirtualDOMElement}
     */
    createElement(data?: IDOMParsed | string): IVirtualDOMElement;
    /**
     * Решистрирует прототип пользовательского элемента. Новые элементы будут создаваться с
     * помощью elementProto.createElement(). Также для элемента будет выпущено событие EventType.CREATE.
     * @param tagName
     * @param elementProto
     */
    registerCustomElement(tagName: string, elementProto: SimpleVirtualDOMElementExt): void;
}
