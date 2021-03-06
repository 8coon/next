import {JSWorksError} from './ErrorDecorator';


@JSWorksError
export class UnknownServiceTypeError extends Error {

    constructor(typeName: string) {
        super(`Unknown service type: "${typeName}"`);
    }

}
