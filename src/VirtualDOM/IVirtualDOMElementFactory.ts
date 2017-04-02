import {IAbstractVirtualDOMElement} from './IAbstractVirtualDOMElement';


/**
 * Фабрика элементов виртуального DOM.
 */
export interface IVirtualDOMElementFactory {

    /**
     * Создать новый инстанс данного элемента по заданым в args параметрам.
     * @param args
     */
    createElement(args: {}, hash): IAbstractVirtualDOMElement;

}
