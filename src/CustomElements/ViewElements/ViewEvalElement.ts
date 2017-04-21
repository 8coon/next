import {AbstractConditionElement} from './AbstractConditionElement';
import {JSWorksInternal} from '../../Common/InternalDecorator';
import {JSWorksCustomElement} from '../CustomElementDecorator';
import {ViewConfig} from '../../View/ViewConfig';
import {SimpleVirtualDOM} from '../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOM';
import {View} from '../../View/View';
import {SimpleVirtualDOMElement} from '../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElement';
import {SimpleVirtualDOMElementExt} from '../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElementExt';


declare const JSWorks: any;


@JSWorksInternal
@JSWorksCustomElement(ViewConfig.VIEW_EVAL_TAG)
export class ViewEvalElement extends SimpleVirtualDOMElementExt {

    private lastValue: any;


    /**
     * Фабрика ViewEvalElement
     * @returns {ViewEvalElement}
     */
    public createElement(): ViewEvalElement {
        // super.createElement();
        return new ViewEvalElement(SimpleVirtualDOM.NextHash());
    }


    /**
     * См. View.propagateView
     * @param view
     */
    public propagateView(view: View): void {
        if (this.view === view) {
            return;
        }

        super.propagateView(view);
    }


    /**
     * Обновляет значение
     */
    public customUpdate(): void {
        if (!this.hasAttribute('value')) {
            return;
        }

        if (this.view && this.view.component && this.ready) {
            const value = this.execStatement(this.getAttribute('value'));

            if (value === this.lastValue) {
                return;
            }

            this.lastValue = value;

            const virtualDOM: SimpleVirtualDOM = JSWorks.applicationContext.serviceHolder.
                getServiceByName('SimpleVirtualDOM');

            this.removeChildren();
            this.appendChild(<SimpleVirtualDOMElement> virtualDOM.createTextElement(''));
            this.valueChange(value);
        }
    }


    /**
     * Изменение результата связанного с этим ViewEvalElement выражения
     * @param newValue
     */
    public valueChange(newValue: any): void {
        this._children[0].text = String(newValue || '');
    }

}
