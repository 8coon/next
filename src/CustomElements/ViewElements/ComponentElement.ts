import {SimpleVirtualDOMElementExt} from '../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElementExt';
import {JSWorksInternal} from '../../Common/InternalDecorator';
import {JSWorksCustomElement} from '../CustomElementDecorator';
import {ViewConfig} from '../../View/ViewConfig';
import {EventManager} from '../../EventManager/EventManager';
import {EventType} from '../../EventManager/EventType';
import {IEvent} from '../../EventManager/IEvent';
import {SimpleVirtualDOM} from '../../VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOM';
import {ApplicationContext} from '../../ApplicationContext/ApplicationContext';
import {AttributeNotFoundError} from '../../Error/AttributeNotFoundError';


declare const JSWorks: any;


@JSWorksInternal
@JSWorksCustomElement(ViewConfig.COMPONENT_TAG)
export class ComponentElement extends SimpleVirtualDOMElementExt {


    protected static isComponentAttribute(name: string): boolean {
        name = name.toLowerCase();
        return name === 'id' || name === 'name' || name === 'class' || name === 'style';
    }


    /**
     * Компонент
     */
    public component;


    /**
     * Проинициализировать этот элемент компонентом
     */
    public init(): void {
        EventManager.subscribe(this, this, EventType.CREATE, (ev) => {
            if (this.attributes['name'] === undefined) {
                return;
            }

            const appContext: ApplicationContext = JSWorks.applicationContext;
            const componentProto = appContext.componentHolder.getComponentPrototype(this.attributes['name']);
            const componentName: string = appContext.componentHolder.duplicateComponent(componentProto);

            this.component = appContext.componentHolder.getComponent(componentName);
            this.component.element = this;

            Object.keys(this.attributes).forEach((attrName: string) => {
                if (ComponentElement.isComponentAttribute(attrName)) {
                    return;
                }

                this.component[attrName] = this.attributes[attrName];
            });

            EventManager.subscribe(this, this.component, EventType.PostUpdate, (ev2) => {
                this.syncAttributes();
            });
        });
    }


    /**
     * Фабрика componentElement
     * @returns {ComponentElement}
     */
    public createElement(): ComponentElement {
        const element: ComponentElement = new ComponentElement(SimpleVirtualDOM.NextHash());
        element.init();

        return element;
    }


    /**
     * Отрисовка ComponentElement в DOM браузера
     */
    public render(): void {
        super.render();
    }


    /**
     * Задание атрибута
     * @param name
     * @param value
     */
    public setAttribute(name: string, value?: any): void {
        super.setAttribute(name, value);

        if (ComponentElement.isComponentAttribute(name) || !this.component) {
            return;
        }

        this.component[name] = value;
    }


    /**
     * Чтение атрибута
     * @param name
     */
    public getAttribute(name: string): any {
        return super.getAttribute(name);
    }


    /**
     * Проверка атрибута на существование
     * @param name
     */
    public hasAttribute(name: string): boolean {
        return super.hasAttribute(name);
    }


    protected syncAttributes(): void {
        this.component.fields.forEach((name: string) => {
            this.attributes[name] = this.component[name];

            this.emitMutilationEvent({ type: EventType.DOMPropertyChange, data: this });
        });
    }

}
