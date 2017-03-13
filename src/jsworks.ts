

declare const JSWorks: any;


/**
 * Adds div with texts to document body.
 * @param text
 * @returns {boolean}
 */
export function addSomethingToDOM(text: string): boolean {
    JSWorks.addSomethindToDOM = addSomethingToDOM;

    const div = document.createElement('div');
    div.innerHTML = text;
    document.querySelector('body').appendChild(div);

    return true;
}


JSWorks.addSomethingToDOM = addSomethingToDOM;

