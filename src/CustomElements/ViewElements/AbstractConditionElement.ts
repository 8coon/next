import {AbstractListeningElement} from './AbstractListeningElement';


export abstract class AbstractConditionElement extends AbstractListeningElement {

    protected lastValue: any;


    /**
     * Будет вызван при изменении компонента, на который данный тэг был подписан
     */
    public propertyChange(): void {
        const condFunc = new Function('$', `return ${this.getAttribute('condition')};`);
        const newValue = condFunc(this.view.component);

        if (newValue !== this.lastValue) {
            this.conditionChange(newValue);
        }
    }


    /**
     * Будет вызван при изменении условия
     * @param newValue
     */
    public abstract conditionChange(newValue: any): void;


}

