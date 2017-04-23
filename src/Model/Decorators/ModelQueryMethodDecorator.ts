

declare const __JSWorks_models__: any[];


/**
 * Декоратор метода чтения
 * @param target
 * @param name
 * @constructor
 */
export function JSWorksModelQueryMethod(target: any, name: string) {
    let className: string = target.name;

    if (target.constructor && target.constructor.name) {
        className = target.constructor.name;
    }

    __JSWorks_models__[className] = __JSWorks_models__[className] || {};
    __JSWorks_models__[className].queryMethod = name;
}
