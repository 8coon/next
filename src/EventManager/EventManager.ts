import {IEventEmitter} from './IEventEmitter';
import {IEventReceiver} from './IEventReceiver';
import {IEvent} from './IEvent';
import {EventType} from './EventType';
import {JSWorksInternal} from '../Common/InternalDecorator';


@JSWorksInternal
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

                if (handler.bind) {
                    handler = handler.bind(listener.receiver);
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
            eventHandler?: string | ((event: IEvent, eventEmitter?: IEventEmitter) => void)): number {
        EventManager.patch(emitter);
        const descriptor: number = EventManager.nextDescriptor();

        emitter['__listeners__'].push({
            handler: eventHandler,
            receiver: receiver,
            type: eventType,
            descriptor,
        });

        return descriptor;
    }


    /**
     * Отписаться от получения событий
     * @param descriptor
     * @param emitter
     */
    public static unsubscribe(descriptor: number, emitter: IEventEmitter): void {
        EventManager.patch(emitter);
        let index = -1;

        emitter['__listeners__'].forEach((desc, i) => {
            if (desc.descriptor === descriptor) {
                index = i;
            }
        });

        if (index >= 0) {
            emitter['__listeners__'].splice(index, 1);
        }
    }


    /**
     * То же самое, что subscribe, но только не подписывает событие, если такой обработчик уже был подписан
     * @param lastDescriptor
     * @param receiver
     * @param emitter
     * @param eventType
     * @param eventHandler
     */
    public static subscribeUnique(lastDescriptor: number, receiver: IEventReceiver, emitter: IEventEmitter,
            eventType?: EventType,
            eventHandler?: string | ((event: IEvent, eventEmitter?: IEventEmitter) => void)): number {
        EventManager.patch(emitter);
        let found = false;

        emitter['__listeners__'].forEach((descriptor) => {
            if (descriptor.descriptor !== lastDescriptor) {
                return;
            }

            if (descriptor.type !== eventType) {
                return;
            }

            if (descriptor.receiver !== receiver) {
                return;
            }

            if (descriptor.handler !== eventHandler) {
                return;
            }

            found = true;
        });

        if (!found) {
            return EventManager.subscribe(receiver, emitter, eventType, eventHandler);
        }

        return undefined;
    }


    private static lastDescriptor: number = 0;


    private static patch(emitter: IEventEmitter): void {
        if (!emitter['__patched__']) {
            emitter['__listeners__'] = [];
            emitter['__patched__'] = true;

            emitter.emitEvent = (event: IEvent) => {
                EventManager.fireEvent(emitter, event);
            };
        }
    }


    private static nextDescriptor(): number {
        return this.lastDescriptor++;
    }


}
