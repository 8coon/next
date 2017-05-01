export declare class ControllerHolder {
    private controllers;
    private prototypes;
    private controllerCount;
    /**
     * Загрузить все существующие контроллеры
     */
    load(): void;
    /**
     * Зарегистрировать контроллер
     * @param controllerProto экземпляр контролера имеет поле namе, оно же тип класса контроллера
     * @param name
     */
    registerController(controllerProto: any, name?: string): void;
    /**
     * Создать дубликат контроллера и вернуть его имя
     * @param oldName
     */
    duplicateController(oldName: string): string;
    /**
     * Получить контроллер по имени(типу)
     * @param name
     * @returns {object} экземляр контроллера
     */
    getController(name: string): object;
}
