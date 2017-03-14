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
var UnknownServiceTypeError = (function (_super) {
    __extends(UnknownServiceTypeError, _super);
    function UnknownServiceTypeError(typeName) {
        return _super.call(this, "Unknown service type: \"" + typeName + "\"") || this;
    }
    return UnknownServiceTypeError;
}(Error));
exports.UnknownServiceTypeError = UnknownServiceTypeError;
//# sourceMappingURL=UnknownServiceType.js.map