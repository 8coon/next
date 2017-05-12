import { SimpleVirtualDOMElement } from './SimpleVirtualDOM/SimpleVirtualDOMElement';
export declare class VirtualDOMElementArray implements Iterable<SimpleVirtualDOMElement> {
    /**
     * длина массива
     * @type {number}
     */
    length: number;
    private elements;
    private lastIndex;
    /**
     *
     * @param elements
     */
    constructor(elements: SimpleVirtualDOMElement[]);
    /**
     * Итератор
     * @returns {Iterator<SimpleVirtualDOMElement>}
     */
    [Symbol.iterator](): Iterator<SimpleVirtualDOMElement>;
    /**
     * Возвращает элемент по данному индексу
     * @param index
     * @returns {SimpleVirtualDOMElement}
     */
    item(index: number): SimpleVirtualDOMElement;
}
