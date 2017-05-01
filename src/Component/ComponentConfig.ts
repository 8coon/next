import {JSWorksInternal} from '../Common/InternalDecorator';


export enum ComponentTypes {
    COMPONENT,
    PAGE,
}


@JSWorksInternal
export class ComponentConfig {

    /**
     * Типы компонентов
     * @type {ComponentTypes}
     */
    public static readonly Types = ComponentTypes;  // tslint:disable-line

}
