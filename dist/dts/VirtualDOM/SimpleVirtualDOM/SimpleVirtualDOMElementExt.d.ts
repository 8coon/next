import { SimpleVirtualDOMElement } from './SimpleVirtualDOMElement';
export declare abstract class SimpleVirtualDOMElementExt extends SimpleVirtualDOMElement {
    /**
     * Метод, возвращающий новый экземпляр данного элемента
     */
    abstract createElement(): SimpleVirtualDOMElementExt;
}
