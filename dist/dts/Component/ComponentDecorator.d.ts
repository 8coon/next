import { IComponentDecoratorData } from './IComponentDecoratorData';
/**
 * Декоратор компонента
 * @param data
 * @returns {(target:any)=>undefined}
 * @constructor
 */
export declare function JSWorksComponent(data: IComponentDecoratorData): (target: any) => void;
