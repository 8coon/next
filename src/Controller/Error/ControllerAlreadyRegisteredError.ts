

import {JSWorksError} from '../../Service/Error/ErrorDecorator';

@JSWorksError
export class ControllerAlreadyRegisteredError extends Error {

    constructor(controllerName: string) {
        super(`Controller already registered: "${controllerName}"`);
    }

}
