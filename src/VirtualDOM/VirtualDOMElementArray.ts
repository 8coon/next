import {SimpleVirtualDOMElement} from './SimpleVirtualDOM/SimpleVirtualDOMElement';


export class VirtualDOMElementArray implements Iterable<SimpleVirtualDOMElement> {

    /**
     * длина массива
     * @type {number}
     */
    public length: number = 0;

    private elements: SimpleVirtualDOMElement[];
    private lastIndex: number = 0;


    /**
     *
     * @param elements
     */
    constructor(elements: SimpleVirtualDOMElement[]) {
        this.elements = elements;
        this.length = elements.length;
    }


    /**
     * Итератор
     * @returns {Iterator<SimpleVirtualDOMElement>}
     */

    public [Symbol.iterator](): Iterator<SimpleVirtualDOMElement> {
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
     * @returns {SimpleVirtualDOMElement}
     */
    public item(index: number) {
        return this.elements[index];
    }

}
