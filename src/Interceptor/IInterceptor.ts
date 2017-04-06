

import {InterceptorType} from './InterceptorType';

export interface IInterceptor {

    readonly type: InterceptorType;

    before?():void;

    after?():void;
}