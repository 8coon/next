import {IComponentDecoratorData} from './IComponentDecoratorData';
import {ComponentConfig} from './ComponentConfig';


declare const __JSWorks_components__: any;


/**
 * Декоратор компонента
 * @param data
 * @returns {(target:any)=>undefined}
 * @constructor
 */
export function JSWorksComponent(data: IComponentDecoratorData) {
    return (target: any) => {
        target.__type__ = ComponentConfig.Types.COMPONENT;
        target.__view_name__ = data.view;
        target.__controller_name__ = data.controller;

        __JSWorks_components__.push(target);
    };
}
