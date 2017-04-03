import {JSWorksError} from '../../Service/Error/ErrorDecorator';

@JSWorksError
export class UknownControllerError extends Error {

    constructor(controllerName: string) {
        super(`Unknown controller: "${controllerName}"`);
    }

}
