import {IComponentPropertyDecoratorData} from './IComponentPropertyDecoratorData';
import {CollectionProperty} from './CollectionProperty';


declare const JSWorks: any;


/**
 * Декоратор свойства компонента или страницы
 * @param data
 * @returns {(target:any)}
 * @constructor
 */
export function JSWorksComponentCollectionProperty(data?: IComponentPropertyDecoratorData) {
    return (target: any, name: string) => {
        target.__collections__ = target.__collections__ || [];
        target.__collections__.push(`__${name}_collection__`);

        return {
            configurable: false,
            enumerable: false,

            /* tslint:disable */
            get: function() {
                return this[`__${name}_collection__`];
            },

            set: function(value: any) {
                this[`__${name}_collection__`] = this[`__${name}_collection__`] || new CollectionProperty();
                const collection: CollectionProperty = this[`__${name}_collection__`];

                if (value instanceof Array) {
                    collection.setValues(value);
                } else {
                    collection.setValues([value]);
                }
            },
            /* tslint:enable*/
        };
    };
}
