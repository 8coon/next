import {InterceptorType} from './InterceptorType';
import {IInterceptorDecoratorData} from './IInterceptorDecoratorData';


declare const __JSWorks_interceptors__: any[];


/**
 * Декоратор перехватчика
 * @param data
 * @returns {(target:any)=>undefined}
 * @constructor
 */
export function JSWorksInterceptor(data: IInterceptorDecoratorData) {

    return (target: any) => {
        target.__type__ = data.type;
        __JSWorks_interceptors__.push(target);
    };

}
