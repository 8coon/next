import {IEventEmitter} from '../EventManager/IEventEmitter';
import {IEvent} from '../EventManager/IEvent';
import {JSWorksInternal} from '../Common/InternalDecorator';
import {EventType} from '../EventManager/EventType';


@JSWorksInternal
export class CollectionProperty implements IEventEmitter {

    /**
     * Флаг, указывающий, что представление коллекции необходимо обновить
     * @type {boolean}
     */
    public dirty: boolean = false;


    private values: any[] = [];
    private lastIndex: number = 0;


    /**
     * Очистить коллекцию
     */
    public clear() {
        this.values = [];
        this.update();
    }


    /**
     * Получить значения коллекции в виде массива
     * @returns {any[]}
     */
    public getValues(): any[] {
        return this.values;
    }


    /**
     * Задать значения коллекции из массива
     * @param values
     */
    public setValues(values: any[]) {
        this.values = values;
        this.update();
    }


    /**
     * Длина коллекции
     * @returns {number}
     */
    public get length(): number {
        return this.values.length;
    }


    /**
     * Добавить элемент в конец коллекции
     * @param value
     */
    public push(value: any) {
        this.values.push(value);
        this.update();
    }


    /**
     * Извлечь последний элемент коллекции
     * @returns {undefined|any}
     */
    public pop(): any {
        return this.values.pop();
    }


    /**
     * Получить "срез" коллекции
     * @param begin
     * @param end
     * @returns {any[]}
     */
    public slice(begin?: number, end?: number): any[] {
        return this.values.slice(begin, end);
    }


    /**
     * См. Array.prototype.splice
     * @param start
     * @param deleteCount
     * @param items
     */
    public splice(start: number, deleteCount?: number, ...items: any[]): void {
        this.values.splice(start, deleteCount, ...items);
        this.update();
    }


    /**
     * Удалить элемент под индексом
     * @param index
     */
    public remove(index: number | number[]): void {
        if (index instanceof Array) {
            index.forEach((i) => {
                this.remove(i);
            });

            return;
        }

        this.splice(index, 1);
    }


    /**
     * Удалить первое вхождение данного элемента
     * @param item
     */
    public removeItem(item: any): void {
        const index = this.indexOf(item);

        if (index >= 0) {
            this.remove(index);
        }
    }


    /**
     * Вернуть массив индексов всех вхождений данного элемента
     * @param item
     * @returns {number[]}
     */
    public indexesOf(item: any): number[] {
        const result: number[] = [];

        this.getValues().forEach((value, index) => {
            if (value === item) {
                result.push(index);
            }
        });

        return result;
    }


    /**
     * Удалить все вхождения данного элемента
     * @param item
     */
    public removeItemAll(item: any): void {
        this.getValues().forEach((value, index) => {
            if (value === item) {
                this.remove(index);
            }
        });
    }


    /**
     * Индекс первого вхождения данного элемента
     * @param item
     * @returns {number}
     */
    public indexOf(item: any): number {
        return this.getValues().indexOf(item);
    }


    /**
     * Индекс последнего вхождения данного элемента
     * @param item
     * @param fromIndex
     * @returns {number}
     */
    public lastIndexOf(item: any, fromIndex?: number): number {
        return this.getValues().lastIndexOf(item, fromIndex);
    }


    /**
     * Проверка на вхождение элемента
     * @param item
     * @returns {boolean}
     */
    public includes(item: any): boolean {
        return this.indexOf(item) >= 0;
    }


    /**
     * Получить элемент коллекции под индексом
     * @param index
     * @returns {any}
     */
    public get(index: number): any {
        return this.values[index];
    }


    /**
     * Задать элемент коллекции под индексом
     * @param index
     * @param value
     */
    public set(index: number, value: any) {
        this.values[index] = value;
        this.update();
    }


    /**
     * Первый элемент коллекции
     * @returns {any}
     */
    public get first(): any {
        return this.get(0);
    }


    /**
     * Последний элемент коллекции
     * @returns {any}
     */
    public get last(): any {
        return this.get(this.length - 1);
    }


    /**
     * Итератор
     * @returns {Iterator<any>}
     */
    public [Symbol.iterator](): Iterator<any> {
        return {
            next: () => {
                if (this.lastIndex < this.length) {
                    this.lastIndex++;
                    return { value: this.get(this.lastIndex - 1), done: false };
                }

                this.lastIndex = 0;
                return {value: undefined, done: true};
            },
        };
    }


    public emitEvent(event: IEvent): void {}  // tslint:disable-line


    protected update(): void {
        this.dirty = true;
        this.emitEvent({ type: EventType.UPDATE, data: undefined });
    }

}
