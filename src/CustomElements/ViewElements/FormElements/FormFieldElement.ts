import {JSWorksInternal} from '../../../Common/InternalDecorator';
import {JSWorksCustomElement} from '../../CustomElementDecorator';
import {ViewConfig} from '../../../View/ViewConfig';
import {SimpleVirtualDOMElementExt} from '../../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElementExt';
import {SimpleVirtualDOM} from '../../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOM';
import {IInterceptor} from '../../../Interceptor/IInterceptor';
import {InterceptorHolder} from '../../../Interceptor/InterceptorHolder';
import {SimpleVirtualDOMElement} from '../../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElement';
import {ElementNotFoundError} from '../../../Error/ElementNotFoundError';
import {View} from '../../../View/View';
import {MessageListElement} from './MessageListElement';
import {FormForElement} from './FormForElement';


declare const JSWorks: any;


@JSWorksInternal
@JSWorksCustomElement(ViewConfig.FORM_FIELD_TAG)
export class FormFieldElement extends MessageListElement {


    /**
     * Цепочка валидаторов
     */
    public validators: IInterceptor[] = [];


    /**
     * Форма
     */
    public form: FormForElement;


    private input: SimpleVirtualDOMElement;
    private listening: boolean = false;


    /**
     * Фабрика FormFieldElement
     * @returns {FormFieldElement}
     */
    public createElement(): SimpleVirtualDOMElementExt {
        return new FormFieldElement(SimpleVirtualDOM.NextHash());
    }


    /**
     * Возвращает первый элемент с атрибутом form-bind-attribute
     */
    public getBoundElement(): SimpleVirtualDOMElement {
        return this.querySelector('[form-bind-attribute]');
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

        if (!this.input) {
            this.input = this.getBoundElement();
        }

        if (this.input && !this.listening) {
            this.installListener(this.input);
            this.listening = true;
        }
    }


    protected updateMessagesCollection(): void {
        super.updateMessagesCollection();

        if (this.form) {
            this.form.validateField();
        }
    }


    private installListener(input: SimpleVirtualDOMElement): void {
        const interceptors: InterceptorHolder = JSWorks.applicationContext.interceptorHolder;

        input.addEventListener('change', (event) => {
            const valueElem: SimpleVirtualDOMElement = input;

            if (!valueElem) {
                throw new ElementNotFoundError('element with value binding');
            }

            const attrName: string = valueElem.getAttribute('form-bind-attribute');
            const value = (<HTMLElement> valueElem.rendered).getAttribute(attrName);
            (<any> valueElem).attributes[attrName] = value;

            if (this.hasAttribute('validates')) {
                const validators: string[] = this.getAttribute('validates').split(',').map((s) => s.trim());
                this.validators = interceptors.getInterceptors(validators);
            }

            if (this.validators.length === 0) {
                this.lastValidationResult = {
                    success: true,
                    value,
                    messages: [],
                };

                this.updateMessagesCollection();
                return;
            }

            interceptors.trigger(this.validators, {
                    value,
                })
                .then((result) => {
                    this.lastValidationResult = {
                        success: true,
                        value,
                        messages: MessageListElement.formatPromiseResult(result, 'OK'),
                    };

                    this.updateMessagesCollection();
                })
                .catch((result) => {
                    this.lastValidationResult = {
                        success: false,
                        messages: MessageListElement.formatPromiseResult(result, 'ERROR'),
                    };

                    this.updateMessagesCollection();
                });
        });

    }


}
