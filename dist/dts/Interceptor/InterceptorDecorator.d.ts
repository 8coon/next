import { IInterceptorDecoratorData } from './IInterceptorDecoratorData';
/**
 * Декоратор перехватчика
 * @param data
 * @returns {(target:any)=>undefined}
 * @constructor
 */
export declare function JSWorksInterceptor(data: IInterceptorDecoratorData): (target: any) => void;
