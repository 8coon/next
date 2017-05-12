import { SimpleVirtualDOMElement } from '../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElement';
/**
 * Данные, необходимые для создания View
 */
export interface IViewParsed {
    id: string;
    template: SimpleVirtualDOMElement;
}
