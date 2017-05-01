import { IVirtualDOMElement } from './IVirtualDOMElement';
export declare class VirtualDOMElementArray implements Iterable<IVirtualDOMElement> {
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
    constructor(elements: IVirtualDOMElement[]);
    /**
     * Итератор
     * @returns {Iterator<IVirtualDOMElement>}
     */
    [Symbol.iterator](): Iterator<IVirtualDOMElement>;
    /**
     * Возвращает элемент по данному индексу
     * @param index
     * @returns {IVirtualDOMElement}
     */
    item(index: number): IVirtualDOMElement;
}
