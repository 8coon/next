import {MethodNotImplementedError} from '../../Service/Error/MethodNotImplementedError';
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
     * @returns {Object}
     */
    public parseString(data: string): Object {
        throw new MethodNotImplementedError('HTMLParserService.parseString');
    }


    /**
     * Парсит данные DOM-элемента и возвращает объект.
     * @param element
     * @returns {Object}
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
