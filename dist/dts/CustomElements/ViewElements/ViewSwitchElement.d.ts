import { View } from '../../View/View';
import { AbstractListeningElement } from './AbstractListeningElement';
export declare class ViewSwitchElement extends AbstractListeningElement {
    private switches;
    private conditions;
    private lastCondition;
    /**
     * Фабрика ViewForElement
     * @returns {undefined}
     */
    createElement(): ViewSwitchElement;
    /**
     * Обновить все ноды в ветках условия
     */
    customUpdate(): void;
    /**
     * Сбросить шаблон
     */
    customClear(): void;
    /**
     * См. View.propagateView
     * @param view
     */
    propagateView(view: View): void;
    /**
     * <view-switch>
     *     <view-case condition="$.color === 'red'">
     *         Color is definitely red.
     *     </view-case>
     *     <view-case condition="$.color === 'green'">
     *         Sure Color is green.
     *     </view-case>
     *     <view-case condition="$.color === 'blue'">
     *         No doubt your Color is blue.
     *     </view-case>
     * </view-switch>
     */
    propertyChange(): void;
    protected customCloneNode(node: ViewSwitchElement): void;
    protected superCreateElement(): void;
}
