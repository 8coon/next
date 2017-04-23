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
     * Фабрика ViewForElement
     * @returns {undefined}
     */
    public createElement(): ViewSwitchElement {
        const element: ViewSwitchElement = new ViewSwitchElement(SimpleVirtualDOM.NextHash());
        element.superCreateElement();

        return element;
    }


    /**
     * Обновить все ноды в ветках условия
     */
    public customUpdate(): void {
        super.customUpdate();

        Object.keys(this.switches).forEach((condition) => {
            this.switches[condition].customUpdate();
        });
    }


    /**
     * Сбросить шаблон
     */
    public customClear(): void {
        super.customClear();

        if (this.conditions.length === 0) {
            return;
        }

        this.removeChildren();

        this.conditions.forEach((condition: string) => {
            this.appendChild(this.switches[condition]);
        });

        this.conditions = [];
        this.switches = {};
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

        Object.keys(this.switches).forEach((condition) => {
            this.switches[condition].propagateView(view);
        });

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
        });

        this.removeChildren();
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
        // if (this.conditions.length === 0) {
        //     const view: View = this.view;
        //     this.view = undefined;
        //
        //     this.propagateView(view);
        // }

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


    protected customCloneNode(node: ViewSwitchElement): void {
        super.customCloneNode(node);

        Object.keys(this.switches).forEach((condition) => {
            node.switches[condition] = this.switches[condition].cloneNode();
            node.conditions.push(condition);
        });
    }


    protected superCreateElement(): void {
        super.createElement();
    }

}
