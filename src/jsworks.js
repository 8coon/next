"use strict";
exports.__esModule = true;
var ApplicationContext_1 = require("./ApplicationContext/ApplicationContext");
var HTMLParser_1 = require("./Parser/HTML/HTMLParser");
/**
 * Adds div with texts to document body.
 * @param text
 * @returns {boolean}
 */
function addSomethingToDOM(text) {
    var div = document.createElement('div');
    div.innerHTML = text;
    document.querySelector('body').appendChild(div);
    return true;
}
exports.addSomethingToDOM = addSomethingToDOM;
function servicesTest() {
    var appContext = new ApplicationContext_1.ApplicationContext();
    appContext.serviceHolder.registerService(new HTMLParser_1.HTMLParser());
    appContext.run();
    console.log(appContext.serviceHolder.getService('Parser').getParsedData({}));
}
exports.servicesTest = servicesTest;
JSWorks.addSomethingToDOM = addSomethingToDOM;
JSWorks.servicesTest = servicesTest;
//# sourceMappingURL=jsworks.js.map