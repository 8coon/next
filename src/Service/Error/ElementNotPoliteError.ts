import {JSWorksError} from './ErrorDecorator';
import {View} from '../../View/View';


@JSWorksError
export class ElementNotPoliteError extends Error {

    constructor(view: View) {
        super(`Some element(s) in view ${view.id} are not polite! Refusing to operate...`);
    }

}
