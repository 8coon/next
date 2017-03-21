import {ServiceAlreadyRegisteredError} from './Error/ServiceAlreadyRegisteredError';
import {ServiceUnresolvableError} from './Error/ServiceUnresolvableError';

import {UnknownServiceError} from './Error/UnknownServiceError';
import {UnknownServiceTypeError} from './Error/UnknownServiceTypeError';
import {JSWorksInternal} from '../Common/InternalDecorator';


@JSWorksInternal
export class ServiceHolder {

    private services: Object = {};
    private serviceInstances: Object = {};
    private serviceInstancesByType: Object = {};
    private serviceCount: number = 0;
    private serviceInitCount: number = 0;


    /**
     * Конструктор по умолчанию
     */
    /*public constructor() {
    }*/


    /**
     * Зарегистрировать сервис
     * @param service экземпляр сервиса, либо объект с двумя полями: name и type. Поле name
     * является необизательным. В случае, когда это поле будет undefined, регистрируемый сервис
     * будет проинициализирован первым попавшимся сервисом подходящего типа.
     */
    public registerService(service: any): void {
        if (this.services[service.name || service.type]) {
            throw new ServiceAlreadyRegisteredError(service.name || service.type);
        }

        this.services[service.name || service.type] = service;
        this.serviceCount++;
    }


    /**
     * Инициализирует все сервисы. Вызывается один раз из ApplicationContext.
     */
    public instantiateServices(): void {
        for (let i: number = 0; i < 100; i++) {
            if (this.instantiateRequirementsMet()) {
                return;
            }
        }

        throw new ServiceUnresolvableError(this.services, this.serviceInstances);
    }


    /**
     * Получить сервис по имени типа. Выбрасывает UnknownServiceTypeError в случае, если подходящий
     * сервис не найден.
     * @param serviceType тип сервиса
     * @returns {any}
     */
    public getService(serviceType: string): any {
        if (this.serviceInstancesByType[serviceType]) {
            return this.serviceInstancesByType[serviceType][0];
        }

        throw new UnknownServiceTypeError(serviceType);
    }


    /**
     * Получить сервис по имени. Выбрасывает UnknownServiceError в случае, если сервис с таким
     * типом не был зарегистрирован.
     * @param serviceName имя сервиса
     * @returns {anu}
     */
    public getServiceByName(serviceName: string): any {
        if (this.serviceInstances[serviceName]) {
            return this.serviceInstances[serviceName];
        }

        throw new UnknownServiceError(serviceName);
    }


    private instantiateRequirementsMet(): boolean {
        Object.keys(this.services).forEach((nameOrType: string) => {
            const service: any = this.services[nameOrType];

            if (service['__loaded__']) {
                return;
            }

            const args: Object = {};
            let requirementsMet = true;

            service.requires.forEach((requiredService: any) => {
                if (typeof requiredService === 'string') {
                    requiredService = {
                        name: requiredService,
                        type: requiredService,
                    };
                }

                try {
                    if (requiredService.name) {
                        args[requiredService.name] = this.getServiceByName(requiredService.name);
                    } else {
                        args[requiredService.type] = this.getService(requiredService.type);
                    }
                } catch (error) {
                    requirementsMet = false;
                    return;
                }
            });

            if (requirementsMet) {
                const instance = service; // .getInstance(args);

                Object.keys(args).forEach((dependencyName: string) => {
                    const name = dependencyName.slice(0, 1).toLowerCase() + dependencyName.slice(1);
                    instance[name] = args[dependencyName];
                });

                if (service.name) {
                    this.serviceInstances[service.name] = instance;
                }

                this.serviceInstancesByType[service.type] = this.serviceInstancesByType[service.type] || [];
                this.serviceInstancesByType[service.type].push(instance);
                this.serviceInitCount++;
                service['__loaded__'] = true;
            }
        });

        return this.serviceCount === this.serviceInitCount;
    };

}
