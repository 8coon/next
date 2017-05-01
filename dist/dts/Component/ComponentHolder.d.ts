export declare class ComponentHolder {
    private components;
    private pages;
    private prototypes;
    /**
     * Загрузить все компоненты. Должен быть вызван после загрузки всех View.
     */
    load(): void;
    /**
     * Создать дубликат компонента из прототипа и вернуть его имя
     * @param componentProto
     */
    duplicateComponent(componentProto: any): string;
    /**
     * Инициализировать компонент из прототипа
     * @param componentProto
     * @param name
     * @param viewName
     * @param controllerName
     */
    initComponent(componentProto: any, name?: string, viewName?: string, controllerName?: string): void;
    /**
     * Получить компонент по имени
     * @param name
     * @returns {any}
     */
    getComponent(name: string): any;
    /**
     * Получить прототип компонента по имени
     * @param name
     * @returns {any}
     */
    getComponentPrototype(name: string): any;
    /**
     * Получить страницу по имени
     * @param name
     * @returns {any}
     */
    getPage(name: string): any;
}
