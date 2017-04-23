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
        const element: ViewForElement = new ViewForElement(SimpleVirtualDOM.NextHash());
        element.superCreateElement();

        return element;
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
            this.template.ready = false;

            this._children.forEach((child) => {
                this.template.appendChild(child.cloneNode());
            });

            this.removeChildren();
        }
    }


    /**
     * Сбросить шаблон
     */
    public customClear(): void {
        super.customClear();

        if (this.template) {
            this.removeChildren();
            this.appendChild((<any> this.template)._children);
        }

        this.template = undefined;
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
        // if (!this.template) {
        //     const view: View = this.view;
        //     this.view = undefined;
        //
        //     this.propagateView(view);
        // }

        const collection: CollectionProperty = this.execStatement(this.getAttribute('in'));

        if (!(collection instanceof CollectionProperty)) {
            throw new CannotIterateOverNonCollectionError(this.getAttribute('in'));
        }

        if (collection.cleanForTag[this.hash]) {
            return;
        }

        collection.cleanForTag[this.hash] = true;
        this['__view__'] = this.view;
        // this.view = undefined;

        collection.getValues().forEach((value, index) => {
            if (!this._children[index]) {
                this.appendChild(this.template.cloneNode());

            } else if (this._children[index]['__for_value__'] === undefined ||
                this._children[index]['__for_value__'] !== value) {
                this.replaceChild(this.template.cloneNode(), this._children[index]);

            } else {
                return;
            }

            const varName = this.getAttribute('variable');
            this.propagateValue(this._children[index], varName, value);
        });

        if (collection.length < this._children.length) {
            while (collection.length !== this._children.length) {
                this.removeChild(this._children[this._children.length - 1]);
            }
        }

        // this.view = this['__view__'];
    }


    protected propagateValue(node: SimpleVirtualDOMElement, varName: string, value: any): void {
        node['__for_value__'] = value;
        this['__view__'].component.variables[varName] = value;

        node.ready = true;
        // node.propagateView(this['__view__']);
        node.customUpdate();
        node.ready = false;

        this['__view__'].component.variables[varName] = undefined;
    }


    protected customCloneNode(node: ViewForElement): void {
        super.customCloneNode(node);

        if (this.template) {
            node.template = this.template.cloneNode();
        }
    }


    protected superCreateElement(): void {
        super.createElement();
    }

}
