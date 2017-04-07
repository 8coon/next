import {JSWorksInternal} from '../Common/InternalDecorator';
import {IInterceptor} from './IInterceptor';
import {InterceptorType} from './InterceptorType';
import {InterceptorNotFound} from '../Error/InterceptorNotFound';


declare const __JSWorks_interceptors__: any[];


@JSWorksInternal
export class InterceptorHolder {

    private _interceptors: object = {};


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
    public activateInterceptors(interceptorType: InterceptorType, args: object): Promise<any> {

        if (!this._interceptors[interceptorType]) {
            throw new InterceptorNotFound(interceptorType.toString());
        }

        let promise = Promise.resolve();

        // последовательное выполнение интерсептеров
        this._interceptors[interceptorType].forEach((interceptor: IInterceptor) => {
            promise = promise.then(() => interceptor.intercept(args) );
        });

        return promise;
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
    }


}
