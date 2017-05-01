import { AbstractListeningElement } from './AbstractListeningElement';
import { SimpleVirtualDOMElement } from '../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElement';
import { View } from '../../View/View';
import { CollectionProperty } from '../../Component/CollectionProperty';
export declare class ViewForElement extends AbstractListeningElement {
    /**
     * Проинициализировать шаблон итератора
     * @param root
     * @param template
     * @returns {SimpleVirtualDOMElement}
     */
    static init(root: SimpleVirtualDOMElement, template: SimpleVirtualDOMElement): SimpleVirtualDOMElement;
    /**
     * Проитерироваться по коллекции, изменяя содержимое root
     * @param root
     * @param template
     * @param collection
     * @param hash
     * @param view
     * @param varName
     */
    static iterateCollection(root: SimpleVirtualDOMElement, template: SimpleVirtualDOMElement, collection: any[] | CollectionProperty, hash?: number, view?: View, varName?: string): void;
    /**
     * Задать значение элементу перечисления
     * @param root
     * @param node
     * @param varName
     * @param value
     */
    static propagateValue(root: SimpleVirtualDOMElement, node: SimpleVirtualDOMElement, varName: string, value: any): void;
    private template;
    private virtualDOM;
    /**
     * Фабрика ViewForElement
     * @returns {undefined}
     */
    createElement(): ViewForElement;
    /**
     * См. View.propagateView
     * @param view
     */
    propagateView(view: View): void;
    /**
     * Сбросить шаблон
     */
    customClear(): void;
    /**
     * <view-for variable="person" in="$.persons">
     *     <div class="name">
     *         <view-eval value="person.name"></view-eval>
     *         <view-eval value="person.age"></view-eval>
     *     </div>
     * </view-for>
     */
    propertyChange(): void;
    protected customCloneNode(node: ViewForElement): void;
    protected superCreateElement(): void;
}
