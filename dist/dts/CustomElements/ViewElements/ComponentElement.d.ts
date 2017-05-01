import { SimpleVirtualDOMElementExt } from '../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElementExt';
export declare class ComponentElement extends SimpleVirtualDOMElementExt {
    protected static isComponentAttribute(name: string): boolean;
    /**
     * Компонент
     */
    component: any;
    /**
     * Проинициализировать этот элемент компонентом
     */
    init(): void;
    /**
     * Фабрика componentElement
     * @returns {ComponentElement}
     */
    createElement(): ComponentElement;
    /**
     * Отрисовка ComponentElement в DOM браузера
     */
    render(): void;
    /**
     * Задание атрибута
     * @param name
     * @param value
     */
    setAttribute(name: string, value?: any): void;
    /**
     * Чтение атрибута
     * @param name
     */
    getAttribute(name: string): any;
    /**
     * Проверка атрибута на существование
     * @param name
     */
    hasAttribute(name: string): boolean;
    protected syncAttributes(): void;
}
