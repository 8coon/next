/**
 * Интерфейс объекта, которым разрезолвится результат валидации
 */
export interface IValidationResult {
    success: boolean;
    value?: any;
    messages: Array<{
        status: string;
        text: string;
    }>;
}
