
declare const __JSWorks_controllers__: any[];

/**
 * Декоратор, объявляющий контроллер
 * @param target
 * @constructor
 */
export function JSWorksController(target: any) {
    __JSWorks_controllers__.push(target);
}

