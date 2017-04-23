import {IVirtualDOMElement} from '../IVirtualDOMElement';
import {VirtualDOMElementArray} from '../VirtualDOMElementArray';
import {IEvent} from '../../EventManager/IEvent';
import {IEventEmitter} from '../../EventManager/IEventEmitter';
import {EventType} from '../../EventManager/EventType';
import {EventManager} from '../../EventManager/EventManager';
import {JSWorksInternal} from '../../Common/InternalDecorator';
import {SimpleVirtualDOM} from './SimpleVirtualDOM';
import {IDOMParsed} from '../../Parser/HTML/IDOMParsed';
import {HTMLParserService} from '../../Parser/HTML/HTMLParserService';
import {ApplicationContext} from '../../ApplicationContext/ApplicationContext';
import {View} from '../../View/View';


declare const JSWorks: any;


@JSWorksInternal
export class SimpleVirtualDOMElement implements IVirtualDOMElement {

    /**
     * Переводит имена тэгов в нижний регистр в свойстве innerHTML и методе getOuterHTML
     * @type {boolean}
     */
    public lowerTagNames: boolean = true;


    /**
     * Флаг, указывающий на то, что данную ноду надо переписовать при рендеринге
     * @type {boolean}
     */
    public dirty: boolean = true;


    /**
     * Ссылка на отрисованный узел DOM, соответствующий данному узлу виртуального DOM
     */
    public rendered: Node;


    /**
     * View, которой принаджедит данный элемент
     */
    public view: View;


    /**
     * Флаг, указывающий на то, что окружение данного элемента готово
     * @returns {boolean}
     */
    public get ready(): boolean {
        return this._ready;
    }


    /**
     * Флаг, указывающий на то, что окружение данного элемента готово
     * @param value
     */
    public set ready(value: boolean) {
        this._ready = value;

        this._children.forEach((child: SimpleVirtualDOMElement) => {
            child.ready = value;
        });
    }


    protected _tagName: string;
    protected _parentNode: SimpleVirtualDOMElement;
    protected _children: SimpleVirtualDOMElement[] = [];
    protected _text: string;
    protected classes: object = {};
    protected attributes: object = { style: {} };
    protected handlers: object = {};
    protected selectorCache: object = {};
    protected _hash: any;
    protected _ready: boolean = true;

    protected readonly HASH_KEY: string = '__jsworks_hash__';
    protected readonly HANDLERS_KEY: string = '__jsworks_handlers__';


    constructor(hash) {
        this._hash = hash;
    }


    /**
     * Отрисовка изменений текущей ноды в поле rendered
     * Если rendered не было ранее присвоено или не совпадает с текущей нодой
     * по типу (например, там текст, а мы рендерим DIV), то rendered будет заменена,
     * в противном случае она будет должным образом модифицирована.
     */
    public render(): void {
        this._children.forEach((child) => {
            child.render();
        });

        if (!this.rendered) {
            this.dirty = false;

            if (!this.tagName) {
                this.rendered = document.createTextNode(this.text);
                this.rendered[this.HASH_KEY] = SimpleVirtualDOM.NextHash();
                this.renderHandlers();

                return;
            }

            this.rendered = document.createElement(this.tagName);
            this.rendered[this.HASH_KEY] = SimpleVirtualDOM.NextHash();

            this.mergeAttributes();
            this.mergeChildren();
            this.renderHandlers();

            return;
        }

        if (this.dirty) {
            this.dirty = false;

            if (this.tagName !== (<HTMLElement> this.rendered).tagName) {
                this.rendered = this.rendered = document.createTextNode(this.text);
                this.rendered[this.HASH_KEY] = SimpleVirtualDOM.NextHash();
                this.renderHandlers();

                return;
            }

            if (!this.tagName) {
                if (this.text !== this.rendered.textContent) {
                    this.rendered.textContent = this.text;
                }

                this.renderHandlers();
                return;
            }

            this.mergeAttributes();
            this.mergeChildren();
        }
    }


    /**
     * Обновить пользовательские данные
     */
    public customUpdate(): void {
        this._children.forEach((child) => {
            child.customUpdate();
        });
    }


