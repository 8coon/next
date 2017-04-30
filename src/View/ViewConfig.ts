import {JSWorksInternal} from '../Common/InternalDecorator';


@JSWorksInternal
export class ViewConfig {

    /**
     * Тэг шаблона View
     * @type {string}
     */
    public static readonly VIEW_TEMPLATE_TAG: string = 'APP-VIEW';


    /**
     * Тэг отрендеренной View
     * @type {string}
     */
    public static readonly VIEW_TAG: string = 'APP-VIEW';


    /**
     * Тэг view-yield
     * @type {string}
     */
    public static readonly VIEW_YIELD_TAG: string = 'VIEW-YIELD';


    /**
     * Тэг view-include
     * @type {string}
     */
    public static readonly VIEW_INCLUDE_TAG: string = 'VIEW-INCLUDE';


    /**
     * Тэг view-param
     * @type {string}
     */
    public static readonly VIEW_PARAM_TAG: string = 'VIEW-PARAM';


    /**
     * Тэг view-if
     * @type {string}
     */
    public static readonly VIEW_IF_TAG: string = 'VIEW-IF';


    /**
     * Тэг view-then (внутри view-if)
     * @type {string}
     */
    public static readonly VIEW_THEN_TAG: string = 'VIEW-THEN';


    /**
     * Тэг view-else (внутри view-if)
     * @type {string}
     */
    public static readonly VIEW_ELSE_TAG: string = 'VIEW-ELSE';


    /**
     * Тэг view-switch
     * @type {string}
     */
    public static readonly VIEW_SWITCH_TAG: string = 'VIEW-SWITCH';


    /**
     * Тэг view-case (внутри view-switch)
     * @type {string}
     */
    public static readonly VIEW_CASE_TAG: string = 'VIEW-CASE';


    /**
     * Тэг view-for
     * @type {string}
     */
    public static readonly VIEW_FOR_TAG: string = 'VIEW-FOR';


    /**
     * Тэг view-item
     * @type {string}
     */
    public static readonly VIEW_ITEM: string = 'VIEW-ITEM';


    /**
     * Тэг view-eval
     * @type {string}
     */
    public static readonly VIEW_EVAL_TAG: string = 'VIEW-EVAL';


    /**
     * Корневой тэг, куда рендерятся все View
     * @type {string}
     */
    public static readonly ROOT_TAG: string = 'APP-MAIN';


    /**
     * Тэг, встраивающий в страницу компонент
     * @type {string}
     */
    public static readonly COMPONENT_TAG = 'VIEW-COMPONENT';


    /**
     * Тэг, встраивающий в страницу форму
     * @type {string}
     */
    public static readonly FORM_FOR_TAG = 'FORM-FOR';


    /**
     * Тэг, указывающий на поле формы
     * @type {string}
     */
    public static readonly FORM_FIELD_TAG = 'FORM-FIELD';


    /**
     * Тэг, указывающий на блок сообщений формы или поля
     * @type {string}
     */
    public static readonly FORM_MESSAGES_TAG = 'FORM-MESSAGES';

}
