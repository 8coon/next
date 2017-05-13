import { VirtualDOMElementArray } from '../VirtualDOMElementArray';
import { IEvent } from '../../EventManager/IEvent';
import { IEventEmitter } from '../../EventManager/IEventEmitter';
import { View } from '../../View/View';
export declare class SimpleVirtualDOMElement {
    /**
     * Переводит имена тэгов в нижний регистр в свойстве innerHTML и методе getOuterHTML
     * @type {boolean}
     */
    lowerTagNames: boolean;
    /**
     * Флаг, указывающий на то, что данную ноду надо переписовать при рендеринге
     * @type {boolean}
     */
    dirty: boolean;
    /**
     * Ссылка на отрисованный узел DOM, соответствующий данному узлу виртуального DOM
     */
    rendered: Node;
    /**
     * View, которой принаджедит данный элемент
     */
    view: View;
    /**
     * Флаг, указывающий на то, что окружение данного элемента готово
     * @returns {boolean}
     */
    /**
     * Флаг, указывающий на то, что окружение данного элемента готово
     * @param value
     */
    ready: boolean;
    protected _tagName: string;
    protected _parentNode: SimpleVirtualDOMElement;
    protected _children: SimpleVirtualDOMElement[];
    protected _text: string;
    protected classes: object;
    protected attributes: object;
    protected handlers: object;
    protected selectorCache: object;
    protected _hash: any;
    protected _ready: boolean;
    protected realAttributes: object;
    protected readonly HASH_KEY: string;
    protected readonly HANDLERS_KEY: string;
    constructor(hash: any);
    /**
     * Отрисовка изменений текущей ноды в поле rendered
     * Если rendered не было ранее присвоено или не совпадает с текущей нодой
     * по типу (например, там текст, а мы рендерим DIV), то rendered будет заменена,
     * в противном случае она будет должным образом модифицирована.
     */
    render(): void;
    /**
     * Обновить пользовательские данные
     */
    customUpdate(): void;
    /**
     * Получить список классов
     * @returns {string[]}
     */
    readonly classList: string[];
    /**
     * Узнать, есть ли у этого элемента данный класс
     * @param name
     * @returns {any}
     */
    hasClass(name: string): boolean;
    /**
     * Удаляет всех слушателей
     * @param type
     */
    removeEventListeners(type?: string): void;
    /**
     * Создаёт полную копию этого узла со всеми вложенными узлами.
     * @returns {SimpleVirtualDOMElement}
     */
    cloneNode(): SimpleVirtualDOMElement;
    /**
     * Сбросить параметры всех пользовательских узлов
     */
    customClear(): void;
    readonly style: object;
    tagName: string;
    innerHTML: string;
    id: string;
    readonly hash: any;
    className: string;
    parentNode: SimpleVirtualDOMElement;
    readonly children: VirtualDOMElementArray;
    text: string;
    /**
     * Получить атрибут виртуального элемента
     * @param name
     * @returns {any}
     */
    getAttribute(name: string): any;
    /**
     * Задать атрибут CSS стиля
     * @param name
     * @param value
     */
    setStyleAttribute(name: string, value: any): void;
    /**
     * Задать атрибут виртуального элемента
     * @param name
     * @param value
     */
    setAttribute(name: string, value?: any): void;
    /**
     * Проверить существование атрибута
     * @param name
     * @returns {boolean}
     */
    hasAttribute(name: string): boolean;
    /**
     * Удалить данный атрибут. Если такого не существует, то не произойдёт ничего.
     * @param name
     */
    removeAttribute(name: string): void;
    /**
     * Запустить событие
     * @param event
     */
    emitEvent(event: IEvent): void;
    /**
     * Обработать событие
     * @param event
     * @param emitter
     */
    receiveEvent(event: IEvent, emitter: IEventEmitter): void;
    /**
     * Применить/отменить класс к элементу
     * @param name
     * @param on
     */
    toggleClass(name: string, on: boolean): void;
    /**
     * Добавить потомка к узлу
     * @param child
     */
    appendChild(child: SimpleVirtualDOMElement | SimpleVirtualDOMElement[]): void;
    /**
     * Вставить потомка перед указанным. Если указанный потомок не будет найден, child вставится последним.
     * @param child
     * @param reference
     */
    insertBefore(child: SimpleVirtualDOMElement, reference: SimpleVirtualDOMElement): void;
    /**
     * Удалить потомка
     * @param child
     */
    removeChild(child: SimpleVirtualDOMElement): void;
    /**
     * Удалить всех потомков
     */
    removeChildren(): void;
    /**
     * Заменяет одного потомка другим (или несколькими)
     * @param newChild
     * @param oldChild
     */
    replaceChild(newChild: SimpleVirtualDOMElement | SimpleVirtualDOMElement[], oldChild: SimpleVirtualDOMElement): void;
    /**
     * Удалить узел
     */
    remove(): void;
    /**
     * Возвращает полный HTML-текст данного элемента
     * @returns {string}
     */
    getOuterHTML(): string;
    /**
     * Возвращает true, если данный узел виртуального DOM является простым текстом.
     * @returns {boolean}
     */
    isText(): boolean;
    /**
     * Повесить слушатель определённого события на данный элемент
     * @param type
     * @param callback
     * @param useCapture
     */
    addEventListener(type: string, callback: (event: Event) => void, useCapture?: boolean): void;
    /**
     * Снять слушателя определённого события с данного элемента
     * @param type
     * @param callback
     */
    removeEventListener(type: string, callback: (event: Event) => void): void;
    /**
     * Выбрать все элементы по селектору
     * @param query
     * @param one
     * @returns {SimpleVirtualDOMElement[]}
     */
    querySelectorAll(query: string, one?: boolean): SimpleVirtualDOMElement[];
    /**
     * Выбрать первый элемент по селектору
     * @param query
     * @returns {SimpleVirtualDOMElement}
     */
    querySelector(query: string): SimpleVirtualDOMElement;
    /**
     * Распространить View по дереву виртуального DOM
     * @param view
     */
    propagateView(view: View): void;
    /**
     * Выполняет выражение в области видимости View
     * @param statement
     * @param scope
     */
    execStatement(statement: string, scope?: any): any;
    /**
     * Выполнить выражения, находящиеся в значениях атрибутов в ${}
     */
    execAttributeStatements(): void;
    protected emitMutilationEvent(data: IEvent): void;
    protected customCloneNode(node: SimpleVirtualDOMElement): void;
    protected renderHandlers(): void;
    protected mergeAttributes(): void;
    protected appendChildren(): void;
    protected mergeChildren(): void;
}
