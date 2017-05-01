import { IInterceptor } from './IInterceptor';
import { InterceptorType } from './InterceptorType';
export declare class InterceptorHolder {
    private _interceptors;
    private interceptorsByName;
    /**
     * получить всех перехватчиков
     * @returns {object}
     */
    readonly interceptors: object;
    /**
     * загрузить всех перехватчиков
     */
    load(): void;
    /**
     * * Получить всех перехватчиков данного типа, если таковые существуют
     * @param interceptorType тип перехватчкика
     * @returns {IInterceptor[]} перехватчики данного типа
     */
    getInterceptorsByType(interceptorType: InterceptorType): IInterceptor[];
    /**
     * активировать перехватчики данного типа
     * @param interceptorType тип интерсептора
     * @param args объект аргументов, необходимый для работы каждого перехватчика
     * @returns {Promise<any>} возвращает промис
     */
    triggerByType(interceptorType: InterceptorType, args: object): Promise<any>;
    /**
     * Активировать список данных перехватчиков
     * @param interceptors
     * @param args
     * @returns {IInterceptor}
     */
    trigger(interceptors: IInterceptor[], args: object): Promise<any>;
    /**
     * Получить список перехватчиков по списку имён
     * @param names
     * @returns {IInterceptor[]}
     */
    getInterceptors(names: string | string[]): IInterceptor[];
    /**
     * Получить перехватчик по имени
     * @param name
     * @returns {IInterceptor}
     */
    getInterceptor(name: string): IInterceptor;
    /**
     * зарегестрировать перехватчик
     * @param interceptor перехватчик реализующий интерфейс IInterceptor
     */
    private registerInterceptor(interceptor);
}
