

declare const __JSWorks_models__: any[];


/**
 * Декоратор первичного ключа модели
 * @param target
 * @param name
 * @constructor
 */
export function JSWorksModelPrimaryKey(target: any, name: string) {
    let className = target.name;

    if (target.constructor && target.constructor.name) {
        className = target.constructor.name;
    }

    __JSWorks_models__[className] = __JSWorks_models__[className] || {};
    __JSWorks_models__[className].primaryKey = name;
}
