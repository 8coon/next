import {Service} from "./Service";
import {ServiceAlreadyRegisteredError} from "./Error/ServiceAlreadyRegistered";
import {ServiceUnresolvableError} from "./Error/ServiceUnresolvable";
import InterfaceType = ts.InterfaceType;


export class ServiceHolder {

    private services: Object = {};
    private serviceInstances: Object = {};
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
                if (!(this.services[requiredService.name])) {
                    requirementsMet = false;
                    return;
                }

                args[name] = this.serviceInstances[name];
            });

            if (requirementsMet) {
                this.serviceInstances[name] = service.getInstance(args);
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


    public getService(serviceType: InterfaceType): Service {
        return null;
    }

}