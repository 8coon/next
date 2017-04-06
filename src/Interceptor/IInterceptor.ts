import {InterceptorType} from './InterceptorType';


/**
 * Интерфейс перехватчика внутренних событий фреймворка
 */
export interface IInterceptor {

    type: InterceptorType;

    intercept(args: object): Promise<any>;
}
