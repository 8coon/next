import {JSWorksInternal} from '../Common/InternalDecorator';
import {IModel} from '../Model/IModel';
import {IInterceptor} from '../Interceptor/IInterceptor';
import {IEventEmitter} from '../EventManager/IEventEmitter';
import {IEvent} from '../EventManager/IEvent';


type SubmitCallback = (form?: Form) => Promise<any>;
type ModelSaveCallback = (form?: Form, model?: IModel) => Promise<any>;


@JSWorksInternal
export class Form implements IEventEmitter {


    /**
     * Экземпляр модели, соответствующей данному экземпляру формы
     */
    public model: IModel;


    /**
     * Перехватчик отправки формы
     */
    public submitInterceptor: IInterceptor;


    /**
     * Имя метода сохранения у модели
     * @type {string}
     */
    public modelSaveMethod: string = 'save';


    /**
     * Обработчик отправки формы
     */
    public onSubmit: SubmitCallback = (form: Form): Promise<any> => {
        if (form.submitInterceptor) {
            return form.submitInterceptor.intercept({ form });
        }

        return form.modelSaveCallback(form, form.model);
    }


    /**
     * Обработчик сохранения модели
     * @param form
     * @param model
     */
    public modelSaveCallback: ModelSaveCallback = (form: Form, model: IModel) => {
        return model[form.modelSaveMethod]();
    }


    /**
     * Отправить форму
     */
    public submit(): void {
        // Отправить форму
    }


    public emitEvent(event: IEvent): void {} // tslint:disable-line
}
