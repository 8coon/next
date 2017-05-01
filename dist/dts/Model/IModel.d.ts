import { IModelMetadata } from './IModelMetadata';
import { JSONParserService } from '../Parser/JSON/JSONParserService';
/**
 * Интерфейс модели
 */
export interface IModel {
    modelMetadata: IModelMetadata;
    proto: object;
    jsonParser: JSONParserService;
    /**
     * Произвольный запрос большого числа записей.
     * @param params
     */
    query(params?: object): Promise<IModel[]>;
    /**
     * Создание новой записи на сервере.
     */
    create(): Promise<IModel>;
    /**
     * Чтение полей одной записи. Запись идентифицируется первичным ключом (полем, отмеченным
     * аннотацией @ModelPrimaryKey). Если параметр pk не указан, нужно брать значение первичного
     * ключа текущей записи.
     * @param pk
     */
    read(pk?: any): Promise<IModel>;
    /**
     * Обновение данных уже существующей записи на сервере.
     */
    update(): Promise<IModel>;
    /**
     * Удаление данной записи с сервера.
     */
    ['delete'](): Promise<IModel>;
    /**
     * То же самое, что delete()
     */
    remove(): Promise<IModel>;
    /**
     * Сохраняет данную запись на сервере. Если у записи не присвоен первичный ключ, то
     * для сохранения вызывается метод create(), в противном случае -- delete(). Если
     * запись не была изменена после загрузки или последнего сохранения, то запрос
     * на сервер не выполняется, и данный метод возвращает разрешённый промис с текущей
     * записью.
     */
    save(): Promise<IModel>;
    /**
     * То же, что и save(), однако отправляет запрос на сервер в любом случае, независимо
     * от того, были ли изменения текущей записи или нет.
     */
    persist(): Promise<IModel>;
    /**
     * Создаёт новый экземпляр класса записи и присваивает его полям значения из словаря data.
     * @param data
     */
    from(data?: object): IModel;
    /**
     * Возвращает словарь значений всех полей данной записи.
     */
    gist(): object;
    /**
     * Присваивает полям текущей записи данные из словаря fields.
     * @param fields
     */
    apply(fields?: object): void;
    /**
     * Возвращает true, если в записи есть несохранённые на сервере изменения.
     */
    isDirty(): boolean;
    setDirty(value?: boolean): void;
}
