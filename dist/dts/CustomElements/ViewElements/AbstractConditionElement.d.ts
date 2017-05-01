import { AbstractListeningElement } from './AbstractListeningElement';
export declare abstract class AbstractConditionElement extends AbstractListeningElement {
    protected lastValue: any;
    /**
     * Будет вызван при изменении компонента, на который данный тэг был подписан
     */
    propertyChange(): void;
    /**
     * Будет вызван при изменении условия
     * @param newValue
     */
    abstract conditionChange(newValue: any): void;
}
