
import {JSWorksError} from '../../Service/Error/ErrorDecorator';
@JSWorksError
export class AttributeNotFound extends Error {

    constructor(attr: string) {
        super(`router attribute '${attr}' not found`);
    }

}
