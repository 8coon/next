
import {JSWorksInternal} from '../Common/InternalDecorator';
import {IInterceptor} from './IInterceptor';
import {InterceptorType} from './InterceptorType';


@JSWorksInternal
export class InterceptorHolder {

    private _interceptors: object;

    /**
     * получить всех перехватчиков
     * @returns {Object}
     */
    get interceptors(): Object {
        return this._interceptors;
    }

    /**
     * загрузить
     */
    public load():void {

    }


    /**
     * * Получить всех перехватчиков данного типа, если таковые существуют
     * @param interceptorType тип перехватчкика
     * @returns {IInterceptor[]} перехватчики данного типа
     */
    public getInterceptorsByType(interceptorType: InterceptorType): IInterceptor[] {
        return this._interceptors[interceptorType];
    }


    /**
     * зарегестрировать перехватчик
     * @param interceptor перехватчик реализующий интерфейс IInterceptor
     */
    private registerInterceptor(interceptor: IInterceptor): void {
        if(!this._interceptors[interceptor.type]) {
            this._interceptors[interceptor.type] = [];
        }

        this._interceptors[interceptor.type].push(interceptor);
    }


}