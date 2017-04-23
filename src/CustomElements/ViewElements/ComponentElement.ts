import {SimpleVirtualDOMElementExt} from '../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElementExt';
import {JSWorksInternal} from '../../Common/InternalDecorator';
import {JSWorksCustomElement} from '../CustomElementDecorator';
import {ViewConfig} from '../../View/ViewConfig';


declare const JSWorks: any;


@JSWorksInternal
@JSWorksCustomElement(ViewConfig.COMPONENT_TAG)
export class ComponentElement extends SimpleVirtualDOMElementExt {


    /**
     * Фабрика componentElement
     * @returns {ComponentElement}
     */
    public createElement(): SimpleVirtualDOMElementExt {
        return this;
    }

}
