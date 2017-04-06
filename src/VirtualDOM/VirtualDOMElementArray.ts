import {IVirtualDOMElement} from './IVirtualDOMElement';


export class VirtualDOMElementArray implements Iterable<IVirtualDOMElement> {

    /**
     * длина массива
     * @type {number}
     */
    public length: number = 0;

    private elements: IVirtualDOMElement[];
    private lastIndex: number = 0;


    /**
     *
     * @param elements
     */
    constructor(elements: IVirtualDOMElement[]) {
        this.elements = elements;
        this.length = elements.length;
    }


    /**
     * Итератор
     * @returns {Iterator<IVirtualDOMElement>}
     */

    public [Symbol.iterator](): Iterator<IVirtualDOMElement> {
        return {
            next: () => {
                if (this.lastIndex < this.elements.length) {
                    this.lastIndex++;
                    return { value: this.elements[this.lastIndex - 1], done: false };
                }

                this.lastIndex = 0;
                return {value: undefined, done: true};
            },
        };
    }


    /**
     * Возвращает элемент по данному индексу
     * @param index
     * @returns {IVirtualDOMElement}
     */
    public item(index: number) {
        return this.elements[index];
    }

}
