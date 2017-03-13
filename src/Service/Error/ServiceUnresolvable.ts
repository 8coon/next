

export class ServiceUnresolvableError extends Error {

    constructor(servicesPresent: Object, servicesResolved: Object) {
        const unresolved: Array<string> = [];

        Object.keys(servicesPresent).forEach((name: string) => {
            if (!(servicesResolved[name])) {
                unresolved.push(name);
            }
        });

        super(`Some services have unresolved dependencies: "${unresolved.join(', ')}"`);
    }

}