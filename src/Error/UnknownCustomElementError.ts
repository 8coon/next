import {JSWorksError} from './ErrorDecorator';


@JSWorksError
export class UnknownCustomElementError extends Error {

    constructor(tagName: string) {
        super(`Unknown custom element: "${tagName}"`);
    }

}
