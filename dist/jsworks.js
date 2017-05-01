/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 92);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Декоратор, отмечающий класс как внутренний и доступный через JSWorks.Internal.*
 * @param target
 * @constructor
 */
function JSWorksInternal(target) {
    JSWorks.Internal = JSWorks.Internal || {};
    var name = target.name;
    if (!name) {
        name = target.toString().split(' ')[1];
    }
    JSWorks.Internal[name] = target;
}
exports.JSWorksInternal = JSWorksInternal;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Декоратор, отмечающий класс как ошибку и доступный через JSWorks.Errors.*
 * @param target
 * @constructor
 */
function JSWorksError(target) {
    JSWorks.Errors = JSWorks.Errors || {};
    var name = target.name;
    if (!name) {
        name = target.toString().split(' ')[1];
    }
    JSWorks.Errors[name] = target;
}
exports.JSWorksError = JSWorksError;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EventType;
(function (EventType) {
    EventType[EventType["NOTIFY"] = 0] = "NOTIFY";
    EventType[EventType["LOAD"] = 1] = "LOAD";
    EventType[EventType["ENTER"] = 2] = "ENTER";
    EventType[EventType["LEAVE"] = 3] = "LEAVE";
    EventType[EventType["CREATE"] = 4] = "CREATE";
    EventType[EventType["UPDATE"] = 5] = "UPDATE";
    EventType[EventType["DOMPropertyChange"] = 6] = "DOMPropertyChange";
    EventType[EventType["DOMChildAppend"] = 7] = "DOMChildAppend";
    EventType[EventType["DOMChildRemove"] = 8] = "DOMChildRemove";
    EventType[EventType["DOMRemove"] = 9] = "DOMRemove";
    EventType[EventType["DOMContentChange"] = 10] = "DOMContentChange";
    EventType[EventType["UrlChange"] = 11] = "UrlChange";
    EventType[EventType["ROUTE_FIRED"] = 12] = "ROUTE_FIRED";
    EventType[EventType["NAVIGATION_ENDED"] = 13] = "NAVIGATION_ENDED";
    EventType[EventType["ViewExtended"] = 14] = "ViewExtended";
    EventType[EventType["ViewsInheritanceRendered"] = 15] = "ViewsInheritanceRendered";
    EventType[EventType["InstallViewsListeners"] = 16] = "InstallViewsListeners";
    EventType[EventType["ViewsListenersInstalled"] = 17] = "ViewsListenersInstalled";
    EventType[EventType["ApplicationLoaded"] = 18] = "ApplicationLoaded";
    EventType[EventType["PostUpdate"] = 19] = "PostUpdate";
    EventType[EventType["ViewIncludesRendered"] = 20] = "ViewIncludesRendered";
    EventType[EventType["RenderCustomElements"] = 21] = "RenderCustomElements";
    EventType[EventType["FormSubmitted"] = 22] = "FormSubmitted";
})(EventType = exports.EventType || (exports.EventType = {}));
JSWorks.EventType = EventType;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var InternalDecorator_1 = __webpack_require__(0);
var ViewConfig = (function () {
    function ViewConfig() {
    }
    return ViewConfig;
}());
/**
 * Тэг шаблона View
 * @type {string}
 */
ViewConfig.VIEW_TEMPLATE_TAG = 'APP-VIEW';
/**
 * Тэг отрендеренной View
 * @type {string}
 */
ViewConfig.VIEW_TAG = 'APP-VIEW';
/**
 * Тэг view-yield
 * @type {string}
 */
ViewConfig.VIEW_YIELD_TAG = 'VIEW-YIELD';
/**
 * Тэг view-include
 * @type {string}
 */
ViewConfig.VIEW_INCLUDE_TAG = 'VIEW-INCLUDE';
/**
 * Тэг view-param
 * @type {string}
 */
ViewConfig.VIEW_PARAM_TAG = 'VIEW-PARAM';
/**
 * Тэг view-if
 * @type {string}
 */
ViewConfig.VIEW_IF_TAG = 'VIEW-IF';
/**
 * Тэг view-then (внутри view-if)
 * @type {string}
 */
ViewConfig.VIEW_THEN_TAG = 'VIEW-THEN';
/**
 * Тэг view-else (внутри view-if)
 * @type {string}
 */
ViewConfig.VIEW_ELSE_TAG = 'VIEW-ELSE';
/**
 * Тэг view-switch
 * @type {string}
 */
ViewConfig.VIEW_SWITCH_TAG = 'VIEW-SWITCH';
/**
 * Тэг view-case (внутри view-switch)
 * @type {string}
 */
ViewConfig.VIEW_CASE_TAG = 'VIEW-CASE';
/**
 * Тэг view-for
 * @type {string}
 */
ViewConfig.VIEW_FOR_TAG = 'VIEW-FOR';
/**
 * Тэг view-item
 * @type {string}
 */
ViewConfig.VIEW_ITEM = 'VIEW-ITEM';
/**
 * Тэг view-eval
 * @type {string}
 */
ViewConfig.VIEW_EVAL_TAG = 'VIEW-EVAL';
/**
 * Корневой тэг, куда рендерятся все View
 * @type {string}
 */
ViewConfig.ROOT_TAG = 'APP-MAIN';
/**
 * Тэг, встраивающий в страницу компонент
 * @type {string}
 */
ViewConfig.COMPONENT_TAG = 'VIEW-COMPONENT';
/**
 * Тэг, встраивающий в страницу форму
 * @type {string}
 */
ViewConfig.FORM_FOR_TAG = 'FORM-FOR';
/**
 * Тэг, указывающий на поле формы
 * @type {string}
 */
ViewConfig.FORM_FIELD_TAG = 'FORM-FIELD';
/**
 * Тэг, указывающий на блок сообщений формы или поля
 * @type {string}
 */
ViewConfig.FORM_MESSAGES_TAG = 'FORM-MESSAGES';
ViewConfig = __decorate([
    InternalDecorator_1.JSWorksInternal
], ViewConfig);
exports.ViewConfig = ViewConfig;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var InternalDecorator_1 = __webpack_require__(0);
var ServiceDecorator_1 = __webpack_require__(10);
var SimpleVirtualDOMElement_1 = __webpack_require__(32);
var CustomElementAlreadyRegisteredError_1 = __webpack_require__(50);
var EventType_1 = __webpack_require__(2);
var SimpleVirtualDOM = SimpleVirtualDOM_1 = (function () {
    function SimpleVirtualDOM() {
        this.customElements = {};
    }
    /**
     * Получить следующий уникальный номер и последовательности уникальных номеров нод
     * @returns {number}
     * @constructor
     */
    SimpleVirtualDOM.NextHash = function () {
        return SimpleVirtualDOM_1.lastNodeHash++;
    };
    /**
     * Возвращает функцию-селектор для данного запроса
     * @param selector
     * @returns {any}
     */
    SimpleVirtualDOM.prepareSelector = function (selector) {
        if (SimpleVirtualDOM_1.preparedSelectors[selector]) {
            return SimpleVirtualDOM_1.preparedSelectors[selector];
        }
        if (!SimpleVirtualDOM_1.selectorFactory) {
            SimpleVirtualDOM_1.selectorFactory = CSSauron({
                tag: 'tagName || ""',
                contents: 'text',
                id: 'id',
                'class': 'className',
                parent: 'parentNode',
                children: '_children',
                attr: 'getAttribute(attr)',
            }, function (type, pattern, data) {
                if (type === 'tag') {
                    return pattern.toLowerCase() === data.toLowerCase();
                }
                return pattern == data; // tslint:disable-line
            });
        }
        SimpleVirtualDOM_1.preparedSelectors[selector] = SimpleVirtualDOM_1.selectorFactory(selector);
        return SimpleVirtualDOM_1.preparedSelectors[selector];
    };
    /**
     * Создаёт элемент виртуального DOM по образу реального
     * @param element
     * @returns {IVirtualDOMElement}
     */
    SimpleVirtualDOM.prototype.createFromDOM = function (element) {
        var data = this.hTMLParser.parseDOM(element);
        return this.createElement(data);
    };
    /**
     * Создаёт текстовый узел виртуального DOM
     * @param text
     * @returns {IVirtualDOMElement}
     */
    SimpleVirtualDOM.prototype.createTextElement = function (text) {
        var data = {
            tagName: undefined,
            id: undefined,
            text: text,
            className: undefined,
            attributes: {},
            children: [],
        };
        return this.createElement(data);
    };
    /**
     * Создать виртуальный DOM элемент
     * @param data IDOMParsed либо tagName элемента
     * @returns {SimpleVirtualDOMElement}
     */
    SimpleVirtualDOM.prototype.createElement = function (data) {
        var _this = this;
        if (data === void 0) { data = 'DIV'; }
        var element = new SimpleVirtualDOMElement_1.SimpleVirtualDOMElement(SimpleVirtualDOM_1.NextHash());
        if (typeof data === 'string') {
            element.tagName = data.toUpperCase();
            if (this.customElements[element.tagName]) {
                element = this.customElements[element.tagName].createElement();
                element.tagName = data.toUpperCase();
                element.emitEvent({ type: EventType_1.EventType.CREATE, data: element });
            }
            return element;
        }
        if (this.customElements[data.tagName]) {
            element = this.customElements[data.tagName].createElement();
        }
        element.tagName = data.tagName;
        element.id = data.id;
        element.text = data.text;
        element.className = data.className || '';
        Object.keys(data.attributes || {}).forEach(function (attribute) {
            element.setAttribute(attribute, data.attributes[attribute]);
        });
        data.children.forEach(function (childData) {
            element.appendChild(_this.createElement(childData));
        });
        element.emitEvent({ type: EventType_1.EventType.CREATE, data: element });
        return element;
    };
    /**
     * Решистрирует прототип пользовательского элемента. Новые элементы будут создаваться с
     * помощью elementProto.createElement(). Также для элемента будет выпущено событие EventType.CREATE.
     * @param tagName
     * @param elementProto
     */
    SimpleVirtualDOM.prototype.registerCustomElement = function (tagName, elementProto) {
        if (this.customElements[tagName]) {
            throw new CustomElementAlreadyRegisteredError_1.CustomElementAlreadyRegisteredError(tagName);
        }
        this.customElements[tagName] = elementProto;
    };
    return SimpleVirtualDOM;
}());
SimpleVirtualDOM.lastNodeHash = 0;
SimpleVirtualDOM.preparedSelectors = {};
SimpleVirtualDOM = SimpleVirtualDOM_1 = __decorate([
    InternalDecorator_1.JSWorksInternal,
    ServiceDecorator_1.JSWorksService('SimpleVirtualDOM', 'VirtualDOM', ['HTMLParser'])
], SimpleVirtualDOM);
exports.SimpleVirtualDOM = SimpleVirtualDOM;
var SimpleVirtualDOM_1;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Декоратор пользовательского HTML-элемента
 * @param tagName
 * @returns {(target:any)=>undefined}
 * @constructor
 */
function JSWorksCustomElement(tagName) {
    return function (target) {
        target.__tagName__ = tagName;
        __JSWorks_custom_elements__.push(target);
    };
}
exports.JSWorksCustomElement = JSWorksCustomElement;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var InternalDecorator_1 = __webpack_require__(0);
var EventManager = EventManager_1 = (function () {
    function EventManager() {
    }
    /**
     * Вызывает цепочку обработчиков события для данного эмиттера (IEventEmitter).
     * @param emitter
     * @param event
     */
    EventManager.fireEvent = function (emitter, event) {
        emitter['__listeners__'].forEach(function (listener) {
            if ((event.type === listener.type) || (listener.type === undefined)) {
                var handler = listener.handler || listener.receiver.receiveEvent;
                if (typeof listener.handler === 'string') {
                    handler = listener.receiver[listener.handler];
                }
                if (handler.bind) {
                    handler = handler.bind(listener.receiver);
                }
                handler(event, emitter);
            }
        });
    };
    /**
     * Подписывает ресивер (IEventReceiver) на событие eventType данного эмиттера (IEventEmitter).
     * В качестве дополнительных параметров можно указать eventType и eventHandler. При
     * eventType === undefined в ресивер буут передаваться все возникающие в эмиттере события.
     * При передаче в eventHandler строки обработчиком будет назначен метод ресивера с соответствующим
     * именем, при передаче функции -- данная функция. В функцию-обработчик будут переданы два аргумента:
     * IEvent событие и IEventEmitter объект, сгенерировавший данное событие.
     * @param receiver
     * @param emitter
     * @param [eventType]
     * @param [eventHandler]
     */
    EventManager.subscribe = function (receiver, emitter, eventType, eventHandler) {
        EventManager_1.patch(emitter);
        var descriptor = EventManager_1.nextDescriptor();
        emitter['__listeners__'].push({
            handler: eventHandler,
            receiver: receiver,
            type: eventType,
            descriptor: descriptor,
        });
        return descriptor;
    };
    /**
     * Отписаться от получения событий
     * @param descriptor
     * @param emitter
     */
    EventManager.unsubscribe = function (descriptor, emitter) {
        EventManager_1.patch(emitter);
        var index = -1;
        emitter['__listeners__'].forEach(function (desc, i) {
            if (desc.descriptor === descriptor) {
                index = i;
            }
        });
        if (index >= 0) {
            emitter['__listeners__'].splice(index, 1);
        }
    };
    /**
     * То же самое, что subscribe, но только не подписывает событие, если такой обработчик уже был подписан
     * @param lastDescriptor
     * @param receiver
     * @param emitter
     * @param eventType
     * @param eventHandler
     */
    EventManager.subscribeUnique = function (lastDescriptor, receiver, emitter, eventType, eventHandler) {
        EventManager_1.patch(emitter);
        var found = false;
        emitter['__listeners__'].forEach(function (descriptor) {
            if (descriptor.descriptor !== lastDescriptor) {
                return;
            }
            if (descriptor.type !== eventType) {
                return;
            }
            if (descriptor.receiver !== receiver) {
                return;
            }
            if (descriptor.handler !== eventHandler) {
                return;
            }
            found = true;
        });
        if (!found) {
            return EventManager_1.subscribe(receiver, emitter, eventType, eventHandler);
        }
        return undefined;
    };
    EventManager.patch = function (emitter) {
        if (!emitter['__patched__']) {
            emitter['__listeners__'] = [];
            emitter['__patched__'] = true;
            emitter.emitEvent = function (event) {
                EventManager_1.fireEvent(emitter, event);
            };
        }
    };
    EventManager.nextDescriptor = function () {
        return this.lastDescriptor++;
    };
    return EventManager;
}());
EventManager.lastDescriptor = 0;
EventManager = EventManager_1 = __decorate([
    InternalDecorator_1.JSWorksInternal
], EventManager);
exports.EventManager = EventManager;
var EventManager_1;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.



/*<replacement>*/

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }return keys;
};
/*</replacement>*/

module.exports = Duplex;

/*<replacement>*/
var processNextTick = __webpack_require__(23);
/*</replacement>*/

/*<replacement>*/
var util = __webpack_require__(12);
util.inherits = __webpack_require__(9);
/*</replacement>*/

var Readable = __webpack_require__(35);
var Writable = __webpack_require__(24);

util.inherits(Duplex, Readable);

var keys = objectKeys(Writable.prototype);
for (var v = 0; v < keys.length; v++) {
  var method = keys[v];
  if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
}

function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);

  Readable.call(this, options);
  Writable.call(this, options);

  if (options && options.readable === false) this.readable = false;

  if (options && options.writable === false) this.writable = false;

  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

  this.once('end', onend);
}

// the no-half-open enforcer
function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended) return;

  // no more data can be written.
  // But allow more writes to happen in this tick.
  processNextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

