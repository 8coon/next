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
    public parseDOM(element: HTMLElement | Element): IDOMParsed {
        const data = {
            tagName: element.tagName,
            id: element.id,
            text: element.textContent,
            className: element.className,
            attributes: {},
        };

        if (!element['style']) {
            data.tagName = undefined;
            return data;
        }

        Array.from(element.attributes).forEach((attr) => {
            if (attr.specified) {
                data.attributes[attr.name] = attr.value;
            }
        });

        return data;
    }

}
