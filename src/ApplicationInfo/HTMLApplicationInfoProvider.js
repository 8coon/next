"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var ApplicationInfoProvider_1 = require("./ApplicationInfoProvider");
var HTMLApplicationInfoProvider = (function (_super) {
    __extends(HTMLApplicationInfoProvider, _super);
    function HTMLApplicationInfoProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLApplicationInfoProvider.prototype.getInstance = function (args) {
        return undefined;
    };
    HTMLApplicationInfoProvider.prototype.getControllerData = function () {
        return undefined;
    };
    HTMLApplicationInfoProvider.prototype.getViewData = function () {
        return undefined;
    };
    HTMLApplicationInfoProvider.prototype.getRouteData = function () {
        return undefined;
    };
    return HTMLApplicationInfoProvider;
}(ApplicationInfoProvider_1.ApplicationInfoProvider));
exports.HTMLApplicationInfoProvider = HTMLApplicationInfoProvider;
//# sourceMappingURL=HTMLApplicationInfoProvider.js.map