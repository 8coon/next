import {JSWorksError} from './ErrorDecorator';


@JSWorksError
export class CannotIterateOverNonCollectionError extends Error {

    constructor(statement: string) {
        super(`Cannot iterate over a non-collection variable: "${statement}"`);
    }

}
