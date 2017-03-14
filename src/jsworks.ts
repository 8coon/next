

import {ApplicationContext} from "./ApplicationContext/ApplicationContext";
import {HTMLParser} from "./Parser/HTML/HTMLParser";
import {Parser} from "./Parser/Parser";
declare const JSWorks: any;


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


export function servicesTest(): void {
    const appContext: ApplicationContext = new ApplicationContext();

    appContext.serviceHolder.registerService(new HTMLParser());

    appContext.run();

    console.log((<Parser> appContext.serviceHolder.getService('Parser')).getParsedData({}));
}


JSWorks.addSomethingToDOM = addSomethingToDOM;
JSWorks.servicesTest = servicesTest;

