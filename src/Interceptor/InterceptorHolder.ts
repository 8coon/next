import {JSWorksInternal} from '../Common/InternalDecorator';
import {IInterceptor} from './IInterceptor';
import {InterceptorType} from './InterceptorType';
import {InterceptorNotFoundError} from '../Error/InterceptorNotFound';


declare const __JSWorks_interceptors__: any[];


@JSWorksInternal
export class InterceptorHolder {

    private _interceptors: object = {};
    private interceptorsByName: object = {};


    /**
     * получить всех перехватчиков
     * @returns {object}
     */
    get interceptors(): object {
        return this._interceptors;
    }


    /**
     * загрузить всех перехватчиков
     */
    public load(): void {
        __JSWorks_interceptors__.forEach((interceptorProto) => {
            const interceptor = new interceptorProto();

            interceptor.type = interceptorProto.__type__;
            interceptor.name = interceptorProto.name;

            this.registerInterceptor(interceptor);
        });
    }


    /**
     * * Получить всех перехватчиков данного типа, если таковые существуют
     * @param interceptorType тип перехватчкика
     * @returns {IInterceptor[]} перехватчики данного типа
     */
    public getInterceptorsByType(interceptorType: InterceptorType): IInterceptor[] {
        return this._interceptors[interceptorType];
    }


    /**
     * активировать перехватчики данного типа
     * @param interceptorType тип интерсептора
     * @param args объект аргументов, необходимый для работы каждого перехватчика
     * @returns {Promise<any>} возвращает промис
     */
    public triggerByType(interceptorType: InterceptorType, args: object): Promise<any> {
        if (!this._interceptors[interceptorType]) {
            throw new InterceptorNotFoundError(interceptorType.toString());
        }

        return this.trigger(this._interceptors[interceptorType], args);
    }


    /**
     * Активировать список данных перехватчиков
     * @param interceptors
     * @param args
     * @returns {IInterceptor}
     */
    public trigger(interceptors: IInterceptor[], args: object): Promise<any> {
        return interceptors.reduce((prevVal: Promise<any>, cur: IInterceptor) =>
                prevVal
                    .then(() => cur.intercept(args))
                    .catch((reject) => Promise.reject(reject))
            , Promise.resolve() );
    }


    /**
     * Получить список перехватчиков по списку имён
     * @param names
     * @returns {IInterceptor[]}
     */
    public getInterceptors(names: string | string[]): IInterceptor[] {
        const result: IInterceptor[] = [];

        if (typeof names === 'string') {
            names = [names];
        }

        names.forEach((name: string) => {
            if (!this.interceptorsByName[name]) {
                throw new InterceptorNotFoundError(name);
            }

            result.push(this.interceptorsByName[name]);
        });

        return result;
    }


    /**
     * Получить перехватчик по имени
     * @param name
     * @returns {IInterceptor}
     */
    public getInterceptor(name: string): IInterceptor {
        return this.getInterceptors(name)[0];
    }


    /**
     * зарегестрировать перехватчик
     * @param interceptor перехватчик реализующий интерфейс IInterceptor
     */
    private registerInterceptor(interceptor: IInterceptor): void {
        if (!this._interceptors[interceptor.type]) {
            this._interceptors[interceptor.type] = [];
        }

        this._interceptors[interceptor.type].push(interceptor);
        this.interceptorsByName[interceptor.name] = interceptor;
    }


}
