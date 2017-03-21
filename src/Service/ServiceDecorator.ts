

declare const __JSWorks_services__: any;


/**
 * Декоратор, объявляющий сервис
 * @param name
 * @param type
 * @param dependencies
 * @returns {(target:any)=>undefined}
 * @constructor
 */
export function JSWorksService(name: string, type: string, dependencies?: any[]) {
    dependencies = dependencies || [];

    return (target: any) => {
        const service = new target();

        service.name = name;
        service.type = type;
        service.requires = dependencies;

        __JSWorks_services__.push(service);
    };
}
