
import {JSWorksInternal} from '../Common/InternalDecorator';
import {IInterceptor} from './IInterceptor';


@JSWorksInternal
export class InterceptorHolder {

    get interceptors(): Object {
        return this._interceptors;
    }

    private _interceptors: object;

    /**
     * зарегестрировать перехватчик
     * @param interceptor перехватчик реализующий интерфейс IInterceptor
     */
    public registerInterceptor(interceptor: IInterceptor): void {
       if(!this._interceptors[interceptor.type]) {
           this._interceptors[interceptor.type] = [];
       }

       this._interceptors[interceptor.type].push(interceptor);
    }



}