import {JSWorksError} from './ErrorDecorator';


@JSWorksError
export class AttributeNotFoundError extends Error {

    constructor(attr: string, place: string = 'Router') {
        super(`${place} attribute '${attr}' not found`);
    }

}
