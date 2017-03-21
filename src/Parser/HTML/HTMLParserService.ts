import {MethodNotImplementedError} from '../../Service/Error/MethodNotImplementedError';
import {ParserService} from '../ParserService';
import {JSWorksService} from '../../Service/ServiceDecorator';
import {JSWorksInternal} from '../../Common/InternalDecorator';


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
    public parseDOM(element: HTMLElement): Object {
        throw new MethodNotImplementedError('HTMLParserService.parseDOM');
    }

}
