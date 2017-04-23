import {JSWorksError} from './ErrorDecorator';


@JSWorksError
export class DuplicateModelError extends Error {

    constructor(modelName: string) {
        super(`Duplicate model: "${modelName}"`);
    }

}
