"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ServiceAlreadyRegisteredError_1 = require("./Error/ServiceAlreadyRegisteredError");
var ServiceUnresolvableError_1 = require("./Error/ServiceUnresolvableError");
var UnknownServiceError_1 = require("./Error/UnknownServiceError");
var UnknownServiceTypeError_1 = require("./Error/UnknownServiceTypeError");
var ServiceHolder = (function () {
    function ServiceHolder() {
        this.services = {};
        this.serviceInstances = {};
        this.serviceInstancesByType = {};
        this.serviceCount = 0;
        this.serviceInitCount = 0;
    }
    /**
     * Конструктор по умолчанию
     */
    /*public constructor() {
    }*/
    /**
     * Зарегистрировать сервис
     * @param service экземпляр сервиса, либо объект с двумя полями: name и type. Поле name
     * является необизательным. В случае, когда это поле будет undefined, регистрируемый сервис
     * будет проинициализирован первым попавшимся сервисом подходящего типа.
     */
    ServiceHolder.prototype.registerService = function (service) {
        if (this.services[service.name || service.type]) {
            throw new ServiceAlreadyRegisteredError_1.ServiceAlreadyRegisteredError(service.name || service.type);
        }
        this.services[service.name || service.type] = service;
        this.serviceCount++;
    };
    /**
     * Инициализирует все сервисы. Вызывается один раз из ApplicationContext.
     */
    ServiceHolder.prototype.instantiateServices = function () {
        for (var i = 0; i < 100; i++) {
            if (this.instantiateRequirementsMet()) {
                return;
            }
        }
        throw new ServiceUnresolvableError_1.ServiceUnresolvableError(this.services, this.serviceInstances);
    };
    /**
     * Получить сервис по имени типа. Выбрасывает UnknownServiceTypeError в случае, если подходящий
     * сервис не найден.
     * @param serviceType тип сервиса
     * @returns {Service}
     */
    ServiceHolder.prototype.getService = function (serviceType) {
        if (this.serviceInstancesByType[serviceType]) {
            return this.serviceInstancesByType[serviceType][0];
        }
        throw new UnknownServiceTypeError_1.UnknownServiceTypeError(serviceType);
    };
    /**
     * Получить сервис по имени. Выбрасывает UnknownServiceError в случае, если сервис с таким
     * типом не был зарегистрирован.
     * @param serviceName имя сервиса
     * @returns {Service}
     */
    ServiceHolder.prototype.getServiceByName = function (serviceName) {
        if (this.serviceInstances[serviceName]) {
            return this.serviceInstances[serviceName];
        }
        throw new UnknownServiceError_1.UnknownServiceError(serviceName);
    };
    ServiceHolder.prototype.instantiateRequirementsMet = function () {
        var _this = this;
        Object.keys(this.services).forEach(function (nameOrType) {
            var service = _this.services[nameOrType];
            if (service['__loaded__']) {
                return;
            }
            var args = {};
            var requirementsMet = true;
            service.requires.forEach(function (requiredService) {
                try {
                    if (requiredService.name) {
                        args[requiredService.name] = _this.getServiceByName(requiredService.name);
                    }
                    else {
                        args[requiredService.type] = _this.getService(requiredService.type);
                    }
                }
                catch (error) {
                    requirementsMet = false;
                    return;
                }
            });
            if (requirementsMet) {
                var instance = service.getInstance(args);
                if (service.name) {
                    _this.serviceInstances[service.name] = instance;
                }
                _this.serviceInstancesByType[service.type] = _this.serviceInstancesByType[service.type] || [];
                _this.serviceInstancesByType[service.type].push(instance);
                _this.serviceInitCount++;
                service['__loaded__'] = true;
            }
        });
        return this.serviceCount === this.serviceInitCount;
    };
    ;
    return ServiceHolder;
}());
exports.ServiceHolder = ServiceHolder;
//# sourceMappingURL=ServiceHolder.js.map