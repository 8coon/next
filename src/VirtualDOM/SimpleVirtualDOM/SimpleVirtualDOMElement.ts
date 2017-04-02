import {IAbstractVirtualDOMElement} from '../IAbstractVirtualDOMElement';
import {VirtualDOMElementArray} from '../VirtualDOMElementArray';
import {IEvent} from '../../EventManager/IEvent';
import {IEventEmitter} from '../../EventManager/IEventEmitter';
import {EventType} from '../../EventManager/EventType';
import {EventManager} from '../../EventManager/EventManager';
import {JSWorksInternal} from '../../Common/InternalDecorator';
import {SimpleVirtualDOM} from './SimpleVirtualDOM';
import {LCSAlgorithm} from '../../Algorithm/LCS';


@JSWorksInternal
export class SimpleVirtualDOMElement implements IAbstractVirtualDOMElement {

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


    private _tagName: string;
    private _id: string;
    private _parentNode: SimpleVirtualDOMElement;
    private _children: SimpleVirtualDOMElement[] = [];
    private _text: string;
    private classes: Object = {};
    private attributes: Object = { style: {} };
    private handlers: Object = {};

    private readonly HASH_KEY: string = '__jsworks_hash__';
    private readonly HANDLERS_KEY: string = '__jsworks_handlers__';


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


    public get style(): Object {
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

        // ToDo: InnerHTML DOM Parse
    }


    public get id(): string {
        return this._id;
    }


    public set id(value: string) {
        this._id = value;
        this.setAttribute('id', value);
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
    public appendChild(child: SimpleVirtualDOMElement): void {
        this._children.push(child);
        (<any> child)._parentNode = this;

        this.emitMutilationEvent({ type: EventType.DOMChildAppend, data: { parent: this, child: child } });
        EventManager.subscribe(this, child);
    }


    /**
     * Удалить потомка
     * @param child
     */
    public removeChild(child: SimpleVirtualDOMElement): void {
        this._children.splice(this._children.lastIndexOf(child, 0), 1);
        this.emitMutilationEvent({ type: EventType.DOMChildRemove, data: { parent: this, child: child } });
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


    private emitMutilationEvent(data: IEvent) {
        this.dirty = true;
        this.emitEvent(data);
    }


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


    private mergeChildrenSimple() {
        Array.from(this.rendered.childNodes).forEach((child) => {
            this.rendered.removeChild(child);
        });

        this.appendChildren();
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


    private mergeChildren4() {
        if (this.rendered.childNodes.length === 0 && this._children.length > 0) {
            this.appendChildren();
            return;
        }

        const existing = this.rendered.childNodes;
        const children = this._children;
        let i: number = 0;
        let j: number = 0;

        while (existing[i][this.HASH_KEY] === children[j].rendered[this.HASH_KEY]) {
            i++;
            j++;
        }

        // while ()
    }


    private mergeChildren3() {
        if (this.rendered.childNodes.length === 0 && this._children.length > 0) {
            this.appendChildren();
            return;
        }

        const comparator = (a: Node, b: Node): boolean => {
            console.log(this, this.HASH_KEY, a, b);
            return a[this.HASH_KEY] === b[this.HASH_KEY];
        };

        const indices: number[] = (new LCSAlgorithm()).countLength(
            <any> this.rendered.childNodes,
            <any> this.children,
            comparator,
        );

        let current = 0;

        this._children.forEach((child, index) => {
            if (index !== (indices[current] || -1)) {
                let referenceNode = this.rendered.lastChild;

                if (index < this.rendered.childNodes.length) {
                    referenceNode = this.rendered.childNodes[index];
                }

                this.rendered.insertBefore(child.rendered, referenceNode);
                index++;

                return;
            }

            current++;
        });
    }


    private mergeChildren2() {
        this._children.forEach((child, index) => {
            child.render();

            if (index <= this.rendered.childNodes.length) {
                this.rendered.appendChild(child.rendered);
            }

            if (this.rendered.childNodes[index] !== child.rendered) {
                this.rendered.replaceChild(child.rendered, this.rendered.childNodes[index]);
            }
        });

        if (this.rendered.childNodes.length > this._children.length) {
            const deleting: Node[] = [];

            for (let i = this._children.length; i < this.rendered.childNodes.length; i++) {
                deleting.push(this.rendered.childNodes[i]);
            }

            deleting.forEach((node) => {
                this.rendered.removeChild(node);
            });
        }
    }

}
