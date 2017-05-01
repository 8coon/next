import {JSWorksError} from './ErrorDecorator';


@JSWorksError
export class ElementNotFoundError extends Error {

    constructor(tag: string) {
        super(`Element not found: ${tag}`);
    }

}
