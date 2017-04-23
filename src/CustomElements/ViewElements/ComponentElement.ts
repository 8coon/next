import {SimpleVirtualDOMElementExt} from '../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElementExt';
import {JSWorksInternal} from '../../Common/InternalDecorator';
import {JSWorksCustomElement} from '../CustomElementDecorator';
import {ViewConfig} from '../../View/ViewConfig';
import {EventManager} from '../../EventManager/EventManager';
import {EventType} from '../../EventManager/EventType';
import {IEvent} from '../../EventManager/IEvent';
import {SimpleVirtualDOM} from '../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOM';


declare const JSWorks: any;


@JSWorksInternal
@JSWorksCustomElement(ViewConfig.COMPONENT_TAG)
export class ComponentElement extends SimpleVirtualDOMElementExt {

    private component;


    /**
     * Фабрика componentElement
     * @returns {ComponentElement}
     */
    public createElement(): ComponentElement {
        const element = new ComponentElement(SimpleVirtualDOM.NextHash());

        EventManager.subscribe(element, element, EventType.CREATE, (ev: IEvent) => {
            const name = element.getAttribute('name');
            const componentProto = JSWorks.applicationContext.componentHolder.getComponentPrototype();

            // element.component = JSWorks.applicationContext.componentHolder
        });

        return element;
    }

}
