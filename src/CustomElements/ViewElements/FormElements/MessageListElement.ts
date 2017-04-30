import {JSWorksInternal} from '../../../Common/InternalDecorator';
import {SimpleVirtualDOMElementExt} from '../../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElementExt';
import {IValidationResult} from './IValidationResult';
import {SimpleVirtualDOMElement} from '../../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElement';
import {View} from '../../../View/View';
import {ViewForElement} from '../ViewForElement';


declare const JSWorks: any;


@JSWorksInternal
export abstract class MessageListElement extends SimpleVirtualDOMElementExt {


    /**
     * Форматировать результат обработки данных с сервера
     * @param result
     * @param status
     * @param array
     * @returns {any}
     */
    public static formatPromiseResult(result, status, array = true) {
        if (result instanceof Array) {
            return result.map((message) => {
                return MessageListElement.formatPromiseResult(message, status, false);
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


    /**
     * Результат последней валидации
     */
    public lastValidationResult: IValidationResult;


    protected messageTemplate: SimpleVirtualDOMElement;
    protected messagesRoot: SimpleVirtualDOMElement;


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

        this.messagesRoot = this.querySelector('form-messages');

        if (!this.messagesRoot) {
            return;
        }

        this.messageTemplate = ViewForElement.init(this.messagesRoot, this.messageTemplate);
    }


    protected updateMessagesCollection(): void {
        ViewForElement.iterateCollection(this.messagesRoot, this.messageTemplate,
            this.lastValidationResult.messages, this.hash, this.view, 'error');
    }

}
