export declare class ViewConfig {
    /**
     * Тэг шаблона View
     * @type {string}
     */
    static readonly VIEW_TEMPLATE_TAG: string;
    /**
     * Тэг отрендеренной View
     * @type {string}
     */
    static readonly VIEW_TAG: string;
    /**
     * Тэг view-yield
     * @type {string}
     */
    static readonly VIEW_YIELD_TAG: string;
    /**
     * Тэг view-include
     * @type {string}
     */
    static readonly VIEW_INCLUDE_TAG: string;
    /**
     * Тэг view-param
     * @type {string}
     */
    static readonly VIEW_PARAM_TAG: string;
    /**
     * Тэг view-if
     * @type {string}
     */
    static readonly VIEW_IF_TAG: string;
    /**
     * Тэг view-then (внутри view-if)
     * @type {string}
     */
    static readonly VIEW_THEN_TAG: string;
    /**
     * Тэг view-else (внутри view-if)
     * @type {string}
     */
    static readonly VIEW_ELSE_TAG: string;
    /**
     * Тэг view-switch
     * @type {string}
     */
    static readonly VIEW_SWITCH_TAG: string;
    /**
     * Тэг view-case (внутри view-switch)
     * @type {string}
     */
    static readonly VIEW_CASE_TAG: string;
    /**
     * Тэг view-for
     * @type {string}
     */
    static readonly VIEW_FOR_TAG: string;
    /**
     * Тэг view-item
     * @type {string}
     */
    static readonly VIEW_ITEM: string;
    /**
     * Тэг view-eval
     * @type {string}
     */
    static readonly VIEW_EVAL_TAG: string;
    /**
     * Корневой тэг, куда рендерятся все View
     * @type {string}
     */
    static readonly ROOT_TAG: string;
    /**
     * Тэг, встраивающий в страницу компонент
     * @type {string}
     */
    static readonly COMPONENT_TAG: string;
    /**
     * Тэг, встраивающий в страницу форму
     * @type {string}
     */
    static readonly FORM_FOR_TAG: string;
    /**
     * Тэг, указывающий на поле формы
     * @type {string}
     */
    static readonly FORM_FIELD_TAG: string;
    /**
     * Тэг, указывающий на блок сообщений формы или поля
     * @type {string}
     */
    static readonly FORM_MESSAGES_TAG: string;
    /**
     * Тэг, указывающий на ссылку на роут
     * @type {string}
     */
    static readonly LINK_TO_TAG: string;
}
