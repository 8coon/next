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
        const interceptor = target();
        interceptor.type = data.type;
        console.log(target, data);
        __JSWorks_interceptors__.push(interceptor);
    };

}
