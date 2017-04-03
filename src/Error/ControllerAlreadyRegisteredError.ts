import {JSWorksError} from './ErrorDecorator';


@JSWorksError
export class ControllerAlreadyRegisteredError extends Error {

    constructor(controllerName: string) {
        super(`Controller already registered: "${controllerName}"`);
    }

}
