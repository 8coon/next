import {JSWorksError} from './ErrorDecorator';


@JSWorksError
export class DuplicateViewIdError extends Error {

    constructor(id: string) {
        super(`Duplicate view id found: "${id}"`);
    }

}
