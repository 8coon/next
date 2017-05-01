/**
 * Декоратор, объявляющий сервис
 * @param name
 * @param type
 * @param dependencies
 * @returns {(target:any)=>undefined}
 * @constructor
 */
export declare function JSWorksService(name: string, type: string, dependencies?: any[]): (target: any) => void;
