import {JSWorksError} from './ErrorDecorator';


@JSWorksError
export class DuplicateSwitchCaseError extends Error {

    constructor(condition: string) {
        super(`Duplicate switch case: "${condition}"`);
    }

}
