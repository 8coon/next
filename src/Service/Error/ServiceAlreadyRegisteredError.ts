import {JSWorksError} from './ErrorDecorator';


@JSWorksError
export class ServiceAlreadyRegisteredError extends Error {

    constructor(serviceName: string) {
        super(`Service already registered: "${serviceName}"`);
    }

}
