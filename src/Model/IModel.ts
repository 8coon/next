import {IModelMetadata} from './IModelMetadata';
import {JSONParserService} from '../Parser/JSON/JSONParserService';


/**
 * Интерфейс модели
 */
export interface IModel {
    modelMetadata: IModelMetadata;
    proto: object;
    jsonParser: JSONParserService;

    query(params?: object): Promise<IModel[]>;

    create(): Promise<IModel>;
    read(): Promise<IModel>;
    update(): Promise<IModel>;
    ['delete'](): Promise<IModel>;

    remove(): Promise<IModel>;
    save(): Promise<IModel>;
    from(data?: object): IModel;

    isDirty(): boolean;
    setDirty(value?: boolean): void;
}
