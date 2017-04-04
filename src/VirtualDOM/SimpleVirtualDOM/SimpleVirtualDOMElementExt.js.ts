import {SimpleVirtualDOMElement} from './SimpleVirtualDOMElement';
import {JSWorksInternal} from '../../Common/InternalDecorator';
import {IVirtualDOMElementFactory} from '../IVirtualDOMElementFactory';
import {IDOMParsed} from '../../Parser/HTML/IDOMParsed';


@JSWorksInternal
export abstract class SimpleVirtualDOMElementExt extends SimpleVirtualDOMElement
        implements IVirtualDOMElementFactory {

    /**
     * Создать новый инстанс данного элемента
     * Фактически, каждый пользовательский элемент виртуального DOM выступает, как фабрика элементов данного типа
     * @param data
     * @param hash
     */
    public abstract createElement(data: IDOMParsed | string, hash): SimpleVirtualDOMElementExt;

}
