
import {JSWorksInternal} from '../Common/InternalDecorator';
import {View} from '../View/View';
import {JSWorksService} from '../Service/ServiceDecorator';

@JSWorksService('Router', 'Router', ['HTMLParser'])
@JSWorksInternal
export class Router {

    private _routes: object = {};
    private node: any = window.history;

    get routes(): object {
        return this._routes;
    }


    public register(path: string, view: View): void {
        this._routes[path] = view;
    }


}