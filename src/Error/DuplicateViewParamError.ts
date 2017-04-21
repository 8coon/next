import {JSWorksError} from './ErrorDecorator';


@JSWorksError
export class DuplicateViewParamError extends Error {

    constructor(name: string, viewName: string) {
        super(`Duplicate view param in view ${viewName} found: "${name}"`);
    }

}
