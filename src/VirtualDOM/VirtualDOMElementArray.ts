import {IAbstractVirtualDOMElement} from './IAbstractVirtualDOMElement';


export class VirtualDOMElementArray implements Iterable<IAbstractVirtualDOMElement> {

    /**
     * длина массива
     * @type {number}
     */
    public length: number = 0;

    private elements: IAbstractVirtualDOMElement[];
    private lastIndex: number = 0;


    /**
     *
     * @param elements
     */
    constructor(elements: IAbstractVirtualDOMElement[]) {
        this.elements = elements;
        this.length = elements.length;
    }


    /**
     *
     * @returns {next: (()=>({value: IAbstractVirtualDOMElement, done: boolean}|{done: boolean}))}
     */

    public [Symbol.iterator](): Iterator<IAbstractVirtualDOMElement> {
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
    };


    /**
     * Возвращает элемент по данному индексу
     * @param index
     * @returns {IAbstractVirtualDOMElement}
     */
    public item(index: number) {
        return this.elements[index];
    }

}
