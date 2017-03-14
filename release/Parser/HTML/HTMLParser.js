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
var Parser_1 = require("../Parser");
var HTMLParser = (function (_super) {
    __extends(HTMLParser, _super);
    function HTMLParser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'HTMLParser';
        _this.requires = [];
        return _this;
    }
    HTMLParser.prototype.getInstance = function (args) {
        return this;
    };
    HTMLParser.prototype.getParsedData = function (source) {
        return { message: 'It works!' };
    };
    return HTMLParser;
}(Parser_1.Parser));
exports.HTMLParser = HTMLParser;
//# sourceMappingURL=HTMLParser.js.map