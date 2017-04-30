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


declare const JSWorks: any;


type SubmitCallback = (form?: FormForElement) => Promise<any>;
type ModelSaveCallback = (form?: FormForElement, model?: IModel) => Promise<any>;
type UserSubmitCallback = (form?: FormForElement) => boolean;
type UserSubmittedCallback = (response: object, form?: FormForElement) => boolean;


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
    public modelSaveMethod: string = 'save';


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


    private validated: number = 0;


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

        this.model =  JSWorks.applicationContext.modelHolder.getModel(this.getAttribute('model')).from();
        this.customUpdate();
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
                this.submit();
            });
        }
    }


    /**
     * Проверяет, возможна ли отправка формы
     * @returns {boolean}
     */
    public canSubmit(): boolean {
        this.fields.forEach((field) => {
            if (!field.lastValidationResult || !field.lastValidationResult.success) {
                return false;
            }
        });

        return true;
    }


    /**
     * Отправить форму
     * @returns {Promise<any>}
     */
    public submit(): void {
        if (this.onSubmit && !this.onSubmit(this)) {
            return;
        }

        if (this.submitInterceptors.length > 0) {
            return JSWorks.applicationContext.interceptorHolder.trigger(this.submitInterceptors, { form: this });
        }

        this.submitCallback(this)
            .then((result) => {
                if (this.onSuccess && !this.onSuccess(this, result)) {
                    return;
                }

                this.lastValidationResult = {
                    success: true,
                    messages: MessageListElement.formatPromiseResult(result, 'OK'),
                };
            })
            .catch((err) => {
                if (this.onError && !this.onError(this, err)) {
                    return;
                }

                this.lastValidationResult = {
                    success: false,
                    messages: MessageListElement.formatPromiseResult(err, 'ERROR'),
                };
            });
    }


    /**
     * Отметить результат валидации поля
     */
    public validateField(): void {
        this.validated++;

        if (this.validated === this.fields.length) {
            this.validated = this.fields.length - 1;
            const button: SimpleVirtualDOMElement = this.querySelector('[form-submit]');

            if (!button) {
                return;
            }

            if (this.canSubmit()) {
                button.removeAttribute('disabled');
            } else {
                button.setAttribute('disabled', '');
            }
        }
    }


}
