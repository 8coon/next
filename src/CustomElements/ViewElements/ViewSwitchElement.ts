import {JSWorksInternal} from '../../Common/InternalDecorator';
import {JSWorksCustomElement} from '../CustomElementDecorator';
import {ViewConfig} from '../../View/ViewConfig';
import {SimpleVirtualDOM} from '../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOM';
import {View} from '../../View/View';
import {SimpleVirtualDOMElement} from '../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElement';
import {ForbiddenTagError} from '../../Error/ForbiddenTagError';
import {AbstractListeningElement} from './AbstractListeningElement';


@JSWorksInternal
@JSWorksCustomElement(ViewConfig.VIEW_SWITCH_TAG)
export class ViewSwitchElement extends AbstractListeningElement {


    private switches: object = {};


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
        super.propagateView(view);

        this._children.forEach((child: SimpleVirtualDOMElement) => {
            switch (child.tagName) {

                case ViewConfig.VIEW_CASE_TAG: {
                    // if (this.switches[])
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
     * <view-switch name="color">
     *     <view-case condition="$ === 'red'">
     *         Color is definitely red.
     *     </view-case>
     *     <view-case condition="$ === 'green'">
     *         Sure Color is green.
     *     </view-case>
     *     <view-case condition="$ === 'blue'">
     *         No doubt your Color is blue.
     *     </view-case>
     * </view-switch>
     */
    public propertyChange(): void {
        return;
    }

}
