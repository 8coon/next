"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApplicationContext_1 = require("./ApplicationContext/ApplicationContext");
var ApplicationInfoProvider_1 = require("./ApplicationInfo/ApplicationInfoProvider");
var HTMLApplicationInfoProvider_1 = require("./ApplicationInfo/HTMLApplicationInfoProvider");
var HTMLParserService_1 = require("./Parser/HTML/HTMLParserService");
var ParserService_1 = require("./Parser/ParserService");
var Service_1 = require("./Service/Service");
var ServiceHolder_1 = require("./Service/ServiceHolder");
var ServiceAlreadyRegisteredError_1 = require("./Service/Error/ServiceAlreadyRegisteredError");
var ServiceUnresolvableError_1 = require("./Service/Error/ServiceUnresolvableError");
var UnknownServiceError_1 = require("./Service/Error/UnknownServiceError");
var UnknownServiceTypeError_1 = require("./Service/Error/UnknownServiceTypeError");
var ConfigurationService_1 = require("./Configuration/ConfigurationService");
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
/* export function servicesTest(): void {
    const appContext: ApplicationContext = new ApplicationContext();

    // appContext.serviceHolder.registerService(new HTMLParser());

    appContext.run();

    // console.log((<Parser> appContext.serviceHolder.getService('Parser')).getParsedData({}));
} */
JSWorks.init = function () {
    JSWorks.Internal = {};
    JSWorks.Internal.ApplicationContext = ApplicationContext_1.ApplicationContext;
    JSWorks.Internal.ApplicationInfoProvider = ApplicationInfoProvider_1.ApplicationInfoProvider;
    JSWorks.Internal.HTMLApplicationInfoProvider = HTMLApplicationInfoProvider_1.HTMLApplicationInfoProvider;
    JSWorks.Internal.Service = Service_1.Service;
    JSWorks.Internal.ServiceHolder = ServiceHolder_1.ServiceHolder;
    JSWorks.Internal.ParserService = ParserService_1.ParserService;
    JSWorks.Internal.HTMLParserService = HTMLParserService_1.HTMLParserService;
    JSWorks.Internal.ConfigurationService = ConfigurationService_1.ConfigurationService;
    JSWorks.Errors = {};
    JSWorks.Errors.ServiceAlreadyRegisteredError = ServiceAlreadyRegisteredError_1.ServiceAlreadyRegisteredError;
    JSWorks.Errors.ServiceUnresolvableError = ServiceUnresolvableError_1.ServiceUnresolvableError;
    JSWorks.Errors.UnknownServiceError = UnknownServiceError_1.UnknownServiceError;
    JSWorks.Errors.UnknownServiceTypeError = UnknownServiceTypeError_1.UnknownServiceTypeError;
};
window.addEventListener('load', function () {
    JSWorks.init();
});
//# sourceMappingURL=jsworks.js.map