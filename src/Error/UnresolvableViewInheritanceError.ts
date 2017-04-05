import {JSWorksError} from './ErrorDecorator';


@JSWorksError
export class UnresolvableViewInheritanceError extends Error {

    constructor() {
        super(`Unresolvable view inheritance`);
    }

}
