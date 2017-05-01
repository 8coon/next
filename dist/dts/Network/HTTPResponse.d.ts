export declare class HTTPResponse {
    private _data;
    private _status;
    /**
     * Данные, которые вернул сервер
     * @returns {string}
     */
    readonly data: string;
    /**
     * Код ответа
     * @returns {number}
     */
    readonly status: number;
    /**
     * Конструктор
     * @param data
     * @param status
     */
    constructor(data: string, status: number);
}
