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
        super.createElement();
        return new ViewIfElement(SimpleVirtualDOM.NextHash());
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

            this.removeChild(child);
        });
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
        this.removeChildren();

        if (newValue) {
            this.appendChild(<SimpleVirtualDOMElement[]> Array.from(this.thenTemplate.children));
        } else {
            this.appendChild(<SimpleVirtualDOMElement[]> Array.from(this.elseTemplate.children));
        }
    }

}
