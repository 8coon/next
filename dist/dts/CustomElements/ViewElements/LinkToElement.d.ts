import { SimpleVirtualDOMElementExt } from '../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElementExt';
export declare class LinkToElement extends SimpleVirtualDOMElementExt {
    /**
     * Фабрика LinkToElement
     * @returns {undefined}
     */
    createElement(): LinkToElement;
    /**
     * Рендер ноды
     */
    render(): void;
    /**
     * См. SimpleVirtualDOMElement.customUpdate()
     */
    customUpdate(): void;
}
