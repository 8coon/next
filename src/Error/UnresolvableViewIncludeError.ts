import {JSWorksError} from './ErrorDecorator';


@JSWorksError
export class UnresolvableViewIncludeError extends Error {

    constructor() {
        super(`Unresolvable view includes`);
    }

}
