import {JSWorksError} from './ErrorDecorator';


@JSWorksError
export class InterceptorNotFound extends Error {

    constructor(type: string) {
        super(`Interceptor not found :"${type}"`);
    }

}
