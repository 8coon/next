import { IEventEmitter } from '../EventManager/IEventEmitter';
import { IEvent } from '../EventManager/IEvent';
export declare class ViewHolder implements IEventEmitter {
    /**
     * Все загруженные View приложения
     */
    views: object;
    private _templates;
    /**
     * Загрузить информацию о всех View из файлов приложения
     * @returns {undefined}
     */
    load(): void;
    /**
     * Отрисовать пользовательские элементы
     */
    renderIncludesAndInheritance(): void;
    /**
     * Создать дубликат View, зарегистрировать и вернуть его имя
     * @param oldName
     * @returns {string}
     */
    duplicateView(oldName: string): string;
    /**
     * Отрисовать пользовательские элементы во вьюхах
     */
    renderViews(): void;
    /**
     * Получить экземпляр View по имени
     * @param name
     * @returns {any}
     */
    getView(name: string): any;
    private queryViewTemplates();
    emitEvent(event: IEvent): void;
}
