import {IComponentDecoratorData} from './IComponentDecoratorData';
import {ComponentConfig} from './ComponentConfig';
import {JSWorksComponent} from './ComponentDecorator';


/**
 * Декоратор страницы
 * @param data
 * @returns {(target:any)=>undefined}
 * @constructor
 */
export function JSWorksPage(data: IComponentDecoratorData) {
    return (target: any) => {
        JSWorksComponent(data)(target);

        target.__type__ = ComponentConfig.Types.PAGE;
    };
}
