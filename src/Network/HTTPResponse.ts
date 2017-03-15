

export class HTTPResponse {

    private _data: string;
    private _status: number;


    /**
     * Данные, которые вернул сервер
     * @returns {string}
     */
    public get data(): string {
        return this._data;
    }


    /**
     * Код ответа
     * @returns {number}
     */
    public get status(): number {
        return this._status;
    }


    /**
     * Конструктор
     * @param data
     * @param status
     */
    public constructor(data: string, status: number) {
        this._data = data;
        this._status = status || 200;
    }

}
