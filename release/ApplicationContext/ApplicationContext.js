"use strict";
exports.__esModule = true;
var ServiceHolder_1 = require("../Service/ServiceHolder");
var ApplicationContext = (function () {
    function ApplicationContext() {
        this.serviceHolder = new ServiceHolder_1.ServiceHolder();
    }
    ApplicationContext.prototype.run = function () {
        this.serviceHolder.instantiateServices();
    };
    return ApplicationContext;
}());
exports.ApplicationContext = ApplicationContext;
//# sourceMappingURL=ApplicationContext.js.map