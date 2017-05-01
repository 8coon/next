/**
 * Метаданные модели
 */
export interface IModelMetadata {
    createMethod?: string;
    readMethod?: string;
    updateMethod?: string;
    deleteMethod?: string;
    queryMethod?: string;
    primaryKey?: string;
    fields?: string[];
}
