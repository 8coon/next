import {IComponentPropertyDecoratorData} from './IComponentPropertyDecoratorData';
import {EventType} from '../EventManager/EventType';
import {ApplicationContext} from '../ApplicationContext/ApplicationContext';


declare const JSWorks: any;


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

                const emit = () => {
                    if (this.emitEvent) {
                        this.emitEvent({ type: EventType.UPDATE, data: { name, value } });
                        this.emitEvent({ type: EventType.PostUpdate, data: { name, value } });
                    }
                };

                const appContext: ApplicationContext = JSWorks.applicationContext;

                if (appContext.loaded) {
                    emit();
                    return;
                }

                JSWorks.EventManager.subscribe(this, appContext, EventType.ViewsListenersInstalled, (ev) => {
                    emit();
                });
            },
            /* tslint:enable*/
        };
    };
}
