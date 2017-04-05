import {JSWorksError} from './ErrorDecorator';


@JSWorksError
export class ForbiddenTagError extends Error {

    constructor(tagName: string, place: string = 'here') {
        super(`Tag is not allowed in ${place}: ${tagName}`);
    }

}
