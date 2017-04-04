import {IComponentPropertyDecoratorData} from './IComponentPropertyDecoratorData';
import {EventType} from '../EventManager/EventType';


/**
 * Декоратор свойства компонента или страницы
 * @param data
 * @returns {(target:any)}
 * @constructor
 */
export function JSWorksComponentProperty(data?: IComponentPropertyDecoratorData) {
    return (target: any, name: string) => {
        return {
            configurable: false,
            enumerable: false,
            // writable: false,

            /* tslint:disable */
            get: function() {
                return this[`__${name}__`];
            },

            set: function(value: any) {
                this[`__${name}__`] = value;

                if (this.emitEvent) {
                    this.emitEvent({ type: EventType.UPDATE, data: { name, value } });
                }
            },
            /* tslint:enable*/
        };
    };
}
