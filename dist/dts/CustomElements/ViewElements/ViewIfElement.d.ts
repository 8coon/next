import { View } from '../../View/View';
import { AbstractConditionElement } from './AbstractConditionElement';
export declare class ViewIfElement extends AbstractConditionElement {
    private thenTemplate;
    private elseTemplate;
    /**
     * Фабрика ViewIfElement
     * @returns {undefined}
     */
    createElement(): ViewIfElement;
    /**
     * Сбросить шаблон
     */
    customClear(): void;
    /**
     * Обновить все ноды в ветках условия
     */
    customUpdate(): void;
    /**
     * См. View.propagateView
     * @param view
     */
    propagateView(view: View): void;
    /**
     * <view-if condition="$.propertyName.toNumber() >= 3">
     *     <view-then>
     *         Greater or equals 3!
     *     </view-then>
     *     <view-else>
     *         Less than 3!
     *     </view-else>
     * </view-if>
     * @param newValue
     */
    conditionChange(newValue: any): void;
    protected customCloneNode(node: ViewIfElement): void;
    protected superCreateElement(): void;
}
