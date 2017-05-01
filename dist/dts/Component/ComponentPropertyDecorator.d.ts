import { IComponentPropertyDecoratorData } from './IComponentPropertyDecoratorData';
/**
 * Декоратор свойства компонента или страницы
 * @param data
 * @returns {(target:any)}
 * @constructor
 */
export declare function JSWorksComponentProperty(data?: IComponentPropertyDecoratorData): (target: any, name: string) => {
    configurable: boolean;
    enumerable: boolean;
    get: () => any;
    set: (value: any) => void;
};
