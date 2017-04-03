import {JSWorksInternal} from '../Common/InternalDecorator';
import {ControllerAlreadyRegisteredError} from '../Error/ControllerAlreadyRegisteredError';
import {Controller} from './Controller';
import {UnknownControllerError} from '../Error/UnknownControllerError';


declare const __JSWorks_controllers__: any;


@JSWorksInternal
export class ControllerHolder {

    private controllers: object = {};
    private controllerCount: number = 0;


    /**
     * Загрузить все существующие контроллеры
     */
    public load(): void {
        __JSWorks_controllers__.forEach((controller) => {
            this.registerController(controller);
        });
    }


    /**
     * Зарегистрировать контроллер
     * @param controllerProto экземпляр контролера имеет поле namе, оно же тип класса контроллера
     */
    public registerController(controllerProto): void {
        if (this.controllers[controllerProto.name]) {
            throw new ControllerAlreadyRegisteredError(controllerProto.name);
        }

        this.controllers[controllerProto.name] = new controllerProto();
        this.controllerCount++;
    }


    /**
     * Получить контроллер по имени(типу)
     * @param name
     * @returns {Controller} экземляр контроллера
     */
    public getController(name: string): Controller {
        if (!this.controllers[name]) {
            throw new UnknownControllerError(name);
        }

        return this.controllers[name];
    }

}