    /**
     * Создаёт полную копию этого узла со всеми вложенными узлами.
     * @returns {SimpleVirtualDOMElement}
     */
    public cloneNode(): SimpleVirtualDOMElement {
        const appContext = JSWorks.applicationContext;
        const virtualDOM = appContext.serviceHolder.getServiceByName('SimpleVirtualDOM');
        let element;

        if (this.tagName) {
            element = virtualDOM.createElement(this.tagName);
        } else {
            element = virtualDOM.createTextElement(this.text);
        }

        // element.view = this.view;
        // element.propagateView(this.view);
        element.ready = this.ready;

        Object.keys(this.attributes).forEach((attr) => {
            element.setAttribute(attr, this.getAttribute(attr));
        });

        Object.keys(this.handlers).forEach((handler) => {
            element.addEventListener(handler, this.handlers[handler].callback,
                this.handlers[handler].useCapture);
        });

        this._children.forEach((child) => {
            element.appendChild(child.cloneNode());
        });

        this.customCloneNode(element);
        element.propagateView(this.view);
        return element;
    }


    /**
     * Сбросить параметры всех пользовательских узлов
     */
    public customClear(): void {
        this._children.forEach((child) => {
            child.customClear();
        });
    }


    public get style(): object {
        return this.attributes['style'];
    }


    public get tagName(): string {
        return this._tagName;
    }


    public set tagName(value: string) {
        this._tagName = value;
        this.emitMutilationEvent({ type: EventType.DOMPropertyChange, data: this });
    }


    public get innerHTML(): string {
        if (this.isText()) {
            return this.text;
        }

        const html: string[] = [];

        this._children.forEach((child) => {
            html.push(child.getOuterHTML());
        });

        return html.join('');
    }


    public set innerHTML(value: string) {
        if (this.isText()) {
            this._text = value;
            return;
        }

        const appContext: ApplicationContext = JSWorks.applicationContext;
        const htmlParser: HTMLParserService = appContext.serviceHolder.getServiceByName('HTMLParser');
        const virtualDOM: SimpleVirtualDOM = appContext.serviceHolder.getServiceByName('SimpleVirtualDOM');

        const nodes: IDOMParsed[] = htmlParser.parseString(value);
        this._children = [];

        nodes.forEach((parsed) => {
            this.appendChild(<SimpleVirtualDOMElement> virtualDOM.createElement(parsed));
        });

        this.emitMutilationEvent({ type: EventType.DOMContentChange, data: value });
    }


    public get id(): string {
        return this.getAttribute('id');
    }


    public set id(value: string) {
        this.setAttribute('id', value);
    }


    public get hash() {
        return this._hash;
    }



    public get className(): string {
        return this.getAttribute('class');
    }


    public set className(value: string) {
        this.classes = {};

        value.replace('  ', ' ').split(' ').forEach((name) => {
            this.classes[name.toLowerCase()] = true;
        });

        this.setAttribute('class', value);
    }


    public get parentNode(): SimpleVirtualDOMElement {
        return this._parentNode;
    }


    public set parentNode(node: SimpleVirtualDOMElement) {
        if (this._parentNode) {
            this._parentNode.removeChild(this);
        }

        this._parentNode = node;

        if (node) {
            node.appendChild(this);
        }

        this.emitMutilationEvent({ type: EventType.DOMPropertyChange, data: this });
    }


    public get children(): VirtualDOMElementArray {
        return new VirtualDOMElementArray(this._children);
    }


    public get text(): string {
        return this._text;
    }


    public set text(value: string) {
        this._text = value;
        this.emitMutilationEvent({ type: EventType.DOMPropertyChange, data: this });
    }


    /**
     * Получить атрибут виртуального элемента
     * @param name
     * @returns {any}
     */
    public getAttribute(name: string): any {
        if (name.toLowerCase() === 'style') {
            if (Object.keys(this.attributes['style']).length === 0) {
                return;
            }

            const value = [];
            Object.keys(this.attributes['style']).forEach((cssRule) => {
                value.push(`${cssRule}: ${String(this.attributes['style'][cssRule])};`);
            });

            return value.join(' ');
        }

        return this.attributes[name];
    }


