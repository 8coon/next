import {JSWorksError} from './ErrorDecorator';


@JSWorksError
export class PathNotFoundError extends Error {

    constructor(path: string) {
        super(`path: '${path}' not found`);
    }

}
