import {JSWorksInternal} from '../../../Common/InternalDecorator';
import {JSWorksCustomElement} from '../../CustomElementDecorator';
import {ViewConfig} from '../../../View/ViewConfig';
import {SimpleVirtualDOMElementExt} from '../../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElementExt';
import {SimpleVirtualDOM} from '../../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOM';
import {IInterceptor} from '../../../Interceptor/IInterceptor';
import {EventManager} from '../../../EventManager/EventManager';
import {EventType} from '../../../EventManager/EventType';
import {InterceptorHolder} from '../../../Interceptor/InterceptorHolder';
import {IValidationResult} from './IValidationResult';
import {SimpleVirtualDOMElement} from '../../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElement';
import {ElementNotFoundError} from '../../../Error/ElementNotFoundError';
import {View} from '../../../View/View';
import {ViewForElement} from '../ViewForElement';


declare const JSWorks: any;


@JSWorksInternal
@JSWorksCustomElement(ViewConfig.FORM_FIELD_TAG)
export class FormFieldElement extends SimpleVirtualDOMElementExt {


    /**
     * Цепочка валидаторов
     */
    public validators: IInterceptor[] = [];


    /**
     * Промис валидации. Сбрасывается при каждом изменении значения, резолвится при каждой
     * успешной или неуспешной валидации.
     * @type {Promise<T>|Promise<void>}
     */
    // public validate: Promise<any> = Promise.resolve();


    /**
     * Результат последней валидации
     */
    public lastValidationResult: IValidationResult;


    private messageTemplate: SimpleVirtualDOMElement;
    private messagesRoot: SimpleVirtualDOMElement;
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

        if (this.messageTemplate) {
            this.messageTemplate.propagateView(view);
        }

        if (!this.input) {
            this.input = this.getBoundElement();
        }

        if (this.input && !this.listening) {
            this.installListener(this.input);
            this.listening = true;
        }

        this.messagesRoot = this.querySelector('form-messages');

        if (!this.messagesRoot) {
            return;
        }

        this.messageTemplate = ViewForElement.init(this.messagesRoot, this.messageTemplate);
    }


    private installListener(input: SimpleVirtualDOMElement): void {
        const interceptors: InterceptorHolder = JSWorks.applicationContext.interceptorHolder;

        const promiseResult = (result, status, array = true) => {
            if (result instanceof Array) {
                return result.map((message) => {
                    return promiseResult(message, status, false);
                });
            }

            if (typeof result !== 'object') {
                result = {
                    status,
                    text: String(result || ''),
                };
            }

            if (array) {
                result = [result];
            }

            return result;
        };

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
                        messages: promiseResult(result, 'OK'),
                    };

                    this.updateMessagesCollection();
                })
                .catch((result) => {
                    this.lastValidationResult = {
                        success: false,
                        messages: promiseResult(result, 'ERROR'),
                    };

                    this.updateMessagesCollection();
                });
        });

    }


    private updateMessagesCollection(): void {
        ViewForElement.iterateCollection(this.messagesRoot, this.messageTemplate,
            this.lastValidationResult.messages, this.hash, this.view, 'error');
    }

}
