import {JSWorksInternal} from '../../Common/InternalDecorator';
import {JSWorksService} from '../../Service/ServiceDecorator';
import {IAbstractVirtualDOMElement} from '../IAbstractVirtualDOMElement';
import {HTMLParserService} from '../../Parser/HTML/HTMLParserService';
import {IDOMParsed} from '../../Parser/HTML/IDOMParsed';
import {SimpleVirtualDOMElement} from './SimpleVirtualDOMElement';
import {SimpleVirtualDOMElementExt} from './SimpleVirtualDOMElementExt.js';
import {VirtualDOM} from '../VirtualDOM';


type Selector = (IAbstractVirtualDOMElement) => boolean |   // tslint:disable-line
    IAbstractVirtualDOMElement |
    IAbstractVirtualDOMElement[];

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


    /**
     * Создаёт элемент виртуального DOM по образу реального
     * @param element
     * @returns {IAbstractVirtualDOMElement}
     */
    public createFromDOM(element: HTMLElement): IAbstractVirtualDOMElement {
        const data = this.hTMLParser.parseDOM(element);
        return this.createElement(data);
    }


    /**
     * Создаёт текстовый узел виртуального DOM
     * @param text
     * @returns {IAbstractVirtualDOMElement}
     */
    public createTextElement(text: string): IAbstractVirtualDOMElement {
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
    public createElement(data: IDOMParsed | string = 'DIV'): IAbstractVirtualDOMElement {
        const element = new SimpleVirtualDOMElement(SimpleVirtualDOM.NextHash());

        if (typeof data === 'string') {
            element.tagName = (<string> data).toUpperCase();
            return element;
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

        return element;
    }


    /**
     * Создаёт пользовательский элемент виртуального DOM
     * @param elementProto
     * @param args
     */
    public createCustomElement(elementProto: SimpleVirtualDOMElementExt, args: Object = {}):
            IAbstractVirtualDOMElement {
        return elementProto.createElement(args, SimpleVirtualDOM.NextHash());
    }

}
