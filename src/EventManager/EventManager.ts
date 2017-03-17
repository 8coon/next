import {IEventEmitter} from './IEventEmitter';
import {IEventReceiver} from './IEventReceiver';
import {IEvent} from './IEvent';
import {EventType} from './EventType';


export class EventManager {


    /**
     * Вызывает цепочку обработчиков события для данного эмиттера (IEventEmitter).
     * @param emitter
     * @param event
     */
    public static fireEvent(emitter: IEventEmitter, event: IEvent): void {
        emitter['__listeners__'].forEach((listener) => {
            if ((event.type === listener.type) || (listener.type === undefined)) {
                let handler = listener.handler || listener.receiver.receiveEvent;

                if (typeof listener.handler === 'string') {
                    handler = listener.receiver[listener.handler];
                }

                handler(event, emitter);
            }
        });
    }


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
    public static subscribe(receiver: IEventReceiver, emitter: IEventEmitter, eventType?: EventType,
            eventHandler?: string | ((event: IEvent, eventEmitter?: IEventEmitter) => void)): void {
        if (!emitter['__patched__']) {
            emitter['__listeners__'] = [];
            emitter['__patched__'] = true;

            emitter.emitEvent = (event: IEvent) => {
                EventManager.fireEvent(emitter, event);
            };
        }

        emitter['__listeners__'].push({
            handler: eventHandler,
            receiver: receiver,
            type: eventType,
        });
    }


}
