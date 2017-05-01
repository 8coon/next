import { ParserService } from '../ParserService';
export declare class JSONParserService extends ParserService {
    /**
     * Парсит JSON-строку и возвращает объект. В случае неуспеха возвращает undefined.
     * @param data
     * @returns {Object}
     */
    parseString(data: string): object;
    /**
     * Парсит текст, содержащийся в элементе, как JSON и возвращает объект или undefined.
     * @param element
     * @returns {undefined}
     */
    parseDOM(element: HTMLElement): object;
}
