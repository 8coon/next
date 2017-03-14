

export class MethodNotImplementedError extends Error {

    constructor(method: string) {
        super(`Method not implemented: "${method}"`);
    }

}
