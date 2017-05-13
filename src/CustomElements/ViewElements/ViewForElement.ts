import {AbstractListeningElement} from './AbstractListeningElement';
import {SimpleVirtualDOMElement} from '../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElement';
import {SimpleVirtualDOM} from '../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOM';
import {View} from '../../View/View';
import {CollectionProperty} from '../../Component/CollectionProperty';
import {CannotIterateOverNonCollectionError} from '../../Error/CannotIterateOverNonCollectionError';
import {JSWorksInternal} from '../../Common/InternalDecorator';
import {JSWorksCustomElement} from '../CustomElementDecorator';
import {ViewConfig} from '../../View/ViewConfig';
import {JSWorksLib} from '../../jsworks';


declare const JSWorks: JSWorksLib;


@JSWorksInternal
@JSWorksCustomElement(ViewConfig.VIEW_FOR_TAG)
export class ViewForElement extends AbstractListeningElement {


    /**
     * Проинициализировать шаблон итератора
     * @param root
     * @param template
     * @returns {SimpleVirtualDOMElement}
     */
    public static init(root: SimpleVirtualDOMElement, template: SimpleVirtualDOMElement): SimpleVirtualDOMElement {
        const appContext = JSWorks.applicationContext;
        const virtualDOM: SimpleVirtualDOM = appContext.serviceHolder.getServiceByName('SimpleVirtualDOM');

        if (!template) {
            if (root.hasAttribute('no-wrap')) {
                template = <SimpleVirtualDOMElement> virtualDOM.createTextElement('');
            } else {
                template = <SimpleVirtualDOMElement> virtualDOM.createElement(ViewConfig.VIEW_ITEM);
            }
            template.ready = false;

            (<any> root)._children.forEach((child) => {
                template.appendChild(child.cloneNode());
            });

            root.removeChildren();
        }

        return template;
    }


    /**
     * Проитерироваться по коллекции, изменяя содержимое root
     * @param root
     * @param template
     * @param collection
     * @param hash
     * @param view
     * @param varName
     */
    public static iterateCollection(root: SimpleVirtualDOMElement, template: SimpleVirtualDOMElement,
            collection: any[] | CollectionProperty, hash: number = -1, view?: View, varName?: string): void {
        let values = collection;

        if (collection instanceof CollectionProperty) {
            if (collection.cleanForTag[hash]) {
                return;
            }

            collection.cleanForTag[hash] = true;
            values = collection.getValues();
        }

        root['__view__'] = view;

        (<any[]> values).forEach((value, index) => {
            if (!(<any> root)._children[index]) {
                root.appendChild(template.cloneNode());

            } else if (
                ((<any> root)._children[index]['__for_value__'] !== undefined) &&
                ((<any> root)._children[index]['__for_value__'] === value)
            ) {
                return;
            }

            varName = varName || root.getAttribute('variable');
            ViewForElement.propagateValue(root, (<any> root)._children[index], varName, value);
        });

        if (collection.length < (<any> root)._children.length) {
            while (collection.length !== (<any> root)._children.length) {
                root.removeChild((<any> root)._children[(<any> root)._children.length - 1]);
            }
        }
    }


    /**
     * Задать значение элементу перечисления
     * @param root
     * @param node
     * @param varName
     * @param value
     */
    public static propagateValue(root: SimpleVirtualDOMElement, node: SimpleVirtualDOMElement,
            varName: string, value: any): void {
        node['__for_value__'] = value;
        root['__view__'].component.variables[varName] = value;

        node.execAttributeStatements();

        node.ready = true;
        node.customUpdate();
        node.ready = false;

        root['__view__'].component.variables[varName] = undefined;
    }


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
        this.template = ViewForElement.init(this, this.template);
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
        const collection: CollectionProperty | any[] = this.execStatement(this.getAttribute('in'));

        if (!(collection instanceof CollectionProperty || collection instanceof Array)) {
            console.error(new CannotIterateOverNonCollectionError(this.getAttribute('in')));

            return;
            // throw new CannotIterateOverNonCollectionError(this.getAttribute('in'));
        }

        ViewForElement.iterateCollection(this, this.template, collection, this.hash, this.view);
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
