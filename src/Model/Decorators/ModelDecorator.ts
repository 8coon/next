

declare const __JSWorks_models__: any[];


/**
 * Декоратор модели
 * @param target
 * @constructor
 */
export function JSWorksModel(target: any) {
    __JSWorks_models__[target.name] = __JSWorks_models__[target.name] || {};
    __JSWorks_models__[target.name].proto = target;
}
