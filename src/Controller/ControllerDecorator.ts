
declare const __JSWorks_controllers__: any;

/**
 * Декоратор, объявляющий контроллер
 * @param target
 * @constructor
 */
export function JSWorksController(target: any) {
    const controller = new target();

    controller.name = target.name;

    __JSWorks_controllers__.push(controller);
}

