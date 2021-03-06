import {MethodNotImplementedError} from '../../Error/MethodNotImplementedError';
import {ParserService} from '../ParserService';
import {JSWorksService} from '../../Service/ServiceDecorator';
import {JSWorksInternal} from '../../Common/InternalDecorator';
import {IDOMParsed} from './IDOMParsed';


@JSWorksInternal
@JSWorksService('HTMLParser', 'Parser', ['Network'])
export class HTMLParserService extends ParserService {

    /**
     * Парсит строку как HTML и возвращает объект.
     * @param data
     * @returns IDOMParsed[]
     */
    public parseString(data: string): IDOMParsed[] {
        const element = document.createElement('DIV');
        const parsed: IDOMParsed[] = [];
        element.innerHTML = data;

        Array.from(element.childNodes).forEach((node) => {
            parsed.push(this.parseDOM(node));
        });

        return parsed;
    }


    /**
     * Парсит данные DOM-элемента и возвращает объект.
     * @param element
     * @returns IDOMParsed
     */
    public parseDOM(element: HTMLElement | Node): IDOMParsed {
        const data = {
            tagName: (<HTMLElement> element).tagName,
            id: (<HTMLElement> element).id,
            text: '',
            className: (<HTMLElement> element).className,
            attributes: {},
            children: [],
        };

        if (!((<HTMLElement> element).tagName)) {
            data.text = element.textContent;
        }

        if (!element['style']) {
            data.tagName = undefined;
            return data;
        }

        Array.from(element.attributes).forEach((attr) => {
            if (attr.specified) {
                data.attributes[attr.name] = attr.value;
            }
        });

        Array.from(element.childNodes).forEach((childNode) => {
            data.children.push(this.parseDOM(childNode));
        });

        return data;
    }

}
