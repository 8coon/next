"use strict";
exports.__esModule = true;
var ServiceAlreadyRegistered_1 = require("./Error/ServiceAlreadyRegistered");
var ServiceUnresolvable_1 = require("./Error/ServiceUnresolvable");
var UnknownServiceType_1 = require("./Error/UnknownServiceType");
var UnknownService_1 = require("./Error/UnknownService");
var ServiceHolder = (function () {
    function ServiceHolder() {
        this.services = {};
        this.serviceInstances = {};
        this.serviceInstancesByType = {};
        this.serviceCount = 0;
        this.serviceInitCount = 0;
    }
    ServiceHolder.prototype.registerService = function (service) {
        if (this.services[service.name]) {
            throw new ServiceAlreadyRegistered_1.ServiceAlreadyRegisteredError(service.name);
        }
        this.services[service.name] = service;
        this.serviceCount++;
    };
    ServiceHolder.prototype.instantiateRequirementsMet = function () {
        var _this = this;
        Object.keys(this.services).forEach(function (name) {
            var service = _this.services[name];
            var args = {};
            var requirementsMet = true;
            service.requires.forEach(function (requiredService) {
                if (!((_this.serviceInstances[requiredService.name]) ||
                    (_this.serviceInstancesByType[requiredService.name]))) {
                    requirementsMet = false;
                    return;
                }
                args[name] = _this.serviceInstances[name];
            });
            if (requirementsMet) {
                _this.serviceInstances[name] = service.getInstance(args);
                _this.serviceInstancesByType[service.type] = _this.serviceInstances[name];
                _this.serviceInitCount++;
            }
        });
        return this.serviceCount === this.serviceInitCount;
    };
    ServiceHolder.prototype.instantiateServices = function () {
        for (var i = 0; i < 100; i++) {
            if (this.instantiateRequirementsMet()) {
                return;
            }
        }
        throw new ServiceUnresolvable_1.ServiceUnresolvableError(this.services, this.serviceInstances);
    };
    ServiceHolder.prototype.getService = function (serviceType) {
        if (this.serviceInstancesByType[serviceType]) {
            return this.serviceInstancesByType[serviceType];
        }
        throw new UnknownServiceType_1.UnknownServiceTypeError(serviceType);
    };
    ServiceHolder.prototype.getServiceByName = function (serviceName) {
        if (this.serviceInstances[serviceName]) {
            return this.serviceInstances[serviceName];
        }
        throw new UnknownService_1.UnknownServiceError(serviceName);
    };
    return ServiceHolder;
}());
exports.ServiceHolder = ServiceHolder;
//# sourceMappingURL=ServiceHolder.js.map