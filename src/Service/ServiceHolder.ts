import {Service} from "./Service";
import {ServiceAlreadyRegisteredError} from "./Error/ServiceAlreadyRegistered";
import {ServiceUnresolvableError} from "./Error/ServiceUnresolvable";
import {UnknownServiceTypeError} from "./Error/UnknownServiceType";
import {UnknownServiceError} from "./Error/UnknownService";


export class ServiceHolder {

    private services: Object = {};
    private serviceInstances: Object = {};
    private serviceInstancesByType: Object = {};
    private serviceCount: number = 0;
    private serviceInitCount: number = 0;


    public constructor() {
    }


    public registerService(service: Service): void {
        if (this.services[service.name]) {
            throw new ServiceAlreadyRegisteredError(service.name);
        }

        this.services[service.name] = service;
        this.serviceCount++;
    }


    private instantiateRequirementsMet(): boolean {
        Object.keys(this.services).forEach((name: string) => {
            const service: Service = this.services[name];
            const args: Object = {};
            let requirementsMet = true;

            service.requires.forEach((requiredService: Service) => {
                if (!((this.serviceInstances[requiredService.name]) ||
                        (this.serviceInstancesByType[requiredService.name]))) {
                    requirementsMet = false;
                    return;
                }

                args[name] = this.serviceInstances[name];
            });

            if (requirementsMet) {
                this.serviceInstances[name] = service.getInstance(args);
                this.serviceInstancesByType[service.type] = this.serviceInstances[name];
                this.serviceInitCount++;
            }
        });

        return this.serviceCount === this.serviceInitCount;
    }


    public instantiateServices(): void {
        for (let i: number = 0; i < 100; i++) {
            if (this.instantiateRequirementsMet()) {
                return;
            }
        }

        throw new ServiceUnresolvableError(this.services, this.serviceInstances);
    }


    public getService(serviceType: string): Service {
        if (this.serviceInstancesByType[serviceType]) {
            return this.serviceInstancesByType[serviceType];
        }

        throw new UnknownServiceTypeError(serviceType);
    }


    public getServiceByName(serviceName: string): Service {
        if (this.serviceInstances[serviceName]) {
            return this.serviceInstances[serviceName];
        }

        throw new UnknownServiceError(serviceName);
    }

}