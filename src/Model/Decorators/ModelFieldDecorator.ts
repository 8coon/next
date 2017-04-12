

declare const __JSWorks_models__: any[];


/**
 * Декоратор поля модели
 * @param target
 * @param name
 * @constructor
 */
export function JSWorksModelField(target: any, name: string) {
    let className = target.name;

    if (target.constructor && target.constructor.name) {
        className = target.constructor.name;
    }

    __JSWorks_models__[className] = __JSWorks_models__[className] || {};
    __JSWorks_models__[className].fields = __JSWorks_models__[className].fields || [];
    __JSWorks_models__[className].fields.push(name);
}
