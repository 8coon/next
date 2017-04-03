import {JSWorksError} from '../../Error/ErrorDecorator';

@JSWorksError
export class UnknownControllerError extends Error {

    constructor(controllerName: string) {
        super(`Unknown controller: "${controllerName}"`);
    }

}
