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

}
