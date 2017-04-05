import {IEventEmitter} from '../EventManager/IEventEmitter';
import {IEvent} from '../EventManager/IEvent';
import {JSWorksInternal} from '../Common/InternalDecorator';
import {EventType} from '../EventManager/EventType';


@JSWorksInternal
export class CollectionProperty implements IEventEmitter {


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
                if (this.lastIndex < this.values.length) {
                    this.lastIndex++;
                    return { value: this.values[this.lastIndex - 1], done: false };
                }

                this.lastIndex = 0;
                return {value: undefined, done: true};
            },
        };
    }


    public emitEvent(event: IEvent): void {}  // tslint:disable-line


    protected update(): void {
        this.emitEvent({ type: EventType.UPDATE, data: undefined });
    }

}
