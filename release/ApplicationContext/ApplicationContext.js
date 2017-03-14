"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ServiceHolder_1 = require("../Service/ServiceHolder");
var ApplicationContext = (function () {
    function ApplicationContext() {
        /**
         * Все сервисы хранятся тут
         * @type {ServiceHolder}
         */
        this.serviceHolder = new ServiceHolder_1.ServiceHolder();
    }
    Object.defineProperty(ApplicationContext.prototype, "config", {
        get: function () {
            return this.configuration;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Точка входа в приложение JSWorks
     */
    ApplicationContext.prototype.run = function () {
        this.serviceHolder.instantiateServices();
        this.configuration = this.serviceHolder.getService('Configuration');
    };
    return ApplicationContext;
}());
exports.ApplicationContext = ApplicationContext;
//# sourceMappingURL=ApplicationContext.js.map