import {SimpleVirtualDOMElement} from './SimpleVirtualDOMElement';
import {JSWorksInternal} from '../../Common/InternalDecorator';


@JSWorksInternal
export abstract class SimpleVirtualDOMElementExt extends SimpleVirtualDOMElement {

    /**
     * Создать новый инстанс данного элемента
     * Фактически, каждый пользовательский элемент виртуального DOM выступает, как фабрика элементов данного типа
     * @param args
     */
    public abstract createElement(args: {}): SimpleVirtualDOMElementExt;

}
