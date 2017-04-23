import {IComponentPropertyDecoratorData} from './IComponentPropertyDecoratorData';
import {EventType} from '../EventManager/EventType';
import {ApplicationContext} from '../ApplicationContext/ApplicationContext';


declare const JSWorks: any;
declare const __JSWorks_component_fields__: any;


/**
 * Декоратор свойства компонента или страницы
 * @param data
 * @returns {(target:any)}
 * @constructor
 */
export function JSWorksComponentProperty(data?: IComponentPropertyDecoratorData) {
    return (target: any, name: string) => {
        const targetName: string = target.constructor.name;

        __JSWorks_component_fields__[targetName] = __JSWorks_component_fields__[targetName] || [];
        __JSWorks_component_fields__[targetName].push(name);

        return {
            configurable: false,
            enumerable: false,

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

                const pushField = () => {
                    this.fields = this.fields || [];
                    this.fields.push(name);
                };

                const appContext: ApplicationContext = JSWorks.applicationContext;

                if (appContext.loaded) {
                    pushField();
                    emit();

                    return;
                }

                JSWorks.EventManager.subscribe(this, appContext, EventType.ViewsListenersInstalled, (ev) => {
                    pushField();
                    emit();
                });
            },
            /* tslint:enable*/
        };
    };
}
