import {EventType} from './EventType';


/**
 * Интерфейс события
 */
export interface IEvent {

    readonly type: EventType;
    readonly data: any;

}
