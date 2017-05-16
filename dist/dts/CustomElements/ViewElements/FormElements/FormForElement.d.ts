import { MessageListElement } from './MessageListElement';
import { FormFieldElement } from './FormFieldElement';
import { IModel } from '../../../Model/IModel';
import { IInterceptor } from '../../../Interceptor/IInterceptor';
import { SimpleVirtualDOMElement } from '../../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElement';
import { View } from '../../../View/View';
export declare type SubmitCallback = (form?: FormForElement) => Promise<any>;
export declare type ModelSaveCallback = (form?: FormForElement, model?: IModel) => Promise<any>;
export declare type UserSubmitCallback = (form?: FormForElement) => boolean;
export declare type UserSubmittedCallback = (form?: FormForElement, response?: object) => boolean;
export declare class FormForElement extends MessageListElement {
    /**
     * Список полей формы
     * @type {Array}
     */
    fields: FormFieldElement[];
    /**
     * Экземпляр соответствующей модели
     */
    model: IModel;
    /**
     * Перехватчики отправки формы
     */
    submitInterceptors: IInterceptor[];
    /**
     * Имя метода сохранения у модели
     * @type {string}
     */
    modelSaveMethod: string;
    /**
     * Callback отправки формы
     */
    onSubmit: UserSubmitCallback;
    /**
     * Callback получения результата от сервера
     */
    onSuccess: UserSubmittedCallback;
    /**
     * Callback получения ошибки от сервера
     */
    onError: UserSubmittedCallback;
    /**
     * Может ли форма быть отправлена
     * @returns {boolean}
     */
    /**
     * Может ли форма быть отправлена
     * @param value
     */
    enabled: boolean;
    private validated;
    private _enabled;
    /**
     * Обработчик отправки формы
     */
    submitCallback: SubmitCallback;
    /**
     * Обработчик сохранения модели
     * @param form
     * @param model
     */
    modelSaveCallback: ModelSaveCallback;
    /**
     * Фабрика ViewEvalElement
     * @returns {ViewEvalElement}
     */
    createElement(): FormForElement;
    /**
     * Кнопка отправки формы, если такая есть
     * @returns {SimpleVirtualDOMElement}
     */
    getSubmitButton(): SimpleVirtualDOMElement;
    /**
     * См. SimpleVirtualDOMElement.PropagateView
     * @param view
     */
    propagateView(view: View): void;
    /**
     * Обновляет значение
     */
    customUpdate(): void;
    /**
     * Проверяет, возможна ли отправка формы
     * @returns {boolean}
     */
    canSubmit(): boolean;
    /**
     * Отправить форму
     * @returns {Promise<any>}
     */
    submit(force?: boolean): Promise<any>;
    /**
     * Отметить результат валидации поля
     */
    validateField(): void;
}
