import {JSWorksInternal} from '../../../Common/InternalDecorator';
import {JSWorksCustomElement} from '../../CustomElementDecorator';
import {ViewConfig} from '../../../View/ViewConfig';
import {SimpleVirtualDOMElementExt} from '../../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElementExt';
import {SimpleVirtualDOM} from '../../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOM';
import {IInterceptor} from '../../../Interceptor/IInterceptor';
import {InterceptorHolder} from '../../../Interceptor/InterceptorHolder';
import {IValidationResult} from './IValidationResult';
import {SimpleVirtualDOMElement} from '../../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElement';
import {ElementNotFoundError} from '../../../Error/ElementNotFoundError';
import {View} from '../../../View/View';
import {ViewForElement} from '../ViewForElement';


declare const JSWorks: any;


@JSWorksInternal
export abstract class MessageListElement extends SimpleVirtualDOMElementExt {


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
