import {IAbstractVirtualDOMElement} from '../VirtualDOM/IAbstractVirtualDOMElement';


/**
 * Данные, необходимые для создания View
 */
export interface IViewParsed {

    id: string;
    template: IAbstractVirtualDOMElement;

}
