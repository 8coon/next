import { SimpleVirtualDOMElementExt } from '../../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElementExt';
import { IInterceptor } from '../../../Interceptor/IInterceptor';
import { SimpleVirtualDOMElement } from '../../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElement';
import { View } from '../../../View/View';
import { MessageListElement } from './MessageListElement';
import { FormForElement } from './FormForElement';
export declare class FormFieldElement extends MessageListElement {
    /**
     * Цепочка валидаторов
     */
    validators: IInterceptor[];
    /**
     * Форма
     */
    form: FormForElement;
    /**
     * Получить значение поля
     * @returns {any}
     */
    /**
     * Задать значение поля
     * @param value
     */
    value: any;
    private input;
    private listening;
    private _value;
    private customValue;
    private clearing;
    /**
     * Фабрика FormFieldElement
     * @returns {FormFieldElement}
     */
    createElement(): SimpleVirtualDOMElementExt;
    /**
     * Возвращает первый элемент с атрибутом form-bind-attribute
     */
    getBoundElement(): SimpleVirtualDOMElement;
    /**
     * См. View.propagateView
     * @param view
     */
    propagateView(view: View): void;
    /**
     * Сбросить значение
     */
    clear(): void;
    protected updateMessagesCollection(): void;
    protected changeEvent(): void;
    private installListener();
}
