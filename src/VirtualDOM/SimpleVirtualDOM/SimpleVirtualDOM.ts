import {JSWorksInternal} from '../../Common/InternalDecorator';
import {JSWorksService} from '../../Service/ServiceDecorator';
import {IAbstractVirtualDOMElement} from '../IAbstractVirtualDOMElement';
import {HTMLParserService} from '../../Parser/HTML/HTMLParserService';
import {IDOMParsed} from '../../Parser/HTML/IDOMParsed';
import {SimpleVirtualDOMElement} from './SimpleVirtualDOMElement';
import {SimpleVirtualDOMElementExt} from './SimpleVirtualDOMElementExt.js';


@JSWorksInternal
@JSWorksService('SimpleVirtualDOM', 'VirtualDOM', ['HTMLParser'])
export class SimpleVirtualDOM {

    private hTMLParser: HTMLParserService;


    /**
     * Создать элемент виртуального DOM по образу реального
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
        const element = new SimpleVirtualDOMElement();

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
        return elementProto.createElement(args);
    }


}
