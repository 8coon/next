import {JSWorksLib} from '../jsworks';


declare const JSWorks: JSWorksLib;


/**
 * Декоратор, отмечающий класс как внутренний и доступный через JSWorks.Internal.*
 * @param target
 * @constructor
 */
export function JSWorksInternal(target: any) {
    JSWorks.Internal = JSWorks.Internal || {};
    let name = target.name;

    if (!name) {
        name = target.toString().split(' ')[1];
    }

    JSWorks.Internal[name] = target;
}
