import {SimpleVirtualDOMElementExt} from '../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElementExt';
import {AbstractListeningElement} from './AbstractListeningElement';


export abstract class AbstractConditionElement extends AbstractListeningElement {

    protected lastValue: any;


    /**
     * Будет вызван при изменении свойства компонента, на которое данный тэг был подписан
     * @param name
     * @param value
     */
    public propertyChange(name: string, value: any): void {
        const condFunc = new Function('$', `return ${this.getAttribute('condition')};`);
        const newValue = condFunc(value);

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

