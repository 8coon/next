import { SimpleVirtualDOMElementExt } from '../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElementExt';
import { View } from '../../View/View';
export declare abstract class AbstractListeningElement extends SimpleVirtualDOMElementExt {
    private updateDescriptor;
    /**
     * Подписаться на события от соответствующего компонента
     * @param component
     */
    subscribeOnComponent(component: any): void;
    /**
     * Отписаться от событий компонента
     * @param component
     */
    unsubscribeFromComponent(component: any): void;
    /**
     * Фабрика элементов
     * @returns {undefined}
     */
    createElement(): AbstractListeningElement;
    /**
     * Пересчитать условие
     */
    customUpdate(): void;
    /**
     * Элементу была присвоена некоторая View
     * @param view
     */
    propagateView(view: View): void;
    /**
     * Будет вызван при изменении компонента, на который данный тэг был подписан
     */
    abstract propertyChange(): void;
}
