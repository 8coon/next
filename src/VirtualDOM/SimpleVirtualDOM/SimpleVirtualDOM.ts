import {JSWorksInternal} from '../../Common/InternalDecorator';
import {JSWorksService} from '../../Service/ServiceDecorator';
import {HTMLParserService} from '../../Parser/HTML/HTMLParserService';
import {IDOMParsed} from '../../Parser/HTML/IDOMParsed';
import {SimpleVirtualDOMElement} from './SimpleVirtualDOMElement';
import {VirtualDOM} from '../VirtualDOM';
import {CustomElementAlreadyRegisteredError} from '../../Error/CustomElementAlreadyRegisteredError';
import {EventType} from '../../EventManager/EventType';
import {SimpleVirtualDOMElementExt} from './SimpleVirtualDOMElementExt';


export type Selector = (IAbstractVirtualDOMElement) => boolean |   // tslint:disable-line
    SimpleVirtualDOMElement |
    SimpleVirtualDOMElement[];

declare const CSSauron: any;


@JSWorksInternal
@JSWorksService('SimpleVirtualDOM', 'VirtualDOM', ['HTMLParser'])
export class SimpleVirtualDOM implements VirtualDOM {


    /**
     * Получить следующий уникальный номер и последовательности уникальных номеров нод
     * @returns {number}
     * @constructor
     */
    public static NextHash(): number {
        return SimpleVirtualDOM.lastNodeHash++;
    }


    /**
     * Возвращает функцию-селектор для данного запроса
     * @param selector
     * @returns {any}
     */
    public static prepareSelector(selector: string): Selector {
        if (SimpleVirtualDOM.preparedSelectors[selector]) {
            return SimpleVirtualDOM.preparedSelectors[selector];
        }

        if (!SimpleVirtualDOM.selectorFactory) {
            SimpleVirtualDOM.selectorFactory = CSSauron({
                tag: 'tagName || ""',
                contents: 'text',
                id: 'id',
                'class' : 'className',  // tslint:disable-line
                parent: 'parentNode',
                children: '_children',
                attr: 'getAttribute(attr)',
            }, (type, pattern, data) => {
                if (type === 'tag') {
                    return pattern.toLowerCase() === data.toLowerCase();
                }

                return pattern == data;  // tslint:disable-line
            });
        }

        SimpleVirtualDOM.preparedSelectors[selector] = SimpleVirtualDOM.selectorFactory(selector);
        return SimpleVirtualDOM.preparedSelectors[selector];
    }


    private static lastNodeHash: number = 0;
    private static preparedSelectors = {};
    private static selectorFactory: (selector: string) => Selector;

    private hTMLParser: HTMLParserService;
    private customElements: object = {};


    /**
     * Создаёт элемент виртуального DOM по образу реального
     * @param element
     * @returns {SimpleVirtualDOMElement}
     */
    public createFromDOM(element: HTMLElement): SimpleVirtualDOMElement {
        const data = this.hTMLParser.parseDOM(element);
        return this.createElement(data);
    }


    /**
     * Создаёт текстовый узел виртуального DOM
     * @param text
     * @returns {SimpleVirtualDOMElement}
     */
    public createTextElement(text: string): SimpleVirtualDOMElement {
        const data = {
            tagName: undefined,
            id: undefined,
            text: text,
            className: undefined,
            attributes: {},
            children: [],
        };

        return this.createElement(data);
    }


    /**
     * Создать виртуальный DOM элемент
     * @param data IDOMParsed либо tagName элемента
     * @returns {SimpleVirtualDOMElement}
     */
    public createElement(data: IDOMParsed | string = 'DIV'): SimpleVirtualDOMElement {
        let element = new SimpleVirtualDOMElement(SimpleVirtualDOM.NextHash());

        if (typeof data === 'string') {
            element.tagName = (<string> data).toUpperCase();

            if (this.customElements[element.tagName]) {
                element = this.customElements[element.tagName].createElement();
                element.tagName = (<string> data).toUpperCase();
                element.emitEvent({ type: EventType.CREATE, data: element });
            }

            return element;
        }

        if (this.customElements[data.tagName]) {
            element = this.customElements[data.tagName].createElement();
        }

        element.tagName = data.tagName;
        element.id = data.id;
        element.text = data.text;
        element.className = data.className || '';

        Object.keys(data.attributes || {}).forEach((attribute) => {
            element.setAttribute(attribute, data.attributes[attribute]);
        });

        data.children.forEach((childData) => {
            element.appendChild(<SimpleVirtualDOMElement> this.createElement(childData));
        });

        element.emitEvent({ type: EventType.CREATE, data: element });
        return element;
    }


    /**
     * Решистрирует прототип пользовательского элемента. Новые элементы будут создаваться с
     * помощью elementProto.createElement(). Также для элемента будет выпущено событие EventType.CREATE.
     * @param tagName
     * @param elementProto
     */
    public registerCustomElement(tagName: string, elementProto: SimpleVirtualDOMElementExt) {
        if (this.customElements[tagName]) {
            throw new CustomElementAlreadyRegisteredError(tagName);
        }

        this.customElements[tagName] = elementProto;
    }


}
