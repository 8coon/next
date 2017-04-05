import {SimpleVirtualDOMElementExt} from '../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElementExt';
import {View} from '../../View/View';
import {EventManager} from '../../EventManager/EventManager';
import {EventType} from '../../EventManager/EventType';
import {IEvent} from '../../EventManager/IEvent';


export abstract class AbstractListeningElement extends SimpleVirtualDOMElementExt {


    /**
     * Элементу была присвоена некоторая View
     * <view-if name="propertyName" condition="$.toNumber() >= 3">
     *     <view-then>
     *         Greater or equals 3!
     *     </view-then>
     *     <view-else>
     *         Less than 3!
     *     </view-else>
     * </view-if>
     * @param view
     */
    public propagateView(view: View): void {
        super.propagateView(view);

        EventManager.subscribe(this, view.component, EventType.UPDATE, (event: IEvent) => {
            if (event.data.name.toLowerCase() !== this.getAttribute('name')) {
                return;
            }

            this.propertyChange(event.data.name, event.data.value);
        });
    }


    /**
     * Будет вызван при изменении свойства компонента, на которое данный тэг был подписан
     * @param name
     * @param value
     */
    public abstract propertyChange(name: string, value: any): void;

}

