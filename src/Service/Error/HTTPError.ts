

export class HTTPError extends Error {

    /**
     * Код ответа HTTP
     */
    public status: number;


    constructor(method: string, url: string, status: number) {
        super(`HTTPError: "${method} ${url}" returned status ${status}`);
        this.status = status;
    }

}
