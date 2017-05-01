import {SimpleVirtualDOMElement} from './SimpleVirtualDOMElement';
import {JSWorksInternal} from '../../Common/InternalDecorator';


@JSWorksInternal
export abstract class SimpleVirtualDOMElementExt extends SimpleVirtualDOMElement {


    /**
     * Выполняет выражение в области видимости View
     * @param statement
     * @param scope
     */
    public execStatement(statement: string, scope = this.view.component): any {
        if (!this.view || !this.view.component) {
            return;
        }

        const variables = Object.keys(this.view.component.variables);
        const values = [];

        variables.forEach((varName) => {
            values.push(this.view.component.variables[varName]);
        });

        values.push(scope);
        variables.push('$');

        const condFunc = new Function(variables.join(','), `return ${statement};`);

        try {
            return condFunc.call({}, ...values);
        } catch (e) {
            console.error(`Error in statement "${statement}": ${e}`);

            return undefined;
        }
    }


    /**
     * Метод, возвращающий новый экземпляр данного элемента
     */
    public abstract createElement(): SimpleVirtualDOMElementExt;

}
