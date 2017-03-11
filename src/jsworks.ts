

/**
 * Adds div with texts to document body.
 * @param text
 * @returns {boolean}
 */
export function addSomethingToDOM(text: string): boolean {
    const div = document.createElement('div');
    div.innerHTML = text;
    document.querySelector('body').appendChild(div);

    return true;
}
