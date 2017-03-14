import {Instantiable} from '../Common/Instantiable';


export abstract class Service implements Instantiable {

    /**
     * Имя сервиса
     */
    public readonly name: string;


    /**
     * Тип сервиса
     */
    public readonly type: string;


    /**
     * Зависимости сервиса
     */
    public readonly requires: Service[];


    /**
     * Возвращает новый экземпляр данного сервиса. Допускается, если этот метод возвращает
     * сам себя.
     * @param args объект инициализации, словарь сервисов, от которых зависит данный. Эти сервисы
     * указываются в массиве Service.requires либо как пустые экземпляры (new MyService()), либо
     * как объектсы с полями name и type.
     */
    public abstract getInstance(args: Object): Service;

}
