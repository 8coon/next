

declare const __JSWorks_custom_elements__: any;


/**
 * Декоратор пользовательского HTML-элемента
 * @param tagName
 * @returns {(target:any)=>undefined}
 * @constructor
 */
export function JSWorksCustomElement(tagName: string) {
    return (target: any) => {
        target.__tagName__ = tagName;

        __JSWorks_custom_elements__.push(target);
    };
}
