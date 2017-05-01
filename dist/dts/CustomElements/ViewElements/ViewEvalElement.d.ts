import { View } from '../../View/View';
import { SimpleVirtualDOMElementExt } from '../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElementExt';
export declare class ViewEvalElement extends SimpleVirtualDOMElementExt {
    private lastValue;
    /**
     * Фабрика ViewEvalElement
     * @returns {ViewEvalElement}
     */
    createElement(): ViewEvalElement;
    /**
     * См. View.propagateView
     * @param view
     */
    propagateView(view: View): void;
    /**
     * Обновляет значение
     */
    customUpdate(): void;
    /**
     * Изменение результата связанного с этим ViewEvalElement выражения
     * @param newValue
     */
    valueChange(newValue: any): void;
}
