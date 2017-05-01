import { SimpleVirtualDOMElementExt } from '../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElementExt';
import { ViewHolder } from '../../View/ViewHolder';
import { View } from '../../View/View';
import { SimpleVirtualDOMElement } from '../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElement';
export declare class AppViewElement extends SimpleVirtualDOMElementExt {
    /**
     * Отрисовать наследование
     * @param viewHolder
     */
    static renderViewInheritance(viewHolder: ViewHolder): void;
    /**
     * Отрисовать включения
     * @param viewHolder
     */
    static renderViewIncludes(viewHolder: ViewHolder): void;
    /**
     * Унаследовать текущую View от переданной
     * @param source
     * @param extending
     */
    static extend(source: SimpleVirtualDOMElement, extending: View): void;
    private static resolveCircular(viewHolder, callback, success, error);
    /**
     * Фабрика AppViewElement
     * @returns {AppViewElement}
     */
    createElement(): AppViewElement;
    /**
     * См. SimpleVirtualDOMElement.render
     */
    render(): void;
}
