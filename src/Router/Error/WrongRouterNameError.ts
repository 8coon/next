
import {JSWorksError} from '../../Service/Error/ErrorDecorator';
@JSWorksError
export class WrongRouterNameError extends Error {

    constructor(routerName: string) {
        super(`router name: "${routerName}, it should be: app-route"`);
    }

}
