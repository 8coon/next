import {JSWorksInternal} from '../Common/InternalDecorator';
import {ControllerAlreadyRegisteredError} from './Error/ControllerAlreadyRegisteredError';
import {Controller} from './Controller';
import {UknownControllerError} from './Error/UknownControllerError';


@JSWorksInternal
export class ControllerHolder {

    private controllers: object = {};
    private controllerCount: number = 0;


    /**
     * Зарегистрировать контроллер
     * @param controller экземпляр контролера имеет поле namе, оно же тип класса контроллера
     */
    public registerController(controller: any): void {
        if (this.controllers[controller.name]) {
            throw new ControllerAlreadyRegisteredError(controller.name);
        }

        this.controllers[controller.name] = controller;
        this.controllerCount++;
    }

    /**
     * Получить контроллер по имени(типу)
     * @param name
     * @returns {Controller} экземляр контроллера
     */
    public getController(name: string): Controller {
        if (!this.controllers[name]) {
            throw new UknownControllerError(name);
        }
        return this.controllers[name];
    }

}
