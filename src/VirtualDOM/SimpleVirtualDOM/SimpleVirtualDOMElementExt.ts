import {SimpleVirtualDOMElement} from './SimpleVirtualDOMElement';
import {JSWorksInternal} from '../../Common/InternalDecorator';


@JSWorksInternal
export abstract class SimpleVirtualDOMElementExt extends SimpleVirtualDOMElement {


    /**
     * Метод, возвращающий новый экземпляр данного элемента
     */
    public abstract createElement(): SimpleVirtualDOMElementExt;

}
