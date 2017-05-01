import {IComponentPropertyDecoratorData} from './IComponentPropertyDecoratorData';
import {CollectionProperty} from './CollectionProperty';
import {EventType} from '../EventManager/EventType';
import {EventManager} from '../EventManager/EventManager';
import {IEvent} from '../EventManager/IEvent';
import {JSWorksLib} from '../jsworks';


declare const JSWorks: JSWorksLib;


/**
 * Декоратор свойства компонента или страницы
 * @param data
 * @returns {(target:any)}
 * @constructor
 */
export function JSWorksComponentCollectionProperty(data?: IComponentPropertyDecoratorData) {
    return (target: any, name: string) => {
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

                collection['__descriptor__'] = collection['__descriptor__'] || EventManager.subscribeUnique(
                        collection['__descriptor__'], {}, this, EventType.CREATE, (event: IEvent) => {
                    if (this.subscribeCollection && !collection['__subscribed__']) {
                        this.subscribeCollection(name);
                        this[name] = value;
                    }
                });

                if (!collection['__subscribed__']) {
                    return;
                }

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
