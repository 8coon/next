import {IComponentPropertyDecoratorData} from './IComponentPropertyDecoratorData';


/**
 * Декоратор свойства компонента или страницы
 * @param data
 * @returns {(target:any)}
 * @constructor
 */
export function JSWorksComponentProperty(data?: IComponentPropertyDecoratorData) {
    return (target: any, name: string) => {
        console.log(name, data);
        console.dir(target);

        // If the property decorator returns a value, it will be used as the Property Descriptor for the member.
    };
}
