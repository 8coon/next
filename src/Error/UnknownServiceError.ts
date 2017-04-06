import {JSWorksError} from './ErrorDecorator';


@JSWorksError
export class UnknownServiceError extends Error {

    constructor(serviceName: string) {
        super(`Unknown service: "${serviceName}"`);
    }

}
