
import {InterceptorType} from './InterceptorType';


declare const __JSWorks_interceptors__: any;


export function JSWorksInterceptor(type: InterceptorType) {

    return (target: any) => {
        const interceptor = target();
        interceptor.type = type;

        __JSWorks_interceptors__.push(interceptor);
    }

}