    /**
     * Задать атрибут CSS стиля
     * @param name
     * @param value
     */
    public setStyleAttribute(name: string, value: any): void {
        this.attributes['style'][name] = String(value || 'inherit');
        this.emitMutilationEvent({ type: EventType.DOMPropertyChange, data: this });
    }


    /**
     * Задать атрибут виртуального элемента
     * @param name
     * @param value
     */
    public setAttribute(name: string, value?: any): void {
        if (name.toLowerCase() === 'style') {
            const expressions: string[] = (<string> value || '').split(';');

            expressions.forEach((expression: string) => {
                const css: string[] = expression.split(':');

                css[0] = css[0].trim();
                css[1] = (css[1] || 'inherit').trim();

                if (css[0].length === 0) {
                    return;
                }

                this.attributes['style'][css[0]] = css[1];
            });

            this.emitMutilationEvent({ type: EventType.DOMPropertyChange, data: this });
            return;
        }

        this.attributes[name] = value;
        this.emitMutilationEvent({ type: EventType.DOMPropertyChange, data: this });
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
     * Удалить данный атрибут. Если такого не существует, то не произойдёт ничего.
     * @param name
     */
    public removeAttribute(name: string): void {
        delete this.attributes[name];
        this.emitMutilationEvent({ type: EventType.DOMPropertyChange, data: this });
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
    public receiveEvent(event: IEvent, emitter: IEventEmitter): void {
        this.dirty = true;
    }


    /**
     * Применить/отменить класс к элементу
     * @param name
     * @param on
     */
    public toggleClass(name: string, on: boolean): void {
        name = name.toLowerCase();

        if (on) {
            if (!this.classes[name]) {
                this.classes[name] = true;
                this.setAttribute('class', Object.keys(this.classes).join(' '));
                return;
            }

            return;
        }

        if (this.classes[name]) {
            this.classes[name] = undefined;
            this.setAttribute('class', Object.keys(this.classes).join(' '));
        }
    }


    /**
     * Добавить потомка к узлу
     * @param child
     */
    public appendChild(child: SimpleVirtualDOMElement | SimpleVirtualDOMElement[]): void {
        if (child instanceof Array) {
            child.forEach((ch) => {
                this.appendChild(ch);
            });

            return;
        }

        this._children.push(child);

        (<any> child)._parentNode = this;

        child.ready = this.ready;
        child.propagateView(this.view);

        this.emitMutilationEvent({ type: EventType.DOMChildAppend, data: { parent: this, child: child } });
        child['__descriptor__'] = EventManager.subscribe(this, child);
    }


    /**
     * Вставить потомка перед указанным. Если указанный потомок не будет найден, child вставится последним.
     * @param child
     * @param reference
     */
    public insertBefore(child: SimpleVirtualDOMElement, reference: SimpleVirtualDOMElement): void {
        const index = this._children.indexOf(reference);

        if (index < 0) {
            this.appendChild(child);
            return;
        }

        this._children.splice(index, 0, child);

        (<any> child)._parentNode = this;

        child.ready = this.ready;
        child.propagateView(this.view);

        this.emitMutilationEvent({ type: EventType.DOMChildAppend, data: { parent: this, child: child } });
        child['__descriptor__'] = EventManager.subscribe(this, child);
    }


    /**
     * Удалить потомка
     * @param child
     */
    public removeChild(child: SimpleVirtualDOMElement): void {
        if (!child) {
            return;
        }

        this._children.splice(this._children.indexOf(child, 0), 1);
        child._parentNode = undefined;

        EventManager.unsubscribe(child['__descriptor__'], child);
        this.emitMutilationEvent({ type: EventType.DOMChildRemove, data: { parent: this, child: child } });
    }


    /**
     * Удалить всех потомков
     */
    public removeChildren(): void {
        for (let i = this._children.length - 1; i >= 0; i--) {
            this.removeChild(this._children[i]);
        }

        this._children = [];
    }


    /**
     * Заменяет одного потомка другим (или несколькими)
     * @param newChild
     * @param oldChild
     */
    public replaceChild(newChild: SimpleVirtualDOMElement | SimpleVirtualDOMElement[],
            oldChild: SimpleVirtualDOMElement): void {
        const index = this._children.indexOf(oldChild, 0);

        if (!(newChild instanceof Array)) {
            newChild = [newChild];
        }

        if (!oldChild || index < 0) {
            newChild.forEach((child) => {
                this.appendChild(child);
            });

            return;
        }

        oldChild._parentNode = undefined;

        newChild.forEach((child, pos) => {
            this._children.splice(index + pos + 1, 0, child);

            child._parentNode = this;
            child.ready = this.ready;
            child.propagateView(this.view);

            this.emitMutilationEvent({ type: EventType.DOMChildAppend, data: { parent: this, child: child } });
            child['__descriptor__'] = EventManager.subscribe(this, child);
        });

        delete this._children[index];
        this.emitMutilationEvent({ type: EventType.DOMChildRemove, data: { parent: this, child: oldChild } });
    }


    /**
     * Удалить узел
     */
    public remove(): void {
        this.emitMutilationEvent({ type: EventType.DOMRemove, data: this });
    }


    /**
     * Возвращает полный HTML-текст данного элемента
     * @returns {string}
     */
    public getOuterHTML(): string {
        const attrSerialized: string[] = [];

        Object.keys(this.attributes).forEach((name) => {
            const attr = this.getAttribute(name);

            if (attr) {
                attrSerialized.push(`${name}="${attr}"`);
                return;
            }

            if (name === 'style' || name === 'id' || name === 'class') {
                return;
            }

            attrSerialized.push(`${name}="${attr}"`);
        });

        const content = this.innerHTML;

        if (this.tagName) {
            let spacer = '';

            if (attrSerialized.length > 0) {
                spacer = ' ';
            }

            let tagName = this.tagName;

            if (this.lowerTagNames) {
                tagName = tagName.toLowerCase();
            }

            return `<${tagName}${spacer}${attrSerialized.join(' ')}>${content}</${tagName}>`;
        }

        return content;
    }


    /**
     * Возвращает true, если данный узел виртуального DOM является простым текстом.
     * @returns {boolean}
     */
    public isText(): boolean {
        return this.tagName === undefined;
    }


    /**
     * Повесить слушатель определённого события на данный элемент
     * @param type
     * @param callback
     * @param useCapture
     */
    public addEventListener(type: string, callback: (event: Event) => void, useCapture?: boolean) {
        this.handlers[type] = this.handlers[type] || [];
        this.handlers[type].push({ callback: callback, useCapture: useCapture });

        if (this.rendered) {
            this.rendered[this.HANDLERS_KEY] = this.rendered[this.HANDLERS_KEY] || [];
            this.rendered[this.HANDLERS_KEY].push({ type, callback, useCapture });
            this.rendered.addEventListener(type, callback, useCapture);
        }
    }


    /**
     * Снять слушателя определённого события с данного элемента
     * @param type
     * @param callback
     */
    public removeEventListener(type: string, callback: (event: Event) => void) {
        if (this.rendered) {
            this.rendered[this.HANDLERS_KEY] = this.rendered[this.HANDLERS_KEY] || [];

            this.rendered[this.HANDLERS_KEY].forEach((handler, index) => {
                if (handler.type === type && handler.callback === callback) {
                    delete this.rendered[this.HANDLERS_KEY][index];
                }
            });

            this.rendered.removeEventListener(type, callback);
        }

        (this.handlers[type] || []).forEach((evtCallback, index) => {
            if (evtCallback === callback) {
                delete this.handlers[type][index];
            }
        });
    }


    /**
     * Выбрать все элементы по селектору
     * @param query
     * @returns {SimpleVirtualDOMElement[]}
     */
    public querySelectorAll(query: string): SimpleVirtualDOMElement[] {
        /* if (this.selectorCache[query]) {
            return this.selectorCache[query];
        }*/

        const selector = SimpleVirtualDOM.prepareSelector(query);
        const result = [];
        const resultHas = {};

        const concat = (array) => {
            if (!(array instanceof Array)) {
                array = [array];
            }

            array.forEach((node: SimpleVirtualDOMElement) => {
                if (!resultHas[node.hash]) {
                    resultHas[node.hash] = true;
                    result.push(node);
                }
            });
        };

        const queryResult = selector(this);
        if (queryResult) {
            concat(queryResult);
        }

        this._children.forEach((child) => {
            concat(child.querySelectorAll(query));
        });

        // this.selectorCache[query] = result;
        return result;
    }


    /**
     * Выбрать первый элемент по селектору
     * @param query
     * @returns {SimpleVirtualDOMElement}
     */
    public querySelector(query: string): SimpleVirtualDOMElement {
        return this.querySelectorAll(query)[0];
    }


    /**
     * Распространить View по дереву виртуального DOM
     * @param view
     */
    public propagateView(view: View): void {
        if (this.view === view) {
            return;
        }

        this.view = view;

        this._children.forEach((child) => {
            child.propagateView(view);
        });
    }


    protected emitMutilationEvent(data: IEvent) {
        this.dirty = true;
        this.selectorCache = {};
        this.emitEvent(data);

        if (this.view) {
            this.view.askToRenderPolitely();
        }
    }


    protected customCloneNode(node: SimpleVirtualDOMElement): void {}  // tslint:disable-line


    private renderHandlers() {
        this.rendered[this.HANDLERS_KEY] = this.rendered[this.HANDLERS_KEY] || [];

        this.rendered[this.HANDLERS_KEY].forEach((handler) => {
            this.rendered.removeEventListener(handler.type, handler.callback);
        });

        const handlers = this.handlers;
        this.handlers = {};

        Object.keys(handlers).forEach((type) => {
            handlers[type].forEach((handler) => {
                this.addEventListener(type, handler.callback, handler.useCapture);
            });
        });
    }


    private mergeAttributes() {
        if (this.id !== (<HTMLElement> this.rendered).id) {
            (<HTMLElement> this.rendered).id = this.id;
        }

        if (this.className !== (<HTMLElement> this.rendered).className) {
            (<HTMLElement> this.rendered).className = this.className;
        }

        Object.keys(this.attributes).forEach((attr: string) => {
            if (attr === 'id' || attr === 'class') {
                return;
            }

            if (!((<HTMLElement> this.rendered).hasAttribute(attr))) {
                const attribute = this.getAttribute(attr);

                if (attribute) {
                    (<HTMLElement> this.rendered).setAttribute(attr, attribute);
                }

                return;
            }

            const value = this.getAttribute(attr);
            if ((<HTMLElement> this.rendered).getAttribute(attr) !== value) {
                (<HTMLElement> this.rendered).setAttribute(attr, value);
            }
        });

        Array.from((<HTMLElement> this.rendered).attributes).forEach((attrPair) => {
            if (!this.hasAttribute(attrPair.name)) {
                (<HTMLElement> this.rendered).removeAttribute(attrPair.name);
            }
        });
    }


    private appendChildren() {
        this._children.forEach((child, index) => {
            child.render();
            this.rendered.appendChild(child.rendered);
        });
    }


    private mergeChildren() {
        if (this.rendered.childNodes.length === 0 && this._children.length > 0) {
            this.appendChildren();
            return;
        }

        this._children.forEach((child, index) => {
            if (this.rendered.childNodes[index] !== child.rendered) {
                if (index < this.rendered.childNodes.length - 1) {
                    this.rendered.insertBefore(child.rendered, this.rendered.childNodes[index + 1]);
                    return;
                }

                if (index === this.rendered.childNodes.length - 1) {
                    this.rendered.replaceChild(child.rendered, this.rendered.lastChild);
                    return;
                }

                this.rendered.appendChild(child.rendered);
            }
        });

        for (let i = 0; i < this.rendered.childNodes.length; i++) {
            if (!this._children[i] || this.rendered.childNodes[i] !== this._children[i].rendered) {
                this.rendered.removeChild(this.rendered.childNodes[i]);
                i--;
            }
        }
    }


}
