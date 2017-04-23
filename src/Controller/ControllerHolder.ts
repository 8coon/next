import {JSWorksInternal} from '../Common/InternalDecorator';
import {ControllerAlreadyRegisteredError} from '../Error/ControllerAlreadyRegisteredError';
import {UnknownControllerError} from '../Error/UnknownControllerError';
import {ApplicationContext} from '../ApplicationContext/ApplicationContext';


declare const __JSWorks_controllers__: any[];


@JSWorksInternal
export class ControllerHolder {

    private controllers: object = {};
    private prototypes: object = {};
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
     * @param name
     */
    public registerController(controllerProto, name?: string): void {
        name = name || controllerProto.name;

        if (this.controllers[name]) {
            throw new ControllerAlreadyRegisteredError(name);
        }

        this.controllers[name] = new controllerProto();
        this.prototypes[name] = controllerProto;
        this.controllerCount++;
    }


    /**
     * Создать дубликат контроллера и вернуть его имя
     * @param oldName
     */
    public duplicateController(oldName: string): string {
        const newName = ApplicationContext.UniqueName(oldName, (name: string) => { return this.controllers[name]; });
        this.registerController(this.prototypes[oldName], newName);

        return newName;
    }


    /**
     * Получить контроллер по имени(типу)
     * @param name
     * @returns {object} экземляр контроллера
     */
    public getController(name: string): object {
        if (!this.controllers[name]) {
            throw new UnknownControllerError(name);
        }

        return this.controllers[name];
    }

}
