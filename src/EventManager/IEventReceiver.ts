import {IEvent} from './IEvent';


/**
 * Интерфейс, помечающий объект как слушатель событий. Если не указано иного, то при возникновении события,
 * на которое реализующий данный интерфейс класс был подписан, вызовется метод onEventReceive.
 */
export interface IEventReceiver {


    receiveEvent(event: IEvent);

}
