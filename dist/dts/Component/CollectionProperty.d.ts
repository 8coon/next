import { IEventEmitter } from '../EventManager/IEventEmitter';
import { IEvent } from '../EventManager/IEvent';
export declare class CollectionProperty implements IEventEmitter {
    /**
     * Флаг, указывающий, что представление коллекции необходимо обновить
     * @type {boolean}
     */
    dirty: boolean;
    /**
     * Словарь, хранящий информацию о том, какие тёги view-for обновили содержимое, а какие нет
     * @type {{}}
     */
    cleanForTag: object;
    private values;
    private lastIndex;
    /**
     * Очистить коллекцию
     */
    clear(): void;
    /**
     * Получить значения коллекции в виде массива
     * @returns {any[]}
     */
    getValues(): any[];
    /**
     * Задать значения коллекции из массива
     * @param values
     */
    setValues(values: any[]): void;
    /**
     * Длина коллекции
     * @returns {number}
     */
    readonly length: number;
    /**
     * Добавить элемент в конец коллекции
     * @param value
     */
    push(value: any): void;
    /**
     * Извлечь последний элемент коллекции
     * @returns {undefined|any}
     */
    pop(): any;
    /**
     * Получить "срез" коллекции
     * @param begin
     * @param end
     * @returns {any[]}
     */
    slice(begin?: number, end?: number): any[];
    /**
     * См. Array.prototype.splice
     * @param start
     * @param deleteCount
     * @param items
     */
    splice(start: number, deleteCount?: number, ...items: any[]): void;
    /**
     * Удалить элемент под индексом
     * @param index
     */
    remove(index: number | number[]): void;
    /**
     * Удалить первое вхождение данного элемента
     * @param item
     */
    removeItem(item: any): void;
    /**
     * Вернуть массив индексов всех вхождений данного элемента
     * @param item
     * @returns {number[]}
     */
    indexesOf(item: any): number[];
    /**
     * Удалить все вхождения данного элемента
     * @param item
     */
    removeItemAll(item: any): void;
    /**
     * Индекс первого вхождения данного элемента
     * @param item
     * @returns {number}
     */
    indexOf(item: any): number;
    /**
     * Индекс последнего вхождения данного элемента
     * @param item
     * @param fromIndex
     * @returns {number}
     */
    lastIndexOf(item: any, fromIndex?: number): number;
    /**
     * Проверка на вхождение элемента
     * @param item
     * @returns {boolean}
     */
    includes(item: any): boolean;
    /**
     * Получить элемент коллекции под индексом
     * @param index
     * @returns {any}
     */
    get(index: number): any;
    /**
     * Задать элемент коллекции под индексом
     * @param index
     * @param value
     */
    set(index: number, value: any): void;
    /**
     * Первый элемент коллекции
     * @returns {any}
     */
    readonly first: any;
    /**
     * Последний элемент коллекции
     * @returns {any}
     */
    readonly last: any;
    /**
     * Итератор
     * @returns {Iterator<any>}
     */
    [Symbol.iterator](): Iterator<any>;
    emitEvent(event: IEvent): void;
    protected update(): void;
}
