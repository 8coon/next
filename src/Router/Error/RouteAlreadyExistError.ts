
import {JSWorksError} from '../../Service/Error/ErrorDecorator';


@JSWorksError
export class RouteAlreadyExistError extends Error {

    constructor(match: string) {
        super(`route with match: '${match}' already exists`);
    }

}