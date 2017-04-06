import {JSWorksError} from './ErrorDecorator';


@JSWorksError
export class CustomElementAlreadyRegisteredError extends Error {

    constructor(elementName: string) {
        super(`Custom element already registered: "${elementName}"`);
    }

}
