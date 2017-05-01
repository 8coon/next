export declare class HTTPError extends Error {
    /**
     * Код ответа HTTP
     */
    status: number;
    constructor(method: string, url: string, status: number);
}
