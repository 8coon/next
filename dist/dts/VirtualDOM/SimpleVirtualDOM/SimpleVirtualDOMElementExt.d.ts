import { SimpleVirtualDOMElement } from './SimpleVirtualDOMElement';
export declare abstract class SimpleVirtualDOMElementExt extends SimpleVirtualDOMElement {
    /**
     * Выполняет выражение в области видимости View
     * @param statement
     * @param scope
     */
    execStatement(statement: string, scope?: any): any;
    /**
     * Метод, возвращающий новый экземпляр данного элемента
     */
    abstract createElement(): SimpleVirtualDOMElementExt;
}
