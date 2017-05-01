export declare class CustomElementHolder {
    private elements;
    /**
     * Загружает все пользовательские DOM элементы
     */
    load(): void;
    /**
     * Получить пользовательский элемент по тэгу
     * @param tagName
     * @returns {any}
     */
    getElement(tagName: string): any;
}
