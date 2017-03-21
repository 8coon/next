import {IAbstractVirtualDOMElement} from './IAbstractVirtualDOMElement';


export class VirtualDOMElementArray {

    private elements: IAbstractVirtualDOMElement[];
    private lastIndex: number = 0;


    /**
     *
     * @param elements
     */
    constructor(elements: IAbstractVirtualDOMElement[]) {
        this.elements = elements;
    }


    /**
     *
     * @returns {{next: (()=>({value: IAbstractVirtualDOMElement, done: boolean}|{done: boolean}))}}
     */
    public [Symbol.iterator]() {
        return {
            next: () => {
                if (this.lastIndex < this.elements.length) {
                    this.lastIndex++;
                    return { value: this.elements[this.lastIndex - 1], done: false };
                }

                this.lastIndex = 0;
                return { done: true };
            },
        };
    }

}