function forEach(xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(94)
var ieee754 = __webpack_require__(96)
var isArray = __webpack_require__(33)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Декоратор, объявляющий сервис
 * @param name
 * @param type
 * @param dependencies
 * @returns {(target:any)=>undefined}
 * @constructor
 */
function JSWorksService(name, type, dependencies) {
    dependencies = dependencies || [];
    return function (target) {
        var service = new target();
        service.name = name;
        service.type = type;
        service.requires = dependencies;
        __JSWorks_services__.push(service);
    };
}
exports.JSWorksService = JSWorksService;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var SimpleVirtualDOMElement_1 = __webpack_require__(32);
var InternalDecorator_1 = __webpack_require__(0);
var SimpleVirtualDOMElementExt = (function (_super) {
    __extends(SimpleVirtualDOMElementExt, _super);
    function SimpleVirtualDOMElementExt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Выполняет выражение в области видимости View
     * @param statement
     * @param scope
     */
    SimpleVirtualDOMElementExt.prototype.execStatement = function (statement, scope) {
        var _this = this;
        if (scope === void 0) { scope = this.view.component; }
        if (!this.view || !this.view.component) {
            return;
        }
        var variables = Object.keys(this.view.component.variables);
        var values = [];
        variables.forEach(function (varName) {
            values.push(_this.view.component.variables[varName]);
        });
        values.push(scope);
        variables.push('$');
        var condFunc = new Function(variables.join(','), "return " + statement + ";");
        try {
            return condFunc.call.apply(condFunc, [{}].concat(values));
        }
        catch (e) {
            console.error("Error in statement \"" + statement + "\": " + e);
            return undefined;
        }
    };
    return SimpleVirtualDOMElementExt;
}(SimpleVirtualDOMElement_1.SimpleVirtualDOMElement));
SimpleVirtualDOMElementExt = __decorate([
    InternalDecorator_1.JSWorksInternal
], SimpleVirtualDOMElementExt);
exports.SimpleVirtualDOMElementExt = SimpleVirtualDOMElementExt;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.

function isArray(arg) {
  if (Array.isArray) {
    return Array.isArray(arg);
  }
  return objectToString(arg) === '[object Array]';
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = Buffer.isBuffer;

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8).Buffer))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ServiceHolder_1 = __webpack_require__(87);
var InternalDecorator_1 = __webpack_require__(0);
var ViewHolder_1 = __webpack_require__(88);
var ControllerHolder_1 = __webpack_require__(43);
var RouteHolder_1 = __webpack_require__(85);
var ComponentHolder_1 = __webpack_require__(39);
var EventManager_1 = __webpack_require__(6);
var EventType_1 = __webpack_require__(2);
var CustomElementHolder_1 = __webpack_require__(44);
var HistoryAPIRouter_1 = __webpack_require__(82);
var InterceptorHolder_1 = __webpack_require__(71);
var ModelHolder_1 = __webpack_require__(80);
var ApplicationContext = (function () {
    /**
     *
     * @param services
     */
    function ApplicationContext(services) {
        this._loaded = false;
        this._serviceHolder = services;
        this._viewHolder = new ViewHolder_1.ViewHolder();
        this._controllerHolder = new ControllerHolder_1.ControllerHolder();
        this._componentHolder = new ComponentHolder_1.ComponentHolder();
        this._customElementHolder = new CustomElementHolder_1.CustomElementHolder();
        this._routeHolder = new RouteHolder_1.RouteHolder();
        this._interceptorHolder = new InterceptorHolder_1.InterceptorHolder();
        this._modelHolder = new ModelHolder_1.ModelHolder();
    }
    /**
     * Возвращает уникальное сгенерированное имя на основе данного
     * @param origName
     * @param lookup
     * @constructor
     */
    ApplicationContext.UniqueName = function (origName, lookup) {
        var name = origName;
        while (lookup(name)) {
            name = origName + "@" + Math.floor(Math.random() * 100000000);
        }
        return name;
    };
    Object.defineProperty(ApplicationContext.prototype, "loaded", {
        /**
         * Флаг, устанавливающийся в true при полной загрузке приложения.
         * @returns {boolean}
         */
        get: function () {
            return this._loaded;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationContext.prototype, "router", {
        /**
         * Роутер
         * @returns {Router}
         */
        get: function () {
            return this._router;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationContext.prototype, "interceptorHolder", {
        /**
         * Все перехватчики хранятся тут
         * @returns {InterceptorHolder}
         */
        get: function () {
            return this._interceptorHolder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationContext.prototype, "controllerHolder", {
        /**
         * Все контроллеры хранятся тут
         * @returns {ControllerHolder}
         */
        get: function () {
            return this._controllerHolder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationContext.prototype, "serviceHolder", {
        /**
         * Все сервисы хранятся тут
         * @type {ServiceHolder}
         */
        get: function () {
            return this._serviceHolder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationContext.prototype, "viewHolder", {
        /**
         * Все View хранятся тут
         * @returns {ViewHolder}
         */
        get: function () {
            return this._viewHolder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationContext.prototype, "componentHolder", {
        /**
         * Все компоненты и страницы хранятся тут
         * @returns {ComponentHolder}
         */
        get: function () {
            return this._componentHolder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationContext.prototype, "customElementHolder", {
        /**
         * Все пользовательские элементы DOM хранятся тут
         * @returns {CustomElementHolder}
         */
        get: function () {
            return this._customElementHolder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationContext.prototype, "modelHolder", {
        /**
         * Все модели хранятся тут
         * @returns {ModelHolder}
         */
        get: function () {
            return this._modelHolder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationContext.prototype, "routeHolder", {
        /**
         * Все роуты хранятся тут
         * @returns {RouteHolder}
         */
        get: function () {
            return this._routeHolder;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Точка входа в приложение JSWorks
     */
    ApplicationContext.prototype.run = function () {
        var _this = this;
        this.serviceHolder.instantiateServices();
        EventManager_1.EventManager.subscribe({}, this.viewHolder, EventType_1.EventType.LOAD, function (event) {
            EventManager_1.EventManager.subscribe({}, _this, undefined, function (event2) {
                switch (event2.type) {
                    default: break;
                    /* case EventType.ViewIncludesRendered: {
                        this.componentHolder.load(this.viewHolder, this.controllerHolder);
                        this.customElementHolder.load();

                        this.emitEvent({ type: EventType.InstallViewsListeners, data: this });
                        this.emitEvent({ type: EventType.ViewsListenersInstalled, data: this });
                    } break; */
                    case EventType_1.EventType.ViewsListenersInstalled: {
                        _this._loaded = true;
                        _this.routeHolder.load();
                        _this.interceptorHolder.load();
                        if (!JSWorks.__router_disabled__) {
                            var host = location.href.split(':')[0] + "://" + location.host;
                            _this._router = new HistoryAPIRouter_1.HistoryAPIRouter(host);
                        }
                        _this.emitEvent({ type: EventType_1.EventType.ApplicationLoaded, data: _this });
                        return;
                    }
                }
            });
            _this.componentHolder.load();
            _this.viewHolder.renderIncludesAndInheritance();
            _this.customElementHolder.load();
            _this.viewHolder.renderViews();
            _this.emitEvent({ type: EventType_1.EventType.InstallViewsListeners, data: _this });
            _this.emitEvent({ type: EventType_1.EventType.ViewsListenersInstalled, data: _this });
            _this.emitEvent({ type: EventType_1.EventType.LOAD, data: _this });
        });
        this.viewHolder.load();
        this.controllerHolder.load();
        this.modelHolder.load();
    };
    ApplicationContext.prototype.emitEvent = function (event) { }; // tslint:disable-line
    return ApplicationContext;
}());
ApplicationContext = __decorate([
    InternalDecorator_1.JSWorksInternal,
    __metadata("design:paramtypes", [ServiceHolder_1.ServiceHolder])
], ApplicationContext);
exports.ApplicationContext = ApplicationContext;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var InternalDecorator_1 = __webpack_require__(0);
var EventType_1 = __webpack_require__(2);
var CollectionProperty = (function () {
    function CollectionProperty() {
        /**
         * Флаг, указывающий, что представление коллекции необходимо обновить
         * @type {boolean}
         */
        this.dirty = false;
        /**
         * Словарь, хранящий информацию о том, какие тёги view-for обновили содержимое, а какие нет
         * @type {{}}
         */
        this.cleanForTag = {};
        this.values = [];
        this.lastIndex = 0;
    }
    /**
     * Очистить коллекцию
     */
    CollectionProperty.prototype.clear = function () {
        this.values = [];
        this.update();
    };
    /**
     * Получить значения коллекции в виде массива
     * @returns {any[]}
     */
    CollectionProperty.prototype.getValues = function () {
        return this.values;
    };
    /**
     * Задать значения коллекции из массива
     * @param values
     */
    CollectionProperty.prototype.setValues = function (values) {
        this.values = values;
        this.update();
    };
    Object.defineProperty(CollectionProperty.prototype, "length", {
        /**
         * Длина коллекции
         * @returns {number}
         */
        get: function () {
            return this.values.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Добавить элемент в конец коллекции
     * @param value
     */
    CollectionProperty.prototype.push = function (value) {
        this.values.push(value);
        this.update();
    };
    /**
     * Извлечь последний элемент коллекции
     * @returns {undefined|any}
     */
    CollectionProperty.prototype.pop = function () {
        return this.values.pop();
    };
    /**
     * Получить "срез" коллекции
     * @param begin
     * @param end
     * @returns {any[]}
     */
    CollectionProperty.prototype.slice = function (begin, end) {
        return this.values.slice(begin, end);
    };
    /**
     * См. Array.prototype.splice
     * @param start
     * @param deleteCount
     * @param items
     */
    CollectionProperty.prototype.splice = function (start, deleteCount) {
        var items = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            items[_i - 2] = arguments[_i];
        }
        (_a = this.values).splice.apply(_a, [start, deleteCount].concat(items));
        this.update();
        var _a;
    };
    /**
     * Удалить элемент под индексом
     * @param index
     */
    CollectionProperty.prototype.remove = function (index) {
        var _this = this;
        if (index instanceof Array) {
            index.forEach(function (i) {
                _this.remove(i);
            });
            return;
        }
        this.splice(index, 1);
    };
    /**
     * Удалить первое вхождение данного элемента
     * @param item
     */
    CollectionProperty.prototype.removeItem = function (item) {
        var index = this.indexOf(item);
        if (index >= 0) {
            this.remove(index);
        }
    };
    /**
     * Вернуть массив индексов всех вхождений данного элемента
     * @param item
     * @returns {number[]}
     */
    CollectionProperty.prototype.indexesOf = function (item) {
        var result = [];
        this.getValues().forEach(function (value, index) {
            if (value === item) {
                result.push(index);
            }
        });
        return result;
    };
    /**
     * Удалить все вхождения данного элемента
     * @param item
     */
    CollectionProperty.prototype.removeItemAll = function (item) {
        var _this = this;
        this.getValues().forEach(function (value, index) {
            if (value === item) {
                _this.remove(index);
            }
        });
    };
    /**
     * Индекс первого вхождения данного элемента
     * @param item
     * @returns {number}
     */
    CollectionProperty.prototype.indexOf = function (item) {
        return this.getValues().indexOf(item);
    };
    /**
     * Индекс последнего вхождения данного элемента
     * @param item
     * @param fromIndex
     * @returns {number}
     */
    CollectionProperty.prototype.lastIndexOf = function (item, fromIndex) {
        return this.getValues().lastIndexOf(item, fromIndex);
    };
    /**
     * Проверка на вхождение элемента
     * @param item
     * @returns {boolean}
     */
    CollectionProperty.prototype.includes = function (item) {
        return this.indexOf(item) >= 0;
    };
    /**
     * Получить элемент коллекции под индексом
     * @param index
     * @returns {any}
     */
    CollectionProperty.prototype.get = function (index) {
        return this.values[index];
    };
    /**
     * Задать элемент коллекции под индексом
     * @param index
     * @param value
     */
    CollectionProperty.prototype.set = function (index, value) {
        this.values[index] = value;
        this.update();
    };
    Object.defineProperty(CollectionProperty.prototype, "first", {
        /**
         * Первый элемент коллекции
         * @returns {any}
         */
        get: function () {
            return this.get(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollectionProperty.prototype, "last", {
        /**
         * Последний элемент коллекции
         * @returns {any}
         */
        get: function () {
            return this.get(this.length - 1);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Итератор
     * @returns {Iterator<any>}
     */
    CollectionProperty.prototype[Symbol.iterator] = function () {
        var _this = this;
        return {
            next: function () {
                if (_this.lastIndex < _this.length) {
                    _this.lastIndex++;
                    return { value: _this.get(_this.lastIndex - 1), done: false };
                }
                _this.lastIndex = 0;
                return { value: undefined, done: true };
            },
        };
    };
    CollectionProperty.prototype.emitEvent = function (event) { }; // tslint:disable-line
    CollectionProperty.prototype.update = function () {
        // this.dirty = true;
        this.cleanForTag = {};
        this.emitEvent({ type: EventType_1.EventType.UPDATE, data: undefined });
    };
    return CollectionProperty;
}());
CollectionProperty = __decorate([
    InternalDecorator_1.JSWorksInternal
], CollectionProperty);
exports.CollectionProperty = CollectionProperty;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var InternalDecorator_1 = __webpack_require__(0);
var ComponentTypes;
(function (ComponentTypes) {
    ComponentTypes[ComponentTypes["COMPONENT"] = 0] = "COMPONENT";
    ComponentTypes[ComponentTypes["PAGE"] = 1] = "PAGE";
})(ComponentTypes || (ComponentTypes = {}));
var ComponentConfig = (function () {
    function ComponentConfig() {
    }
    return ComponentConfig;
}());
/**
 * Типы компонентов
 * @type {ComponentTypes}
 */
ComponentConfig.Types = ComponentTypes; // tslint:disable-line
ComponentConfig = __decorate([
    InternalDecorator_1.JSWorksInternal
], ComponentConfig);
exports.ComponentConfig = ComponentConfig;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var SimpleVirtualDOMElementExt_1 = __webpack_require__(11);
var EventManager_1 = __webpack_require__(6);
var EventType_1 = __webpack_require__(2);
var AbstractListeningElement = (function (_super) {
    __extends(AbstractListeningElement, _super);
    function AbstractListeningElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Подписаться на события от соответствующего компонента
     * @param component
     */
    AbstractListeningElement.prototype.subscribeOnComponent = function (component) {
        var _this = this;
        this.updateDescriptor = EventManager_1.EventManager.subscribe(this, component, EventType_1.EventType.UPDATE, function (event) {
            _this.propertyChange();
        });
    };
    /**
     * Отписаться от событий компонента
     * @param component
     */
    AbstractListeningElement.prototype.unsubscribeFromComponent = function (component) {
        EventManager_1.EventManager.unsubscribe(this.updateDescriptor, component);
    };
    /**
     * Фабрика элементов
     * @returns {undefined}
     */
    AbstractListeningElement.prototype.createElement = function () {
        var _this = this;
        EventManager_1.EventManager.subscribe(this, JSWorks.applicationContext, EventType_1.EventType.InstallViewsListeners, function (ev) {
            if (_this.view && _this.view.component && !_this.hasAttribute('static')) {
                _this.subscribeOnComponent(_this.view.component);
            }
        });
        return undefined;
    };
    /**
     * Пересчитать условие
     */
    AbstractListeningElement.prototype.customUpdate = function () {
        _super.prototype.customUpdate.call(this);
        if (this.view && this.view.component) {
            if (this.hasAttribute('static') && !this.ready) {
                return;
            }
            this.propertyChange();
        }
    };
    /**
     * Элементу была присвоена некоторая View
     * @param view
     */
    AbstractListeningElement.prototype.propagateView = function (view) {
        if (this.hasAttribute('static')) {
            _super.prototype.propagateView.call(this, view);
            return;
        }
        if (this.view && this.view.component) {
            this.unsubscribeFromComponent(this.view.component);
        }
        _super.prototype.propagateView.call(this, view);
        if (this.view && this.view.component) {
            this.subscribeOnComponent(this.view.component);
        }
    };
    return AbstractListeningElement;
}(SimpleVirtualDOMElementExt_1.SimpleVirtualDOMElementExt));
exports.AbstractListeningElement = AbstractListeningElement;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorDecorator_1 = __webpack_require__(1);
var AttributeNotFoundError = (function (_super) {
    __extends(AttributeNotFoundError, _super);
    function AttributeNotFoundError(attr, place) {
        if (place === void 0) { place = 'Router'; }
        return _super.call(this, place + " attribute '" + attr + "' not found") || this;
    }
    return AttributeNotFoundError;
}(Error));
AttributeNotFoundError = __decorate([
    ErrorDecorator_1.JSWorksError,
    __metadata("design:paramtypes", [String, String])
], AttributeNotFoundError);
exports.AttributeNotFoundError = AttributeNotFoundError;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPMethod = {
    DELETE: 'DELETE',
    GET: 'GET',
    HEAD: 'HEAD',
    OPTIONS: 'OPTIONS',
    PATCH: 'PATCH',
    POST: 'POST',
    PUT: 'PUT',
};
JSWorks.HTTPMethod = exports.HTTPMethod;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var buffer = __webpack_require__(8);
var Buffer = buffer.Buffer;
var SlowBuffer = buffer.SlowBuffer;
var MAX_LEN = buffer.kMaxLength || 2147483647;
exports.alloc = function alloc(size, fill, encoding) {
  if (typeof Buffer.alloc === 'function') {
    return Buffer.alloc(size, fill, encoding);
  }
  if (typeof encoding === 'number') {
    throw new TypeError('encoding must not be number');
  }
  if (typeof size !== 'number') {
    throw new TypeError('size must be a number');
  }
  if (size > MAX_LEN) {
    throw new RangeError('size is too large');
  }
  var enc = encoding;
  var _fill = fill;
  if (_fill === undefined) {
    enc = undefined;
    _fill = 0;
  }
  var buf = new Buffer(size);
  if (typeof _fill === 'string') {
    var fillBuf = new Buffer(_fill, enc);
    var flen = fillBuf.length;
    var i = -1;
    while (++i < size) {
      buf[i] = fillBuf[i % flen];
    }
  } else {
    buf.fill(_fill);
  }
  return buf;
}
exports.allocUnsafe = function allocUnsafe(size) {
  if (typeof Buffer.allocUnsafe === 'function') {
    return Buffer.allocUnsafe(size);
  }
  if (typeof size !== 'number') {
    throw new TypeError('size must be a number');
  }
  if (size > MAX_LEN) {
    throw new RangeError('size is too large');
  }
  return new Buffer(size);
}
exports.from = function from(value, encodingOrOffset, length) {
  if (typeof Buffer.from === 'function' && (!global.Uint8Array || Uint8Array.from !== Buffer.from)) {
    return Buffer.from(value, encodingOrOffset, length);
  }
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }
  if (typeof value === 'string') {
    return new Buffer(value, encodingOrOffset);
  }
  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    var offset = encodingOrOffset;
    if (arguments.length === 1) {
      return new Buffer(value);
    }
    if (typeof offset === 'undefined') {
      offset = 0;
    }
    var len = length;
    if (typeof len === 'undefined') {
      len = value.byteLength - offset;
    }
    if (offset >= value.byteLength) {
      throw new RangeError('\'offset\' is out of bounds');
    }
    if (len > value.byteLength - offset) {
      throw new RangeError('\'length\' is out of bounds');
    }
    return new Buffer(value.slice(offset, offset + len));
  }
  if (Buffer.isBuffer(value)) {
    var out = new Buffer(value.length);
    value.copy(out, 0, 0, value.length);
    return out;
  }
  if (value) {
    if (Array.isArray(value) || (typeof ArrayBuffer !== 'undefined' && value.buffer instanceof ArrayBuffer) || 'length' in value) {
      return new Buffer(value);
    }
    if (value.type === 'Buffer' && Array.isArray(value.data)) {
      return new Buffer(value.data);
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ' + 'ArrayBuffer, Array, or array-like object.');
}
exports.allocUnsafeSlow = function allocUnsafeSlow(size) {
  if (typeof Buffer.allocUnsafeSlow === 'function') {
    return Buffer.allocUnsafeSlow(size);
  }
  if (typeof size !== 'number') {
    throw new TypeError('size must be a number');
  }
  if (size >= MAX_LEN) {
    throw new RangeError('size is too large');
  }
  return new SlowBuffer(size);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

if (!process.version ||
    process.version.indexOf('v0.') === 0 ||
    process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
  module.exports = nextTick;
} else {
  module.exports = process.nextTick;
}

function nextTick(fn, arg1, arg2, arg3) {
  if (typeof fn !== 'function') {
    throw new TypeError('"callback" argument must be a function');
  }
  var len = arguments.length;
  var args, i;
  switch (len) {
  case 0:
  case 1:
    return process.nextTick(fn);
  case 2:
    return process.nextTick(function afterTickOne() {
      fn.call(null, arg1);
    });
  case 3:
    return process.nextTick(function afterTickTwo() {
      fn.call(null, arg1, arg2);
    });
  case 4:
    return process.nextTick(function afterTickThree() {
      fn.call(null, arg1, arg2, arg3);
    });
  default:
    args = new Array(len - 1);
    i = 0;
    while (i < args.length) {
      args[i++] = arguments[i];
    }
    return process.nextTick(function afterTick() {
      fn.apply(null, args);
    });
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, setImmediate) {// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.



module.exports = Writable;

/*<replacement>*/
var processNextTick = __webpack_require__(23);
/*</replacement>*/

/*<replacement>*/
var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : processNextTick;
/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Writable.WritableState = WritableState;

/*<replacement>*/
var util = __webpack_require__(12);
util.inherits = __webpack_require__(9);
/*</replacement>*/

/*<replacement>*/
var internalUtil = {
  deprecate: __webpack_require__(132)
};
/*</replacement>*/

/*<replacement>*/
var Stream = __webpack_require__(37);
/*</replacement>*/

var Buffer = __webpack_require__(8).Buffer;
/*<replacement>*/
var bufferShim = __webpack_require__(21);
/*</replacement>*/

util.inherits(Writable, Stream);

function nop() {}

function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
}

function WritableState(options, stream) {
  Duplex = Duplex || __webpack_require__(7);

  options = options || {};

  // object stream flag to indicate whether or not this stream
  // contains buffers or objects.
  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

  // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

  // cast to ints.
  this.highWaterMark = ~~this.highWaterMark;

  // drain event flag.
  this.needDrain = false;
  // at the start of calling end()
  this.ending = false;
  // when end() has been called, and returned
  this.ended = false;
  // when 'finish' is emitted
  this.finished = false;

  // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.
  this.length = 0;

  // a flag to see when we're in the middle of a write.
  this.writing = false;

  // when true all writes will be buffered until .uncork() call
  this.corked = 0;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.
  this.bufferProcessing = false;

  // the callback that's passed to _write(chunk,cb)
  this.onwrite = function (er) {
    onwrite(stream, er);
  };

  // the callback that the user supplies to write(chunk,encoding,cb)
  this.writecb = null;

  // the amount that is being written when _write is called.
  this.writelen = 0;

  this.bufferedRequest = null;
  this.lastBufferedRequest = null;

  // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted
  this.pendingcb = 0;

  // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams
  this.prefinished = false;

  // True if the error was already emitted and should not be thrown again
  this.errorEmitted = false;

  // count buffered requests
  this.bufferedRequestCount = 0;

  // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two
  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function getBuffer() {
  var current = this.bufferedRequest;
  var out = [];
  while (current) {
    out.push(current);
    current = current.next;
  }
  return out;
};

(function () {
  try {
    Object.defineProperty(WritableState.prototype, 'buffer', {
      get: internalUtil.deprecate(function () {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.')
    });
  } catch (_) {}
})();

// Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.
var realHasInstance;
if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
  realHasInstance = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(Writable, Symbol.hasInstance, {
    value: function (object) {
      if (realHasInstance.call(this, object)) return true;

      return object && object._writableState instanceof WritableState;
    }
  });
} else {
  realHasInstance = function (object) {
    return object instanceof this;
  };
}

function Writable(options) {
  Duplex = Duplex || __webpack_require__(7);

  // Writable ctor is applied to Duplexes, too.
  // `realHasInstance` is necessary because using plain `instanceof`
  // would return false, as no `_writableState` property is attached.

  // Trying to use the custom `instanceof` for Writable here will also break the
  // Node.js LazyTransform implementation, which has a non-trivial getter for
  // `_writableState` that would lead to infinite recursion.
  if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
    return new Writable(options);
  }

  this._writableState = new WritableState(options, this);

  // legacy.
  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;

    if (typeof options.writev === 'function') this._writev = options.writev;
  }

  Stream.call(this);
}

// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function () {
  this.emit('error', new Error('Cannot pipe, not readable'));
};

function writeAfterEnd(stream, cb) {
  var er = new Error('write after end');
  // TODO: defer error events consistently everywhere, not just the cb
  stream.emit('error', er);
  processNextTick(cb, er);
}

// Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.
function validChunk(stream, state, chunk, cb) {
  var valid = true;
  var er = false;

  if (chunk === null) {
    er = new TypeError('May not write null values to stream');
  } else if (typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  if (er) {
    stream.emit('error', er);
    processNextTick(cb, er);
    valid = false;
  }
  return valid;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;
  var isBuf = Buffer.isBuffer(chunk);

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

  if (typeof cb !== 'function') cb = nop;

  if (state.ended) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
  }

  return ret;
};

Writable.prototype.cork = function () {
  var state = this._writableState;

  state.corked++;
};

Writable.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;

    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = bufferShim.from(chunk, encoding);
  }
  return chunk;
}

// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
  if (!isBuf) {
    chunk = decodeChunk(state, chunk, encoding);
    if (Buffer.isBuffer(chunk)) encoding = 'buffer';
  }
  var len = state.objectMode ? 1 : chunk.length;

  state.length += len;

  var ret = state.length < state.highWaterMark;
  // we must ensure that previous needDrain will not be reset to false.
  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = new WriteReq(chunk, encoding, cb);
    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }
    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;
  if (sync) processNextTick(cb, er);else cb(er);

  stream._writableState.errorEmitted = true;
  stream.emit('error', er);
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;

  onwriteStateUpdate(state);

  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state);

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      /*<replacement>*/
      asyncWrite(afterWrite, stream, state, finished, cb);
      /*</replacement>*/
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
}

// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
}

// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;

    var count = 0;
    while (entry) {
      buffer[count] = entry;
      entry = entry.next;
      count += 1;
    }

    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

    // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite
    state.pendingcb++;
    state.lastBufferedRequest = null;
    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;

      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.
      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequestCount = 0;
  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new Error('_write() is not implemented'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

  // .end() fully uncorks
  if (state.corked) {
    state.corked = 1;
    this.uncork();
  }

  // ignore unnecessary end() calls.
  if (!state.ending && !state.finished) endWritable(this, state, cb);
};

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}

function prefinish(stream, state) {
  if (!state.prefinished) {
    state.prefinished = true;
    stream.emit('prefinish');
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);
  if (need) {
    if (state.pendingcb === 0) {
      prefinish(stream, state);
      state.finished = true;
      stream.emit('finish');
    } else {
      prefinish(stream, state);
    }
  }
  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished) processNextTick(cb);else stream.once('finish', cb);
  }
  state.ended = true;
  stream.writable = false;
}

// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;
  this.finish = function (err) {
    var entry = _this.entry;
    _this.entry = null;
    while (entry) {
      var cb = entry.callback;
      state.pendingcb--;
      cb(err);
      entry = entry.next;
    }
    if (state.corkedRequestsFree) {
      state.corkedRequestsFree.next = _this;
    } else {
      state.corkedRequestsFree = _this;
    }
  };
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13), __webpack_require__(131).setImmediate))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35);
exports.Stream = exports;
exports.Readable = exports;
exports.Writable = __webpack_require__(24);
exports.Duplex = __webpack_require__(7);
exports.Transform = __webpack_require__(36);
exports.PassThrough = __webpack_require__(98);


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ComponentConfig_1 = __webpack_require__(16);
/**
 * Декоратор компонента
 * @param data
 * @returns {(target:any)=>undefined}
 * @constructor
 */
function JSWorksComponent(data) {
    return function (target) {
        target.__type__ = ComponentConfig_1.ComponentConfig.Types.COMPONENT;
        target.__view_name__ = data.view;
        target.__controller_name__ = data.controller;
        __JSWorks_components__.push(target);
    };
}
exports.JSWorksComponent = JSWorksComponent;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var InternalDecorator_1 = __webpack_require__(0);
var SimpleVirtualDOMElementExt_1 = __webpack_require__(11);
var ViewForElement_1 = __webpack_require__(47);
var MessageListElement = MessageListElement_1 = (function (_super) {
    __extends(MessageListElement, _super);
    function MessageListElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Форматировать результат обработки данных с сервера
     * @param result
     * @param status
     * @param array
     * @returns {any}
     */
    MessageListElement.formatPromiseResult = function (result, status, array) {
        if (array === void 0) { array = true; }
        if (result instanceof Array) {
            return result.map(function (message) {
                return MessageListElement_1.formatPromiseResult(message, status, false);
            });
        }
        if (typeof result !== 'object') {
            result = {
                status: status,
                text: String(result || ''),
            };
        }
        if (array) {
            result = [result];
        }
        return result;
    };
    ;
    /**
     * См. View.propagateView
     * @param view
     */
    MessageListElement.prototype.propagateView = function (view) {
        if (this.view === view) {
            return;
        }
        _super.prototype.propagateView.call(this, view);
        if (this.messageTemplate) {
            this.messageTemplate.propagateView(view);
        }
        this.messagesRoot = this.querySelector('form-messages');
        if (!this.messagesRoot) {
            return;
        }
        this.messageTemplate = ViewForElement_1.ViewForElement.init(this.messagesRoot, this.messageTemplate);
    };
    MessageListElement.prototype.updateMessagesCollection = function () {
        ViewForElement_1.ViewForElement.iterateCollection(this.messagesRoot, this.messageTemplate, this.lastValidationResult.messages, this.hash, this.view, 'error');
    };
    return MessageListElement;
}(SimpleVirtualDOMElementExt_1.SimpleVirtualDOMElementExt));
MessageListElement = MessageListElement_1 = __decorate([
    InternalDecorator_1.JSWorksInternal
], MessageListElement);
exports.MessageListElement = MessageListElement;
var MessageListElement_1;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorDecorator_1 = __webpack_require__(1);
var ForbiddenTagError = (function (_super) {
    __extends(ForbiddenTagError, _super);
    function ForbiddenTagError(tagName, place) {
        if (place === void 0) { place = 'here'; }
        return _super.call(this, "Tag is not allowed in " + place + ": " + tagName) || this;
    }
    return ForbiddenTagError;
}(Error));
ForbiddenTagError = __decorate([
    ErrorDecorator_1.JSWorksError,
    __metadata("design:paramtypes", [String, String])
], ForbiddenTagError);
exports.ForbiddenTagError = ForbiddenTagError;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InterceptorType;
(function (InterceptorType) {
    InterceptorType[InterceptorType["RouteBeforeNavigateInterceptor"] = 0] = "RouteBeforeNavigateInterceptor";
    InterceptorType[InterceptorType["RouteAfterNavigateInterceptor"] = 1] = "RouteAfterNavigateInterceptor";
    InterceptorType[InterceptorType["ValidatorInterceptor"] = 2] = "ValidatorInterceptor";
})(InterceptorType = exports.InterceptorType || (exports.InterceptorType = {}));


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HTTPMethod_1 = __webpack_require__(19);
var ParserService = (function () {
    function ParserService() {
    }
    /**
     * Загружает данные по удалённому адресу.
     * @param url
     * @param method
     * @param data
     * @returns {undefined}
     */
    ParserService.prototype.parseURL = function (url, method, data) {
        if (method === void 0) { method = HTTPMethod_1.HTTPMethod.GET; }
        return this.parseString(this.network.fetch(url, method, data).data);
    };
    /**
     * Загружает данные по удалённому адресу асинхронно и вызывает callback.
     * @param url
     * @param callback
     * @param method
     * @param data
     */
    ParserService.prototype.parseURLCallback = function (url, callback, method, data) {
        var _this = this;
        if (method === void 0) { method = HTTPMethod_1.HTTPMethod.GET; }
        this.network.fetchAsync(url, method, data).then(function (response) {
            callback(_this.parseString(response.data));
        });
    };
    /**
     * Возвращает Promise, который разрешается данными, загруженными с сервера.
     * @param url
     * @param method
     * @param data
     */
    ParserService.prototype.parseURLAsync = function (url, method, data) {
        var _this = this;
        if (method === void 0) { method = HTTPMethod_1.HTTPMethod.GET; }
        return new Promise(function (resolve, reject) {
            _this.parseURLCallback(url, function (parsed) {
                resolve(parsed);
            }, method, data);
        });
    };
    return ParserService;
}());
exports.ParserService = ParserService;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var InternalDecorator_1 = __webpack_require__(0);
var ElementNotPoliteError_1 = __webpack_require__(56);
var EventType_1 = __webpack_require__(2);
var View = View_1 = (function () {
    function View(data) {
        this.renderQueued = false;
        this._id = data.id;
        this.appContext = JSWorks.applicationContext;
        this.virtualDOM = this.appContext.serviceHolder.getService('VirtualDOM');
        this._DOMRoot = data.template;
    }
    Object.defineProperty(View.prototype, "id", {
        /**
         * ID текущей View
         * @returns {string}
         */
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View.prototype, "DOMRoot", {
        /**
         * Корневой элемент DOM данной View.
         * @returns {IVirtualDOMElement}
         * @constructor
         */
        get: function () {
            return this._DOMRoot;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Склонировать текущий корневой элемент, присвоим ему переданный view
     * @param view
     */
    View.prototype.cloneDOMRoot = function (view) {
        this._DOMRoot.view = view;
        this._DOMRoot = this._DOMRoot.cloneNode();
    };
    /**
     * Создать копию текущей View
     * @returns {View}
     */
    View.prototype.clone = function (id) {
        if (id === void 0) { id = this.id; }
        var view = new View_1({ id: id, template: this._DOMRoot.cloneNode() });
        view.DOMRoot.propagateView(view);
        return view;
    };
    /**
     * :P
     */
    View.prototype.askToRender = function () {
        throw new ElementNotPoliteError_1.ElementNotPoliteError(this);
    };
    /**
     * Сообрает View, что в виртуальном DOM произошли изменения, и было бы неплохо когда-нибудь их
     * отразить в реальном DOM.
     */
    View.prototype.askToRenderPolitely = function () {
        var _this = this;
        if (!this.renderQueued) {
            this.renderQueued = true;
            window.setTimeout(function () {
                _this.renderQueued = false;
                _this.render();
            }, 1);
        }
    };
    /**
     * Обновляет виртуальный DOM этой View.
     */
    View.prototype.render = function () {
        this.DOMRoot.render();
        this.emitEvent({ type: EventType_1.EventType.UPDATE, data: this });
    };
    /**
     * См. {EventManager}
     * @param event
     */
    View.prototype.emitEvent = function (event) { }; // tslint:disable-line
    /**
     * См. {EventManager}
     * @param event
     * @param emitter
     */
    View.prototype.receiveEvent = function (event, emitter) { }; // tslint:disable-line
    return View;
}());
View = View_1 = __decorate([
    InternalDecorator_1.JSWorksInternal,
    __metadata("design:paramtypes", [Object])
], View);
exports.View = View;
var View_1;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var VirtualDOMElementArray_1 = __webpack_require__(89);
var EventType_1 = __webpack_require__(2);
var EventManager_1 = __webpack_require__(6);
var InternalDecorator_1 = __webpack_require__(0);
var SimpleVirtualDOM_1 = __webpack_require__(4);
var SimpleVirtualDOMElement = (function () {
    function SimpleVirtualDOMElement(hash) {
        /**
         * Переводит имена тэгов в нижний регистр в свойстве innerHTML и методе getOuterHTML
         * @type {boolean}
         */
        this.lowerTagNames = true;
        /**
         * Флаг, указывающий на то, что данную ноду надо переписовать при рендеринге
         * @type {boolean}
         */
        this.dirty = true;
        this._children = [];
        this.classes = {};
        this.attributes = { style: {} };
        this.handlers = {};
        this.selectorCache = {};
        this._ready = true;
        this.HASH_KEY = '__jsworks_hash__';
        this.HANDLERS_KEY = '__jsworks_handlers__';
        this._hash = hash;
    }
    Object.defineProperty(SimpleVirtualDOMElement.prototype, "ready", {
        /**
         * Флаг, указывающий на то, что окружение данного элемента готово
         * @returns {boolean}
         */
        get: function () {
            return this._ready;
        },
        /**
         * Флаг, указывающий на то, что окружение данного элемента готово
         * @param value
         */
        set: function (value) {
            this._ready = value;
            this._children.forEach(function (child) {
                child.ready = value;
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Отрисовка изменений текущей ноды в поле rendered
     * Если rendered не было ранее присвоено или не совпадает с текущей нодой
     * по типу (например, там текст, а мы рендерим DIV), то rendered будет заменена,
     * в противном случае она будет должным образом модифицирована.
     */
    SimpleVirtualDOMElement.prototype.render = function () {
        this._children.forEach(function (child) {
            child.render();
        });
        if (!this.rendered) {
            this.dirty = false;
            if (!this.tagName) {
                this.rendered = document.createTextNode(this.text);
                this.rendered[this.HASH_KEY] = SimpleVirtualDOM_1.SimpleVirtualDOM.NextHash();
                this.renderHandlers();
                return;
            }
            this.rendered = document.createElement(this.tagName);
            this.rendered[this.HASH_KEY] = SimpleVirtualDOM_1.SimpleVirtualDOM.NextHash();
            this.mergeAttributes();
            this.mergeChildren();
            this.renderHandlers();
            return;
        }
        if (this.dirty) {
            this.dirty = false;
            if (this.tagName !== this.rendered.tagName) {
                this.rendered = this.rendered = document.createTextNode(this.text);
                this.rendered[this.HASH_KEY] = SimpleVirtualDOM_1.SimpleVirtualDOM.NextHash();
                this.renderHandlers();
                return;
            }
            if (!this.tagName) {
                if (this.text !== this.rendered.textContent) {
                    this.rendered.textContent = this.text;
                }
                this.renderHandlers();
                return;
            }
            this.mergeAttributes();
            this.mergeChildren();
        }
    };
    /**
     * Обновить пользовательские данные
     */
    SimpleVirtualDOMElement.prototype.customUpdate = function () {
        this._children.forEach(function (child) {
            child.customUpdate();
        });
    };
    /**
     * Создаёт полную копию этого узла со всеми вложенными узлами.
     * @returns {SimpleVirtualDOMElement}
     */
    SimpleVirtualDOMElement.prototype.cloneNode = function () {
        var _this = this;
        var appContext = JSWorks.applicationContext;
        var virtualDOM = appContext.serviceHolder.getServiceByName('SimpleVirtualDOM');
        var element;
        if (this.tagName) {
            element = virtualDOM.createElement(this.tagName);
        }
        else {
            element = virtualDOM.createTextElement(this.text);
        }
        // element.view = this.view;
        // element.propagateView(this.view);
        element.ready = this.ready;
        Object.keys(this.attributes).forEach(function (attr) {
            element.setAttribute(attr, _this.getAttribute(attr));
        });
        Object.keys(this.handlers).forEach(function (type) {
            _this.handlers[type].forEach(function (handler) {
                element.addEventListener(type, _this.handlers[handler].callback, _this.handlers[handler].useCapture);
            });
        });
        this._children.forEach(function (child) {
            element.appendChild(child.cloneNode());
        });
        this.customCloneNode(element);
        element.propagateView(this.view);
        element.emitMutilationEvent({ type: EventType_1.EventType.CREATE, data: element });
        return element;
    };
    /**
     * Сбросить параметры всех пользовательских узлов
     */
    SimpleVirtualDOMElement.prototype.customClear = function () {
        this._children.forEach(function (child) {
            child.customClear();
        });
    };
    Object.defineProperty(SimpleVirtualDOMElement.prototype, "style", {
        get: function () {
            return this.attributes['style'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleVirtualDOMElement.prototype, "tagName", {
        get: function () {
            return this._tagName;
        },
        set: function (value) {
            this._tagName = value;
            this.emitMutilationEvent({ type: EventType_1.EventType.DOMPropertyChange, data: this });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleVirtualDOMElement.prototype, "innerHTML", {
        get: function () {
            if (this.isText()) {
                return this.text;
            }
            var html = [];
            this._children.forEach(function (child) {
                html.push(child.getOuterHTML());
            });
            return html.join('');
        },
        set: function (value) {
            var _this = this;
            if (this.isText()) {
                this._text = value;
                return;
            }
            var appContext = JSWorks.applicationContext;
            var htmlParser = appContext.serviceHolder.getServiceByName('HTMLParser');
            var virtualDOM = appContext.serviceHolder.getServiceByName('SimpleVirtualDOM');
            var nodes = htmlParser.parseString(value);
            this._children = [];
            nodes.forEach(function (parsed) {
                _this.appendChild(virtualDOM.createElement(parsed));
            });
            this.emitMutilationEvent({ type: EventType_1.EventType.DOMContentChange, data: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleVirtualDOMElement.prototype, "id", {
        get: function () {
            return this.getAttribute('id');
        },
        set: function (value) {
            this.setAttribute('id', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleVirtualDOMElement.prototype, "hash", {
        get: function () {
            return this._hash;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleVirtualDOMElement.prototype, "className", {
        get: function () {
            return this.getAttribute('class');
        },
        set: function (value) {
            var _this = this;
            this.classes = {};
            value.replace('  ', ' ').split(' ').forEach(function (name) {
                _this.classes[name.toLowerCase()] = true;
            });
            this.setAttribute('class', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleVirtualDOMElement.prototype, "parentNode", {
        get: function () {
            return this._parentNode;
        },
        set: function (node) {
            if (this._parentNode) {
                this._parentNode.removeChild(this);
            }
            this._parentNode = node;
            if (node) {
                node.appendChild(this);
            }
            this.emitMutilationEvent({ type: EventType_1.EventType.DOMPropertyChange, data: this });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleVirtualDOMElement.prototype, "children", {
        get: function () {
            return new VirtualDOMElementArray_1.VirtualDOMElementArray(this._children);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleVirtualDOMElement.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (value) {
            this._text = value;
            this.emitMutilationEvent({ type: EventType_1.EventType.DOMPropertyChange, data: this });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Получить атрибут виртуального элемента
     * @param name
     * @returns {any}
     */
    SimpleVirtualDOMElement.prototype.getAttribute = function (name) {
        var _this = this;
        if (name.toLowerCase() === 'style') {
            if (Object.keys(this.attributes['style']).length === 0) {
                return;
            }
            var value_1 = [];
            Object.keys(this.attributes['style']).forEach(function (cssRule) {
                value_1.push(cssRule + ": " + String(_this.attributes['style'][cssRule]) + ";");
            });
            return value_1.join(' ');
        }
        return this.attributes[name];
    };
    /**
     * Задать атрибут CSS стиля
     * @param name
     * @param value
     */
    SimpleVirtualDOMElement.prototype.setStyleAttribute = function (name, value) {
        this.attributes['style'][name] = String(value || 'inherit');
        this.emitMutilationEvent({ type: EventType_1.EventType.DOMPropertyChange, data: this });
    };
    /**
     * Задать атрибут виртуального элемента
     * @param name
     * @param value
     */
    SimpleVirtualDOMElement.prototype.setAttribute = function (name, value) {
        var _this = this;
        if (name.toLowerCase() === 'style') {
            var expressions = (value || '').split(';');
            expressions.forEach(function (expression) {
                var css = expression.split(':');
                css[0] = css[0].trim();
                css[1] = (css[1] || 'inherit').trim();
                if (css[0].length === 0) {
                    return;
                }
                _this.attributes['style'][css[0]] = css[1];
            });
            this.emitMutilationEvent({ type: EventType_1.EventType.DOMPropertyChange, data: this });
            return;
        }
        this.attributes[name] = value;
        this.emitMutilationEvent({ type: EventType_1.EventType.DOMPropertyChange, data: this });
    };
    /**
     * Проверить существование атрибута
     * @param name
     * @returns {boolean}
     */
    SimpleVirtualDOMElement.prototype.hasAttribute = function (name) {
        return this.attributes[name] !== undefined;
    };
    /**
     * Удалить данный атрибут. Если такого не существует, то не произойдёт ничего.
     * @param name
     */
    SimpleVirtualDOMElement.prototype.removeAttribute = function (name) {
        if (this.attributes[name] === undefined) {
            return;
        }
        delete this.attributes[name];
        this.emitMutilationEvent({ type: EventType_1.EventType.DOMPropertyChange, data: this });
    };
    /**
     * Запустить событие
     * @param event
     */
    SimpleVirtualDOMElement.prototype.emitEvent = function (event) { }; // tslint:disable-line
    /**
     * Обработать событие
     * @param event
     * @param emitter
     */
    SimpleVirtualDOMElement.prototype.receiveEvent = function (event, emitter) {
        this.dirty = true;
    };
    /**
     * Применить/отменить класс к элементу
     * @param name
     * @param on
     */
    SimpleVirtualDOMElement.prototype.toggleClass = function (name, on) {
        name = name.toLowerCase();
        if (on) {
            if (!this.classes[name]) {
                this.classes[name] = true;
                this.setAttribute('class', Object.keys(this.classes).join(' '));
                return;
            }
            return;
        }
        if (this.classes[name]) {
            this.classes[name] = undefined;
            this.setAttribute('class', Object.keys(this.classes).join(' '));
        }
    };
    /**
     * Добавить потомка к узлу
     * @param child
     */
    SimpleVirtualDOMElement.prototype.appendChild = function (child) {
        var _this = this;
        if (child instanceof Array) {
            child.forEach(function (ch) {
                _this.appendChild(ch);
            });
            return;
        }
        this._children.push(child);
        child._parentNode = this;
        child.ready = this.ready;
        child.propagateView(this.view);
        this.emitMutilationEvent({ type: EventType_1.EventType.DOMChildAppend, data: { parent: this, child: child } });
        child['__descriptor__'] = EventManager_1.EventManager.subscribe(this, child);
    };
    /**
     * Вставить потомка перед указанным. Если указанный потомок не будет найден, child вставится последним.
     * @param child
     * @param reference
     */
    SimpleVirtualDOMElement.prototype.insertBefore = function (child, reference) {
        var index = this._children.indexOf(reference);
        if (index < 0) {
            this.appendChild(child);
            return;
        }
        this._children.splice(index, 0, child);
        child._parentNode = this;
        child.ready = this.ready;
        child.propagateView(this.view);
        this.emitMutilationEvent({ type: EventType_1.EventType.DOMChildAppend, data: { parent: this, child: child } });
        child['__descriptor__'] = EventManager_1.EventManager.subscribe(this, child);
    };
    /**
     * Удалить потомка
     * @param child
     */
    SimpleVirtualDOMElement.prototype.removeChild = function (child) {
        if (!child) {
            return;
        }
        this._children.splice(this._children.indexOf(child, 0), 1);
        child._parentNode = undefined;
        EventManager_1.EventManager.unsubscribe(child['__descriptor__'], child);
        this.emitMutilationEvent({ type: EventType_1.EventType.DOMChildRemove, data: { parent: this, child: child } });
    };
    /**
     * Удалить всех потомков
     */
    SimpleVirtualDOMElement.prototype.removeChildren = function () {
        for (var i = this._children.length - 1; i >= 0; i--) {
            this.removeChild(this._children[i]);
        }
        this._children = [];
    };
    /**
     * Заменяет одного потомка другим (или несколькими)
     * @param newChild
     * @param oldChild
     */
    SimpleVirtualDOMElement.prototype.replaceChild = function (newChild, oldChild) {
        var _this = this;
        var index = this._children.indexOf(oldChild, 0);
        if (!(newChild instanceof Array)) {
            newChild = [newChild];
        }
        if (!oldChild || index < 0) {
            newChild.forEach(function (child) {
                _this.appendChild(child);
            });
            return;
        }
        oldChild._parentNode = undefined;
        newChild.forEach(function (child, pos) {
            _this._children.splice(index + pos + 1, 0, child);
            child._parentNode = _this;
            child.ready = _this.ready;
            child.propagateView(_this.view);
            _this.emitMutilationEvent({ type: EventType_1.EventType.DOMChildAppend, data: { parent: _this, child: child } });
            child['__descriptor__'] = EventManager_1.EventManager.subscribe(_this, child);
        });
        delete this._children[index];
        this.emitMutilationEvent({ type: EventType_1.EventType.DOMChildRemove, data: { parent: this, child: oldChild } });
    };
    /**
     * Удалить узел
     */
    SimpleVirtualDOMElement.prototype.remove = function () {
        this.emitMutilationEvent({ type: EventType_1.EventType.DOMRemove, data: this });
    };
    /**
     * Возвращает полный HTML-текст данного элемента
     * @returns {string}
     */
    SimpleVirtualDOMElement.prototype.getOuterHTML = function () {
        var _this = this;
        var attrSerialized = [];
        Object.keys(this.attributes).forEach(function (name) {
            var attr = _this.getAttribute(name);
            if (attr) {
                attrSerialized.push(name + "=\"" + attr + "\"");
                return;
            }
            if (name === 'style' || name === 'id' || name === 'class') {
                return;
            }
            attrSerialized.push(name + "=\"" + attr + "\"");
        });
        var content = this.innerHTML;
        if (this.tagName) {
            var spacer = '';
            if (attrSerialized.length > 0) {
                spacer = ' ';
            }
            var tagName = this.tagName;
            if (this.lowerTagNames) {
                tagName = tagName.toLowerCase();
            }
            return "<" + tagName + spacer + attrSerialized.join(' ') + ">" + content + "</" + tagName + ">";
        }
        return content;
    };
    /**
     * Возвращает true, если данный узел виртуального DOM является простым текстом.
     * @returns {boolean}
     */
    SimpleVirtualDOMElement.prototype.isText = function () {
        return this.tagName === undefined;
    };
    /**
     * Повесить слушатель определённого события на данный элемент
     * @param type
     * @param callback
     * @param useCapture
     */
    SimpleVirtualDOMElement.prototype.addEventListener = function (type, callback, useCapture) {
        this.handlers[type] = this.handlers[type] || [];
        this.handlers[type].push({ callback: callback, useCapture: useCapture });
        if (this.rendered) {
            this.rendered[this.HANDLERS_KEY] = this.rendered[this.HANDLERS_KEY] || [];
            this.rendered[this.HANDLERS_KEY].push({ type: type, callback: callback, useCapture: useCapture });
            this.rendered.addEventListener(type, callback, useCapture);
        }
    };
    /**
     * Снять слушателя определённого события с данного элемента
     * @param type
     * @param callback
     */
    SimpleVirtualDOMElement.prototype.removeEventListener = function (type, callback) {
        var _this = this;
        if (this.rendered) {
            this.rendered[this.HANDLERS_KEY] = this.rendered[this.HANDLERS_KEY] || [];
            this.rendered[this.HANDLERS_KEY].forEach(function (handler, index) {
                if (handler.type === type && handler.callback === callback) {
                    delete _this.rendered[_this.HANDLERS_KEY][index];
                }
            });
            this.rendered.removeEventListener(type, callback);
        }
        (this.handlers[type] || []).forEach(function (evtCallback, index) {
            if (evtCallback === callback) {
                delete _this.handlers[type][index];
            }
        });
    };
    /**
     * Выбрать все элементы по селектору
     * @param query
     * @param one
     * @returns {SimpleVirtualDOMElement[]}
     */
    SimpleVirtualDOMElement.prototype.querySelectorAll = function (query, one) {
        /* if (this.selectorCache[query]) {
            return this.selectorCache[query];
        }*/
        if (one === void 0) { one = false; }
        var selector = SimpleVirtualDOM_1.SimpleVirtualDOM.prepareSelector(query);
        var result = [];
        var resultHas = {};
        var concat = function (array) {
            if (!(array instanceof Array)) {
                array = [array];
            }
            array.some(function (node) {
                if (!resultHas[node.hash]) {
                    resultHas[node.hash] = true;
                    result.push(node);
                }
                return one;
            });
        };
        var queryResult = selector(this);
        if (queryResult) {
            concat(queryResult);
        }
        this._children.some(function (child) {
            if (one && result.length > 0) {
                return true;
            }
            concat(child.querySelectorAll(query, one));
        });
        // this.selectorCache[query] = result;
        return result;
    };
    /**
     * Выбрать первый элемент по селектору
     * @param query
     * @returns {SimpleVirtualDOMElement}
     */
    SimpleVirtualDOMElement.prototype.querySelector = function (query) {
        return this.querySelectorAll(query, true)[0];
    };
    /**
     * Распространить View по дереву виртуального DOM
     * @param view
     */
    SimpleVirtualDOMElement.prototype.propagateView = function (view) {
        if (this.view === view) {
            return;
        }
        this.view = view;
        this._children.forEach(function (child) {
            child.propagateView(view);
        });
    };
    SimpleVirtualDOMElement.prototype.emitMutilationEvent = function (data) {
        this.dirty = true;
        this.selectorCache = {};
        this.emitEvent(data);
        if (this.view) {
            this.view.askToRenderPolitely();
        }
    };
    SimpleVirtualDOMElement.prototype.customCloneNode = function (node) { }; // tslint:disable-line
    SimpleVirtualDOMElement.prototype.renderHandlers = function () {
        var _this = this;
        this.rendered[this.HANDLERS_KEY] = this.rendered[this.HANDLERS_KEY] || [];
        this.rendered[this.HANDLERS_KEY].forEach(function (handler) {
            _this.rendered.removeEventListener(handler.type, handler.callback);
        });
        var handlers = this.handlers;
        this.rendered[this.HANDLERS_KEY] = [];
        Object.keys(handlers).forEach(function (type) {
            handlers[type].forEach(function (handler) {
                _this.rendered.addEventListener(type, function (event) {
                    handler.callback(event);
                }, handler.useCapture);
                _this.rendered[_this.HANDLERS_KEY].push({
                    type: type,
                    callback: handler.callback,
                    useCapture: handler.useCapture,
                });
            });
        });
    };
    SimpleVirtualDOMElement.prototype.mergeAttributes = function () {
        var _this = this;
        if (this.id !== this.rendered.id) {
            this.rendered.id = this.id;
        }
        if (this.className !== this.rendered.className) {
            this.rendered.className = this.className;
        }
        Object.keys(this.attributes).forEach(function (attr) {
            if (attr === 'id' || attr === 'class') {
                return;
            }
            if (!(_this.rendered.hasAttribute(attr))) {
                var attribute = _this.getAttribute(attr);
                if (attribute) {
                    _this.rendered.setAttribute(attr, attribute);
                }
                return;
            }
            var value = _this.getAttribute(attr);
            if (_this.rendered.getAttribute(attr) !== value) {
                _this.rendered.setAttribute(attr, value);
            }
        });
        Array.from(this.rendered.attributes).forEach(function (attrPair) {
            if (!_this.hasAttribute(attrPair.name)) {
                _this.rendered.removeAttribute(attrPair.name);
            }
        });
    };
    SimpleVirtualDOMElement.prototype.appendChildren = function () {
        var _this = this;
        this._children.forEach(function (child, index) {
            child.render();
            _this.rendered.appendChild(child.rendered);
        });
    };
    SimpleVirtualDOMElement.prototype.mergeChildren = function () {
        var _this = this;
        if (this.rendered.childNodes.length === 0 && this._children.length > 0) {
            this.appendChildren();
            return;
        }
        this._children.forEach(function (child, index) {
            if (_this.rendered.childNodes[index] !== child.rendered) {
                if (index < _this.rendered.childNodes.length - 1) {
                    _this.rendered.insertBefore(child.rendered, _this.rendered.childNodes[index + 1]);
                    return;
                }
                if (index === _this.rendered.childNodes.length - 1) {
                    _this.rendered.replaceChild(child.rendered, _this.rendered.lastChild);
                    return;
                }
                _this.rendered.appendChild(child.rendered);
            }
        });
        for (var i = 0; i < this.rendered.childNodes.length; i++) {
            if (!this._children[i] || this.rendered.childNodes[i] !== this._children[i].rendered) {
                this.rendered.removeChild(this.rendered.childNodes[i]);
                i--;
            }
        }
    };
    return SimpleVirtualDOMElement;
}());
SimpleVirtualDOMElement = __decorate([
    InternalDecorator_1.JSWorksInternal,
    __metadata("design:paramtypes", [Object])
], SimpleVirtualDOMElement);
exports.SimpleVirtualDOMElement = SimpleVirtualDOMElement;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var Buffer = __webpack_require__(8).Buffer;

var isBufferEncoding = Buffer.isEncoding
  || function(encoding) {
       switch (encoding && encoding.toLowerCase()) {
         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
         default: return false;
       }
     }


function assertEncoding(encoding) {
  if (encoding && !isBufferEncoding(encoding)) {
    throw new Error('Unknown encoding: ' + encoding);
  }
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters. CESU-8 is handled as part of the UTF-8 encoding.
//
// @TODO Handling all encodings inside a single object makes it very difficult
// to reason about this code, so it should be split up in the future.
// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
// points as used by CESU-8.
var StringDecoder = exports.StringDecoder = function(encoding) {
  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
  assertEncoding(encoding);
  switch (this.encoding) {
    case 'utf8':
      // CESU-8 represents each of Surrogate Pair by 3-bytes
      this.surrogateSize = 3;
      break;
    case 'ucs2':
    case 'utf16le':
      // UTF-16 represents each of Surrogate Pair by 2-bytes
      this.surrogateSize = 2;
      this.detectIncompleteChar = utf16DetectIncompleteChar;
      break;
    case 'base64':
      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
      this.surrogateSize = 3;
      this.detectIncompleteChar = base64DetectIncompleteChar;
      break;
    default:
      this.write = passThroughWrite;
      return;
  }

  // Enough space to store all bytes of a single character. UTF-8 needs 4
  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
  this.charBuffer = new Buffer(6);
  // Number of bytes received for the current incomplete multi-byte character.
  this.charReceived = 0;
  // Number of bytes expected for the current incomplete multi-byte character.
  this.charLength = 0;
};


// write decodes the given buffer and returns it as JS string that is
// guaranteed to not contain any partial multi-byte characters. Any partial
// character found at the end of the buffer is buffered up, and will be
// returned when calling write again with the remaining bytes.
//
// Note: Converting a Buffer containing an orphan surrogate to a String
// currently works, but converting a String to a Buffer (via `new Buffer`, or
// Buffer#write) will replace incomplete surrogates with the unicode
// replacement character. See https://codereview.chromium.org/121173009/ .
StringDecoder.prototype.write = function(buffer) {
  var charStr = '';
  // if our last write ended with an incomplete multibyte character
  while (this.charLength) {
    // determine how many remaining bytes this buffer has to offer for this char
    var available = (buffer.length >= this.charLength - this.charReceived) ?
        this.charLength - this.charReceived :
        buffer.length;

    // add the new bytes to the char buffer
    buffer.copy(this.charBuffer, this.charReceived, 0, available);
    this.charReceived += available;

    if (this.charReceived < this.charLength) {
      // still not enough chars in this buffer? wait for more ...
      return '';
    }

    // remove bytes belonging to the current character from the buffer
    buffer = buffer.slice(available, buffer.length);

    // get the character that was split
    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
    var charCode = charStr.charCodeAt(charStr.length - 1);
    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
      this.charLength += this.surrogateSize;
      charStr = '';
      continue;
    }
    this.charReceived = this.charLength = 0;

    // if there are no more bytes in this buffer, just emit our char
    if (buffer.length === 0) {
      return charStr;
    }
    break;
  }

  // determine and set charLength / charReceived
  this.detectIncompleteChar(buffer);

  var end = buffer.length;
  if (this.charLength) {
    // buffer the incomplete character bytes we got
    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
    end -= this.charReceived;
  }

  charStr += buffer.toString(this.encoding, 0, end);

  var end = charStr.length - 1;
  var charCode = charStr.charCodeAt(end);
  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
    var size = this.surrogateSize;
    this.charLength += size;
    this.charReceived += size;
    this.charBuffer.copy(this.charBuffer, size, 0, size);
    buffer.copy(this.charBuffer, 0, 0, size);
    return charStr.substring(0, end);
  }

  // or just emit the charStr
  return charStr;
};

// detectIncompleteChar determines if there is an incomplete UTF-8 character at
// the end of the given buffer. If so, it sets this.charLength to the byte
// length that character, and sets this.charReceived to the number of bytes
// that are available for this character.
StringDecoder.prototype.detectIncompleteChar = function(buffer) {
  // determine how many bytes we have to check at the end of this buffer
  var i = (buffer.length >= 3) ? 3 : buffer.length;

  // Figure out if one of the last i bytes of our buffer announces an
  // incomplete char.
  for (; i > 0; i--) {
    var c = buffer[buffer.length - i];

    // See http://en.wikipedia.org/wiki/UTF-8#Description

    // 110XXXXX
    if (i == 1 && c >> 5 == 0x06) {
      this.charLength = 2;
      break;
    }

    // 1110XXXX
    if (i <= 2 && c >> 4 == 0x0E) {
      this.charLength = 3;
      break;
    }

    // 11110XXX
    if (i <= 3 && c >> 3 == 0x1E) {
      this.charLength = 4;
      break;
    }
  }
  this.charReceived = i;
};

StringDecoder.prototype.end = function(buffer) {
  var res = '';
  if (buffer && buffer.length)
    res = this.write(buffer);

  if (this.charReceived) {
    var cr = this.charReceived;
    var buf = this.charBuffer;
    var enc = this.encoding;
    res += buf.slice(0, cr).toString(enc);
  }

  return res;
};

function passThroughWrite(buffer) {
  return buffer.toString(this.encoding);
}

function utf16DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 2;
  this.charLength = this.charReceived ? 2 : 0;
}

function base64DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 3;
  this.charLength = this.charReceived ? 3 : 0;
}


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

module.exports = Readable;

/*<replacement>*/
var processNextTick = __webpack_require__(23);
/*</replacement>*/

/*<replacement>*/
var isArray = __webpack_require__(33);
/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Readable.ReadableState = ReadableState;

/*<replacement>*/
var EE = __webpack_require__(22).EventEmitter;

var EElistenerCount = function (emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/
var Stream = __webpack_require__(37);
/*</replacement>*/

var Buffer = __webpack_require__(8).Buffer;
/*<replacement>*/
var bufferShim = __webpack_require__(21);
/*</replacement>*/

/*<replacement>*/
var util = __webpack_require__(12);
util.inherits = __webpack_require__(9);
/*</replacement>*/

/*<replacement>*/
var debugUtil = __webpack_require__(133);
var debug = void 0;
if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function () {};
}
/*</replacement>*/

var BufferList = __webpack_require__(99);
var StringDecoder;

util.inherits(Readable, Stream);

var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') {
    return emitter.prependListener(event, fn);
  } else {
    // This is a hack to make sure that our error handler is attached before any
    // userland ones.  NEVER DO THIS. This is here only because this code needs
    // to continue to work with older versions of Node.js that do not include
    // the prependListener() method. The goal is to eventually remove this hack.
    if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
  }
}

function ReadableState(options, stream) {
  Duplex = Duplex || __webpack_require__(7);

  options = options || {};

  // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away
  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

  // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

  // cast to ints.
  this.highWaterMark = ~~this.highWaterMark;

  // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()
  this.buffer = new BufferList();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // when piping, we only care about 'readable' events that happen
  // after read()ing all the bytes and not getting any pushback.
  this.ranOut = false;

  // the number of writers that are awaiting a drain event in .pipe()s
  this.awaitDrain = 0;

  // if true, a maybeReadMore has been scheduled
  this.readingMore = false;

  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    if (!StringDecoder) StringDecoder = __webpack_require__(34).StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  Duplex = Duplex || __webpack_require__(7);

  if (!(this instanceof Readable)) return new Readable(options);

  this._readableState = new ReadableState(options, this);

  // legacy
  this.readable = true;

  if (options && typeof options.read === 'function') this._read = options.read;

  Stream.call(this);
}

// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;

  if (!state.objectMode && typeof chunk === 'string') {
    encoding = encoding || state.defaultEncoding;
    if (encoding !== state.encoding) {
      chunk = bufferShim.from(chunk, encoding);
      encoding = '';
    }
  }

  return readableAddChunk(this, state, chunk, encoding, false);
};

// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function (chunk) {
  var state = this._readableState;
  return readableAddChunk(this, state, chunk, '', true);
};

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};

function readableAddChunk(stream, state, chunk, encoding, addToFront) {
  var er = chunkInvalid(state, chunk);
  if (er) {
    stream.emit('error', er);
  } else if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else if (state.objectMode || chunk && chunk.length > 0) {
    if (state.ended && !addToFront) {
      var e = new Error('stream.push() after EOF');
      stream.emit('error', e);
    } else if (state.endEmitted && addToFront) {
      var _e = new Error('stream.unshift() after end event');
      stream.emit('error', _e);
    } else {
      var skipAdd;
      if (state.decoder && !addToFront && !encoding) {
        chunk = state.decoder.write(chunk);
        skipAdd = !state.objectMode && chunk.length === 0;
      }

      if (!addToFront) state.reading = false;

      // Don't add to the buffer if we've decoded to an empty string chunk and
      // we're not in object mode
      if (!skipAdd) {
        // if we want the data now, just emit it.
        if (state.flowing && state.length === 0 && !state.sync) {
          stream.emit('data', chunk);
          stream.read(0);
        } else {
          // update the buffer info.
          state.length += state.objectMode ? 1 : chunk.length;
          if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

          if (state.needReadable) emitReadable(stream);
        }
      }

      maybeReadMore(stream, state);
    }
  } else if (!addToFront) {
    state.reading = false;
  }

  return needMoreData(state);
}

// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
}

// backwards compatibility.
Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = __webpack_require__(34).StringDecoder;
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
  return this;
};

// Don't raise the hwm > 8MB
var MAX_HWM = 0x800000;
function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }
  return n;
}

// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;
  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
  }
  // If we're asking for more than the current hwm, then raise the hwm.
  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n;
  // Don't have enough
  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }
  return state.length;
}

// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;

  if (n !== 0) state.emittedReadable = false;

  // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.
  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state);

  // if we've ended, and we're now clear, then finish it up.
  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  }

  // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.

  // if we need a readable event, then we need to do some reading.
  var doRead = state.needReadable;
  debug('need readable', doRead);

  // if we currently have less than the highWaterMark, then also read some
  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  }

  // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.
  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true;
    // if the length is currently zero, then we *need* a readable event.
    if (state.length === 0) state.needReadable = true;
    // call internal read method
    this._read(state.highWaterMark);
    state.sync = false;
    // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.
    if (!state.reading) n = howMuchToRead(nOrig, state);
  }

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = true;
    n = 0;
  } else {
    state.length -= n;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true;

    // If we tried to read() past the EOF, then emit end on the next tick.
    if (nOrig !== n && state.ended) endReadable(this);
  }

  if (ret !== null) this.emit('data', ret);

  return ret;
};

function chunkInvalid(state, chunk) {
  var er = null;
  if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  return er;
}

function onEofChunk(stream, state) {
  if (state.ended) return;
  if (state.decoder) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;

  // emit 'readable' now to make sure it gets picked up.
  emitReadable(stream);
}

// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    if (state.sync) processNextTick(emitReadable_, stream);else emitReadable_(stream);
  }
}

function emitReadable_(stream) {
  debug('emit readable');
  stream.emit('readable');
  flow(stream);
}

// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    processNextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length)
      // didn't get any data, stop spinning.
      break;else len = state.length;
  }
  state.readingMore = false;
}

// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function (n) {
  this.emit('error', new Error('_read() is not implemented'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;

  var endFn = doEnd ? onend : cleanup;
  if (state.endEmitted) processNextTick(endFn);else src.once('end', endFn);

  dest.on('unpipe', onunpipe);
  function onunpipe(readable) {
    debug('onunpipe');
    if (readable === src) {
      cleanup();
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  }

  // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.
  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);

  var cleanedUp = false;
  function cleanup() {
    debug('cleanup');
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', cleanup);
    src.removeListener('data', ondata);

    cleanedUp = true;

    // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.
    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  // If the user pushes more data while we're writing to dest then we'll end up
  // in ondata again. However, we only want to increase awaitDrain once because
  // dest will only emit one 'drain' event for the multiple writes.
  // => Introduce a guard on increasing awaitDrain.
  var increasedAwaitDrain = false;
  src.on('data', ondata);
  function ondata(chunk) {
    debug('ondata');
    increasedAwaitDrain = false;
    var ret = dest.write(chunk);
    if (false === ret && !increasedAwaitDrain) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', src._readableState.awaitDrain);
        src._readableState.awaitDrain++;
        increasedAwaitDrain = true;
      }
      src.pause();
    }
  }

  // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.
  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
  }

  // Make sure our error handler is attached before userland ones.
  prependListener(dest, 'error', onerror);

  // Both close and finish should trigger unpipe, but only once.
  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  }

  // tell the dest that it's being piped to
  dest.emit('pipe', src);

  // start the flow if it hasn't been started already.
  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function () {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;
    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;

  // if we're not piping anywhere, then do nothing.
  if (state.pipesCount === 0) return this;

  // just one destination.  most common case.
  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;

    if (!dest) dest = state.pipes;

    // got a match.
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this);
    return this;
  }

  // slow case. multiple pipe destinations.

  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var i = 0; i < len; i++) {
      dests[i].emit('unpipe', this);
    }return this;
  }

  // try to find the right one.
  var index = indexOf(state.pipes, dest);
  if (index === -1) return this;

  state.pipes.splice(index, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];

  dest.emit('unpipe', this);

  return this;
};

// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function (ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);

  if (ev === 'data') {
    // Start flowing on next tick if stream isn't explicitly paused
    if (this._readableState.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    var state = this._readableState;
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.emittedReadable = false;
      if (!state.reading) {
        processNextTick(nReadingNextTick, this);
      } else if (state.length) {
        emitReadable(this, state);
      }
    }
  }

  return res;
};
Readable.prototype.addListener = Readable.prototype.on;

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
}

// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function () {
  var state = this._readableState;
  if (!state.flowing) {
    debug('resume');
    state.flowing = true;
    resume(this, state);
  }
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    processNextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  if (!state.reading) {
    debug('resume read 0');
    stream.read(0);
  }

  state.resumeScheduled = false;
  state.awaitDrain = 0;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);
  if (false !== this._readableState.flowing) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);
  while (state.flowing && stream.read() !== null) {}
}

// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function (stream) {
  var state = this._readableState;
  var paused = false;

  var self = this;
  stream.on('end', function () {
    debug('wrapped end');
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) self.push(chunk);
    }

    self.push(null);
  });

  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk);

    // don't skip over falsy values in objectMode
    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = self.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });

  // proxy all the other methods.
  // important when wrapping filters and duplexes.
  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function (method) {
        return function () {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  }

  // proxy certain important events.
  for (var n = 0; n < kProxyEvents.length; n++) {
    stream.on(kProxyEvents[n], self.emit.bind(self, kProxyEvents[n]));
  }

  // when we try to consume some more bytes, simply unpause the
  // underlying stream.
  self._read = function (n) {
    debug('wrapped _read', n);
    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return self;
};

// exposed for testing purposes only.
Readable._fromList = fromList;

// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;

  var ret;
  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = fromListPartial(n, state.buffer, state.decoder);
  }

  return ret;
}

// Extracts only enough buffered data to satisfy the amount requested.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromListPartial(n, list, hasStrings) {
  var ret;
  if (n < list.head.data.length) {
    // slice is the same for buffers and strings
    ret = list.head.data.slice(0, n);
    list.head.data = list.head.data.slice(n);
  } else if (n === list.head.data.length) {
    // first chunk is a perfect match
    ret = list.shift();
  } else {
    // result spans more than one buffer
    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
  }
  return ret;
}

// Copies a specified amount of characters from the list of buffered data
// chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBufferString(n, list) {
  var p = list.head;
  var c = 1;
  var ret = p.data;
  n -= ret.length;
  while (p = p.next) {
    var str = p.data;
    var nb = n > str.length ? str.length : n;
    if (nb === str.length) ret += str;else ret += str.slice(0, n);
    n -= nb;
    if (n === 0) {
      if (nb === str.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = str.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

// Copies a specified amount of bytes from the list of buffered data chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBuffer(n, list) {
  var ret = bufferShim.allocUnsafe(n);
  var p = list.head;
  var c = 1;
  p.data.copy(ret);
  n -= p.data.length;
  while (p = p.next) {
    var buf = p.data;
    var nb = n > buf.length ? buf.length : n;
    buf.copy(ret, ret.length - n, 0, nb);
    n -= nb;
    if (n === 0) {
      if (nb === buf.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = buf.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;

  // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.
  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

  if (!state.endEmitted) {
    state.ended = true;
    processNextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  // Check that we didn't get one last unshift.
  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');
  }
}

function forEach(xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }
  return -1;
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.



module.exports = Transform;

var Duplex = __webpack_require__(7);

/*<replacement>*/
var util = __webpack_require__(12);
util.inherits = __webpack_require__(9);
/*</replacement>*/

util.inherits(Transform, Duplex);

function TransformState(stream) {
  this.afterTransform = function (er, data) {
    return afterTransform(stream, er, data);
  };

  this.needTransform = false;
  this.transforming = false;
  this.writecb = null;
  this.writechunk = null;
  this.writeencoding = null;
}

function afterTransform(stream, er, data) {
  var ts = stream._transformState;
  ts.transforming = false;

  var cb = ts.writecb;

  if (!cb) return stream.emit('error', new Error('no writecb in Transform class'));

  ts.writechunk = null;
  ts.writecb = null;

  if (data !== null && data !== undefined) stream.push(data);

  cb(er);

  var rs = stream._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    stream._read(rs.highWaterMark);
  }
}

function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);

  Duplex.call(this, options);

  this._transformState = new TransformState(this);

  var stream = this;

  // start out asking for a readable event once data is transformed.
  this._readableState.needReadable = true;

  // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;

    if (typeof options.flush === 'function') this._flush = options.flush;
  }

  // When the writable side finishes, then flush out anything remaining.
  this.once('prefinish', function () {
    if (typeof this._flush === 'function') this._flush(function (er, data) {
      done(stream, er, data);
    });else done(stream);
  });
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function (chunk, encoding, cb) {
  throw new Error('_transform() is not implemented');
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
};

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

function done(stream, er, data) {
  if (er) return stream.emit('error', er);

  if (data !== null && data !== undefined) stream.push(data);

  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided
  var ws = stream._writableState;
  var ts = stream._transformState;

  if (ws.length) throw new Error('Calling transform done when ws.length != 0');

  if (ts.transforming) throw new Error('Calling transform done when still transforming');

  return stream.push(null);
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(22).EventEmitter;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CollectionProperty_1 = __webpack_require__(15);
var EventType_1 = __webpack_require__(2);
var EventManager_1 = __webpack_require__(6);
/**
 * Декоратор свойства компонента или страницы
 * @param data
 * @returns {(target:any)}
 * @constructor
 */
function JSWorksComponentCollectionProperty(data) {
    return function (target, name) {
        return {
            configurable: false,
            enumerable: false,
            /* tslint:disable */
            get: function () {
                return this["__" + name + "_collection__"];
            },
            set: function (value) {
                var _this = this;
                this["__" + name + "_collection__"] = this["__" + name + "_collection__"] || new CollectionProperty_1.CollectionProperty();
                var collection = this["__" + name + "_collection__"];
                collection['__descriptor__'] = collection['__descriptor__'] || EventManager_1.EventManager.subscribeUnique(collection['__descriptor__'], {}, this, EventType_1.EventType.CREATE, function (event) {
                    if (_this.subscribeCollection && !collection['__subscribed__']) {
                        _this.subscribeCollection(name);
                        _this[name] = value;
                    }
                });
                if (!collection['__subscribed__']) {
                    return;
                }
                if (value instanceof Array) {
                    collection.setValues(value);
                }
                else {
                    collection.setValues([value]);
                }
            },
        };
    };
}
exports.JSWorksComponentCollectionProperty = JSWorksComponentCollectionProperty;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentConfig_1 = __webpack_require__(16);
var InternalDecorator_1 = __webpack_require__(0);
var EventType_1 = __webpack_require__(2);
var CollectionProperty_1 = __webpack_require__(15);
var EventManager_1 = __webpack_require__(6);
var ApplicationContext_1 = __webpack_require__(14);
var ComponentHolder = (function () {
    function ComponentHolder() {
        this.components = {};
        this.pages = {};
        this.prototypes = {};
    }
    /**
     * Загрузить все компоненты. Должен быть вызван после загрузки всех View.
     */
    ComponentHolder.prototype.load = function () {
        var _this = this;
        __JSWorks_components__.forEach(function (componentProto) {
            _this.initComponent(componentProto);
        });
    };
    /**
     * Создать дубликат компонента из прототипа и вернуть его имя
     * @param componentProto
     */
    ComponentHolder.prototype.duplicateComponent = function (componentProto) {
        var _this = this;
        var appContext = JSWorks.applicationContext;
        var viewName = appContext.viewHolder.duplicateView(componentProto.__view_name__);
        var controllerName = appContext.controllerHolder.duplicateController(componentProto.__controller_name__);
        var name = ApplicationContext_1.ApplicationContext.UniqueName(componentProto.name, function (cname) { return _this.components[cname]; });
        this.initComponent(componentProto, name, viewName, controllerName);
        return name;
    };
    /**
     * Инициализировать компонент из прототипа
     * @param componentProto
     * @param name
     * @param viewName
     * @param controllerName
     */
    ComponentHolder.prototype.initComponent = function (componentProto, name, viewName, controllerName) {
        var _this = this;
        var views = JSWorks.applicationContext.viewHolder;
        var controllers = JSWorks.applicationContext.controllerHolder;
        name = name || componentProto.name;
        viewName = viewName || componentProto.__view_name__;
        controllerName = controllerName || componentProto.__controller_name__;
        this.prototypes[name] = componentProto;
        var component = new componentProto();
        component.variables = {};
        component.id = name;
        component.fields = (__JSWorks_component_fields__[componentProto.name] || []).map(function (nm) { return nm; });
        component.setVariable = function (cname, value) {
            component.variables[cname] = value;
            if (component.emitEvent) {
                component.emitEvent({ type: EventType_1.EventType.UPDATE, data: undefined });
            }
        };
        component.getVariable = function (cname) {
            return component.variables[cname];
        };
        component.subscribeCollection = function (cname) {
            if (component[cname].__subscribed__) {
                return;
            }
            var oldCollection = component[cname];
            component[cname] = new CollectionProperty_1.CollectionProperty();
            component[cname].__subscribed__ = true;
            EventManager_1.EventManager.subscribe({}, component[cname], EventType_1.EventType.UPDATE, function (event) {
                var emit = function () {
                    if (component.emitEvent) {
                        component.emitEvent({ type: EventType_1.EventType.UPDATE, data: {} });
                        component.emitEvent({ type: EventType_1.EventType.PostUpdate, data: {} });
                    }
                };
                var appContext = JSWorks.applicationContext;
                if (appContext.loaded) {
                    emit();
                    return;
                }
                JSWorks.EventManager.subscribe(_this, appContext, EventType_1.EventType.ViewsListenersInstalled, function (ev) {
                    emit();
                });
            });
            if (oldCollection && oldCollection.length > 0) {
                component[name].setValues(oldCollection.getValues());
            }
        };
        (componentProto.__collections__ || []).forEach(function (cname) {
            component.subscribeCollection(cname);
        });
        var view = views.getView(viewName);
        view.component = component;
        view.applicationContext = JSWorks.applicationContext;
        component.view = view;
        component.controller = controllers.getController(controllerName);
        component.applicationContext = JSWorks.applicationContext;
        component.type = componentProto.__type__;
        component.controller.component = component;
        component.controller.applicationContext = JSWorks.applicationContext;
        switch (componentProto.__type__) {
            case ComponentConfig_1.ComponentConfig.Types.PAGE:
                {
                    this.pages[name] = component;
                }
                break;
            case ComponentConfig_1.ComponentConfig.Types.COMPONENT:
                {
                    this.components[name] = component;
                }
                break;
            default: {
                throw new Error("Unknown component type: " + componentProto.__type__);
            }
        }
        if (component.emitEvent) {
            component.emitEvent({ type: EventType_1.EventType.CREATE, data: component });
        }
    };
    /**
     * Получить компонент по имени
     * @param name
     * @returns {any}
     */
    ComponentHolder.prototype.getComponent = function (name) {
        return this.components[name];
    };
    /**
     * Получить прототип компонента по имени
     * @param name
     * @returns {any}
     */
    ComponentHolder.prototype.getComponentPrototype = function (name) {
        return this.prototypes[name];
    };
    /**
     * Получить страницу по имени
     * @param name
     * @returns {any}
     */
    ComponentHolder.prototype.getPage = function (name) {
        return this.pages[name];
    };
    return ComponentHolder;
}());
ComponentHolder = __decorate([
    InternalDecorator_1.JSWorksInternal
], ComponentHolder);
exports.ComponentHolder = ComponentHolder;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EventType_1 = __webpack_require__(2);
/**
 * Декоратор свойства компонента или страницы
 * @param data
 * @returns {(target:any)}
 * @constructor
 */
function JSWorksComponentProperty(data) {
    return function (target, name) {
        var targetName = target.constructor.name;
        __JSWorks_component_fields__[targetName] = __JSWorks_component_fields__[targetName] || [];
        __JSWorks_component_fields__[targetName].push(name);
        return {
            configurable: false,
            enumerable: false,
            /* tslint:disable */
            get: function () {
                return this["__" + name + "__"];
            },
            set: function (value) {
                var _this = this;
                this["__" + name + "__"] = value;
                var emit = function () {
                    if (_this.emitEvent) {
                        _this.emitEvent({ type: EventType_1.EventType.UPDATE, data: { name: name, value: value } });
                        _this.emitEvent({ type: EventType_1.EventType.PostUpdate, data: { name: name, value: value } });
                    }
                };
                var pushField = function () {
                    _this.fields = _this.fields || [];
                    _this.fields.push(name);
                };
                var appContext = JSWorks.applicationContext;
                if (appContext.loaded) {
                    pushField();
                    emit();
                    return;
                }
                JSWorks.EventManager.subscribe(this, appContext, EventType_1.EventType.ViewsListenersInstalled, function (ev) {
                    pushField();
                    emit();
                });
            },
        };
    };
}
exports.JSWorksComponentProperty = JSWorksComponentProperty;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ComponentConfig_1 = __webpack_require__(16);
var ComponentDecorator_1 = __webpack_require__(26);
/**
 * Декоратор страницы
 * @param data
 * @returns {(target:any)=>undefined}
 * @constructor
 */
function JSWorksPage(data) {
    return function (target) {
        ComponentDecorator_1.JSWorksComponent(data)(target);
        target.__type__ = ComponentConfig_1.ComponentConfig.Types.PAGE;
    };
}
exports.JSWorksPage = JSWorksPage;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Декоратор, объявляющий контроллер
 * @param target
 * @constructor
 */
function JSWorksController(target) {
    __JSWorks_controllers__.push(target);
}
exports.JSWorksController = JSWorksController;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var InternalDecorator_1 = __webpack_require__(0);
var ControllerAlreadyRegisteredError_1 = __webpack_require__(49);
var UnknownControllerError_1 = __webpack_require__(63);
var ApplicationContext_1 = __webpack_require__(14);
var ControllerHolder = (function () {
    function ControllerHolder() {
        this.controllers = {};
        this.prototypes = {};
        this.controllerCount = 0;
    }
    /**
     * Загрузить все существующие контроллеры
     */
    ControllerHolder.prototype.load = function () {
        var _this = this;
        __JSWorks_controllers__.forEach(function (controller) {
            _this.registerController(controller);
        });
    };
    /**
     * Зарегистрировать контроллер
     * @param controllerProto экземпляр контролера имеет поле namе, оно же тип класса контроллера
     * @param name
     */
    ControllerHolder.prototype.registerController = function (controllerProto, name) {
        name = name || controllerProto.name;
        if (this.controllers[name]) {
            throw new ControllerAlreadyRegisteredError_1.ControllerAlreadyRegisteredError(name);
        }
        this.controllers[name] = new controllerProto();
        this.prototypes[name] = controllerProto;
        this.controllerCount++;
    };
    /**
     * Создать дубликат контроллера и вернуть его имя
     * @param oldName
     */
    ControllerHolder.prototype.duplicateController = function (oldName) {
        var _this = this;
        var newName = ApplicationContext_1.ApplicationContext.UniqueName(oldName, function (name) { return _this.controllers[name]; });
        this.registerController(this.prototypes[oldName], newName);
        return newName;
    };
    /**
     * Получить контроллер по имени(типу)
     * @param name
     * @returns {object} экземляр контроллера
     */
    ControllerHolder.prototype.getController = function (name) {
        if (!this.controllers[name]) {
            throw new UnknownControllerError_1.UnknownControllerError(name);
        }
        return this.controllers[name];
    };
    return ControllerHolder;
}());
ControllerHolder = __decorate([
    InternalDecorator_1.JSWorksInternal
], ControllerHolder);
exports.ControllerHolder = ControllerHolder;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var InternalDecorator_1 = __webpack_require__(0);
var SimpleVirtualDOM_1 = __webpack_require__(4);
var UnknownCustomElementError_1 = __webpack_require__(64);
var CustomElementHolder = (function () {
    function CustomElementHolder() {
        this.elements = {};
    }
    /**
     * Загружает все пользовательские DOM элементы
     */
    CustomElementHolder.prototype.load = function () {
        var _this = this;
        var appContext = JSWorks.applicationContext;
        var virtualDOM = appContext.serviceHolder.getServiceByName('SimpleVirtualDOM');
        __JSWorks_custom_elements__.forEach(function (elementProto) {
            var element = new elementProto(SimpleVirtualDOM_1.SimpleVirtualDOM.NextHash());
            var tagName = elementProto.__tagName__.toUpperCase();
            virtualDOM.registerCustomElement(tagName, element);
            _this.elements[tagName] = element;
        });
    };
    /**
     * Получить пользовательский элемент по тэгу
     * @param tagName
     * @returns {any}
     */
    CustomElementHolder.prototype.getElement = function (tagName) {
        tagName = tagName.toUpperCase();
        if (this.elements[tagName]) {
            return this.elements[tagName];
        }
        throw new UnknownCustomElementError_1.UnknownCustomElementError(tagName);
    };
    return CustomElementHolder;
}());
CustomElementHolder = __decorate([
    InternalDecorator_1.JSWorksInternal
], CustomElementHolder);
exports.CustomElementHolder = CustomElementHolder;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractListeningElement_1 = __webpack_require__(17);
var AbstractConditionElement = (function (_super) {
    __extends(AbstractConditionElement, _super);
    function AbstractConditionElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Будет вызван при изменении компонента, на который данный тэг был подписан
     */
    AbstractConditionElement.prototype.propertyChange = function () {
        var newValue = this.execStatement(this.getAttribute('condition'));
        if (newValue !== this.lastValue) {
            this.lastValue = newValue;
            this.conditionChange(newValue);
        }
    };
    return AbstractConditionElement;
}(AbstractListeningElement_1.AbstractListeningElement));
exports.AbstractConditionElement = AbstractConditionElement;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var SimpleVirtualDOMElementExt_1 = __webpack_require__(11);
var InternalDecorator_1 = __webpack_require__(0);
var CustomElementDecorator_1 = __webpack_require__(5);
var ViewConfig_1 = __webpack_require__(3);
var SimpleVirtualDOM_1 = __webpack_require__(4);
var EventType_1 = __webpack_require__(2);
var UnresolvableViewInheritanceError_1 = __webpack_require__(68);
var DuplicateViewParamError_1 = __webpack_require__(54);
var UnresolvableViewIncludeError_1 = __webpack_require__(67);
var AttributeNotFoundError_1 = __webpack_require__(18);
var AppViewElement = AppViewElement_1 = (function (_super) {
    __extends(AppViewElement, _super);
    function AppViewElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // private static listening: boolean = false;
    /**
     * Отрисовать наследование
     * @param viewHolder
     */
    AppViewElement.renderViewInheritance = function (viewHolder) {
        AppViewElement_1.resolveCircular(viewHolder, function (viewName, view, rendered, render) {
            if (!view.DOMRoot.hasAttribute('extends')) {
                render(viewName, view);
                return;
            }
            var extendsName = view.DOMRoot.getAttribute('extends');
            var extendsView = rendered[extendsName];
            if (extendsView) {
                AppViewElement_1.extend(view.DOMRoot, extendsView);
                // (<AppViewElement> view.DOMRoot).extend(extendsView);
                render(viewName, view);
            }
        }, function () {
            JSWorks.applicationContext.emitEvent({ type: EventType_1.EventType.ViewsInheritanceRendered, data: undefined });
        }, function () {
            throw new UnresolvableViewInheritanceError_1.UnresolvableViewInheritanceError();
        });
    };
    /**
     * Отрисовать включения
     * @param viewHolder
     */
    AppViewElement.renderViewIncludes = function (viewHolder) {
        AppViewElement_1.resolveCircular(viewHolder, function (viewName, view, rendered, render) {
            var includes = view.DOMRoot.querySelectorAll(ViewConfig_1.ViewConfig.VIEW_INCLUDE_TAG);
            var includeCount = includes.length;
            var renderedCount = 0;
            includes.forEach(function (tag) {
                var paramValues = {};
                var includeName = tag.getAttribute('name');
                if (!tag.hasAttribute('name')) {
                    throw new AttributeNotFoundError_1.AttributeNotFoundError('name', 'View-include');
                }
                if (!rendered[includeName]) {
                    return;
                }
                tag.querySelectorAll(ViewConfig_1.ViewConfig.VIEW_PARAM_TAG).forEach(function (paramTag) {
                    var name = paramTag.getAttribute('name');
                    if (paramTag.hasAttribute('resolved')) {
                        return;
                    }
                    if (paramValues[name]) {
                        throw new DuplicateViewParamError_1.DuplicateViewParamError(name, viewName);
                    }
                    paramTag.ready = false;
                    paramValues[name] = paramTag.cloneNode();
                    paramValues[name].setAttribute('resolved', 'true');
                });
                var cloned = rendered[includeName].DOMRoot.cloneNode();
                cloned.querySelectorAll(ViewConfig_1.ViewConfig.VIEW_PARAM_TAG).forEach(function (paramTag) {
                    paramTag.removeChildren();
                    paramTag.appendChild(paramValues[paramTag.getAttribute('name')]._children);
                    paramTag.setAttribute('resolved', 'true');
                });
                tag.removeChildren();
                tag.appendChild(cloned._children);
                renderedCount++;
            });
            if (includeCount === renderedCount) {
                render(viewName, view);
                // (<SimpleVirtualDOMElement> view.DOMRoot).customClear();
                // (<SimpleVirtualDOMElement> view.DOMRoot).propagateView(undefined);
                // (<SimpleVirtualDOMElement> view.DOMRoot).propagateView(view);
            }
        }, function () {
            // JSWorks.applicationContext.emitEvent({ type: EventType.ViewIncludesRendered, data: undefined });
            return;
        }, function () {
            throw new UnresolvableViewIncludeError_1.UnresolvableViewIncludeError();
        });
    };
    /**
     * Унаследовать текущую View от переданной
     * @param source
     * @param extending
     */
    AppViewElement.extend = function (source, extending) {
        var viewDOM = extending.DOMRoot.cloneNode();
        var includes = viewDOM.querySelector(ViewConfig_1.ViewConfig.VIEW_YIELD_TAG);
        if (includes) {
            includes.parentNode.replaceChild(source._children, includes);
        }
        source._children = [];
        viewDOM._children.forEach(function (child) {
            source.appendChild(child);
        });
        source.emitMutilationEvent({ type: EventType_1.EventType.ViewExtended, data: this });
    };
    AppViewElement.resolveCircular = function (viewHolder, callback, success, error) {
        var rendered = {};
        var viewNames = Object.keys(viewHolder.views);
        var renderedCount = 0;
        for (var i = 0; i < 100; i++) {
            viewNames.forEach(function (viewName) {
                if (rendered[viewName]) {
                    return;
                }
                callback(viewName, viewHolder.getView(viewName), rendered, function (renderViewName, view) {
                    rendered[renderViewName] = view;
                    renderedCount++;
                });
            });
            if (renderedCount === viewNames.length) {
                success();
                return;
            }
        }
        error();
    };
    /**
     * Фабрика AppViewElement
     * @returns {AppViewElement}
     */
    AppViewElement.prototype.createElement = function () {
        return new AppViewElement_1(SimpleVirtualDOM_1.SimpleVirtualDOM.NextHash());
    };
    /**
     * См. SimpleVirtualDOMElement.render
     */
    AppViewElement.prototype.render = function () {
        _super.prototype.render.call(this);
        if (this.tagName === undefined) {
            return;
        }
        this.rendered.removeAttribute('id');
    };
    return AppViewElement;
}(SimpleVirtualDOMElementExt_1.SimpleVirtualDOMElementExt));
AppViewElement = AppViewElement_1 = __decorate([
    InternalDecorator_1.JSWorksInternal,
    CustomElementDecorator_1.JSWorksCustomElement(ViewConfig_1.ViewConfig.VIEW_TAG)
], AppViewElement);
exports.AppViewElement = AppViewElement;
var AppViewElement_1;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractListeningElement_1 = __webpack_require__(17);
var SimpleVirtualDOM_1 = __webpack_require__(4);
var CollectionProperty_1 = __webpack_require__(15);
var CannotIterateOverNonCollectionError_1 = __webpack_require__(48);
var InternalDecorator_1 = __webpack_require__(0);
var CustomElementDecorator_1 = __webpack_require__(5);
var ViewConfig_1 = __webpack_require__(3);
var ViewForElement = ViewForElement_1 = (function (_super) {
    __extends(ViewForElement, _super);
    function ViewForElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Проинициализировать шаблон итератора
     * @param root
     * @param template
     * @returns {SimpleVirtualDOMElement}
     */
    ViewForElement.init = function (root, template) {
        var appContext = JSWorks.applicationContext;
        var virtualDOM = appContext.serviceHolder.getServiceByName('SimpleVirtualDOM');
        if (!template) {
            template = virtualDOM.createElement(ViewConfig_1.ViewConfig.VIEW_ITEM);
            template.ready = false;
            root._children.forEach(function (child) {
                template.appendChild(child.cloneNode());
            });
            root.removeChildren();
        }
        return template;
    };
    /**
     * Проитерироваться по коллекции, изменяя содержимое root
     * @param root
     * @param template
     * @param collection
     * @param hash
     * @param view
     * @param varName
     */
    ViewForElement.iterateCollection = function (root, template, collection, hash, view, varName) {
        if (hash === void 0) { hash = -1; }
        var values = collection;
        if (collection instanceof CollectionProperty_1.CollectionProperty) {
            if (collection.cleanForTag[hash]) {
                return;
            }
            collection.cleanForTag[hash] = true;
            values = collection.getValues();
        }
        root['__view__'] = view;
        values.forEach(function (value, index) {
            if (!root._children[index]) {
                root.appendChild(template.cloneNode());
            }
            else if (!(!root._children[index]['__for_value__'] ||
                (root._children[index]['__for_value__'] !== value))) {
                return;
            }
            varName = varName || root.getAttribute('variable');
            ViewForElement_1.propagateValue(root, root._children[index], varName, value);
        });
        if (collection.length < root._children.length) {
            while (collection.length !== root._children.length) {
                root.removeChild(root._children[root._children.length - 1]);
            }
        }
    };
    /**
     * Задать значение элементу перечисления
     * @param root
     * @param node
     * @param varName
     * @param value
     */
    ViewForElement.propagateValue = function (root, node, varName, value) {
        node['__for_value__'] = value;
        root['__view__'].component.variables[varName] = value;
        node.ready = true;
        node.customUpdate();
        node.ready = false;
        root['__view__'].component.variables[varName] = undefined;
    };
    /**
     * Фабрика ViewForElement
     * @returns {undefined}
     */
    ViewForElement.prototype.createElement = function () {
        var element = new ViewForElement_1(SimpleVirtualDOM_1.SimpleVirtualDOM.NextHash());
        element.superCreateElement();
        return element;
    };
    /**
     * См. View.propagateView
     * @param view
     */
    ViewForElement.prototype.propagateView = function (view) {
        if (this.view === view) {
            return;
        }
        _super.prototype.propagateView.call(this, view);
        var appContext = JSWorks.applicationContext;
        this.virtualDOM = appContext.serviceHolder.getServiceByName('SimpleVirtualDOM');
        this.template = ViewForElement_1.init(this, this.template);
    };
    /**
     * Сбросить шаблон
     */
    ViewForElement.prototype.customClear = function () {
        _super.prototype.customClear.call(this);
        if (this.template) {
            this.removeChildren();
            this.appendChild(this.template._children);
        }
        this.template = undefined;
    };
    /**
     * <view-for variable="person" in="$.persons">
     *     <div class="name">
     *         <view-eval value="person.name"></view-eval>
     *         <view-eval value="person.age"></view-eval>
     *     </div>
     * </view-for>
     */
    ViewForElement.prototype.propertyChange = function () {
        var collection = this.execStatement(this.getAttribute('in'));
        if (!(collection instanceof CollectionProperty_1.CollectionProperty || collection instanceof Array)) {
            throw new CannotIterateOverNonCollectionError_1.CannotIterateOverNonCollectionError(this.getAttribute('in'));
        }
        ViewForElement_1.iterateCollection(this, this.template, collection, this.hash, this.view);
    };
    ViewForElement.prototype.customCloneNode = function (node) {
        _super.prototype.customCloneNode.call(this, node);
        if (this.template) {
            node.template = this.template.cloneNode();
        }
    };
    ViewForElement.prototype.superCreateElement = function () {
        _super.prototype.createElement.call(this);
    };
    return ViewForElement;
}(AbstractListeningElement_1.AbstractListeningElement));
ViewForElement = ViewForElement_1 = __decorate([
    InternalDecorator_1.JSWorksInternal,
    CustomElementDecorator_1.JSWorksCustomElement(ViewConfig_1.ViewConfig.VIEW_FOR_TAG)
], ViewForElement);
exports.ViewForElement = ViewForElement;
var ViewForElement_1;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorDecorator_1 = __webpack_require__(1);
var CannotIterateOverNonCollectionError = (function (_super) {
    __extends(CannotIterateOverNonCollectionError, _super);
    function CannotIterateOverNonCollectionError(statement) {
        return _super.call(this, "Cannot iterate over a non-collection variable: \"" + statement + "\"") || this;
    }
    return CannotIterateOverNonCollectionError;
}(Error));
CannotIterateOverNonCollectionError = __decorate([
    ErrorDecorator_1.JSWorksError,
    __metadata("design:paramtypes", [String])
], CannotIterateOverNonCollectionError);
exports.CannotIterateOverNonCollectionError = CannotIterateOverNonCollectionError;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorDecorator_1 = __webpack_require__(1);
var ControllerAlreadyRegisteredError = (function (_super) {
    __extends(ControllerAlreadyRegisteredError, _super);
    function ControllerAlreadyRegisteredError(controllerName) {
        return _super.call(this, "Controller already registered: \"" + controllerName + "\"") || this;
    }
    return ControllerAlreadyRegisteredError;
}(Error));
ControllerAlreadyRegisteredError = __decorate([
    ErrorDecorator_1.JSWorksError,
    __metadata("design:paramtypes", [String])
], ControllerAlreadyRegisteredError);
exports.ControllerAlreadyRegisteredError = ControllerAlreadyRegisteredError;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorDecorator_1 = __webpack_require__(1);
var CustomElementAlreadyRegisteredError = (function (_super) {
    __extends(CustomElementAlreadyRegisteredError, _super);
    function CustomElementAlreadyRegisteredError(elementName) {
        return _super.call(this, "Custom element already registered: \"" + elementName + "\"") || this;
    }
    return CustomElementAlreadyRegisteredError;
}(Error));
CustomElementAlreadyRegisteredError = __decorate([
    ErrorDecorator_1.JSWorksError,
    __metadata("design:paramtypes", [String])
], CustomElementAlreadyRegisteredError);
exports.CustomElementAlreadyRegisteredError = CustomElementAlreadyRegisteredError;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorDecorator_1 = __webpack_require__(1);
var DuplicateModelError = (function (_super) {
    __extends(DuplicateModelError, _super);
    function DuplicateModelError(modelName) {
        return _super.call(this, "Duplicate model: \"" + modelName + "\"") || this;
    }
    return DuplicateModelError;
}(Error));
DuplicateModelError = __decorate([
    ErrorDecorator_1.JSWorksError,
    __metadata("design:paramtypes", [String])
], DuplicateModelError);
exports.DuplicateModelError = DuplicateModelError;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorDecorator_1 = __webpack_require__(1);
var DuplicateSwitchCaseError = (function (_super) {
    __extends(DuplicateSwitchCaseError, _super);
    function DuplicateSwitchCaseError(condition) {
        return _super.call(this, "Duplicate switch case: \"" + condition + "\"") || this;
    }
    return DuplicateSwitchCaseError;
}(Error));
DuplicateSwitchCaseError = __decorate([
    ErrorDecorator_1.JSWorksError,
    __metadata("design:paramtypes", [String])
], DuplicateSwitchCaseError);
exports.DuplicateSwitchCaseError = DuplicateSwitchCaseError;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorDecorator_1 = __webpack_require__(1);
var DuplicateViewIdError = (function (_super) {
    __extends(DuplicateViewIdError, _super);
    function DuplicateViewIdError(id) {
        return _super.call(this, "Duplicate view id found: \"" + id + "\"") || this;
    }
    return DuplicateViewIdError;
}(Error));
DuplicateViewIdError = __decorate([
    ErrorDecorator_1.JSWorksError,
    __metadata("design:paramtypes", [String])
], DuplicateViewIdError);
exports.DuplicateViewIdError = DuplicateViewIdError;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorDecorator_1 = __webpack_require__(1);
var DuplicateViewParamError = (function (_super) {
    __extends(DuplicateViewParamError, _super);
    function DuplicateViewParamError(name, viewName) {
        return _super.call(this, "Duplicate view param in view " + viewName + " found: \"" + name + "\"") || this;
    }
    return DuplicateViewParamError;
}(Error));
DuplicateViewParamError = __decorate([
    ErrorDecorator_1.JSWorksError,
    __metadata("design:paramtypes", [String, String])
], DuplicateViewParamError);
exports.DuplicateViewParamError = DuplicateViewParamError;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorDecorator_1 = __webpack_require__(1);
var ElementNotFoundError = (function (_super) {
    __extends(ElementNotFoundError, _super);
    function ElementNotFoundError(tag) {
        return _super.call(this, "Element not found: " + tag) || this;
    }
    return ElementNotFoundError;
}(Error));
ElementNotFoundError = __decorate([
    ErrorDecorator_1.JSWorksError,
    __metadata("design:paramtypes", [String])
], ElementNotFoundError);
exports.ElementNotFoundError = ElementNotFoundError;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorDecorator_1 = __webpack_require__(1);
var View_1 = __webpack_require__(31);
var ElementNotPoliteError = (function (_super) {
    __extends(ElementNotPoliteError, _super);
    function ElementNotPoliteError(view) {
        return _super.call(this, "Some element(s) in view " + view.id + " are not polite! Refusing to operate...") || this;
    }
    return ElementNotPoliteError;
}(Error));
ElementNotPoliteError = __decorate([
    ErrorDecorator_1.JSWorksError,
    __metadata("design:paramtypes", [View_1.View])
], ElementNotPoliteError);
exports.ElementNotPoliteError = ElementNotPoliteError;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorDecorator_1 = __webpack_require__(1);
var HTTPError = (function (_super) {
    __extends(HTTPError, _super);
    function HTTPError(method, url, status) {
        var _this = _super.call(this, "HTTPError: \"" + method + " " + url + "\" returned status " + status) || this;
        _this.status = status;
        return _this;
    }
    return HTTPError;
}(Error));
HTTPError = __decorate([
    ErrorDecorator_1.JSWorksError,
    __metadata("design:paramtypes", [String, String, Number])
], HTTPError);
exports.HTTPError = HTTPError;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorDecorator_1 = __webpack_require__(1);
var InterceptorNotFoundError = (function (_super) {
    __extends(InterceptorNotFoundError, _super);
    function InterceptorNotFoundError(typeOrName) {
        return _super.call(this, "Interceptor not found :\"" + typeOrName + "\"") || this;
    }
    return InterceptorNotFoundError;
}(Error));
InterceptorNotFoundError = __decorate([
    ErrorDecorator_1.JSWorksError,
    __metadata("design:paramtypes", [String])
], InterceptorNotFoundError);
exports.InterceptorNotFoundError = InterceptorNotFoundError;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorDecorator_1 = __webpack_require__(1);
var PathNotFoundError = (function (_super) {
    __extends(PathNotFoundError, _super);
    function PathNotFoundError(path) {
        return _super.call(this, "path: '" + path + "' not found") || this;
    }
    return PathNotFoundError;
}(Error));
PathNotFoundError = __decorate([
    ErrorDecorator_1.JSWorksError,
    __metadata("design:paramtypes", [String])
], PathNotFoundError);
exports.PathNotFoundError = PathNotFoundError;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorDecorator_1 = __webpack_require__(1);
var RouteAlreadyExistError = (function (_super) {
    __extends(RouteAlreadyExistError, _super);
    function RouteAlreadyExistError(match) {
        return _super.call(this, "route with match: '" + match + "' already exists") || this;
    }
    return RouteAlreadyExistError;
}(Error));
RouteAlreadyExistError = __decorate([
    ErrorDecorator_1.JSWorksError,
    __metadata("design:paramtypes", [String])
], RouteAlreadyExistError);
exports.RouteAlreadyExistError = RouteAlreadyExistError;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorDecorator_1 = __webpack_require__(1);
var ServiceAlreadyRegisteredError = (function (_super) {
    __extends(ServiceAlreadyRegisteredError, _super);
    function ServiceAlreadyRegisteredError(serviceName) {
        return _super.call(this, "Service already registered: \"" + serviceName + "\"") || this;
    }
    return ServiceAlreadyRegisteredError;
}(Error));
ServiceAlreadyRegisteredError = __decorate([
    ErrorDecorator_1.JSWorksError,
    __metadata("design:paramtypes", [String])
], ServiceAlreadyRegisteredError);
exports.ServiceAlreadyRegisteredError = ServiceAlreadyRegisteredError;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorDecorator_1 = __webpack_require__(1);
var ServiceUnresolvableError = (function (_super) {
    __extends(ServiceUnresolvableError, _super);
    function ServiceUnresolvableError(servicesPresent, servicesResolved) {
        var _this = this;
        var unresolved = [];
        console.log(servicesPresent, servicesResolved);
        Object.keys(servicesPresent).forEach(function (name) {
            if (!(servicesResolved[name])) {
                unresolved.push(name);
            }
        });
        _this = _super.call(this, "Some services have unresolved dependencies: \"" + unresolved.join(', ') + "\"") || this;
        return _this;
    }
    return ServiceUnresolvableError;
}(Error));
ServiceUnresolvableError = __decorate([
    ErrorDecorator_1.JSWorksError,
    __metadata("design:paramtypes", [Object, Object])
], ServiceUnresolvableError);
exports.ServiceUnresolvableError = ServiceUnresolvableError;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorDecorator_1 = __webpack_require__(1);
var UnknownControllerError = (function (_super) {
    __extends(UnknownControllerError, _super);
    function UnknownControllerError(controllerName) {
        return _super.call(this, "Unknown controller: \"" + controllerName + "\"") || this;
    }
    return UnknownControllerError;
}(Error));
UnknownControllerError = __decorate([
    ErrorDecorator_1.JSWorksError,
    __metadata("design:paramtypes", [String])
], UnknownControllerError);
exports.UnknownControllerError = UnknownControllerError;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorDecorator_1 = __webpack_require__(1);
var UnknownCustomElementError = (function (_super) {
    __extends(UnknownCustomElementError, _super);
    function UnknownCustomElementError(tagName) {
        return _super.call(this, "Unknown custom element: \"" + tagName + "\"") || this;
    }
    return UnknownCustomElementError;
}(Error));
UnknownCustomElementError = __decorate([
    ErrorDecorator_1.JSWorksError,
    __metadata("design:paramtypes", [String])
], UnknownCustomElementError);
exports.UnknownCustomElementError = UnknownCustomElementError;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorDecorator_1 = __webpack_require__(1);
var UnknownServiceError = (function (_super) {
    __extends(UnknownServiceError, _super);
    function UnknownServiceError(serviceName) {
        return _super.call(this, "Unknown service: \"" + serviceName + "\"") || this;
    }
    return UnknownServiceError;
}(Error));
UnknownServiceError = __decorate([
    ErrorDecorator_1.JSWorksError,
    __metadata("design:paramtypes", [String])
], UnknownServiceError);
exports.UnknownServiceError = UnknownServiceError;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorDecorator_1 = __webpack_require__(1);
var UnknownServiceTypeError = (function (_super) {
    __extends(UnknownServiceTypeError, _super);
    function UnknownServiceTypeError(typeName) {
        return _super.call(this, "Unknown service type: \"" + typeName + "\"") || this;
    }
    return UnknownServiceTypeError;
}(Error));
UnknownServiceTypeError = __decorate([
    ErrorDecorator_1.JSWorksError,
    __metadata("design:paramtypes", [String])
], UnknownServiceTypeError);
exports.UnknownServiceTypeError = UnknownServiceTypeError;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorDecorator_1 = __webpack_require__(1);
var UnresolvableViewIncludeError = (function (_super) {
    __extends(UnresolvableViewIncludeError, _super);
    function UnresolvableViewIncludeError() {
        return _super.call(this, "Unresolvable view includes") || this;
    }
    return UnresolvableViewIncludeError;
}(Error));
UnresolvableViewIncludeError = __decorate([
    ErrorDecorator_1.JSWorksError,
    __metadata("design:paramtypes", [])
], UnresolvableViewIncludeError);
exports.UnresolvableViewIncludeError = UnresolvableViewIncludeError;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorDecorator_1 = __webpack_require__(1);
var UnresolvableViewInheritanceError = (function (_super) {
    __extends(UnresolvableViewInheritanceError, _super);
    function UnresolvableViewInheritanceError() {
        return _super.call(this, "Unresolvable view inheritance") || this;
    }
    return UnresolvableViewInheritanceError;
}(Error));
UnresolvableViewInheritanceError = __decorate([
    ErrorDecorator_1.JSWorksError,
    __metadata("design:paramtypes", [])
], UnresolvableViewInheritanceError);
exports.UnresolvableViewInheritanceError = UnresolvableViewInheritanceError;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorDecorator_1 = __webpack_require__(1);
var WrongRouterNameError = (function (_super) {
    __extends(WrongRouterNameError, _super);
    function WrongRouterNameError(routerName) {
        return _super.call(this, "router name: \"" + routerName + ", it should be: app-route\"") || this;
    }
    return WrongRouterNameError;
}(Error));
WrongRouterNameError = __decorate([
    ErrorDecorator_1.JSWorksError,
    __metadata("design:paramtypes", [String])
], WrongRouterNameError);
exports.WrongRouterNameError = WrongRouterNameError;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Декоратор перехватчика
 * @param data
 * @returns {(target:any)=>undefined}
 * @constructor
 */
function JSWorksInterceptor(data) {
    return function (target) {
        target.__type__ = data.type;
        __JSWorks_interceptors__.push(target);
    };
}
exports.JSWorksInterceptor = JSWorksInterceptor;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var InternalDecorator_1 = __webpack_require__(0);
var InterceptorNotFound_1 = __webpack_require__(58);
var InterceptorHolder = (function () {
    function InterceptorHolder() {
        this._interceptors = {};
        this.interceptorsByName = {};
    }
    Object.defineProperty(InterceptorHolder.prototype, "interceptors", {
        /**
         * получить всех перехватчиков
         * @returns {object}
         */
        get: function () {
            return this._interceptors;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * загрузить всех перехватчиков
     */
    InterceptorHolder.prototype.load = function () {
        var _this = this;
        __JSWorks_interceptors__.forEach(function (interceptorProto) {
            var interceptor = new interceptorProto();
            interceptor.type = interceptorProto.__type__;
            interceptor.name = interceptorProto.name;
            _this.registerInterceptor(interceptor);
        });
    };
    /**
     * * Получить всех перехватчиков данного типа, если таковые существуют
     * @param interceptorType тип перехватчкика
     * @returns {IInterceptor[]} перехватчики данного типа
     */
    InterceptorHolder.prototype.getInterceptorsByType = function (interceptorType) {
        return this._interceptors[interceptorType];
    };
    /**
     * активировать перехватчики данного типа
     * @param interceptorType тип интерсептора
     * @param args объект аргументов, необходимый для работы каждого перехватчика
     * @returns {Promise<any>} возвращает промис
     */
    InterceptorHolder.prototype.triggerByType = function (interceptorType, args) {
        if (!this._interceptors[interceptorType]) {
            throw new InterceptorNotFound_1.InterceptorNotFoundError(interceptorType.toString());
        }
        return this.trigger(this._interceptors[interceptorType], args);
    };
    /**
     * Активировать список данных перехватчиков
     * @param interceptors
     * @param args
     * @returns {IInterceptor}
     */
    InterceptorHolder.prototype.trigger = function (interceptors, args) {
        return interceptors.reduce(function (prevVal, cur) {
            return prevVal
                .then(function () { return cur.intercept(args); })
                .catch(function (reject) { return Promise.reject(reject); });
        }, Promise.resolve());
    };
    /**
     * Получить список перехватчиков по списку имён
     * @param names
     * @returns {IInterceptor[]}
     */
    InterceptorHolder.prototype.getInterceptors = function (names) {
        var _this = this;
        var result = [];
        if (typeof names === 'string') {
            names = [names];
        }
        names.forEach(function (name) {
            if (!_this.interceptorsByName[name]) {
                throw new InterceptorNotFound_1.InterceptorNotFoundError(name);
            }
            result.push(_this.interceptorsByName[name]);
        });
        return result;
    };
    /**
     * Получить перехватчик по имени
     * @param name
     * @returns {IInterceptor}
     */
    InterceptorHolder.prototype.getInterceptor = function (name) {
        return this.getInterceptors(name)[0];
    };
    /**
     * зарегестрировать перехватчик
     * @param interceptor перехватчик реализующий интерфейс IInterceptor
     */
    InterceptorHolder.prototype.registerInterceptor = function (interceptor) {
        if (!this._interceptors[interceptor.type]) {
            this._interceptors[interceptor.type] = [];
        }
        this._interceptors[interceptor.type].push(interceptor);
        this.interceptorsByName[interceptor.name] = interceptor;
    };
    return InterceptorHolder;
}());
InterceptorHolder = __decorate([
    InternalDecorator_1.JSWorksInternal
], InterceptorHolder);
exports.InterceptorHolder = InterceptorHolder;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Декоратор модели
 * @param target
 * @param name
 * @constructor
 */
function JSWorksModelCreateMethod(target, name) {
    var className = target.name;
    if (target.constructor && target.constructor.name) {
        className = target.constructor.name;
    }
    __JSWorks_models__[className] = __JSWorks_models__[className] || {};
    __JSWorks_models__[className].createMethod = name;
}
exports.JSWorksModelCreateMethod = JSWorksModelCreateMethod;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Декоратор модели
 * @param target
 * @constructor
 */
function JSWorksModel(target) {
    __JSWorks_models__[target.name] = __JSWorks_models__[target.name] || {};
    __JSWorks_models__[target.name].proto = target;
}
exports.JSWorksModel = JSWorksModel;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Декоратор модели
 * @param target
 * @param name
 * @constructor
 */
function JSWorksModelDeleteMethod(target, name) {
    var className = target.name;
    if (target.constructor && target.constructor.name) {
        className = target.constructor.name;
    }
    __JSWorks_models__[className] = __JSWorks_models__[className] || {};
    __JSWorks_models__[className].deleteMethod = name;
}
exports.JSWorksModelDeleteMethod = JSWorksModelDeleteMethod;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Декоратор поля модели
 * @param target
 * @param name
 * @constructor
 */
function JSWorksModelField(target, name) {
    var className = target.name;
    if (target.constructor && target.constructor.name) {
        className = target.constructor.name;
    }
    __JSWorks_models__[className] = __JSWorks_models__[className] || {};
    __JSWorks_models__[className].fields = __JSWorks_models__[className].fields || [];
    __JSWorks_models__[className].fields.push(name);
}
exports.JSWorksModelField = JSWorksModelField;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Декоратор первичного ключа модели
 * @param target
 * @param name
 * @constructor
 */
function JSWorksModelPrimaryKey(target, name) {
    var className = target.name;
    if (target.constructor && target.constructor.name) {
        className = target.constructor.name;
    }
    __JSWorks_models__[className] = __JSWorks_models__[className] || {};
    __JSWorks_models__[className].primaryKey = name;
}
exports.JSWorksModelPrimaryKey = JSWorksModelPrimaryKey;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Декоратор метода чтения
 * @param target
 * @param name
 * @constructor
 */
function JSWorksModelQueryMethod(target, name) {
    var className = target.name;
    if (target.constructor && target.constructor.name) {
        className = target.constructor.name;
    }
    __JSWorks_models__[className] = __JSWorks_models__[className] || {};
    __JSWorks_models__[className].queryMethod = name;
}
exports.JSWorksModelQueryMethod = JSWorksModelQueryMethod;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Декоратор метода чтения
 * @param target
 * @param name
 * @constructor
 */
function JSWorksModelReadMethod(target, name) {
    var className = target.name;
    if (target.constructor && target.constructor.name) {
        className = target.constructor.name;
    }
    __JSWorks_models__[className] = __JSWorks_models__[className] || {};
    __JSWorks_models__[className].readMethod = name;
}
exports.JSWorksModelReadMethod = JSWorksModelReadMethod;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Декоратор модели
 * @param target
 * @param name
 * @constructor
 */
function JSWorksModelUpdateMethod(target, name) {
    var className = target.name;
    if (target.constructor && target.constructor.name) {
        className = target.constructor.name;
    }
    __JSWorks_models__[className] = __JSWorks_models__[className] || {};
    __JSWorks_models__[className].updateMethod = name;
}
exports.JSWorksModelUpdateMethod = JSWorksModelUpdateMethod;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var InternalDecorator_1 = __webpack_require__(0);
var DuplicateModelError_1 = __webpack_require__(51);
var ModelHolder = (function () {
    function ModelHolder() {
        /**
         * Словарь всех моделей
         * @type {{}}
         */
        this.models = {};
    }
    /**
     * Загрузить все объявленные модели
     */
    ModelHolder.prototype.load = function () {
        var _this = this;
        Object.keys(__JSWorks_models__).forEach(function (name) {
            if (_this.models[name]) {
                throw new DuplicateModelError_1.DuplicateModelError(name);
            }
            var model = new (__JSWorks_models__[name].proto)();
            _this.models[name] = model;
            model.modelMetadata = __JSWorks_models__[name];
            model.proto = __JSWorks_models__[name].proto;
            _this.initModel(model);
        });
    };
    /**
     * Возвращает модель по её имени
     * @param name
     * @returns {any}
     */
    ModelHolder.prototype.getModel = function (name) {
        return this.models[name];
    };
    ModelHolder.prototype.initModel = function (model) {
        this.initModelFields(model);
        this.initModelMethods(model);
    };
    ModelHolder.prototype.initModelFields = function (model) {
        (model.modelMetadata.fields || []).forEach(function (fieldName) {
            var name = "__" + fieldName + "_value__";
            Object.defineProperty(model, fieldName, {
                configurable: false,
                enumerable: false,
                /* tslint:disable */
                get: function () {
                    return this[name];
                },
                set: function (value) {
                    this[name] = value;
                    this.__dirty__ = true;
                }
                /* tslint:enable */
            });
        });
    };
    ModelHolder.prototype.initModelMethods = function (model) {
        var modelHolder = this;
        model['__create__'] = model[model.modelMetadata.createMethod];
        model['__read__'] = model[model.modelMetadata.readMethod];
        model['__update__'] = model[model.modelMetadata.updateMethod];
        model['__delete__'] = model[model.modelMetadata.deleteMethod];
        model['__query__'] = model[model.modelMetadata.queryMethod];
        model.create = model['__create__'];
        model.read = model['__read__'];
        model['delete'] = model['__delete__'];
        model.query = model['__query__'];
        model.remove = model['delete'];
        model.jsonParser = JSWorks.applicationContext.serviceHolder.getServiceByName('JSONParser');
        // tslint:disable
        model.isDirty = function () {
            return this['__dirty__'] === true;
        };
        model.setDirty = function (value) {
            if (value === void 0) { value = false; }
            this['__dirty__'] = value;
        };
        model.update = function () {
            var _this = this;
            return this['__update__']().then(function () {
                _this.setDirty(false);
            });
        };
        model.from = function (data) {
            if (typeof data !== 'object') {
                data = undefined;
            }
            var newModel = new this.proto();
            newModel.modelMetadata = this.modelMetadata;
            newModel.proto = this.proto;
            modelHolder.initModel(newModel);
            newModel.apply(data);
            newModel.setDirty(false);
            return newModel;
        };
        model.persist = function () {
            if (this.id) {
                return this.update();
            }
            return this.create();
        };
        model.save = function () {
            if (!this.isDirty()) {
                return Promise.resolve(this);
            }
            return this.persist();
        };
        model.gist = function () {
            var _this = this;
            var fields = {};
            (model.modelMetadata.fields || []).forEach(function (fieldName) {
                fields[fieldName] = _this[fieldName];
            });
            return fields;
        };
        model.apply = function (fields) {
            var _this = this;
            if (typeof fields !== 'object') {
                return;
            }
            Object.keys(fields).forEach(function (fieldName) {
                _this[fieldName] = fields[fieldName];
            });
        };
        // tslint:enable
    };
    return ModelHolder;
}());
ModelHolder = __decorate([
    InternalDecorator_1.JSWorksInternal
], ModelHolder);
exports.ModelHolder = ModelHolder;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var InternalDecorator_1 = __webpack_require__(0);
var HTTPResponse = (function () {
    /**
     * Конструктор
     * @param data
     * @param status
     */
    function HTTPResponse(data, status) {
        this._data = data;
        this._status = status || 200;
    }
    Object.defineProperty(HTTPResponse.prototype, "data", {
        /**
         * Данные, которые вернул сервер
         * @returns {string}
         */
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HTTPResponse.prototype, "status", {
        /**
         * Код ответа
         * @returns {number}
         */
        get: function () {
            return this._status;
        },
        enumerable: true,
        configurable: true
    });
    return HTTPResponse;
}());
HTTPResponse = __decorate([
    InternalDecorator_1.JSWorksInternal,
    __metadata("design:paramtypes", [String, Number])
], HTTPResponse);
exports.HTTPResponse = HTTPResponse;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Router_1 = __webpack_require__(86);
var InternalDecorator_1 = __webpack_require__(0);
var EventManager_1 = __webpack_require__(6);
var EventType_1 = __webpack_require__(2);
var InterceptorType_1 = __webpack_require__(29);
var HistoryAPIRouter = (function (_super) {
    __extends(HistoryAPIRouter, _super);
    function HistoryAPIRouter(baseUrl) {
        var _this = _super.call(this, baseUrl) || this;
        window.addEventListener('popstate', function (event) {
            if (JSWorks.__router_disabled__) {
                return;
            }
            if (event.state && event.state.name) {
                var route = JSWorks.applicationContext.routeHolder.getRoute(String(event.state.name));
                route.fire(event.state.pathVariables);
                return;
            }
        });
        EventManager_1.EventManager.subscribe(_this, JSWorks.applicationContext, EventType_1.EventType.ApplicationLoaded, function (event) {
            var path = window.location.href.split('/', 4)[3];
            var state = _this.pathChange(path);
            state.route.fire(state.pathVariables);
            window.history.replaceState({ name: state.route.name, pathVariables: state.pathVariables }, state.route.name, _this.baseUrl + state.route.getPath(state.pathVariables));
        });
        return _this;
    }
    /**
     * активировать роут и добавить новую запись в историю
     * @param route
     * @param pathVariables
     */
    HistoryAPIRouter.prototype.navigate = function (route, pathVariables) {
        var _this = this;
        var path = route.getPath(pathVariables);
        var interceptorHolder = JSWorks.applicationContext.interceptorHolder;
        return interceptorHolder.triggerByType(InterceptorType_1.InterceptorType.RouteBeforeNavigateInterceptor, {})
            .then(function () {
            route.fire(pathVariables);
            var state = { name: route.name, path: path, pathVariables: pathVariables };
            window.history.pushState(state, route.name, _this.baseUrl + path);
            return Promise.resolve();
        })
            .then(function () { return interceptorHolder.triggerByType(InterceptorType_1.InterceptorType.RouteAfterNavigateInterceptor, {}); })
            .catch(function (rejected) { return console.error(rejected); });
    };
    return HistoryAPIRouter;
}(Router_1.Router));
HistoryAPIRouter = __decorate([
    InternalDecorator_1.JSWorksInternal,
    __metadata("design:paramtypes", [String])
], HistoryAPIRouter);
exports.HistoryAPIRouter = HistoryAPIRouter;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var InternalDecorator_1 = __webpack_require__(0);
var EventType_1 = __webpack_require__(2);
var ViewConfig_1 = __webpack_require__(3);
var Route = (function () {
    function Route(match, path, pathVariableName, name, pageName) {
        /**
         * вложенные роуты
         */
        this.children = {};
        this.match = match;
        this.path = path;
        this.pathVariableName = pathVariableName;
        this.name = name;
        this.pageName = pageName;
    }
    /**
     * Метод вызывается, когда на маршрут переходят
     * @param pathVariables
     */
    Route.prototype.fire = function (pathVariables) {
        this.emitEvent({ type: EventType_1.EventType.ROUTE_FIRED, data: this });
        var componentHolder = JSWorks.applicationContext.componentHolder;
        if (this.pageName && componentHolder.getPage(this.pageName)) {
            var page = componentHolder.getPage(this.pageName);
            var root = document.querySelector(ViewConfig_1.ViewConfig.ROOT_TAG);
            // page.ren
        }
    };
    /**
     * вернуть реальный url
     * @param args объект с переменными пути
     * @returns {string}
     */
    Route.prototype.getPath = function (args) {
        var path = this.path;
        if (args) {
            Object.keys(args).forEach(function (pathVar) {
                var regexp = new RegExp(pathVar);
                path = path.replace(regexp, args[pathVar]);
            });
        }
        return path;
    };
    Route.prototype.emitEvent = function (event) { }; // tslint:disable-line
    return Route;
}());
Route = __decorate([
    InternalDecorator_1.JSWorksInternal,
    __metadata("design:paramtypes", [String, String, String, String, String])
], Route);
exports.Route = Route;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var InternalDecorator_1 = __webpack_require__(0);
var RouteMethod;
(function (RouteMethod) {
    RouteMethod[RouteMethod["HASH"] = 0] = "HASH";
    RouteMethod[RouteMethod["HISTORY_API"] = 1] = "HISTORY_API";
})(RouteMethod || (RouteMethod = {}));
var RouteConfig = (function () {
    function RouteConfig() {
    }
    return RouteConfig;
}());
/**
 * Тэг Route
 * @type {string}
 */
RouteConfig.ROUTE_TAG = 'APP-ROUTE';
/**
 * тег для Routes
 * @type {string}
 */
RouteConfig.ROUTES_TAG = 'APP-ROUTES';
/**
 * enum
 * @type {RouteMethod}
 */
RouteConfig.RouteMethod = RouteMethod;
RouteConfig = __decorate([
    InternalDecorator_1.JSWorksInternal
], RouteConfig);
exports.RouteConfig = RouteConfig;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var InternalDecorator_1 = __webpack_require__(0);
var RouteConfig_1 = __webpack_require__(84);
var Route_1 = __webpack_require__(83);
var WrongRouterNameError_1 = __webpack_require__(69);
var AttributeNotFoundError_1 = __webpack_require__(18);
var RouteAlreadyExistError_1 = __webpack_require__(60);
var EventType_1 = __webpack_require__(2);
var RouteHolder = (function () {
    function RouteHolder() {
        this.routes = {};
        this._root = new Route_1.Route('', '');
    }
    /**
     * загрузить все роуты из html
     */
    RouteHolder.prototype.load = function () {
        var _this = this;
        var routes = Array.from(document.querySelectorAll(RouteConfig_1.RouteConfig.ROUTES_TAG));
        var appContext = JSWorks.applicationContext;
        this.htmlParser = appContext.serviceHolder.getServiceByName('HTMLParser');
        routes.forEach(function (route) {
            Array.from(route.children).forEach(function (routeTag) {
                _this.parseRoute(routeTag, appContext.routeHolder.root, '');
            });
        });
        this.emitEvent({ type: EventType_1.EventType.LOAD, data: this });
    };
    Object.defineProperty(RouteHolder.prototype, "root", {
        get: function () {
            return this._root;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * вернуть роут по имени
     * @param name
     * @returns {any}
     */
    RouteHolder.prototype.getRoute = function (name) {
        return this.routes[name];
    };
    // public getRouteByMatch(name: string): Route {
    //
    // }
    /**
     * рекурсивный обход вложенных тегов
     * @param routeTag
     * @param parent
     * @param path
     */
    RouteHolder.prototype.parseRoute = function (routeTag, parent, path) {
        var _this = this;
        var parsedRoute = this.htmlParser.parseDOM(routeTag);
        if (parsedRoute.tagName !== RouteConfig_1.RouteConfig.ROUTE_TAG) {
            throw new WrongRouterNameError_1.WrongRouterNameError(parsedRoute.tagName);
        }
        if (!parsedRoute.attributes['match']) {
            if (typeof parsedRoute.attributes['default'] === 'string') {
                parsedRoute.attributes['match'] = '';
            }
            else {
                throw new AttributeNotFoundError_1.AttributeNotFoundError('match');
            }
        }
        path = path + '/' + parsedRoute.attributes['match'];
        var route;
        var pathVariableName;
        var match = parsedRoute.attributes['match'];
        if (match.startsWith(':')) {
            pathVariableName = match;
            match = '*';
        }
        if (parsedRoute.id) {
            if (!parsedRoute.attributes['page']) {
                throw new AttributeNotFoundError_1.AttributeNotFoundError('page');
            }
            route = new Route_1.Route(match, path, pathVariableName, parsedRoute.id, parsedRoute.attributes['page']);
            this.routes[parsedRoute.id] = route;
        }
        else {
            route = new Route_1.Route(match, path);
        }
        if (parent.children[match]) {
            throw new RouteAlreadyExistError_1.RouteAlreadyExistError(match);
        }
        parent.children[match] = route;
        Array.from(routeTag.children).forEach(function (innerRoute) {
            _this.parseRoute(innerRoute, route, path);
        });
    };
    RouteHolder.prototype.emitEvent = function (event) { }; // tslint:disable-line
    return RouteHolder;
}());
RouteHolder = __decorate([
    InternalDecorator_1.JSWorksInternal
], RouteHolder);
exports.RouteHolder = RouteHolder;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var PathNotFoundError_1 = __webpack_require__(59);
var InternalDecorator_1 = __webpack_require__(0);
var Router = (function () {
    function Router(baseUrl) {
        if (baseUrl.endsWith('/')) {
            baseUrl = baseUrl.slice(0, -1);
        }
        this.baseUrl = baseUrl;
    }
    /**
     * Найти роут, если он существует
     * @param path
     */
    Router.prototype.pathChange = function (path) {
        var _this = this;
        var matches = path.split('/');
        var pathVariables = {};
        var route = JSWorks.applicationContext.routeHolder.root;
        matches.forEach(function (match) {
            route = _this.findRoute(route, match, pathVariables);
            if (!route) {
                throw new PathNotFoundError_1.PathNotFoundError(path);
            }
        });
        // this.navigate(route, pathVariables);
        // return {name: route.name, path: route.getPath(pathVariables), pathVariables};
        return { route: route, pathVariables: pathVariables };
    };
    /**
     * Поиск роута в детях родителя
     * @param parent
     * @param match
     * @param pathVariables
     * @returns {Route}
     */
    Router.prototype.findRoute = function (parent, match, pathVariables) {
        if (parent.children[match] === undefined) {
            var pathVarChild = parent.children['*'];
            if (pathVarChild) {
                pathVariables[pathVarChild.pathVariableName] = match;
                return pathVarChild;
            }
            return;
        }
        return parent.children[match];
    };
    return Router;
}());
Router = __decorate([
    InternalDecorator_1.JSWorksInternal,
    __metadata("design:paramtypes", [String])
], Router);
exports.Router = Router;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ServiceAlreadyRegisteredError_1 = __webpack_require__(61);
var ServiceUnresolvableError_1 = __webpack_require__(62);
var UnknownServiceError_1 = __webpack_require__(65);
var UnknownServiceTypeError_1 = __webpack_require__(66);
var InternalDecorator_1 = __webpack_require__(0);
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
     * @returns {any}
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
     * @returns {any}
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
                if (typeof requiredService === 'string') {
                    requiredService = {
                        name: requiredService,
                        type: requiredService,
                    };
                }
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
                var instance_1 = service; // .getInstance(args);
                Object.keys(args).forEach(function (dependencyName) {
                    var name = dependencyName.slice(0, 1).toLowerCase() + dependencyName.slice(1);
                    instance_1[name] = args[dependencyName];
                });
                if (service.name) {
                    _this.serviceInstances[service.name] = instance_1;
                }
                _this.serviceInstancesByType[service.type] = _this.serviceInstancesByType[service.type] || [];
                _this.serviceInstancesByType[service.type].push(instance_1);
                _this.serviceInitCount++;
                service['__loaded__'] = true;
            }
        });
        return this.serviceCount === this.serviceInitCount;
    };
    return ServiceHolder;
}());
ServiceHolder = __decorate([
    InternalDecorator_1.JSWorksInternal
], ServiceHolder);
exports.ServiceHolder = ServiceHolder;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ApplicationContext_1 = __webpack_require__(14);
var EventType_1 = __webpack_require__(2);
var View_1 = __webpack_require__(31);
var DuplicateViewIdError_1 = __webpack_require__(53);
var InternalDecorator_1 = __webpack_require__(0);
var ViewConfig_1 = __webpack_require__(3);
var AppViewElement_1 = __webpack_require__(46);
var ViewHolder = (function () {
    function ViewHolder() {
        /**
         * Все загруженные View приложения
         */
        this.views = {};
        this._templates = [];
    }
    /**
     * Загрузить информацию о всех View из файлов приложения
     * @returns {undefined}
     */
    ViewHolder.prototype.load = function () {
        var _this = this;
        var appContext = JSWorks.applicationContext;
        var virtualDOM = appContext.serviceHolder.getServiceByName('SimpleVirtualDOM');
        this.queryViewTemplates().then(function () {
            _this._templates.forEach(function (template) {
                var node = virtualDOM.createElement(template);
                node.querySelectorAll(ViewConfig_1.ViewConfig.VIEW_TEMPLATE_TAG).forEach(function (tag) {
                    var view = new View_1.View({ id: tag.id, template: tag });
                    if (_this.views[view.id]) {
                        throw new DuplicateViewIdError_1.DuplicateViewIdError(view.id);
                    }
                    _this.views[view.id] = view;
                    view.render();
                });
            });
            _this.emitEvent({ type: EventType_1.EventType.LOAD, data: _this });
        });
    };
    /**
     * Отрисовать пользовательские элементы
     */
    ViewHolder.prototype.renderIncludesAndInheritance = function () {
        AppViewElement_1.AppViewElement.renderViewInheritance(this);
        AppViewElement_1.AppViewElement.renderViewIncludes(this);
    };
    /**
     * Создать дубликат View, зарегистрировать и вернуть его имя
     * @param oldName
     * @returns {string}
     */
    ViewHolder.prototype.duplicateView = function (oldName) {
        var _this = this;
        var newName = ApplicationContext_1.ApplicationContext.UniqueName(oldName, function (name) { return _this.views[name]; });
        this.views[newName] = this.getView(oldName).clone(newName);
        return newName;
    };
    /**
     * Отрисовать пользовательские элементы во вьюхах
     */
    ViewHolder.prototype.renderViews = function () {
        Object.keys(JSWorks.applicationContext.viewHolder.views).forEach(function (viewName) {
            var view = JSWorks.applicationContext.viewHolder.getView(viewName);
            view.DOMRoot.ready = false;
            view.cloneDOMRoot(view);
            view.DOMRoot.render();
        });
    };
    /**
     * Получить экземпляр View по имени
     * @param name
     * @returns {any}
     */
    ViewHolder.prototype.getView = function (name) {
        return this.views[name];
    };
    ViewHolder.prototype.queryViewTemplates = function () {
        var _this = this;
        var imports = Array.from(document.querySelectorAll('link[rel="import"]'));
        var templatePromises = [];
        var appContext = JSWorks.applicationContext;
        var htmlParser = appContext.serviceHolder.getServiceByName('HTMLParser');
        imports.forEach(function (tag) {
            if (tag.import) {
                _this._templates.push(htmlParser.parseDOM(tag.import.firstChild));
                templatePromises.push(Promise.resolve(true));
                return;
            }
            templatePromises.push(htmlParser.parseURLAsync(tag.getAttribute('href')).then(function (result) {
                result.forEach(function (template) {
                    _this._templates.push(template);
                });
            }));
        });
        return Promise.all(templatePromises);
    };
    ViewHolder.prototype.emitEvent = function (event) { }; // tslint:disable-line
    return ViewHolder;
}());
ViewHolder = __decorate([
    InternalDecorator_1.JSWorksInternal
], ViewHolder);
exports.ViewHolder = ViewHolder;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var VirtualDOMElementArray = (function () {
    /**
     *
     * @param elements
     */
    function VirtualDOMElementArray(elements) {
        /**
         * длина массива
         * @type {number}
         */
        this.length = 0;
        this.lastIndex = 0;
        this.elements = elements;
        this.length = elements.length;
    }
    /**
     * Итератор
     * @returns {Iterator<IVirtualDOMElement>}
     */
    VirtualDOMElementArray.prototype[Symbol.iterator] = function () {
        var _this = this;
        return {
            next: function () {
                if (_this.lastIndex < _this.elements.length) {
                    _this.lastIndex++;
                    return { value: _this.elements[_this.lastIndex - 1], done: false };
                }
                _this.lastIndex = 0;
                return { value: undefined, done: true };
            },
        };
    };
    /**
     * Возвращает элемент по данному индексу
     * @param index
     * @returns {IVirtualDOMElement}
     */
    VirtualDOMElementArray.prototype.item = function (index) {
        return this.elements[index];
    };
    return VirtualDOMElementArray;
}());
exports.VirtualDOMElementArray = VirtualDOMElementArray;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = language

var tokenizer = __webpack_require__(95)

function language(lookups, matchComparison) {
  return function(selector) {
    return parse(selector, remap(lookups),
                 matchComparison || caseSensitiveComparison)
  }
}

function remap(opts) {
  for(var key in opts) if(opt_okay(opts, key)) {
    opts[key] = Function(
        'return function(node, attr) { return node.' + opts[key] + ' }'
    )
    opts[key] = opts[key]()
  }

  return opts
}

function opt_okay(opts, key) {
  return opts.hasOwnProperty(key) && typeof opts[key] === 'string'
}

function parse(selector, options, matchComparison) {
  var stream = tokenizer()
    , default_subj = true
    , selectors = [[]]
    , traversal
    , bits

  bits = selectors[0]

  traversal = {
      '': any_parents
    , '>': direct_parent
    , '+': direct_sibling
    , '~': any_sibling
  }

  stream
    .on('data', group)
    .end(selector)

  function group(token) {
    var crnt

    if(token.type === 'comma') {
      selectors.unshift(bits = [])

      return
    }

    if(token.type === 'op' || token.type === 'any-child') {
      bits.unshift(traversal[token.data])
      bits.unshift(check())

      return
    }

    bits[0] = bits[0] || check()
    crnt = bits[0]

    if(token.type === '!') {
      crnt.subject =
      selectors[0].subject = true

      return
    }

    crnt.push(
        token.type === 'class' ? listContains(token.type, token.data) :
        token.type === 'attr' ? attr(token) :
        token.type === ':' || token.type === '::' ? pseudo(token) :
        token.type === '*' ? Boolean :
        matches(token.type, token.data, matchComparison)
    )
  }

  return selector_fn

  function selector_fn(node, as_boolean) {
    var current
      , length
      , orig
      , subj
      , set

    orig = node
    set = []

    for(var i = 0, len = selectors.length; i < len; ++i) {
      bits = selectors[i]
      current = entry
      length = bits.length
      node = orig
      subj = []

      for(var j = 0; j < length; j += 2) {
        node = current(node, bits[j], subj)

        if(!node) {
          break
        }

        current = bits[j + 1]
      }

      if(j >= length) {
        if(as_boolean) {
          return true
        }

        add(!bits.subject ? [orig] : subj)
      }
    }

    if(as_boolean) {
      return false
    }

    return !set.length ? false :
            set.length === 1 ? set[0] :
            set

    function add(items) {
      var next

      while(items.length) {
        next = items.shift()

        if(set.indexOf(next) === -1) {
          set.push(next)
        }
      }
    }
  }

  function check() {
    _check.bits = []
    _check.subject = false
    _check.push = function(token) {
      _check.bits.push(token)
    }

    return _check

    function _check(node, subj) {
      for(var i = 0, len = _check.bits.length; i < len; ++i) {
        if(!_check.bits[i](node)) {
          return false
        }
      }

      if(_check.subject) {
        subj.push(node)
      }

      return true
    }
  }

  function listContains(type, data) {
    return function(node) {
      var val = options[type](node)
      val =
        Array.isArray(val) ? val :
        val ? val.toString().split(/\s+/) :
        []
      return val.indexOf(data) >= 0
    }
  }

  function attr(token) {
    return token.data.lhs ?
      valid_attr(
          options.attr
        , token.data.lhs
        , token.data.cmp
        , token.data.rhs
      ) :
      valid_attr(options.attr, token.data)
  }

  function matches(type, data, matchComparison) {
    return function(node) {
      return matchComparison(type, options[type](node), data);
    }
  }

  function any_parents(node, next, subj) {
    do {
      node = options.parent(node)
    } while(node && !next(node, subj))

    return node
  }

  function direct_parent(node, next, subj) {
    node = options.parent(node)

    return node && next(node, subj) ? node : null
  }

  function direct_sibling(node, next, subj) {
    var parent = options.parent(node)
      , idx = 0
      , children

    children = options.children(parent)

    for(var i = 0, len = children.length; i < len; ++i) {
      if(children[i] === node) {
        idx = i

        break
      }
    }

    return children[idx - 1] && next(children[idx - 1], subj) ?
      children[idx - 1] :
      null
  }

  function any_sibling(node, next, subj) {
    var parent = options.parent(node)
      , children

    children = options.children(parent)

    for(var i = 0, len = children.length; i < len; ++i) {
      if(children[i] === node) {
        return null
      }

      if(next(children[i], subj)) {
        return children[i]
      }
    }

    return null
  }

  function pseudo(token) {
    return valid_pseudo(options, token.data, matchComparison)
  }

}

function entry(node, next, subj) {
  return next(node, subj) ? node : null
}

function valid_pseudo(options, match, matchComparison) {
  switch(match) {
    case 'empty': return valid_empty(options)
    case 'first-child': return valid_first_child(options)
    case 'last-child': return valid_last_child(options)
    case 'root': return valid_root(options)
  }

  if(match.indexOf('contains') === 0) {
    return valid_contains(options, match.slice(9, -1))
  }

  if(match.indexOf('any') === 0) {
    return valid_any_match(options, match.slice(4, -1), matchComparison)
  }

  if(match.indexOf('not') === 0) {
    return valid_not_match(options, match.slice(4, -1), matchComparison)
  }

  if(match.indexOf('nth-child') === 0) {
    return valid_nth_child(options, match.slice(10, -1))
  }

  return function() {
    return false
  }
}

function valid_not_match(options, selector, matchComparison) {
  var fn = parse(selector, options, matchComparison)

  return not_function

  function not_function(node) {
    return !fn(node, true)
  }
}

function valid_any_match(options, selector, matchComparison) {
  var fn = parse(selector, options, matchComparison)

  return fn
}

function valid_attr(fn, lhs, cmp, rhs) {
  return function(node) {
    var attr = fn(node, lhs)

    if(!cmp) {
      return !!attr
    }

    if(cmp.length === 1) {
      return attr == rhs
    }

    if(attr === void 0 || attr === null) {
      return false
    }

    return checkattr[cmp.charAt(0)](attr, rhs)
  }
}

function valid_first_child(options) {
  return function(node) {
    return options.children(options.parent(node))[0] === node
  }
}

function valid_last_child(options) {
  return function(node) {
    var children = options.children(options.parent(node))

    return children[children.length - 1] === node
  }
}

function valid_empty(options) {
  return function(node) {
    return options.children(node).length === 0
  }
}

function valid_root(options) {
  return function(node) {
    return !options.parent(node)
  }
}

function valid_contains(options, contents) {
  return function(node) {
    return options.contents(node).indexOf(contents) !== -1
  }
}

function valid_nth_child(options, nth) {
  var test = function(){ return false }
  if (nth == 'odd') {
    nth = '2n+1'
  } else if (nth == 'even') {
    nth = '2n'
  }
  var regexp = /( ?([-|\+])?(\d*)n)? ?((\+|-)? ?(\d+))? ?/
  var matches = nth.match(regexp)
  if (matches) {
    var growth = 0;
    if (matches[1]) {
      var positiveGrowth = (matches[2] != '-')
      growth = parseInt(matches[3] == '' ? 1 : matches[3])
      growth = growth * (positiveGrowth ? 1 : -1)
    }
    var offset = 0
    if (matches[4]) {
      offset = parseInt(matches[6])
      var positiveOffset = (matches[5] != '-')
      offset = offset * (positiveOffset ? 1 : -1)
    }
    if (growth == 0) {
      if (offset != 0) {
        test = function(children, node) {
          return children[offset - 1] === node
        }
      }
    } else {
      test = function(children, node) {
        var validPositions = []
        var len = children.length
        for (var position=1; position <= len; position++) {
          var divisible = ((position - offset) % growth) == 0;
          if (divisible) {
            if (growth > 0) {
              validPositions.push(position);
            } else {
              if ((position - offset) / growth >= 0) {
                validPositions.push(position);
              }
            }
          }
        }
        for(var i=0; i < validPositions.length; i++) {
          if (children[validPositions[i] - 1] === node) {
            return true
          }
        }
        return false
      }
    }
  }
  return function(node) {
    var children = options.children(options.parent(node))

    return test(children, node)
  }
}

var checkattr = {
    '$': check_end
  , '^': check_beg
  , '*': check_any
  , '~': check_spc
  , '|': check_dsh
}

function check_end(l, r) {
  return l.slice(l.length - r.length) === r
}

function check_beg(l, r) {
  return l.slice(0, r.length) === r
}

function check_any(l, r) {
  return l.indexOf(r) > -1
}

function check_spc(l, r) {
  return l.split(/\s+/).indexOf(r) > -1
}

function check_dsh(l, r) {
  return l.split('-').indexOf(r) > -1
}

function caseSensitiveComparison(type, pattern, data) {
  return pattern === data;
}


/***/ }),
/* 91 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

JSWorks = {};__JSWorks_services__ = [];__JSWorks_controllers__ = [];__JSWorks_components__ = [];__JSWorks_interceptors__ = [];__JSWorks_custom_elements__ = [];__JSWorks_models__ = {};__JSWorks_component_fields__ = {};function a(r) {r.keys().forEach(r);};a(__webpack_require__(93));CSSauron = __webpack_require__(90);__webpack_require__(91);

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ApplicationContext/ApplicationContext.js": 14,
	"./Common/InternalDecorator.js": 0,
	"./Component/CollectionProperty.js": 15,
	"./Component/ComponentCollectionPropertyDecorator.js": 38,
	"./Component/ComponentConfig.js": 16,
	"./Component/ComponentDecorator.js": 26,
	"./Component/ComponentHolder.js": 39,
	"./Component/ComponentPropertyDecorator.js": 40,
	"./Component/IComponentDecoratorData.js": 104,
	"./Component/IComponentPropertyDecoratorData.js": 105,
	"./Component/PageDecorator.js": 41,
	"./Controller/ControllerDecorator.js": 42,
	"./Controller/ControllerHolder.js": 43,
	"./CustomElements/CustomElementDecorator.js": 5,
	"./CustomElements/CustomElementHolder.js": 44,
	"./CustomElements/ViewElements/AbstractConditionElement.js": 45,
	"./CustomElements/ViewElements/AbstractListeningElement.js": 17,
	"./CustomElements/ViewElements/AppViewElement.js": 46,
	"./CustomElements/ViewElements/ComponentElement.js": 106,
	"./CustomElements/ViewElements/FormElements/FormFieldElement.js": 107,
	"./CustomElements/ViewElements/FormElements/FormForElement.js": 108,
	"./CustomElements/ViewElements/FormElements/IValidationResult.js": 109,
	"./CustomElements/ViewElements/FormElements/MessageListElement.js": 27,
	"./CustomElements/ViewElements/ViewEvalElement.js": 110,
	"./CustomElements/ViewElements/ViewForElement.js": 47,
	"./CustomElements/ViewElements/ViewIfElement.js": 111,
	"./CustomElements/ViewElements/ViewSwitchElement.js": 112,
	"./Error/AttributeNotFoundError.js": 18,
	"./Error/CannotIterateOverNonCollectionError.js": 48,
	"./Error/ControllerAlreadyRegisteredError.js": 49,
	"./Error/CustomElementAlreadyRegisteredError.js": 50,
	"./Error/DuplicateModelError.js": 51,
	"./Error/DuplicateSwitchCaseError.js": 52,
	"./Error/DuplicateViewIdError.js": 53,
	"./Error/DuplicateViewParamError.js": 54,
	"./Error/ElementNotFoundError.js": 55,
	"./Error/ElementNotPoliteError.js": 56,
	"./Error/ErrorDecorator.js": 1,
	"./Error/ForbiddenTagError.js": 28,
	"./Error/HTTPError.js": 57,
	"./Error/InterceptorNotFound.js": 58,
	"./Error/MethodNotImplementedError.js": 113,
	"./Error/PathNotFoundError.js": 59,
	"./Error/RouteAlreadyExistError.js": 60,
	"./Error/ServiceAlreadyRegisteredError.js": 61,
	"./Error/ServiceUnresolvableError.js": 62,
	"./Error/UnknownControllerError.js": 63,
	"./Error/UnknownCustomElementError.js": 64,
	"./Error/UnknownServiceError.js": 65,
	"./Error/UnknownServiceTypeError.js": 66,
	"./Error/UnresolvableViewIncludeError.js": 67,
	"./Error/UnresolvableViewInheritanceError.js": 68,
	"./Error/WrongRouterNameError.js": 69,
	"./EventManager/EventManager.js": 6,
	"./EventManager/EventType.js": 2,
	"./EventManager/IEvent.js": 114,
	"./EventManager/IEventEmitter.js": 115,
	"./EventManager/IEventReceiver.js": 116,
	"./Interceptor/IInterceptor.js": 117,
	"./Interceptor/IInterceptorDecoratorData.js": 118,
	"./Interceptor/InterceptorDecorator.js": 70,
	"./Interceptor/InterceptorHolder.js": 71,
	"./Interceptor/InterceptorType.js": 29,
	"./Model/Decorators/ModelCreateMethodDecorator.js": 72,
	"./Model/Decorators/ModelDecorator.js": 73,
	"./Model/Decorators/ModelDeleteMethodDecorator.js": 74,
	"./Model/Decorators/ModelFieldDecorator.js": 75,
	"./Model/Decorators/ModelPrimaryKeyDecorator.js": 76,
	"./Model/Decorators/ModelQueryMethodDecorator.js": 77,
	"./Model/Decorators/ModelReadMethodDecorator.js": 78,
	"./Model/Decorators/ModelUpdateMethodDecorator.js": 79,
	"./Model/IModel.js": 119,
	"./Model/IModelMetadata.js": 120,
	"./Model/ModelHolder.js": 80,
	"./Network/HTTPMethod.js": 19,
	"./Network/HTTPResponse.js": 81,
	"./Network/NetworkService.js": 121,
	"./Parser/HTML/HTMLParserService.js": 122,
	"./Parser/HTML/IDOMParsed.js": 123,
	"./Parser/JSON/JSONParserService.js": 124,
	"./Parser/ParserService.js": 30,
	"./Router/HistoryAPIRouter.js": 82,
	"./Router/Route.js": 83,
	"./Router/RouteConfig.js": 84,
	"./Router/RouteHolder.js": 85,
	"./Router/Router.js": 86,
	"./Service/ServiceDecorator.js": 10,
	"./Service/ServiceHolder.js": 87,
	"./View/IViewParsed.js": 125,
	"./View/View.js": 31,
	"./View/ViewConfig.js": 3,
	"./View/ViewHolder.js": 88,
	"./VirtualDOM/IVirtualDOMElement.js": 126,
	"./VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOM.js": 4,
	"./VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElement.js": 32,
	"./VirtualDOM/SimpleVirtualDOM/SimpleVirtualDOMElementExt.js": 11,
	"./VirtualDOM/VirtualDOM.js": 127,
	"./VirtualDOM/VirtualDOMElementArray.js": 89,
	"./entry.js": 92,
	"./jsworks.js": 128
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 93;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = tokenize

var through = __webpack_require__(130)

var PSEUDOSTART = 'pseudo-start'
  , ATTR_START = 'attr-start'
  , ANY_CHILD = 'any-child'
  , ATTR_COMP = 'attr-comp'
  , ATTR_END = 'attr-end'
  , PSEUDOPSEUDO = '::'
  , PSEUDOCLASS = ':'
  , READY = '(ready)'
  , OPERATION = 'op'
  , CLASS = 'class'
  , COMMA = 'comma'
  , ATTR = 'attr'
  , SUBJECT = '!'
  , TAG = 'tag'
  , STAR = '*'
  , ID = 'id'

function tokenize() {
  var escaped = false
    , gathered = []
    , state = READY 
    , data = []
    , idx = 0
    , stream
    , length
    , quote
    , depth
    , lhs
    , rhs
    , cmp
    , c

  return stream = through(ondata, onend)

  function ondata(chunk) {
    data = data.concat(chunk.split(''))
    length = data.length

    while(idx < length && (c = data[idx++])) {
      switch(state) {
        case READY: state_ready(); break
        case ANY_CHILD: state_any_child(); break
        case OPERATION: state_op(); break
        case ATTR_START: state_attr_start(); break
        case ATTR_COMP: state_attr_compare(); break
        case ATTR_END: state_attr_end(); break
        case PSEUDOCLASS:
        case PSEUDOPSEUDO: state_pseudo(); break
        case PSEUDOSTART: state_pseudostart(); break
        case ID:
        case TAG:
        case CLASS: state_gather(); break
      }
    }

    data = data.slice(idx)
  }

  function onend(chunk) {
    if(arguments.length) {
      ondata(chunk)
    }

    if(gathered.length) {
      stream.queue(token())
    }
  }

  function state_ready() {
    switch(true) {
      case '#' === c: state = ID; break
      case '.' === c: state = CLASS; break
      case ':' === c: state = PSEUDOCLASS; break
      case '[' === c: state = ATTR_START; break
      case '!' === c: subject(); break
      case '*' === c: star(); break
      case ',' === c: comma(); break
      case /[>\+~]/.test(c): state = OPERATION; break
      case /\s/.test(c): state = ANY_CHILD; break
      case /[\w\d\-_]/.test(c): state = TAG; --idx; break
    }
  }

  function subject() {
    state = SUBJECT
    gathered = ['!']
    stream.queue(token())
    state = READY
  }

  function star() {
    state = STAR
    gathered = ['*']
    stream.queue(token())
    state = READY
  }

  function comma() {
    state = COMMA
    gathered = [',']
    stream.queue(token())
    state = READY
  }

  function state_op() {
    if(/[>\+~]/.test(c)) {
      return gathered.push(c)
    }

    // chomp down the following whitespace.
    if(/\s/.test(c)) {
      return
    }

    stream.queue(token())
    state = READY
    --idx
  }

  function state_any_child() {
    if(/\s/.test(c)) {
      return
    }

    if(/[>\+~]/.test(c)) {
      return --idx, state = OPERATION
    }

    stream.queue(token())
    state = READY
    --idx
  }

  function state_pseudo() {
    rhs = state
    state_gather(true)

    if(state !== READY) {
      return
    }

    if(c === '(') {
      lhs = gathered.join('')
      state = PSEUDOSTART
      gathered.length = 0
      depth = 1
      ++idx

      return
    }

    state = PSEUDOCLASS
    stream.queue(token())
    state = READY
  }

  function state_pseudostart() {
    if(gathered.length === 0 && !quote) {
      quote = /['"]/.test(c) ? c : null

      if(quote) {
        return
      }
    }

    if(quote) {
      if(!escaped && c === quote) {
        quote = null

        return
      }

      if(c === '\\') {
        escaped ? gathered.push(c) : (escaped = true)

        return
      }

      escaped = false
      gathered.push(c)

      return
    }

    gathered.push(c)

    if(c === '(') {
      ++depth
    } else if(c === ')') {
      --depth
    }
    
    if(!depth) {
      gathered.pop()
      stream.queue({
          type: rhs 
        , data: lhs + '(' + gathered.join('') + ')'
      })

      state = READY
      lhs = rhs = cmp = null
      gathered.length = 0
    }

    return 
  }

  function state_attr_start() {
    state_gather(true)

    if(state !== READY) {
      return
    }

    if(c === ']') {
      state = ATTR
      stream.queue(token())
      state = READY

      return
    }

    lhs = gathered.join('')
    gathered.length = 0
    state = ATTR_COMP
  }

  function state_attr_compare() {
    if(/[=~|$^*]/.test(c)) {
      gathered.push(c)
    }

    if(gathered.length === 2 || c === '=') {
      cmp = gathered.join('')
      gathered.length = 0
      state = ATTR_END
      quote = null

      return
    }
  }

  function state_attr_end() {
    if(!gathered.length && !quote) {
      quote = /['"]/.test(c) ? c : null

      if(quote) {
        return
      }
    }

    if(quote) {
      if(!escaped && c === quote) {
        quote = null

        return
      }

      if(c === '\\') {
        if(escaped) {
          gathered.push(c)
        }

        escaped = !escaped

        return
      }

      escaped = false
      gathered.push(c)

      return
    }

    state_gather(true)

    if(state !== READY) {
      return
    }

    stream.queue({
        type: ATTR
      , data: {
            lhs: lhs
          , rhs: gathered.join('')
          , cmp: cmp
        }
    })

    state = READY
    lhs = rhs = cmp = null
    gathered.length = 0

    return 
  }

  function state_gather(quietly) {
    if(/[^\d\w\-_]/.test(c) && !escaped) {
      if(c === '\\') {
        escaped = true
      } else {
        !quietly && stream.queue(token())
        state = READY
        --idx
      }

      return
    }

    escaped = false
    gathered.push(c)
  }

  function token() {
    var data = gathered.join('')

    gathered.length = 0

    return {
        type: state
      , data: data
    }
  }
}


/***/ }),
/* 96 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.



module.exports = PassThrough;

var Transform = __webpack_require__(36);

/*<replacement>*/
var util = __webpack_require__(12);
util.inherits = __webpack_require__(9);
/*</replacement>*/

util.inherits(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);

  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Buffer = __webpack_require__(8).Buffer;
/*<replacement>*/
var bufferShim = __webpack_require__(21);
/*</replacement>*/

module.exports = BufferList;

function BufferList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

BufferList.prototype.push = function (v) {
  var entry = { data: v, next: null };
  if (this.length > 0) this.tail.next = entry;else this.head = entry;
  this.tail = entry;
  ++this.length;
};

BufferList.prototype.unshift = function (v) {
  var entry = { data: v, next: this.head };
  if (this.length === 0) this.tail = entry;
  this.head = entry;
  ++this.length;
};

BufferList.prototype.shift = function () {
  if (this.length === 0) return;
  var ret = this.head.data;
  if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
  --this.length;
  return ret;
};

BufferList.prototype.clear = function () {
  this.head = this.tail = null;
  this.length = 0;
};

BufferList.prototype.join = function (s) {
  if (this.length === 0) return '';
  var p = this.head;
  var ret = '' + p.data;
  while (p = p.next) {
    ret += s + p.data;
  }return ret;
};

BufferList.prototype.concat = function (n) {
  if (this.length === 0) return bufferShim.alloc(0);
  if (this.length === 1) return this.head.data;
  var ret = bufferShim.allocUnsafe(n >>> 0);
  var p = this.head;
  var i = 0;
  while (p) {
    p.data.copy(ret, i);
    i += p.data.length;
    p = p.next;
  }
  return ret;
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(25).PassThrough


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(25).Transform


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(24);


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20), __webpack_require__(13)))

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var SimpleVirtualDOMElementExt_1 = __webpack_require__(11);
var InternalDecorator_1 = __webpack_require__(0);
var CustomElementDecorator_1 = __webpack_require__(5);
var ViewConfig_1 = __webpack_require__(3);
var EventManager_1 = __webpack_require__(6);
var EventType_1 = __webpack_require__(2);
var SimpleVirtualDOM_1 = __webpack_require__(4);
var ComponentElement = ComponentElement_1 = (function (_super) {
    __extends(ComponentElement, _super);
    function ComponentElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComponentElement.isComponentAttribute = function (name) {
        name = name.toLowerCase();
        return name === 'id' || name === 'name' || name === 'class' || name === 'style';
    };
    /**
     * Проинициализировать этот элемент компонентом
     */
    ComponentElement.prototype.init = function () {
        var _this = this;
        EventManager_1.EventManager.subscribe(this, this, EventType_1.EventType.CREATE, function (ev) {
            if (_this.attributes['name'] === undefined) {
                return;
            }
            var appContext = JSWorks.applicationContext;
            var componentProto = appContext.componentHolder.getComponentPrototype(_this.attributes['name']);
            var componentName = appContext.componentHolder.duplicateComponent(componentProto);
            _this.component = appContext.componentHolder.getComponent(componentName);
            _this.component.element = _this;
            Object.keys(_this.attributes).forEach(function (attrName) {
                if (ComponentElement_1.isComponentAttribute(attrName)) {
                    return;
                }
                _this.component[attrName] = _this.attributes[attrName];
            });
            EventManager_1.EventManager.subscribe(_this, _this.component, EventType_1.EventType.PostUpdate, function (ev2) {
                _this.syncAttributes();
            });
        });
    };
    /**
     * Фабрика componentElement
     * @returns {ComponentElement}
     */
    ComponentElement.prototype.createElement = function () {
        var element = new ComponentElement_1(SimpleVirtualDOM_1.SimpleVirtualDOM.NextHash());
        element.init();
        return element;
    };
    /**
     * Отрисовка ComponentElement в DOM браузера
     */
    ComponentElement.prototype.render = function () {
        _super.prototype.render.call(this);
        if (!this.component) {
            return;
        }
        if (this.rendered.firstChild) {
            this.rendered.removeChild(this.rendered.firstChild);
        }
        this.component.view.DOMRoot.render();
        this.rendered.appendChild(this.component.view.DOMRoot.rendered);
    };
    /**
     * Задание атрибута
     * @param name
     * @param value
     */
    ComponentElement.prototype.setAttribute = function (name, value) {
        _super.prototype.setAttribute.call(this, name, value);
        if (ComponentElement_1.isComponentAttribute(name) || !this.component) {
            return;
        }
        this.component[name] = value;
    };
    /**
     * Чтение атрибута
     * @param name
     */
    ComponentElement.prototype.getAttribute = function (name) {
        return _super.prototype.getAttribute.call(this, name);
    };
    /**
     * Проверка атрибута на существование
     * @param name
     */
    ComponentElement.prototype.hasAttribute = function (name) {
        return _super.prototype.hasAttribute.call(this, name);
    };
    ComponentElement.prototype.syncAttributes = function () {
        var _this = this;
        this.component.fields.forEach(function (name) {
            _this.attributes[name] = _this.component[name];
            _this.emitMutilationEvent({ type: EventType_1.EventType.DOMPropertyChange, data: _this });
        });
    };
    return ComponentElement;
}(SimpleVirtualDOMElementExt_1.SimpleVirtualDOMElementExt));
ComponentElement = ComponentElement_1 = __decorate([
    InternalDecorator_1.JSWorksInternal,
    CustomElementDecorator_1.JSWorksCustomElement(ViewConfig_1.ViewConfig.COMPONENT_TAG)
], ComponentElement);
exports.ComponentElement = ComponentElement;
var ComponentElement_1;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var InternalDecorator_1 = __webpack_require__(0);
var CustomElementDecorator_1 = __webpack_require__(5);
var ViewConfig_1 = __webpack_require__(3);
var SimpleVirtualDOM_1 = __webpack_require__(4);
var ElementNotFoundError_1 = __webpack_require__(55);
var MessageListElement_1 = __webpack_require__(27);
var FormFieldElement = FormFieldElement_1 = (function (_super) {
    __extends(FormFieldElement, _super);
    function FormFieldElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Цепочка валидаторов
         */
        _this.validators = [];
        _this.listening = false;
        _this.customValue = false;
        return _this;
    }
    Object.defineProperty(FormFieldElement.prototype, "value", {
        /**
         * Получить значение поля
         * @returns {any}
         */
        get: function () {
            var attrName = this.input.getAttribute('form-bind-attribute');
            return this.input.getAttribute(attrName);
        },
        /**
         * Задать значение поля
         * @param value
         */
        set: function (value) {
            this._value = value;
            this.customValue = true;
            this.changeEvent();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Фабрика FormFieldElement
     * @returns {FormFieldElement}
     */
    FormFieldElement.prototype.createElement = function () {
        return new FormFieldElement_1(SimpleVirtualDOM_1.SimpleVirtualDOM.NextHash());
    };
    /**
     * Возвращает первый элемент с атрибутом form-bind-attribute
     */
    FormFieldElement.prototype.getBoundElement = function () {
        return this.querySelector('[form-bind-attribute]');
    };
    /**
     * См. View.propagateView
     * @param view
     */
    FormFieldElement.prototype.propagateView = function (view) {
        if (this.view === view) {
            return;
        }
        _super.prototype.propagateView.call(this, view);
        if (!this.input) {
            this.input = this.getBoundElement();
        }
        if (this.input && !this.listening) {
            this.installListener();
            this.listening = true;
        }
    };
    FormFieldElement.prototype.updateMessagesCollection = function () {
        _super.prototype.updateMessagesCollection.call(this);
        if (this.form) {
            this.form.validateField();
        }
    };
    FormFieldElement.prototype.changeEvent = function () {
        var _this = this;
        var interceptors = JSWorks.applicationContext.interceptorHolder;
        var valueElem = this.input;
        if (!valueElem) {
            throw new ElementNotFoundError_1.ElementNotFoundError('element with value binding');
        }
        var attrName = valueElem.getAttribute('form-bind-attribute');
        var value = valueElem.rendered.getAttribute(attrName);
        if (this.customValue) {
            value = this._value;
            this.customValue = false;
            this._value = undefined;
        }
        valueElem.attributes[attrName] = value;
        if (this.hasAttribute('validates')) {
            var validators = this.getAttribute('validates').split(',').map(function (s) { return s.trim(); });
            this.validators = interceptors.getInterceptors(validators);
        }
        if (this.validators.length === 0) {
            this.lastValidationResult = {
                success: true,
                value: value,
                messages: [],
            };
            this.updateMessagesCollection();
            return;
        }
        interceptors.trigger(this.validators, {
            value: value,
        })
            .then(function (result) {
            _this.lastValidationResult = {
                success: true,
                value: value,
                messages: MessageListElement_1.MessageListElement.formatPromiseResult(result, 'OK'),
            };
            _this.updateMessagesCollection();
        })
            .catch(function (result) {
            _this.lastValidationResult = {
                success: false,
                messages: MessageListElement_1.MessageListElement.formatPromiseResult(result, 'ERROR'),
            };
            _this.updateMessagesCollection();
        });
    };
    FormFieldElement.prototype.installListener = function () {
        var _this = this;
        this.input.addEventListener('change', function (event) {
            _this.changeEvent();
        });
    };
    return FormFieldElement;
}(MessageListElement_1.MessageListElement));
FormFieldElement = FormFieldElement_1 = __decorate([
    InternalDecorator_1.JSWorksInternal,
    CustomElementDecorator_1.JSWorksCustomElement(ViewConfig_1.ViewConfig.FORM_FIELD_TAG)
], FormFieldElement);
exports.FormFieldElement = FormFieldElement;
var FormFieldElement_1;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var InternalDecorator_1 = __webpack_require__(0);
var CustomElementDecorator_1 = __webpack_require__(5);
var ViewConfig_1 = __webpack_require__(3);
var SimpleVirtualDOM_1 = __webpack_require__(4);
var AttributeNotFoundError_1 = __webpack_require__(18);
var MessageListElement_1 = __webpack_require__(27);
var FormForElement = FormForElement_1 = (function (_super) {
    __extends(FormForElement, _super);
    function FormForElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Список полей формы
         * @type {Array}
         */
        _this.fields = [];
        /**
         * Перехватчики отправки формы
         */
        _this.submitInterceptors = [];
        /**
         * Имя метода сохранения у модели
         * @type {string}
         */
        _this.modelSaveMethod = 'persist';
        _this.validated = 0;
        /**
         * Обработчик отправки формы
         */
        _this.submitCallback = function (form) {
            return form.modelSaveCallback(form, form.model);
        }; // tslint:disable-line
        /**
         * Обработчик сохранения модели
         * @param form
         * @param model
         */
        _this.modelSaveCallback = function (form, model) {
            return model[form.modelSaveMethod]();
        }; // tslint:disable-line
        return _this;
    }
    /**
     * Фабрика ViewEvalElement
     * @returns {ViewEvalElement}
     */
    FormForElement.prototype.createElement = function () {
        return new FormForElement_1(SimpleVirtualDOM_1.SimpleVirtualDOM.NextHash());
    };
    /**
     * Кнопка отправки формы, если такая есть
     * @returns {SimpleVirtualDOMElement}
     */
    FormForElement.prototype.getSubmitButton = function () {
        return this.querySelector('[form-submit]');
    };
    /**
     * См. SimpleVirtualDOMElement.PropagateView
     * @param view
     */
    FormForElement.prototype.propagateView = function (view) {
        if (this.view === view) {
            return;
        }
        _super.prototype.propagateView.call(this, view);
        if (!this.hasAttribute('model')) {
            throw new AttributeNotFoundError_1.AttributeNotFoundError('model', 'form-for');
        }
        this.model = JSWorks.applicationContext.modelHolder.getModel(this.getAttribute('model')).from();
        this.customUpdate();
        var button = this.getSubmitButton();
        if (button) {
            button.setAttribute('disabled', 'true');
        }
    };
    /**
     * Обновляет значение
     */
    FormForElement.prototype.customUpdate = function () {
        var _this = this;
        this.fields = [];
        this.querySelectorAll(ViewConfig_1.ViewConfig.FORM_FIELD_TAG).forEach(function (field) {
            field.form = _this;
            _this.fields.push(field);
        });
        var form = this.querySelector('form');
        if (form && !form['__form_listening__']) {
            form['__form_listening__'] = true;
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                _this.submit();
            });
        }
    };
    /**
     * Проверяет, возможна ли отправка формы
     * @returns {boolean}
     */
    FormForElement.prototype.canSubmit = function () {
        return this.fields.every(function (field) {
            return !(!field.lastValidationResult || !field.lastValidationResult.success);
        });
    };
    /**
     * Отправить форму
     * @returns {Promise<any>}
     */
    FormForElement.prototype.submit = function () {
        var _this = this;
        this.fields.forEach(function (field) {
            if (!field.hasAttribute('for')) {
                return;
            }
            var name = field.getAttribute('for');
            _this.model[name] = field.value;
        });
        if (this.onSubmit && !this.onSubmit(this)) {
            return;
        }
        if (this.submitInterceptors.length > 0) {
            return JSWorks.applicationContext.interceptorHolder.trigger(this.submitInterceptors, { form: this });
        }
        this.submitCallback(this)
            .then(function (result) {
            _this.model = result;
            if (_this.onSuccess && !_this.onSuccess(_this, result)) {
                return;
            }
            _this.lastValidationResult = {
                success: true,
                messages: MessageListElement_1.MessageListElement.formatPromiseResult(result, 'OK'),
            };
        })
            .catch(function (err) {
            if (_this.onError && !_this.onError(_this, err)) {
                return;
            }
            _this.lastValidationResult = {
                success: false,
                messages: MessageListElement_1.MessageListElement.formatPromiseResult(err, 'ERROR'),
            };
        });
    };
    /**
     * Отметить результат валидации поля
     */
    FormForElement.prototype.validateField = function () {
        this.validated++;
        if (this.validated === this.fields.length) {
            this.validated = this.fields.length - 1;
            var button = this.getSubmitButton();
            if (!button) {
                return;
            }
            if (this.canSubmit()) {
                button.removeAttribute('disabled');
            }
            else {
                button.setAttribute('disabled', '');
            }
        }
    };
    return FormForElement;
}(MessageListElement_1.MessageListElement));
FormForElement = FormForElement_1 = __decorate([
    InternalDecorator_1.JSWorksInternal,
    CustomElementDecorator_1.JSWorksCustomElement(ViewConfig_1.ViewConfig.FORM_FOR_TAG)
], FormForElement);
exports.FormForElement = FormForElement;
var FormForElement_1;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var InternalDecorator_1 = __webpack_require__(0);
var CustomElementDecorator_1 = __webpack_require__(5);
var ViewConfig_1 = __webpack_require__(3);
var SimpleVirtualDOM_1 = __webpack_require__(4);
var SimpleVirtualDOMElementExt_1 = __webpack_require__(11);
var ViewEvalElement = ViewEvalElement_1 = (function (_super) {
    __extends(ViewEvalElement, _super);
    function ViewEvalElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Фабрика ViewEvalElement
     * @returns {ViewEvalElement}
     */
    ViewEvalElement.prototype.createElement = function () {
        return new ViewEvalElement_1(SimpleVirtualDOM_1.SimpleVirtualDOM.NextHash());
    };
    /**
     * См. View.propagateView
     * @param view
     */
    ViewEvalElement.prototype.propagateView = function (view) {
        if (this.view === view) {
            return;
        }
        _super.prototype.propagateView.call(this, view);
    };
    /**
     * Обновляет значение
     */
    ViewEvalElement.prototype.customUpdate = function () {
        if (!this.hasAttribute('value')) {
            return;
        }
        if (this.view && this.view.component && this.ready) {
            var value = this.execStatement(this.getAttribute('value'));
            if (value === this.lastValue) {
                return;
            }
            this.lastValue = value;
            var virtualDOM = JSWorks.applicationContext.serviceHolder.
                getServiceByName('SimpleVirtualDOM');
            this.removeChildren();
            this.appendChild(virtualDOM.createTextElement(''));
            this.valueChange(value);
        }
    };
    /**
     * Изменение результата связанного с этим ViewEvalElement выражения
     * @param newValue
     */
    ViewEvalElement.prototype.valueChange = function (newValue) {
        if (newValue === undefined) {
            newValue = '';
        }
        this._children[0].text = String(newValue);
    };
    return ViewEvalElement;
}(SimpleVirtualDOMElementExt_1.SimpleVirtualDOMElementExt));
ViewEvalElement = ViewEvalElement_1 = __decorate([
    InternalDecorator_1.JSWorksInternal,
    CustomElementDecorator_1.JSWorksCustomElement(ViewConfig_1.ViewConfig.VIEW_EVAL_TAG)
], ViewEvalElement);
exports.ViewEvalElement = ViewEvalElement;
var ViewEvalElement_1;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var InternalDecorator_1 = __webpack_require__(0);
var CustomElementDecorator_1 = __webpack_require__(5);
var ViewConfig_1 = __webpack_require__(3);
var SimpleVirtualDOM_1 = __webpack_require__(4);
var AbstractConditionElement_1 = __webpack_require__(45);
var ForbiddenTagError_1 = __webpack_require__(28);
var ViewIfElement = ViewIfElement_1 = (function (_super) {
    __extends(ViewIfElement, _super);
    function ViewIfElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Фабрика ViewIfElement
     * @returns {undefined}
     */
    ViewIfElement.prototype.createElement = function () {
        var element = new ViewIfElement_1(SimpleVirtualDOM_1.SimpleVirtualDOM.NextHash());
        element.superCreateElement();
        return element;
    };
    /**
     * Сбросить шаблон
     */
    ViewIfElement.prototype.customClear = function () {
        _super.prototype.customClear.call(this);
        if (!this.thenTemplate && !this.elseTemplate) {
            return;
        }
        this.removeChildren();
        if (this.thenTemplate) {
            this.appendChild(this.thenTemplate);
        }
        if (this.elseTemplate) {
            this.appendChild(this.elseTemplate);
        }
        this.thenTemplate = undefined;
        this.elseTemplate = undefined;
    };
    /**
     * Обновить все ноды в ветках условия
     */
    ViewIfElement.prototype.customUpdate = function () {
        _super.prototype.customUpdate.call(this);
        if (this.thenTemplate) {
            this.thenTemplate.customUpdate();
        }
        if (this.elseTemplate) {
            this.elseTemplate.customUpdate();
        }
    };
    /**
     * См. View.propagateView
     * @param view
     */
    ViewIfElement.prototype.propagateView = function (view) {
        var _this = this;
        if (this.view === view) {
            return;
        }
        _super.prototype.propagateView.call(this, view);
        if (this.thenTemplate) {
            this.thenTemplate.propagateView(view);
        }
        if (this.elseTemplate) {
            this.elseTemplate.propagateView(view);
        }
        if (this.thenTemplate || this.elseTemplate) {
            return;
        }
        this._children.forEach(function (child) {
            switch (child.tagName) {
                case ViewConfig_1.ViewConfig.VIEW_THEN_TAG:
                    {
                        _this.thenTemplate = child;
                    }
                    break;
                case ViewConfig_1.ViewConfig.VIEW_ELSE_TAG:
                    {
                        _this.elseTemplate = child;
                    }
                    break;
                case undefined: break;
                default: {
                    throw new ForbiddenTagError_1.ForbiddenTagError(child.tagName, 'if condition');
                }
            }
        });
        this.removeChildren();
    };
    /**
     * <view-if condition="$.propertyName.toNumber() >= 3">
     *     <view-then>
     *         Greater or equals 3!
     *     </view-then>
     *     <view-else>
     *         Less than 3!
     *     </view-else>
     * </view-if>
     * @param newValue
     */
    ViewIfElement.prototype.conditionChange = function (newValue) {
        /* if (!this.thenTemplate && !this.elseTemplate) {
            const view: View = this.view;
            this.view = undefined;

            this.propagateView(view);
        } */
        this.removeChildren();
        if (newValue) {
            this.appendChild(this.thenTemplate._children);
        }
        else {
            this.appendChild(this.elseTemplate._children);
        }
    };
    ViewIfElement.prototype.customCloneNode = function (node) {
        _super.prototype.customCloneNode.call(this, node);
        if (this.thenTemplate) {
            node.thenTemplate = this.thenTemplate.cloneNode();
        }
        if (this.elseTemplate) {
            node.elseTemplate = this.elseTemplate.cloneNode();
        }
    };
    ViewIfElement.prototype.superCreateElement = function () {
        _super.prototype.createElement.call(this);
    };
    return ViewIfElement;
}(AbstractConditionElement_1.AbstractConditionElement));
ViewIfElement = ViewIfElement_1 = __decorate([
    InternalDecorator_1.JSWorksInternal,
    CustomElementDecorator_1.JSWorksCustomElement(ViewConfig_1.ViewConfig.VIEW_IF_TAG)
], ViewIfElement);
exports.ViewIfElement = ViewIfElement;
var ViewIfElement_1;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var InternalDecorator_1 = __webpack_require__(0);
var CustomElementDecorator_1 = __webpack_require__(5);
var ViewConfig_1 = __webpack_require__(3);
var SimpleVirtualDOM_1 = __webpack_require__(4);
var ForbiddenTagError_1 = __webpack_require__(28);
var AbstractListeningElement_1 = __webpack_require__(17);
var DuplicateSwitchCaseError_1 = __webpack_require__(52);
var ViewSwitchElement = ViewSwitchElement_1 = (function (_super) {
    __extends(ViewSwitchElement, _super);
    function ViewSwitchElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.switches = {};
        _this.conditions = [];
        return _this;
    }
    /**
     * Фабрика ViewForElement
     * @returns {undefined}
     */
    ViewSwitchElement.prototype.createElement = function () {
        var element = new ViewSwitchElement_1(SimpleVirtualDOM_1.SimpleVirtualDOM.NextHash());
        element.superCreateElement();
        return element;
    };
    /**
     * Обновить все ноды в ветках условия
     */
    ViewSwitchElement.prototype.customUpdate = function () {
        var _this = this;
        _super.prototype.customUpdate.call(this);
        Object.keys(this.switches).forEach(function (condition) {
            _this.switches[condition].customUpdate();
        });
    };
    /**
     * Сбросить шаблон
     */
    ViewSwitchElement.prototype.customClear = function () {
        var _this = this;
        _super.prototype.customClear.call(this);
        if (this.conditions.length === 0) {
            return;
        }
        this.removeChildren();
        this.conditions.forEach(function (condition) {
            _this.appendChild(_this.switches[condition]);
        });
        this.conditions = [];
        this.switches = {};
    };
    /**
     * См. View.propagateView
     * @param view
     */
    ViewSwitchElement.prototype.propagateView = function (view) {
        var _this = this;
        if (this.view === view) {
            return;
        }
        _super.prototype.propagateView.call(this, view);
        Object.keys(this.switches).forEach(function (condition) {
            _this.switches[condition].propagateView(view);
        });
        this._children.forEach(function (child) {
            switch (child.tagName) {
                case ViewConfig_1.ViewConfig.VIEW_CASE_TAG:
                    {
                        var condition = child.getAttribute('condition') || 'true';
                        if (_this.switches[condition]) {
                            throw new DuplicateSwitchCaseError_1.DuplicateSwitchCaseError(condition);
                        }
                        _this.switches[condition] = child;
                        _this.conditions.push(condition);
                    }
                    break;
                case undefined: break;
                default: {
                    throw new ForbiddenTagError_1.ForbiddenTagError(child.tagName, 'switch block');
                }
            }
        });
        this.removeChildren();
    };
    /**
     * <view-switch>
     *     <view-case condition="$.color === 'red'">
     *         Color is definitely red.
     *     </view-case>
     *     <view-case condition="$.color === 'green'">
     *         Sure Color is green.
     *     </view-case>
     *     <view-case condition="$.color === 'blue'">
     *         No doubt your Color is blue.
     *     </view-case>
     * </view-switch>
     */
    ViewSwitchElement.prototype.propertyChange = function () {
        // if (this.conditions.length === 0) {
        //     const view: View = this.view;
        //     this.view = undefined;
        //
        //     this.propagateView(view);
        // }
        var _this = this;
        this.removeChildren();
        var found = false;
        this.conditions.forEach(function (condition) {
            if (found) {
                return;
            }
            if (_this.execStatement(condition)) {
                if (condition === _this.lastCondition) {
                    found = true;
                    return;
                }
                _this.appendChild(Array.from(_this.switches[condition].children));
                found = true;
            }
        });
    };
    ViewSwitchElement.prototype.customCloneNode = function (node) {
        var _this = this;
        _super.prototype.customCloneNode.call(this, node);
        Object.keys(this.switches).forEach(function (condition) {
            node.switches[condition] = _this.switches[condition].cloneNode();
            node.conditions.push(condition);
        });
    };
    ViewSwitchElement.prototype.superCreateElement = function () {
        _super.prototype.createElement.call(this);
    };
    return ViewSwitchElement;
}(AbstractListeningElement_1.AbstractListeningElement));
ViewSwitchElement = ViewSwitchElement_1 = __decorate([
    InternalDecorator_1.JSWorksInternal,
    CustomElementDecorator_1.JSWorksCustomElement(ViewConfig_1.ViewConfig.VIEW_SWITCH_TAG)
], ViewSwitchElement);
exports.ViewSwitchElement = ViewSwitchElement;
var ViewSwitchElement_1;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorDecorator_1 = __webpack_require__(1);
var MethodNotImplementedError = (function (_super) {
    __extends(MethodNotImplementedError, _super);
    function MethodNotImplementedError(method) {
        return _super.call(this, "Method not implemented: \"" + method + "\"") || this;
    }
    return MethodNotImplementedError;
}(Error));
MethodNotImplementedError = __decorate([
    ErrorDecorator_1.JSWorksError,
    __metadata("design:paramtypes", [String])
], MethodNotImplementedError);
exports.MethodNotImplementedError = MethodNotImplementedError;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var HTTPError_1 = __webpack_require__(57);
var HTTPMethod_1 = __webpack_require__(19);
var HTTPResponse_1 = __webpack_require__(81);
var ServiceDecorator_1 = __webpack_require__(10);
var InternalDecorator_1 = __webpack_require__(0);
var NetworkService = (function () {
    function NetworkService() {
    }
    /**
     * Выполняет синхроный запрос к серверу и возвращает результат.
     * Выбрасывает HTTPError в случае кода ответа >= 400.
     * @param url
     * @param method
     * @param data
     * @returns {HTTPResponse}
     */
    NetworkService.prototype.fetch = function (url, method, data) {
        if (method === void 0) { method = HTTPMethod_1.HTTPMethod.GET; }
        var result;
        var err;
        this.xmlHTTPRequest(url, method, false, data, function (response) {
            result = response;
        }, function (error) {
            err = error;
        });
        if (err) {
            throw err;
        }
        return result;
    };
    /**
     * Совершает асинхронный запрос и возвращает объект Promise. В случае успешного выполнения
     * Promise будет разрешён с помощью экземпляра класса HTTPResponse.
     * @param url
     * @param method
     * @param data
     * @returns {undefined}
     */
    NetworkService.prototype.fetchAsync = function (url, method, data) {
        var _this = this;
        if (method === void 0) { method = HTTPMethod_1.HTTPMethod.GET; }
        return new Promise(function (resolve, reject) {
            _this.xmlHTTPRequest(url, method, true, data, function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    NetworkService.prototype.xmlHTTPRequest = function (url, method, async, data, callback, error) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url, async);
        xhr.withCredentials = async;
        xhr.onreadystatechange = function (event) {
            if (xhr.readyState === 4) {
                if (xhr.status < 400) {
                    callback(new HTTPResponse_1.HTTPResponse(xhr.responseText, xhr.status));
                }
                else {
                    error(new HTTPError_1.HTTPError(method, url, xhr.status));
                }
            }
        };
        xhr.send(data);
    };
    return NetworkService;
}());
NetworkService = __decorate([
    InternalDecorator_1.JSWorksInternal,
    ServiceDecorator_1.JSWorksService('Network', 'Network')
], NetworkService);
exports.NetworkService = NetworkService;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ParserService_1 = __webpack_require__(30);
var ServiceDecorator_1 = __webpack_require__(10);
var InternalDecorator_1 = __webpack_require__(0);
var HTMLParserService = (function (_super) {
    __extends(HTMLParserService, _super);
    function HTMLParserService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Парсит строку как HTML и возвращает объект.
     * @param data
     * @returns IDOMParsed[]
     */
    HTMLParserService.prototype.parseString = function (data) {
        var _this = this;
        var element = document.createElement('DIV');
        var parsed = [];
        element.innerHTML = data;
        Array.from(element.childNodes).forEach(function (node) {
            parsed.push(_this.parseDOM(node));
        });
        return parsed;
    };
    /**
     * Парсит данные DOM-элемента и возвращает объект.
     * @param element
     * @returns IDOMParsed
     */
    HTMLParserService.prototype.parseDOM = function (element) {
        var _this = this;
        var data = {
            tagName: element.tagName,
            id: element.id,
            text: '',
            className: element.className,
            attributes: {},
            children: [],
        };
        if (!(element.tagName)) {
            data.text = element.textContent;
        }
        if (!element['style']) {
            data.tagName = undefined;
            return data;
        }
        Array.from(element.attributes).forEach(function (attr) {
            if (attr.specified) {
                data.attributes[attr.name] = attr.value;
            }
        });
        Array.from(element.childNodes).forEach(function (childNode) {
            data.children.push(_this.parseDOM(childNode));
        });
        return data;
    };
    return HTMLParserService;
}(ParserService_1.ParserService));
HTMLParserService = __decorate([
    InternalDecorator_1.JSWorksInternal,
    ServiceDecorator_1.JSWorksService('HTMLParser', 'Parser', ['Network'])
], HTMLParserService);
exports.HTMLParserService = HTMLParserService;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ParserService_1 = __webpack_require__(30);
var ServiceDecorator_1 = __webpack_require__(10);
var InternalDecorator_1 = __webpack_require__(0);
var JSONParserService = (function (_super) {
    __extends(JSONParserService, _super);
    function JSONParserService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Парсит JSON-строку и возвращает объект. В случае неуспеха возвращает undefined.
     * @param data
     * @returns {Object}
     */
    JSONParserService.prototype.parseString = function (data) {
        try {
            return JSON.parse(data);
        }
        catch (error) {
            console.error("JSONParserService encountered a JSON error and returned 'undefined'.");
            return undefined;
        }
    };
    /**
     * Парсит текст, содержащийся в элементе, как JSON и возвращает объект или undefined.
     * @param element
     * @returns {undefined}
     */
    JSONParserService.prototype.parseDOM = function (element) {
        return this.parseString(element.innerText);
    };
    return JSONParserService;
}(ParserService_1.ParserService));
JSONParserService = __decorate([
    InternalDecorator_1.JSWorksInternal,
    ServiceDecorator_1.JSWorksService('JSONParser', 'Parser', ['Network'])
], JSONParserService);
exports.JSONParserService = JSONParserService;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var VirtualDOM = (function () {
    function VirtualDOM() {
    }
    return VirtualDOM;
}());
exports.VirtualDOM = VirtualDOM;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ControllerDecorator_1 = __webpack_require__(42);
var ComponentDecorator_1 = __webpack_require__(26);
var PageDecorator_1 = __webpack_require__(41);
var ServiceDecorator_1 = __webpack_require__(10);
var ComponentPropertyDecorator_1 = __webpack_require__(40);
var CustomElementDecorator_1 = __webpack_require__(5);
var ComponentCollectionPropertyDecorator_1 = __webpack_require__(38);
var EventType_1 = __webpack_require__(2);
var InterceptorType_1 = __webpack_require__(29);
var InterceptorDecorator_1 = __webpack_require__(70);
var ModelDecorator_1 = __webpack_require__(73);
var ModelFieldDecorator_1 = __webpack_require__(75);
var ModelPrimaryKeyDecorator_1 = __webpack_require__(76);
var ModelCreateMethodDecorator_1 = __webpack_require__(72);
var ModelReadMethodDecorator_1 = __webpack_require__(78);
var ModelUpdateMethodDecorator_1 = __webpack_require__(79);
var ModelDeleteMethodDecorator_1 = __webpack_require__(74);
var ModelQueryMethodDecorator_1 = __webpack_require__(77);
var HTTPMethod_1 = __webpack_require__(19);
JSWorks.__registerServices__ = function () {
    var holder = new JSWorks.Internal.ServiceHolder();
    __JSWorks_services__.forEach(function (serviceData) {
        holder.registerService(serviceData);
    });
    return holder;
};
JSWorks.__init__ = function () {
    JSWorks.EventManager = JSWorks.Internal.EventManager;
    JSWorks.EventType = EventType_1.EventType;
    JSWorks.InterceptorType = InterceptorType_1.InterceptorType;
    JSWorks.HTTPMethod = HTTPMethod_1.HTTPMethod;
    JSWorks.Service = ServiceDecorator_1.JSWorksService;
    JSWorks.Controller = ControllerDecorator_1.JSWorksController;
    JSWorks.Interceptor = InterceptorDecorator_1.JSWorksInterceptor;
    JSWorks.Component = ComponentDecorator_1.JSWorksComponent;
    JSWorks.Page = PageDecorator_1.JSWorksPage;
    JSWorks.ComponentProperty = ComponentPropertyDecorator_1.JSWorksComponentProperty;
    JSWorks.CustomElement = CustomElementDecorator_1.JSWorksCustomElement;
    JSWorks.ComponentCollectionProperty = ComponentCollectionPropertyDecorator_1.JSWorksComponentCollectionProperty;
    JSWorks.Model = ModelDecorator_1.JSWorksModel;
    JSWorks.ModelField = ModelFieldDecorator_1.JSWorksModelField;
    JSWorks.ModelPrimaryKey = ModelPrimaryKeyDecorator_1.JSWorksModelPrimaryKey;
    JSWorks.ModelCreateMethod = ModelCreateMethodDecorator_1.JSWorksModelCreateMethod;
    JSWorks.ModelReadMethod = ModelReadMethodDecorator_1.JSWorksModelReadMethod;
    JSWorks.ModelUpdateMethod = ModelUpdateMethodDecorator_1.JSWorksModelUpdateMethod;
    JSWorks.ModelDeleteMethod = ModelDeleteMethodDecorator_1.JSWorksModelDeleteMethod;
    JSWorks.ModelQueryMethod = ModelQueryMethodDecorator_1.JSWorksModelQueryMethod;
};
JSWorks.__init__();
window.addEventListener('load', function () {
    JSWorks.applicationContext = new JSWorks.Internal.ApplicationContext(JSWorks.__registerServices__());
    JSWorks.applicationContext.run();
});


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

module.exports = Stream;

var EE = __webpack_require__(22).EventEmitter;
var inherits = __webpack_require__(9);

inherits(Stream, EE);
Stream.Readable = __webpack_require__(25);
Stream.Writable = __webpack_require__(102);
Stream.Duplex = __webpack_require__(97);
Stream.Transform = __webpack_require__(101);
Stream.PassThrough = __webpack_require__(100);

// Backwards-compat with node 0.4.x
Stream.Stream = Stream;



// old-style streams.  Note that the pipe method (the only relevant
// part of this class) is overridden in the Readable class.

function Stream() {
  EE.call(this);
}

Stream.prototype.pipe = function(dest, options) {
  var source = this;

  function ondata(chunk) {
    if (dest.writable) {
      if (false === dest.write(chunk) && source.pause) {
        source.pause();
      }
    }
  }

  source.on('data', ondata);

  function ondrain() {
    if (source.readable && source.resume) {
      source.resume();
    }
  }

  dest.on('drain', ondrain);

  // If the 'end' option is not supplied, dest.end() will be called when
  // source gets the 'end' or 'close' events.  Only dest.end() once.
  if (!dest._isStdio && (!options || options.end !== false)) {
    source.on('end', onend);
    source.on('close', onclose);
  }

  var didOnEnd = false;
  function onend() {
    if (didOnEnd) return;
    didOnEnd = true;

    dest.end();
  }


  function onclose() {
    if (didOnEnd) return;
    didOnEnd = true;

    if (typeof dest.destroy === 'function') dest.destroy();
  }

  // don't leave dangling pipes when there are errors.
  function onerror(er) {
    cleanup();
    if (EE.listenerCount(this, 'error') === 0) {
      throw er; // Unhandled stream error in pipe.
    }
  }

  source.on('error', onerror);
  dest.on('error', onerror);

  // remove all the event listeners that were added.
  function cleanup() {
    source.removeListener('data', ondata);
    dest.removeListener('drain', ondrain);

    source.removeListener('end', onend);
    source.removeListener('close', onclose);

    source.removeListener('error', onerror);
    dest.removeListener('error', onerror);

    source.removeListener('end', cleanup);
    source.removeListener('close', cleanup);

    dest.removeListener('close', cleanup);
  }

  source.on('end', cleanup);
  source.on('close', cleanup);

  dest.on('close', cleanup);

  dest.emit('pipe', source);

  // Allow for unix-like usage: A.pipe(B).pipe(C)
  return dest;
};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var Stream = __webpack_require__(129)

// through
//
// a stream that does nothing but re-emit the input.
// useful for aggregating a series of changing but not ending streams into one stream)

exports = module.exports = through
through.through = through

//create a readable writable stream.

function through (write, end, opts) {
  write = write || function (data) { this.queue(data) }
  end = end || function () { this.queue(null) }

  var ended = false, destroyed = false, buffer = [], _ended = false
  var stream = new Stream()
  stream.readable = stream.writable = true
  stream.paused = false

//  stream.autoPause   = !(opts && opts.autoPause   === false)
  stream.autoDestroy = !(opts && opts.autoDestroy === false)

  stream.write = function (data) {
    write.call(this, data)
    return !stream.paused
  }

  function drain() {
    while(buffer.length && !stream.paused) {
      var data = buffer.shift()
      if(null === data)
        return stream.emit('end')
      else
        stream.emit('data', data)
    }
  }

  stream.queue = stream.push = function (data) {
//    console.error(ended)
    if(_ended) return stream
    if(data === null) _ended = true
    buffer.push(data)
    drain()
    return stream
  }

  //this will be registered as the first 'end' listener
  //must call destroy next tick, to make sure we're after any
  //stream piped from here.
  //this is only a problem if end is not emitted synchronously.
  //a nicer way to do this is to make sure this is the last listener for 'end'

  stream.on('end', function () {
    stream.readable = false
    if(!stream.writable && stream.autoDestroy)
      process.nextTick(function () {
        stream.destroy()
      })
  })

  function _end () {
    stream.writable = false
    end.call(stream)
    if(!stream.readable && stream.autoDestroy)
      stream.destroy()
  }

  stream.end = function (data) {
    if(ended) return
    ended = true
    if(arguments.length) stream.write(data)
    _end() // will emit or queue
    return stream
  }

  stream.destroy = function () {
    if(destroyed) return
    destroyed = true
    ended = true
    buffer.length = 0
    stream.writable = stream.readable = false
    stream.emit('close')
    return stream
  }

  stream.pause = function () {
    if(stream.paused) return
    stream.paused = true
    return stream
  }

  stream.resume = function () {
    if(stream.paused) {
      stream.paused = false
      stream.emit('resume')
    }
    drain()
    //may have become paused again,
    //as drain emits 'data'.
    if(!stream.paused)
      stream.emit('drain')
    return stream
  }
  return stream
}


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(103);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
/**
 * Module exports.
 */

module.exports = deprecate;

/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */

function deprecate (fn, msg) {
  if (config('noDeprecation')) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config('throwDeprecation')) {
        throw new Error(msg);
      } else if (config('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}

/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */

function config (name) {
  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
  try {
    if (!global.localStorage) return false;
  } catch (_) {
    return false;
  }
  var val = global.localStorage[name];
  if (null == val) return false;
  return String(val).toLowerCase() === 'true';
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ }),
/* 133 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
/******/ ]);
//# sourceMappingURL=jsworks.js.map