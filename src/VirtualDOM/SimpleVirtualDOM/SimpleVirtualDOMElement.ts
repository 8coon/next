import {IAbstractVirtualDOMElement} from '../IAbstractVirtualDOMElement';
import {VirtualDOMElementArray} from '../VirtualDOMElementArray';
import {IEvent} from '../../EventManager/IEvent';
import {IEventEmitter} from '../../EventManager/IEventEmitter';
import {EventType} from '../../EventManager/EventType';
import {EventManager} from '../../EventManager/EventManager';


export class SimpleVirtualDOMElement implements IAbstractVirtualDOMElement {

    private _tagName: string;
    private _id: string;
    private _parentNode: SimpleVirtualDOMElement;
    private _children: SimpleVirtualDOMElement[];
    private _text: string;
    private classes: Object = {};
    private attributes: Object = { style: {} };


    /**
     *
     * @returns {string}
     */
    public get tagName(): string {
        return this._tagName;
    }


    /**
     *
     * @returns {string}
     */
    public get innerHTML(): string {
        return '';
    }


    /**
     *
     * @returns {string}
     */
    public get id(): string {
        return this._id;
    }


    /**
     *
     * @returns {string}
     */
    public get className(): string {
        return Object.keys(this.classes).join(' ');
    }


    /**
     *
     * @returns {SimpleVirtualDOMElement}
     */
    public get parentNode(): IAbstractVirtualDOMElement {
        return this._parentNode;
    }


    /**
     *
     * @returns {VirtualDOMElementArray}
     */
    public get children(): VirtualDOMElementArray {
        return new VirtualDOMElementArray(this._children);
    }


    /**
     *
     * @returns {string}
     */
    public get text(): string {
        return this._text;
    }


    /**
     * Получить атрибут виртуального элемента
     * @param name
     * @returns {any}
     */
    public getAttribute(name: string): any {
        return this.attributes[name];
    }


    /**
     * Задать атрибут виртуального элемента
     * @param name
     * @param value
     */
    public setAttribute(name: string, value?: any): void {
        if (name.toLowerCase() === 'style') {
            const expressions: string[] = (<string> value).split(';');

            expressions.forEach((expression: string) => {
                const css: string[] = expression.split(':');

                css[0] = css[0].trim();
                css[1] = (css[1] || 'inherit').trim();

                this.attributes['style'][css[0]] = css[1];
                this.emitEvent({ type: EventType.DOMPropertyChange, data: this });
                return;
            });
        }

        this.attributes[name] = value;
        this.emitEvent({ type: EventType.DOMPropertyChange, data: this });
    }


    /**
     * Проверить существование атрибута
     * @param name
     * @returns {boolean}
     */
    public hasAttribute(name: string): boolean {
        return this.attributes[name] !== undefined;
    }


    /**
     * Запустить событие
     * @param event
     */
    public emitEvent(event: IEvent): void {} // tslint:disable-line


    /**
     * Обработать событие
     * @param event
     * @param emitter
     */
    public receiveEvent(event: IEvent, emitter: IEventEmitter): void {}  // tslint:disable-line


    /**
     * Применить/отменить класс к элементу
     * @param name
     * @param on
     */
    public toggleClass(name: string, on: boolean): void {
        if (on) {
            if (!this.classes[name]) {
                this.classes[name] = true;
                this.emitEvent({ type: EventType.DOMPropertyChange, data: this });
                return;
            }

            return;
        }

        if (this.classes[name]) {
            this.classes[name] = undefined;
            this.emitEvent({ type: EventType.DOMPropertyChange, data: this });
        }
    }


    /**
     * Добавить потомка к узлу
     * @param child
     */
    public appendChild(child: SimpleVirtualDOMElement): void {
        this._children.push(child);
        this.emitEvent({ type: EventType.DOMChildAppend, data: { parent: this, child: child } });
        EventManager.subscribe(this, child);
    }


    /**
     * Удалить потомка
     * @param child
     */
    public removeChild(child: SimpleVirtualDOMElement): void {
        this._children.splice(this._children.lastIndexOf(child, 0), 1);
        this.emitEvent({ type: EventType.DOMChildRemove, data: { parent: this, child: child } });
    }


    /**
     * Удалить узел
     */
    public remove(): void {
        this.emitEvent({ type: EventType.DOMRemove, data: this });
    }

}
