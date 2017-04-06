

declare const JSWorks: any;


/**
 * Декоратор, отмечающий класс как ошибку и доступный через JSWorks.Errors.*
 * @param target
 * @constructor
 */
export function JSWorksError(target: any) {
    JSWorks.Errors = JSWorks.Errors || {};
    let name = target.name;

    if (!name) {
        name = target.toString().split(' ')[1];
    }

    JSWorks.Errors[name] = target;
}
