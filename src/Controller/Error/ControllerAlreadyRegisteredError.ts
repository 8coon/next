

import {JSWorksError} from '../../Error/ErrorDecorator';

@JSWorksError
export class ControllerAlreadyRegisteredError extends Error {

    constructor(controllerName: string) {
        super(`Controller already registered: "${controllerName}"`);
    }

}
