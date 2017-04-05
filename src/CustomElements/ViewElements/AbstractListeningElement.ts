import {SimpleVirtualDOMElementExt} from '../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElementExt';
import {View} from '../../View/View';
import {EventManager} from '../../EventManager/EventManager';
import {EventType} from '../../EventManager/EventType';
import {IEvent} from '../../EventManager/IEvent';


declare const JSWorks: any;


export abstract class AbstractListeningElement extends SimpleVirtualDOMElementExt {

    /**
     * Массив View, на компоненты которых нужно подписать тэги view-if и так далее.
     * @type {Array}
     */
    public static viewsToSubscribe: View[] = [];


    /**
     * Подписаться на события от соответствующего компонента
     * @param component
     */
    public subscribeOnComponent(component: any): void {
        EventManager.subscribe(this, component, EventType.UPDATE, (event: IEvent) => {
            if (event.data.name.toLowerCase() !== this.getAttribute('name')) {
                return;
            }

            console.log(event);
            this.propertyChange(event.data.name, event.data.value);
        });
    }


    /**
     * Фабрика элементов
     * @returns {undefined}
     */
    public createElement(): AbstractListeningElement {
        EventManager.subscribe(this, JSWorks.applicationContext, EventType.InstallViewsListeners, (ev) => {
            if (this.view && this.view.component) {
                this.subscribeOnComponent(this.view.component);
            }
        });

        return undefined;
    }


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

        if (this.view && this.view.component) {
            this.subscribeOnComponent(this.view.component);
        }
    }


    /**
     * Будет вызван при изменении свойства компонента, на которое данный тэг был подписан
     * @param name
     * @param value
     */
    public abstract propertyChange(name: string, value: any): void;

}

