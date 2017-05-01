import { SimpleVirtualDOMElementExt } from '../../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElementExt';
import { IValidationResult } from './IValidationResult';
import { SimpleVirtualDOMElement } from '../../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElement';
import { View } from '../../../View/View';
export declare abstract class MessageListElement extends SimpleVirtualDOMElementExt {
    /**
     * Форматировать результат обработки данных с сервера
     * @param result
     * @param status
     * @param array
     * @returns {any}
     */
    static formatPromiseResult(result: any, status: any, array?: boolean): any;
    /**
     * Результат последней валидации
     */
    lastValidationResult: IValidationResult;
    protected messageTemplate: SimpleVirtualDOMElement;
    protected messagesRoot: SimpleVirtualDOMElement;
    /**
     * См. View.propagateView
     * @param view
     */
    propagateView(view: View): void;
    protected updateMessagesCollection(): void;
}
