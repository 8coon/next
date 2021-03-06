import {JSWorksInternal} from '../../Common/InternalDecorator';
import {View} from '../../View/View';
import {JSWorksCustomElement} from '../CustomElementDecorator';
import {ViewConfig} from '../../View/ViewConfig';
import {SimpleVirtualDOM} from '../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOM';
import {AbstractConditionElement} from './AbstractConditionElement';
import {SimpleVirtualDOMElement} from '../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElement';
import {ForbiddenTagError} from '../../Error/ForbiddenTagError';


@JSWorksInternal
@JSWorksCustomElement(ViewConfig.VIEW_IF_TAG)
export class ViewIfElement extends AbstractConditionElement {

    private thenTemplate: SimpleVirtualDOMElement;
    private elseTemplate: SimpleVirtualDOMElement;


    /**
     * Фабрика ViewIfElement
     * @returns {undefined}
     */
    public createElement(): ViewIfElement {
        const element: ViewIfElement = new ViewIfElement(SimpleVirtualDOM.NextHash());
        element.superCreateElement();

        return element;
    }


    /**
     * Сбросить шаблон
     */
    public customClear(): void {
        super.customClear();

        if (!this.thenTemplate && !this.elseTemplate) {
            return;
        }

        this.removeChildren();

        if (this.thenTemplate) {
            this.appendChild(this.thenTemplate);
        }

        if (this.elseTemplate) {
            this.appendChild(this.elseTemplate);
        }

        this.thenTemplate = undefined;
        this.elseTemplate = undefined;
    }


    /**
     * Обновить все ноды в ветках условия
     */
    public customUpdate(): void {
        super.customUpdate();

        if (this.thenTemplate) {
            this.thenTemplate.customUpdate();
        }

        if (this.elseTemplate) {
            this.elseTemplate.customUpdate();
        }
    }


    /**
     * См. View.propagateView
     * @param view
     */
    public propagateView(view: View): void {
        if (this.view === view) {
            return;
        }

        super.propagateView(view);

        if (this.thenTemplate) {
            this.thenTemplate.propagateView(view);
        }

        if (this.elseTemplate) {
            this.elseTemplate.propagateView(view);
        }

        if (this.thenTemplate || this.elseTemplate) {
            return;
        }

        this._children.forEach((child: SimpleVirtualDOMElement) => {
            switch (child.tagName) {

                case ViewConfig.VIEW_THEN_TAG: {
                    this.thenTemplate = child;
                } break;

                case ViewConfig.VIEW_ELSE_TAG: {
                    this.elseTemplate = child;
                } break;

                case undefined: break;

                default: {
                    throw new ForbiddenTagError(child.tagName, 'if condition');
                }

            }
        });

        this.removeChildren();
    }


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
    public conditionChange(newValue: any): void {
        /* if (!this.thenTemplate && !this.elseTemplate) {
            const view: View = this.view;
            this.view = undefined;

            this.propagateView(view);
        } */

        this.removeChildren();

        if (newValue) {
            this.appendChild((<any> this.thenTemplate)._children);
        } else {
            this.appendChild((<any> this.elseTemplate)._children);
        }
    }


    protected customCloneNode(node: ViewIfElement): void {
        super.customCloneNode(node);

        if (this.thenTemplate) {
            node.thenTemplate = this.thenTemplate.cloneNode();
        }

        if (this.elseTemplate) {
            node.elseTemplate = this.elseTemplate.cloneNode();
        }
    }


    protected superCreateElement(): void {
        super.createElement();
    }

}
