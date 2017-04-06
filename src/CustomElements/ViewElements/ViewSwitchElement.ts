import {JSWorksInternal} from '../../Common/InternalDecorator';
import {JSWorksCustomElement} from '../CustomElementDecorator';
import {ViewConfig} from '../../View/ViewConfig';
import {SimpleVirtualDOM} from '../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOM';
import {View} from '../../View/View';
import {SimpleVirtualDOMElement} from '../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElement';
import {ForbiddenTagError} from '../../Error/ForbiddenTagError';
import {AbstractListeningElement} from './AbstractListeningElement';
import {DuplicateSwitchCaseError} from '../../Error/DuplicateSwitchCaseError';


@JSWorksInternal
@JSWorksCustomElement(ViewConfig.VIEW_SWITCH_TAG)
export class ViewSwitchElement extends AbstractListeningElement {


    private switches: object = {};
    private conditions: string[] = [];
    private lastCondition: string;


    /**
     * Фабрика ViewSwitchElement
     * @returns {undefined}
     */
    public createElement(): ViewSwitchElement {
        super.createElement();
        return new ViewSwitchElement(SimpleVirtualDOM.NextHash());
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

                case ViewConfig.VIEW_CASE_TAG: {
                    const condition = child.getAttribute('condition') || 'true';

                    if (this.switches[condition]) {
                        throw new DuplicateSwitchCaseError(condition);
                    }

                    this.switches[condition] = child;
                    this.conditions.push(condition);
                } break;

                case undefined: break;

                default: {
                    throw new ForbiddenTagError(child.tagName, 'switch block');
                }

            }

            this.removeChild(child);
        });
    }


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
    public propertyChange(): void {
        this.removeChildren();
        let found = false;

        this.conditions.forEach((condition) => {
            if (found) {
                return;
            }

            if (this.execStatement(condition)) {
                if (condition === this.lastCondition) {
                    found = true;
                    return;
                }

                this.appendChild(<SimpleVirtualDOMElement[]> Array.from(this.switches[condition].children));
                found = true;
            }
        });
    }

}
