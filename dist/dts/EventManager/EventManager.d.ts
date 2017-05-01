import { IEventEmitter } from './IEventEmitter';
import { IEventReceiver } from './IEventReceiver';
import { IEvent } from './IEvent';
import { EventType } from './EventType';
export declare class EventManager {
    /**
     * Вызывает цепочку обработчиков события для данного эмиттера (IEventEmitter).
     * @param emitter
     * @param event
     */
    static fireEvent(emitter: IEventEmitter, event: IEvent): void;
    /**
     * Подписывает ресивер (IEventReceiver) на событие eventType данного эмиттера (IEventEmitter).
     * В качестве дополнительных параметров можно указать eventType и eventHandler. При
     * eventType === undefined в ресивер буут передаваться все возникающие в эмиттере события.
     * При передаче в eventHandler строки обработчиком будет назначен метод ресивера с соответствующим
     * именем, при передаче функции -- данная функция. В функцию-обработчик будут переданы два аргумента:
     * IEvent событие и IEventEmitter объект, сгенерировавший данное событие.
     * @param receiver
     * @param emitter
     * @param [eventType]
     * @param [eventHandler]
     */
    static subscribe(receiver: IEventReceiver, emitter: IEventEmitter, eventType?: EventType, eventHandler?: string | ((event: IEvent, eventEmitter?: IEventEmitter) => void)): number;
    /**
     * Отписаться от получения событий
     * @param descriptor
     * @param emitter
     */
    static unsubscribe(descriptor: number, emitter: IEventEmitter): void;
    /**
     * То же самое, что subscribe, но только не подписывает событие, если такой обработчик уже был подписан
     * @param lastDescriptor
     * @param receiver
     * @param emitter
     * @param eventType
     * @param eventHandler
     */
    static subscribeUnique(lastDescriptor: number, receiver: IEventReceiver, emitter: IEventEmitter, eventType?: EventType, eventHandler?: string | ((event: IEvent, eventEmitter?: IEventEmitter) => void)): number;
    private static lastDescriptor;
    private static patch(emitter);
    private static nextDescriptor();
}
