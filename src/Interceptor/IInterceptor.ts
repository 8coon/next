

import {InterceptorType} from './InterceptorType';

export interface IInterceptor {

    type: InterceptorType;

    intercept(args: object): Promise<any>;
}