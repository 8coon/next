import {AbstractListeningElement} from './AbstractListeningElement';


export abstract class AbstractConditionElement extends AbstractListeningElement {

    protected lastValue: any;


    /**
     * Будет вызван при изменении компонента, на который данный тэг был подписан
     */
    public propertyChange(): void {
        const newValue = this.execStatement(this.getAttribute('condition'));

        if (newValue !== this.lastValue) {
            this.lastValue = newValue;
            this.conditionChange(newValue);
        }
    }


    /**
     * Будет вызван при изменении условия
     * @param newValue
     */
    public abstract conditionChange(newValue: any): void;


}

