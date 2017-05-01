import { ParserService } from '../ParserService';
import { IDOMParsed } from './IDOMParsed';
export declare class HTMLParserService extends ParserService {
    /**
     * Парсит строку как HTML и возвращает объект.
     * @param data
     * @returns IDOMParsed[]
     */
    parseString(data: string): IDOMParsed[];
    /**
     * Парсит данные DOM-элемента и возвращает объект.
     * @param element
     * @returns IDOMParsed
     */
    parseDOM(element: HTMLElement | Node): IDOMParsed;
}
