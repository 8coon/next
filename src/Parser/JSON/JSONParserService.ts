import {ParserService} from '../ParserService';
import {JSWorksService} from '../../Service/ServiceDecorator';
import {JSWorksInternal} from '../../Common/InternalDecorator';


@JSWorksInternal
@JSWorksService('JSONParser', 'Parser', ['Network'])
export class JSONParserService extends ParserService {

    /**
     * Парсит JSON-строку и возвращает объект. В случае неуспеха возвращает undefined.
     * @param data
     * @returns {Object}
     */
    public parseString(data: string): object {
        try {
            return JSON.parse(data);
        } catch (error) {
            console.error(`JSONParserService encountered a JSON error and returned 'undefined'.`);
            return undefined;
        }
    }


    /**
     * Парсит текст, содержащийся в элементе, как JSON и возвращает объект или undefined.
     * @param element
     * @returns {undefined}
     */
    public parseDOM(element: HTMLElement): object {
        return this.parseString(element.innerText);
    }

}
