import {IVirtualDOMElement} from '../VirtualDOM/IVirtualDOMElement';


/**
 * Данные, необходимые для создания View
 */
export interface IViewParsed {

    id: string;
    template: IVirtualDOMElement;

}
