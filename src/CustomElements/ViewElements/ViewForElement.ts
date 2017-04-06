import {AbstractListeningElement} from './AbstractListeningElement';
import {SimpleVirtualDOMElement} from '../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElement';
import {SimpleVirtualDOM} from '../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOM';
import {View} from '../../View/View';
import {CollectionProperty} from '../../Component/CollectionProperty';
import {CannotIterateOverNonCollectionError} from '../../Error/CannotIterateOverNonCollectionError';
import {JSWorksInternal} from '../../Common/InternalDecorator';
import {JSWorksCustomElement} from '../CustomElementDecorator';
import {ViewConfig} from '../../View/ViewConfig';


declare const JSWorks: any;


@JSWorksInternal
@JSWorksCustomElement(ViewConfig.VIEW_FOR_TAG)
export class ViewForElement extends AbstractListeningElement {

    private template: SimpleVirtualDOMElement;
    private virtualDOM: SimpleVirtualDOM;


    /**
     * Фабрика ViewForElement
     * @returns {undefined}
     */
    public createElement(): ViewForElement {
        super.createElement();
        return new ViewForElement(SimpleVirtualDOM.NextHash());
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

        const appContext = JSWorks.applicationContext;
        this.virtualDOM = appContext.serviceHolder.getServiceByName('SimpleVirtualDOM');

        if (!this.template) {
            this.template = <SimpleVirtualDOMElement> this.virtualDOM.createElement(ViewConfig.VIEW_ITEM);

            this._children.forEach((child) => {
                this.template.appendChild(child.cloneNode());
            });

            this.removeChildren();
            return;
        }

        // this.template.propagateView(view);
    }


    /**
     * <view-for variable="person" in="$.persons">
     *     <div class="name">
     *         <view-eval value="person.name"></view-eval>
     *         <view-eval value="person.age"></view-eval>
     *     </div>
     * </view-for>
     */
    public propertyChange(): void {
        const collection: CollectionProperty = this.execStatement(this.getAttribute('in'));

        if (!(collection instanceof CollectionProperty)) {
            throw new CannotIterateOverNonCollectionError(this.getAttribute('in'));
        }

        if (!collection.dirty) {
            return;
        }

        collection.dirty = false;

        collection.getValues().forEach((value, index) => {
            if (!this._children[index]) {
                this.appendChild(this.renderTemplate(value));
                return;
            }

            if (this._children[index]['__for_value__'] === undefined ||
                    this._children[index]['__for_value__'] !== value) {
                this.replaceChild(this.renderTemplate(value), this._children[index]);
                return;
            }

            const varName = this.getAttribute('variable');

            this.view.component.variables[varName] = value;

            this._children[index].propagateView(undefined);
            this._children[index].propagateView(this.view);

            this.view.component.variables[varName] = undefined;
        });

        if (collection.length < this._children.length) {
            while (collection.length !== this._children.length) {
                this.removeChild(this._children[this._children.length - 1]);
            }
        }
    }


    protected renderTemplate(value: any): SimpleVirtualDOMElement {
        const varName = this.getAttribute('variable');

        this.view.component.variables[varName] = value;

        const node = this.template.cloneNode();
        node.propagateView(undefined);
        node.propagateView(this.view);
        node['__for_value__'] = value;

        this.view.component.variables[varName] = undefined;

        return node;
    }

}
