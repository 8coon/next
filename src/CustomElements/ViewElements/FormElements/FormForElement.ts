import {JSWorksInternal} from '../../../Common/InternalDecorator';
import {JSWorksCustomElement} from '../../CustomElementDecorator';
import {ViewConfig} from '../../../View/ViewConfig';
import {SimpleVirtualDOM} from '../../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOM';
import {AttributeNotFoundError} from '../../../Error/AttributeNotFoundError';
import {MessageListElement} from './MessageListElement';
import {FormFieldElement} from './FormFieldElement';
import {IModel} from '../../../Model/IModel';
import {IInterceptor} from '../../../Interceptor/IInterceptor';
import {SimpleVirtualDOMElement} from '../../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElement';
import {View} from '../../../View/View';
import {InterceptorType} from '../../../Interceptor/InterceptorType';


declare const JSWorks: any;


export type SubmitCallback = (form?: FormForElement) => Promise<any>;
export type ModelSaveCallback = (form?: FormForElement, model?: IModel) => Promise<any>;
export type UserSubmitCallback = (form?: FormForElement) => boolean;
export type UserSubmittedCallback = (form?: FormForElement, response?: object) => boolean;


@JSWorksInternal
@JSWorksCustomElement(ViewConfig.FORM_FOR_TAG)
export class FormForElement extends MessageListElement {


    /**
     * Список полей формы
     * @type {Array}
     */
    public fields: FormFieldElement[] = [];


    /**
     * Экземпляр соответствующей модели
     */
    public model: IModel;


    /**
     * Перехватчики отправки формы
     */
    public submitInterceptors: IInterceptor[] = [];


    /**
     * Имя метода сохранения у модели
     * @type {string}
     */
    public modelSaveMethod: string = 'persist';


    /**
     * Callback отправки формы
     */
    public onSubmit: UserSubmitCallback;


    /**
     * Callback получения результата от сервера
     */
    public onSuccess: UserSubmittedCallback;


    /**
     * Callback получения ошибки от сервера
     */
    public onError: UserSubmittedCallback;


    /**
     * Может ли форма быть отправлена
     * @returns {boolean}
     */
    public get enabled(): boolean {
        return this._enabled;
    }


    /**
     * Может ли форма быть отправлена
     * @param value
     */
    public set enabled(value: boolean) {
        const button: SimpleVirtualDOMElement = this.getSubmitButton();
        this._enabled = value;

        if (!button) {
            return;
        }

        if (this.canSubmit()) {
            button.removeAttribute('disabled');
        } else {
            button.setAttribute('disabled', 'true');
        }
    }


    private validated: number = 0;
    private _enabled: boolean = true;


    /**
     * Обработчик отправки формы
     */
    public submitCallback: SubmitCallback = (form: FormForElement): Promise<any> => {
        return form.modelSaveCallback(form, form.model);
    }; // tslint:disable-line


    /**
     * Обработчик сохранения модели
     * @param form
     * @param model
     */
    public modelSaveCallback: ModelSaveCallback = (form: FormForElement, model: IModel) => {
        return model[form.modelSaveMethod]();
    };  // tslint:disable-line



    /**
     * Фабрика ViewEvalElement
     * @returns {ViewEvalElement}
     */
    public createElement(): FormForElement {
        return new FormForElement(SimpleVirtualDOM.NextHash());
    }


    /**
     * Кнопка отправки формы, если такая есть
     * @returns {SimpleVirtualDOMElement}
     */
    public getSubmitButton(): SimpleVirtualDOMElement {
        return this.querySelector('[form-submit]');
    }


    /**
     * См. SimpleVirtualDOMElement.PropagateView
     * @param view
     */
    public propagateView(view: View): void {
        if (this.view === view) {
            return;
        }

        super.propagateView(view);

        if (!this.hasAttribute('model')) {
            throw new AttributeNotFoundError('model', 'form-for');
        }

        this.model = JSWorks.applicationContext.modelHolder.getModel(this.getAttribute('model')).from();
        this.customUpdate();

        const button: SimpleVirtualDOMElement = this.getSubmitButton();

        if (button) {
            button.setAttribute('disabled', 'true');
        }
    }


    /**
     * Обновляет значение
     */
    public customUpdate(): void {
        this.fields = [];

        this.querySelectorAll(ViewConfig.FORM_FIELD_TAG).forEach((field: FormFieldElement) => {
            field.form = this;
            this.fields.push(field);
        });

        const form: SimpleVirtualDOMElement = this.querySelector('form');

        if (form && !form['__form_listening__']) {
            form['__form_listening__'] = true;

            form.addEventListener('submit', (event) => {
                event.preventDefault();

                const fireInterceptors = (result, success: boolean = true) => {
                    JSWorks.applicationContext.interceptorHolder.triggerByType(
                        InterceptorType.FormAfterSubmitInterceptor,
                            { form: this, result, success });
                };


                const submit = () => {
                    this.submit().then((result) => {
                        fireInterceptors(result);
                    }).catch((err) => {
                        fireInterceptors(err, false);
                    });
                };

                try {
                    JSWorks.applicationContext.interceptorHolder.triggerByType(
                            InterceptorType.FormBeforeSubmitInterceptor, { form: this }).then(() => {
                        submit();
                    });
                } catch (err) {
                    submit();
                }
            });
        }
    }


    /**
     * Проверяет, возможна ли отправка формы
     * @returns {boolean}
     */
    public canSubmit(): boolean {
        return this._enabled && this.fields.every((field) => {
            return !(!field.lastValidationResult || !field.lastValidationResult.success);
        });
    }


    /**
     * Отправить форму
     * @returns {Promise<any>}
     */
    public submit(force: boolean = false): Promise<any> {
        if (!(force || this.canSubmit())) {
            return Promise.reject('Form invalid!');
        }

        this.fields.forEach((field: FormFieldElement) => {
            if (!field.hasAttribute('for')) {
                return;
            }

            const name = field.getAttribute('for');
            this.model[name] = field.value;
        });

        if (this.onSubmit && !this.onSubmit(this)) {
            return Promise.reject('Form submission aborted by onSubmit callback!');
        }

        if (this.submitInterceptors.length > 0) {
            return JSWorks.applicationContext.interceptorHolder.trigger(this.submitInterceptors, { form: this });
        }

        this.enabled = false;

        return this.submitCallback(this)
            .then((result) => {
                this.model = result;
                this.enabled = true;

                if (this.onSuccess && !this.onSuccess(this, result)) {
                    return;
                }

                this.lastValidationResult = {
                    success: true,
                    messages: MessageListElement.formatPromiseResult(result, 'OK'),
                };

                this.updateMessagesCollection();
            })
            .catch((err) => {
                this.enabled = true;

                if (this.onError && !this.onError(this, err)) {
                    return;
                }

                this.lastValidationResult = {
                    success: false,
                    messages: MessageListElement.formatPromiseResult(err, 'ERROR'),
                };

                this.updateMessagesCollection();
            });
    }


    /**
     * Отметить результат валидации поля
     */
    public validateField(): void {
        this.validated++;

        if (this.validated === this.fields.length) {
            this.validated = this.fields.length - 1;
            const button: SimpleVirtualDOMElement = this.getSubmitButton();

            if (!button) {
                return;
            }

            if (this.canSubmit()) {
                button.removeAttribute('disabled');
            } else {
                button.setAttribute('disabled', 'true');
            }
        }
    }


}
