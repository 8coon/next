import { IModel } from './IModel';
export declare class ModelHolder {
    /**
     * Словарь всех моделей
     * @type {{}}
     */
    models: object;
    /**
     * Загрузить все объявленные модели
     */
    load(): void;
    /**
     * Возвращает модель по её имени
     * @param name
     * @returns {any}
     */
    getModel(name: string): IModel;
    private initModel(model);
    private initModelFields(model);
    private initModelMethods(model);
}
