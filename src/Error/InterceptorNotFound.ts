import {JSWorksError} from './ErrorDecorator';


@JSWorksError
export class InterceptorNotFoundError extends Error {

    constructor(typeOrName: string) {
        super(`Interceptor not found :"${typeOrName}"`);
    }

}
