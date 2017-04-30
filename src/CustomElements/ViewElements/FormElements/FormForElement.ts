import {JSWorksInternal} from '../../../Common/InternalDecorator';
import {JSWorksCustomElement} from '../../CustomElementDecorator';
import {ViewConfig} from '../../../View/ViewConfig';
import {SimpleVirtualDOM} from '../../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOM';
import {View} from '../../../View/View';
import {SimpleVirtualDOMElementExt} from '../../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElementExt';
import {EventManager} from '../../../EventManager/EventManager';
import {EventType} from '../../../EventManager/EventType';
import {AttributeNotFoundError} from '../../../Error/AttributeNotFoundError';


declare const JSWorks: any;


@JSWorksInternal
@JSWorksCustomElement(ViewConfig.FORM_FOR_TAG)
export class FormForElement extends SimpleVirtualDOMElementExt {


    // public form: Form;


    /**
     * Фабрика ViewEvalElement
     * @returns {ViewEvalElement}
     */
    public createElement(): FormForElement {
        const form: FormForElement = new FormForElement(SimpleVirtualDOM.NextHash());

        EventManager.subscribe(this, this, EventType.CREATE, (ev) => {
            if (!this.hasAttribute('model')) {
                throw new AttributeNotFoundError('model', 'form-for');
            }

            /* this.querySelectorAll(ViewConfig.FORM_FIELD_TAG).forEach((field: FormFieldElement) => {

            }); */

            // form.form = new Form();
            // form.form.model = JSWorks.applicationContext.modelHolder.getModel(this.getAttribute('model')).from();

        });

        return form;
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
    // public customUpdate(): void {}


}
