import {SimpleVirtualDOMElement} from './SimpleVirtualDOMElement';
import {JSWorksInternal} from '../../Common/InternalDecorator';


@JSWorksInternal
export class SimpleVirtualDOMElementExt extends SimpleVirtualDOMElement {


    /**
     * Метод, возвращающий новый экземпляр данного элемента
     */
    public createElement(): SimpleVirtualDOMElementExt {
        return undefined;
    }

}
