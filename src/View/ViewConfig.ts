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

}
