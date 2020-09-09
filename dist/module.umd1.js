/*! For license information please see module.umd1.js.LICENSE.txt */
!function(root, factory) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = factory(); else if ("function" == typeof define && define.amd) define([], factory); else {
        var a = factory();
        for (var i in a) ("object" == typeof exports ? exports : root)[i] = a[i];
    }
}("undefined" != typeof self ? self : this, (function() {
    return function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: !1,
                exports: {}
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.l = !0;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.d = function(exports, name, getter) {
            __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                enumerable: !0,
                get: getter
            });
        };
        __webpack_require__.r = function(exports) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
            });
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
        };
        __webpack_require__.t = function(value, mode) {
            1 & mode && (value = __webpack_require__(value));
            if (8 & mode) return value;
            if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
            var ns = Object.create(null);
            __webpack_require__.r(ns);
            Object.defineProperty(ns, "default", {
                enumerable: !0,
                value: value
            });
            if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
                return value[key];
            }.bind(null, key));
            return ns;
        };
        __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function() {
                return module.default;
            } : function() {
                return module;
            };
            __webpack_require__.d(getter, "a", getter);
            return getter;
        };
        __webpack_require__.o = function(object, property) {
            return {}.hasOwnProperty.call(object, property);
        };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = "./test/module.ts");
    }({
        "./node_modules/object-assign/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            var getOwnPropertySymbols = Object.getOwnPropertySymbols;
            var hasOwnProperty = {}.hasOwnProperty;
            var propIsEnumerable = {}.propertyIsEnumerable;
            function toObject(val) {
                if (null == val) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(val);
            }
            module.exports = function() {
                try {
                    if (!Object.assign) return !1;
                    var test1 = new String("abc");
                    test1[5] = "de";
                    if ("5" === Object.getOwnPropertyNames(test1)[0]) return !1;
                    var test2 = {};
                    for (var i = 0; i < 10; i++) test2["_" + String.fromCharCode(i)] = i;
                    if ("0123456789" !== Object.getOwnPropertyNames(test2).map((function(n) {
                        return test2[n];
                    })).join("")) return !1;
                    var test3 = {};
                    "abcdefghijklmnopqrst".split("").forEach((function(letter) {
                        test3[letter] = letter;
                    }));
                    return "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, test3)).join("");
                } catch (err) {
                    return !1;
                }
            }() ? Object.assign : function(target, source) {
                var from;
                var to = toObject(target);
                var symbols;
                for (var s = 1; s < arguments.length; s++) {
                    from = Object(arguments[s]);
                    for (var key in from) hasOwnProperty.call(from, key) && (to[key] = from[key]);
                    if (getOwnPropertySymbols) {
                        symbols = getOwnPropertySymbols(from);
                        for (var i = 0; i < symbols.length; i++) propIsEnumerable.call(from, symbols[i]) && (to[symbols[i]] = from[symbols[i]]);
                    }
                }
                return to;
            };
        },
        "./node_modules/prop-types/checkPropTypes.js": function(module, exports, __webpack_require__) {
            "use strict";
            var printWarning;
            var ReactPropTypesSecret = __webpack_require__("./node_modules/prop-types/lib/ReactPropTypesSecret.js");
            var loggedTypeFailures = {};
            var has = Function.call.bind({}.hasOwnProperty);
            printWarning = function(text) {
                var message = "Warning: " + text;
                "undefined" != typeof console && console.error(message);
                try {
                    throw new Error(message);
                } catch (x) {}
            };
            function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
                for (var typeSpecName in typeSpecs) if (has(typeSpecs, typeSpecName)) {
                    var error;
                    try {
                        if ("function" != typeof typeSpecs[typeSpecName]) {
                            var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.");
                            err.name = "Invariant Violation";
                            throw err;
                        }
                        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
                    } catch (ex) {
                        error = ex;
                    }
                    !error || error instanceof Error || printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).");
                    if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                        loggedTypeFailures[error.message] = !0;
                        var stack = getStack ? getStack() : "";
                        printWarning("Failed " + location + " type: " + error.message + (null != stack ? stack : ""));
                    }
                }
            }
            checkPropTypes.resetWarningCache = function() {
                loggedTypeFailures = {};
            };
            module.exports = checkPropTypes;
        },
        "./node_modules/prop-types/lib/ReactPropTypesSecret.js": function(module, exports, __webpack_require__) {
            "use strict";
            module.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        },
        "./node_modules/react/cjs/react.development.js": function(module, exports, __webpack_require__) {
            "use strict";
            !function() {
                var _assign = __webpack_require__("./node_modules/object-assign/index.js");
                var checkPropTypes = __webpack_require__("./node_modules/prop-types/checkPropTypes.js");
                var hasSymbol = "function" == typeof Symbol && Symbol.for;
                var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
                var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
                var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
                var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
                var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
                var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
                var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
                var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
                var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
                var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
                var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
                var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
                var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
                var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
                var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
                var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
                var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
                var MAYBE_ITERATOR_SYMBOL = "function" == typeof Symbol && Symbol.iterator;
                function getIteratorFn(maybeIterable) {
                    if (null === maybeIterable || "object" != typeof maybeIterable) return null;
                    var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
                    return "function" == typeof maybeIterator ? maybeIterator : null;
                }
                var ReactCurrentDispatcher = {
                    current: null
                };
                var ReactCurrentOwner = {
                    current: null
                };
                var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
                function getComponentName(type) {
                    if (null == type) return null;
                    "number" == typeof type.tag && error("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.");
                    if ("function" == typeof type) return type.displayName || type.name || null;
                    if ("string" == typeof type) return type;
                    switch (type) {
                      case REACT_FRAGMENT_TYPE:
                        return "Fragment";

                      case REACT_PORTAL_TYPE:
                        return "Portal";

                      case REACT_PROFILER_TYPE:
                        return "Profiler";

                      case REACT_STRICT_MODE_TYPE:
                        return "StrictMode";

                      case REACT_SUSPENSE_TYPE:
                        return "Suspense";

                      case REACT_SUSPENSE_LIST_TYPE:
                        return "SuspenseList";
                    }
                    if ("object" == typeof type) switch (type.$$typeof) {
                      case REACT_CONTEXT_TYPE:
                        return "Context.Consumer";

                      case REACT_PROVIDER_TYPE:
                        return "Context.Provider";

                      case REACT_FORWARD_REF_TYPE:
                        return functionName = (innerType = type.render).displayName || innerType.name || "", 
                        type.displayName || ("" !== functionName ? "ForwardRef(" + functionName + ")" : "ForwardRef");

                      case REACT_MEMO_TYPE:
                        return getComponentName(type.type);

                      case REACT_BLOCK_TYPE:
                        return getComponentName(type.render);

                      case REACT_LAZY_TYPE:
                        var resolvedThenable = 1 === (lazyComponent = type)._status ? lazyComponent._result : null;
                        if (resolvedThenable) return getComponentName(resolvedThenable);
                    }
                    var lazyComponent;
                    var innerType, functionName;
                    return null;
                }
                var ReactDebugCurrentFrame = {};
                var currentlyValidatingElement = null;
                function setCurrentlyValidatingElement(element) {
                    currentlyValidatingElement = element;
                }
                ReactDebugCurrentFrame.getCurrentStack = null;
                ReactDebugCurrentFrame.getStackAddendum = function() {
                    var stack = "";
                    if (currentlyValidatingElement) {
                        var name = getComponentName(currentlyValidatingElement.type);
                        var owner = currentlyValidatingElement._owner;
                        stack += function(name, source, ownerName) {
                            var sourceInfo = "";
                            if (source) {
                                var path = source.fileName;
                                var fileName = path.replace(BEFORE_SLASH_RE, "");
                                if (/^index\./.test(fileName)) {
                                    var match = path.match(BEFORE_SLASH_RE);
                                    if (match) {
                                        var pathBeforeSlash = match[1];
                                        pathBeforeSlash && (fileName = pathBeforeSlash.replace(BEFORE_SLASH_RE, "") + "/" + fileName);
                                    }
                                }
                                sourceInfo = " (at " + fileName + ":" + source.lineNumber + ")";
                            } else ownerName && (sourceInfo = " (created by " + ownerName + ")");
                            return "\n    in " + (name || "Unknown") + sourceInfo;
                        }(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
                    }
                    var impl = ReactDebugCurrentFrame.getCurrentStack;
                    impl && (stack += impl() || "");
                    return stack;
                };
                var ReactSharedInternals = {
                    ReactCurrentDispatcher: ReactCurrentDispatcher,
                    ReactCurrentBatchConfig: {
                        suspense: null
                    },
                    ReactCurrentOwner: ReactCurrentOwner,
                    IsSomeRendererActing: {
                        current: !1
                    },
                    assign: _assign
                };
                _assign(ReactSharedInternals, {
                    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
                    ReactComponentTreeHook: {}
                });
                function warn(format) {
                    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) args[_key - 1] = arguments[_key];
                    printWarning("warn", format, args);
                }
                function error(format) {
                    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) args[_key2 - 1] = arguments[_key2];
                    printWarning("error", format, args);
                }
                function printWarning(level, format, args) {
                    if (!(args.length > 0 && "string" == typeof args[args.length - 1] && 0 === args[args.length - 1].indexOf("\n    in"))) {
                        var stack = ReactSharedInternals.ReactDebugCurrentFrame.getStackAddendum();
                        if ("" !== stack) {
                            format += "%s";
                            args = args.concat([ stack ]);
                        }
                    }
                    var argsWithFormat = args.map((function(item) {
                        return "" + item;
                    }));
                    argsWithFormat.unshift("Warning: " + format);
                    (function() {}).apply.call(console[level], console, argsWithFormat);
                    try {
                        var argIndex = 0;
                        var message = "Warning: " + format.replace(/%s/g, (function() {
                            return args[argIndex++];
                        }));
                        throw new Error(message);
                    } catch (x) {}
                }
                var didWarnStateUpdateForUnmountedComponent = {};
                function warnNoop(publicInstance, callerName) {
                    var _constructor = publicInstance.constructor;
                    var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
                    var warningKey = componentName + "." + callerName;
                    if (!didWarnStateUpdateForUnmountedComponent[warningKey]) {
                        error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
                        didWarnStateUpdateForUnmountedComponent[warningKey] = !0;
                    }
                }
                var ReactNoopUpdateQueue = {
                    isMounted: function(publicInstance) {
                        return !1;
                    },
                    enqueueForceUpdate: function(publicInstance, callback, callerName) {
                        warnNoop(publicInstance, "forceUpdate");
                    },
                    enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
                        warnNoop(publicInstance, "replaceState");
                    },
                    enqueueSetState: function(publicInstance, partialState, callback, callerName) {
                        warnNoop(publicInstance, "setState");
                    }
                };
                var emptyObject = {};
                Object.freeze(emptyObject);
                function Component(props, context, updater) {
                    this.props = props;
                    this.context = context;
                    this.refs = emptyObject;
                    this.updater = updater || ReactNoopUpdateQueue;
                }
                Component.prototype.isReactComponent = {};
                Component.prototype.setState = function(partialState, callback) {
                    if ("object" != typeof partialState && "function" != typeof partialState && null != partialState) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                    this.updater.enqueueSetState(this, partialState, callback, "setState");
                };
                Component.prototype.forceUpdate = function(callback) {
                    this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
                };
                var deprecatedAPIs = {
                    isMounted: [ "isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks." ],
                    replaceState: [ "replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)." ]
                };
                var defineDeprecationWarning = function(methodName, info) {
                    Object.defineProperty(Component.prototype, methodName, {
                        get: function() {
                            warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                        }
                    });
                };
                for (var fnName in deprecatedAPIs) deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
                function ComponentDummy() {}
                ComponentDummy.prototype = Component.prototype;
                function PureComponent(props, context, updater) {
                    this.props = props;
                    this.context = context;
                    this.refs = emptyObject;
                    this.updater = updater || ReactNoopUpdateQueue;
                }
                var pureComponentPrototype = PureComponent.prototype = new ComponentDummy;
                pureComponentPrototype.constructor = PureComponent;
                _assign(pureComponentPrototype, Component.prototype);
                pureComponentPrototype.isPureReactComponent = !0;
                var hasOwnProperty = {}.hasOwnProperty;
                var RESERVED_PROPS = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };
                var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
                didWarnAboutStringRefs = {};
                function hasValidRef(config) {
                    if (hasOwnProperty.call(config, "ref")) {
                        var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
                        if (getter && getter.isReactWarning) return !1;
                    }
                    return void 0 !== config.ref;
                }
                function hasValidKey(config) {
                    if (hasOwnProperty.call(config, "key")) {
                        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
                        if (getter && getter.isReactWarning) return !1;
                    }
                    return void 0 !== config.key;
                }
                function defineKeyPropWarningGetter(props, displayName) {
                    var warnAboutAccessingKey = function() {
                        if (!specialPropKeyWarningShown) {
                            specialPropKeyWarningShown = !0;
                            error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)", displayName);
                        }
                    };
                    warnAboutAccessingKey.isReactWarning = !0;
                    Object.defineProperty(props, "key", {
                        get: warnAboutAccessingKey,
                        configurable: !0
                    });
                }
                function defineRefPropWarningGetter(props, displayName) {
                    var warnAboutAccessingRef = function() {
                        if (!specialPropRefWarningShown) {
                            specialPropRefWarningShown = !0;
                            error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)", displayName);
                        }
                    };
                    warnAboutAccessingRef.isReactWarning = !0;
                    Object.defineProperty(props, "ref", {
                        get: warnAboutAccessingRef,
                        configurable: !0
                    });
                }
                function warnIfStringRefCannotBeAutoConverted(config) {
                    if ("string" == typeof config.ref && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
                        var componentName = getComponentName(ReactCurrentOwner.current.type);
                        if (!didWarnAboutStringRefs[componentName]) {
                            error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);
                            didWarnAboutStringRefs[componentName] = !0;
                        }
                    }
                }
                var ReactElement = function(type, key, ref, self, source, owner, props) {
                    var element = {
                        $$typeof: REACT_ELEMENT_TYPE,
                        type: type,
                        key: key,
                        ref: ref,
                        props: props,
                        _owner: owner
                    };
                    element._store = {};
                    Object.defineProperty(element._store, "validated", {
                        configurable: !1,
                        enumerable: !1,
                        writable: !0,
                        value: !1
                    });
                    Object.defineProperty(element, "_self", {
                        configurable: !1,
                        enumerable: !1,
                        writable: !1,
                        value: self
                    });
                    Object.defineProperty(element, "_source", {
                        configurable: !1,
                        enumerable: !1,
                        writable: !1,
                        value: source
                    });
                    if (Object.freeze) {
                        Object.freeze(element.props);
                        Object.freeze(element);
                    }
                    return element;
                };
                function createElement(type, config, children) {
                    var propName;
                    var props = {};
                    var key = null;
                    var ref = null;
                    var self = null;
                    var source = null;
                    if (null != config) {
                        if (hasValidRef(config)) {
                            ref = config.ref;
                            warnIfStringRefCannotBeAutoConverted(config);
                        }
                        hasValidKey(config) && (key = "" + config.key);
                        self = void 0 === config.__self ? null : config.__self;
                        source = void 0 === config.__source ? null : config.__source;
                        for (propName in config) hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName) && (props[propName] = config[propName]);
                    }
                    var childrenLength = arguments.length - 2;
                    if (1 === childrenLength) props.children = children; else if (childrenLength > 1) {
                        var childArray = Array(childrenLength);
                        for (var i = 0; i < childrenLength; i++) childArray[i] = arguments[i + 2];
                        Object.freeze && Object.freeze(childArray);
                        props.children = childArray;
                    }
                    if (type && type.defaultProps) {
                        var defaultProps = type.defaultProps;
                        for (propName in defaultProps) void 0 === props[propName] && (props[propName] = defaultProps[propName]);
                    }
                    if (key || ref) {
                        var displayName = "function" == typeof type ? type.displayName || type.name || "Unknown" : type;
                        key && defineKeyPropWarningGetter(props, displayName);
                        ref && defineRefPropWarningGetter(props, displayName);
                    }
                    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
                }
                function cloneElement(element, config, children) {
                    if (null == element) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
                    var propName;
                    var props = _assign({}, element.props);
                    var key = element.key;
                    var ref = element.ref;
                    var self = element._self;
                    var source = element._source;
                    var owner = element._owner;
                    if (null != config) {
                        if (hasValidRef(config)) {
                            ref = config.ref;
                            owner = ReactCurrentOwner.current;
                        }
                        hasValidKey(config) && (key = "" + config.key);
                        var defaultProps;
                        element.type && element.type.defaultProps && (defaultProps = element.type.defaultProps);
                        for (propName in config) hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName) && (props[propName] = void 0 === config[propName] && void 0 !== defaultProps ? defaultProps[propName] : config[propName]);
                    }
                    var childrenLength = arguments.length - 2;
                    if (1 === childrenLength) props.children = children; else if (childrenLength > 1) {
                        var childArray = Array(childrenLength);
                        for (var i = 0; i < childrenLength; i++) childArray[i] = arguments[i + 2];
                        props.children = childArray;
                    }
                    return ReactElement(element.type, key, ref, self, source, owner, props);
                }
                function isValidElement(object) {
                    return "object" == typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
                }
                var didWarnAboutMaps = !1;
                var userProvidedKeyEscapeRegex = /\/+/g;
                function escapeUserProvidedKey(text) {
                    return ("" + text).replace(userProvidedKeyEscapeRegex, "$&/");
                }
                var traverseContextPool = [];
                function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
                    if (traverseContextPool.length) {
                        var traverseContext = traverseContextPool.pop();
                        traverseContext.result = mapResult;
                        traverseContext.keyPrefix = keyPrefix;
                        traverseContext.func = mapFunction;
                        traverseContext.context = mapContext;
                        traverseContext.count = 0;
                        return traverseContext;
                    }
                    return {
                        result: mapResult,
                        keyPrefix: keyPrefix,
                        func: mapFunction,
                        context: mapContext,
                        count: 0
                    };
                }
                function releaseTraverseContext(traverseContext) {
                    traverseContext.result = null;
                    traverseContext.keyPrefix = null;
                    traverseContext.func = null;
                    traverseContext.context = null;
                    traverseContext.count = 0;
                    traverseContextPool.length < 10 && traverseContextPool.push(traverseContext);
                }
                function traverseAllChildren(children, callback, traverseContext) {
                    return null == children ? 0 : function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
                        var type = typeof children;
                        "undefined" !== type && "boolean" !== type || (children = null);
                        var invokeCallback = !1;
                        if (null === children) invokeCallback = !0; else switch (type) {
                          case "string":
                          case "number":
                            invokeCallback = !0;
                            break;

                          case "object":
                            switch (children.$$typeof) {
                              case REACT_ELEMENT_TYPE:
                              case REACT_PORTAL_TYPE:
                                invokeCallback = !0;
                            }
                        }
                        if (invokeCallback) {
                            callback(traverseContext, children, "" === nameSoFar ? "." + getComponentKey(children, 0) : nameSoFar);
                            return 1;
                        }
                        var child;
                        var subtreeCount = 0;
                        var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
                        if (Array.isArray(children)) for (var i = 0; i < children.length; i++) subtreeCount += traverseAllChildrenImpl(child = children[i], nextNamePrefix + getComponentKey(child, i), callback, traverseContext); else {
                            var iteratorFn = getIteratorFn(children);
                            if ("function" == typeof iteratorFn) {
                                if (iteratorFn === children.entries) {
                                    didWarnAboutMaps || warn("Using Maps as children is deprecated and will be removed in a future major release. Consider converting children to an array of keyed ReactElements instead.");
                                    didWarnAboutMaps = !0;
                                }
                                var iterator = iteratorFn.call(children);
                                var step;
                                var ii = 0;
                                for (;!(step = iterator.next()).done; ) subtreeCount += traverseAllChildrenImpl(child = step.value, nextNamePrefix + getComponentKey(child, ii++), callback, traverseContext);
                            } else if ("object" === type) {
                                var addendum;
                                addendum = " If you meant to render a collection of children, use an array instead." + ReactDebugCurrentFrame.getStackAddendum();
                                var childrenString = "" + children;
                                throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === childrenString ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + ")." + addendum);
                            }
                        }
                        return subtreeCount;
                    }(children, "", callback, traverseContext);
                }
                function getComponentKey(component, index) {
                    return "object" == typeof component && null !== component && null != component.key ? (escaperLookup = {
                        "=": "=0",
                        ":": "=2"
                    }, "$" + ("" + component.key).replace(/[=:]/g, (function(match) {
                        return escaperLookup[match];
                    }))) : index.toString(36);
                    var escaperLookup;
                }
                function forEachSingleChild(bookKeeping, child, name) {
                    bookKeeping.func.call(bookKeeping.context, child, bookKeeping.count++);
                }
                function mapSingleChildIntoContext(bookKeeping, child, childKey) {
                    var result = bookKeeping.result, keyPrefix = bookKeeping.keyPrefix;
                    var mappedChild = bookKeeping.func.call(bookKeeping.context, child, bookKeeping.count++);
                    if (Array.isArray(mappedChild)) mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, (function(c) {
                        return c;
                    })); else if (null != mappedChild) {
                        isValidElement(mappedChild) && (mappedChild = (oldElement = mappedChild, newKey = keyPrefix + (!mappedChild.key || child && child.key === mappedChild.key ? "" : escapeUserProvidedKey(mappedChild.key) + "/") + childKey, 
                        ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props)));
                        result.push(mappedChild);
                    }
                    var oldElement, newKey;
                }
                function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
                    var escapedPrefix = "";
                    null != prefix && (escapedPrefix = escapeUserProvidedKey(prefix) + "/");
                    var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
                    traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
                    releaseTraverseContext(traverseContext);
                }
                function isValidElementType(type) {
                    return "string" == typeof type || "function" == typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || "object" == typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
                }
                function resolveDispatcher() {
                    var dispatcher = ReactCurrentDispatcher.current;
                    if (null === dispatcher) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.");
                    return dispatcher;
                }
                var propTypesMisspellWarningShown;
                propTypesMisspellWarningShown = !1;
                function getDeclarationErrorAddendum() {
                    if (ReactCurrentOwner.current) {
                        var name = getComponentName(ReactCurrentOwner.current.type);
                        if (name) return "\n\nCheck the render method of `" + name + "`.";
                    }
                    return "";
                }
                function getSourceInfoErrorAddendumForProps(elementProps) {
                    return null != elementProps && void 0 !== (source = elementProps.__source) ? "\n\nCheck your code at " + source.fileName.replace(/^.*[\\\/]/, "") + ":" + source.lineNumber + "." : "";
                    var source;
                }
                var ownerHasKeyUseWarning = {};
                function validateExplicitKey(element, parentType) {
                    if (element._store && !element._store.validated && null == element.key) {
                        element._store.validated = !0;
                        var currentComponentErrorInfo = function(parentType) {
                            var info = getDeclarationErrorAddendum();
                            if (!info) {
                                var parentName = "string" == typeof parentType ? parentType : parentType.displayName || parentType.name;
                                parentName && (info = "\n\nCheck the top-level render call using <" + parentName + ">.");
                            }
                            return info;
                        }(parentType);
                        if (!ownerHasKeyUseWarning[currentComponentErrorInfo]) {
                            ownerHasKeyUseWarning[currentComponentErrorInfo] = !0;
                            var childOwner = "";
                            element && element._owner && element._owner !== ReactCurrentOwner.current && (childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".");
                            setCurrentlyValidatingElement(element);
                            error('Each child in a list should have a unique "key" prop.%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
                            setCurrentlyValidatingElement(null);
                        }
                    }
                }
                function validateChildKeys(node, parentType) {
                    if ("object" == typeof node) if (Array.isArray(node)) for (var i = 0; i < node.length; i++) {
                        var child = node[i];
                        isValidElement(child) && validateExplicitKey(child, parentType);
                    } else if (isValidElement(node)) node._store && (node._store.validated = !0); else if (node) {
                        var iteratorFn = getIteratorFn(node);
                        if ("function" == typeof iteratorFn && iteratorFn !== node.entries) {
                            var iterator = iteratorFn.call(node);
                            var step;
                            for (;!(step = iterator.next()).done; ) isValidElement(step.value) && validateExplicitKey(step.value, parentType);
                        }
                    }
                }
                function validatePropTypes(element) {
                    var type = element.type;
                    if (null != type && "string" != typeof type) {
                        var name = getComponentName(type);
                        var propTypes;
                        if ("function" == typeof type) propTypes = type.propTypes; else {
                            if ("object" != typeof type || type.$$typeof !== REACT_FORWARD_REF_TYPE && type.$$typeof !== REACT_MEMO_TYPE) return;
                            propTypes = type.propTypes;
                        }
                        if (propTypes) {
                            setCurrentlyValidatingElement(element);
                            checkPropTypes(propTypes, element.props, "prop", name, ReactDebugCurrentFrame.getStackAddendum);
                            setCurrentlyValidatingElement(null);
                        } else if (void 0 !== type.PropTypes && !propTypesMisspellWarningShown) {
                            propTypesMisspellWarningShown = !0;
                            error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", name || "Unknown");
                        }
                        "function" != typeof type.getDefaultProps || type.getDefaultProps.isReactClassApproved || error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
                    }
                }
                function validateFragmentProps(fragment) {
                    setCurrentlyValidatingElement(fragment);
                    var keys = Object.keys(fragment.props);
                    for (var i = 0; i < keys.length; i++) {
                        var key = keys[i];
                        if ("children" !== key && "key" !== key) {
                            error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                            break;
                        }
                    }
                    null !== fragment.ref && error("Invalid attribute `ref` supplied to `React.Fragment`.");
                    setCurrentlyValidatingElement(null);
                }
                function createElementWithValidation(type, props, children) {
                    var validType = isValidElementType(type);
                    if (!validType) {
                        var info = "";
                        (void 0 === type || "object" == typeof type && null !== type && 0 === Object.keys(type).length) && (info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                        var sourceInfo = getSourceInfoErrorAddendumForProps(props);
                        info += sourceInfo || getDeclarationErrorAddendum();
                        var typeString;
                        if (null === type) typeString = "null"; else if (Array.isArray(type)) typeString = "array"; else if (void 0 !== type && type.$$typeof === REACT_ELEMENT_TYPE) {
                            typeString = "<" + (getComponentName(type.type) || "Unknown") + " />";
                            info = " Did you accidentally export a JSX literal instead of a component?";
                        } else typeString = typeof type;
                        error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
                    }
                    var element = createElement.apply(this, arguments);
                    if (null == element) return element;
                    if (validType) for (var i = 2; i < arguments.length; i++) validateChildKeys(arguments[i], type);
                    type === REACT_FRAGMENT_TYPE ? validateFragmentProps(element) : validatePropTypes(element);
                    return element;
                }
                var didWarnAboutDeprecatedCreateFactory = !1;
                try {
                    var frozenObject = Object.freeze({});
                    var testMap = new Map([ [ frozenObject, null ] ]);
                    var testSet = new Set([ frozenObject ]);
                    testMap.set(0, 0);
                    testSet.add(0);
                } catch (e) {}
                var createElement$1 = createElementWithValidation;
                exports.Children = {
                    map: function(children, func, context) {
                        if (null == children) return children;
                        var result = [];
                        mapIntoWithKeyPrefixInternal(children, result, null, func, context);
                        return result;
                    },
                    forEach: function(children, forEachFunc, forEachContext) {
                        if (null == children) return children;
                        var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
                        traverseAllChildren(children, forEachSingleChild, traverseContext);
                        releaseTraverseContext(traverseContext);
                    },
                    count: function(children) {
                        return traverseAllChildren(children, (function() {
                            return null;
                        }), null);
                    },
                    toArray: function(children) {
                        var result = [];
                        mapIntoWithKeyPrefixInternal(children, result, null, (function(child) {
                            return child;
                        }));
                        return result;
                    },
                    only: function(children) {
                        if (!isValidElement(children)) throw Error("React.Children.only expected to receive a single React element child.");
                        return children;
                    }
                };
                exports.Component = Component;
                exports.Fragment = REACT_FRAGMENT_TYPE;
                exports.Profiler = REACT_PROFILER_TYPE;
                exports.PureComponent = PureComponent;
                exports.StrictMode = REACT_STRICT_MODE_TYPE;
                exports.Suspense = REACT_SUSPENSE_TYPE;
                exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
                exports.cloneElement = function(element, props, children) {
                    var newElement = cloneElement.apply(this, arguments);
                    for (var i = 2; i < arguments.length; i++) validateChildKeys(arguments[i], newElement.type);
                    validatePropTypes(newElement);
                    return newElement;
                };
                exports.createContext = function(defaultValue, calculateChangedBits) {
                    void 0 === calculateChangedBits ? calculateChangedBits = null : null !== calculateChangedBits && "function" != typeof calculateChangedBits && error("createContext: Expected the optional second argument to be a function. Instead received: %s", calculateChangedBits);
                    var context = {
                        $$typeof: REACT_CONTEXT_TYPE,
                        _calculateChangedBits: calculateChangedBits,
                        _currentValue: defaultValue,
                        _currentValue2: defaultValue,
                        _threadCount: 0,
                        Provider: null,
                        Consumer: null
                    };
                    context.Provider = {
                        $$typeof: REACT_PROVIDER_TYPE,
                        _context: context
                    };
                    var hasWarnedAboutUsingNestedContextConsumers = !1;
                    var hasWarnedAboutUsingConsumerProvider = !1;
                    var Consumer = {
                        $$typeof: REACT_CONTEXT_TYPE,
                        _context: context,
                        _calculateChangedBits: context._calculateChangedBits
                    };
                    Object.defineProperties(Consumer, {
                        Provider: {
                            get: function() {
                                if (!hasWarnedAboutUsingConsumerProvider) {
                                    hasWarnedAboutUsingConsumerProvider = !0;
                                    error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                                }
                                return context.Provider;
                            },
                            set: function(_Provider) {
                                context.Provider = _Provider;
                            }
                        },
                        _currentValue: {
                            get: function() {
                                return context._currentValue;
                            },
                            set: function(_currentValue) {
                                context._currentValue = _currentValue;
                            }
                        },
                        _currentValue2: {
                            get: function() {
                                return context._currentValue2;
                            },
                            set: function(_currentValue2) {
                                context._currentValue2 = _currentValue2;
                            }
                        },
                        _threadCount: {
                            get: function() {
                                return context._threadCount;
                            },
                            set: function(_threadCount) {
                                context._threadCount = _threadCount;
                            }
                        },
                        Consumer: {
                            get: function() {
                                if (!hasWarnedAboutUsingNestedContextConsumers) {
                                    hasWarnedAboutUsingNestedContextConsumers = !0;
                                    error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                                }
                                return context.Consumer;
                            }
                        }
                    });
                    context.Consumer = Consumer;
                    context._currentRenderer = null;
                    context._currentRenderer2 = null;
                    return context;
                };
                exports.createElement = createElement$1;
                exports.createFactory = function(type) {
                    var validatedFactory = createElementWithValidation.bind(null, type);
                    validatedFactory.type = type;
                    if (!didWarnAboutDeprecatedCreateFactory) {
                        didWarnAboutDeprecatedCreateFactory = !0;
                        warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
                    }
                    Object.defineProperty(validatedFactory, "type", {
                        enumerable: !1,
                        get: function() {
                            warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                            Object.defineProperty(this, "type", {
                                value: type
                            });
                            return type;
                        }
                    });
                    return validatedFactory;
                };
                exports.createRef = function() {
                    var refObject = {
                        current: null
                    };
                    Object.seal(refObject);
                    return refObject;
                };
                exports.forwardRef = function(render) {
                    null != render && render.$$typeof === REACT_MEMO_TYPE ? error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : "function" != typeof render ? error("forwardRef requires a render function but was given %s.", null === render ? "null" : typeof render) : 0 !== render.length && 2 !== render.length && error("forwardRef render functions accept exactly two parameters: props and ref. %s", 1 === render.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
                    null != render && (null == render.defaultProps && null == render.propTypes || error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?"));
                    return {
                        $$typeof: REACT_FORWARD_REF_TYPE,
                        render: render
                    };
                };
                exports.isValidElement = isValidElement;
                exports.lazy = function(ctor) {
                    var lazyType = {
                        $$typeof: REACT_LAZY_TYPE,
                        _ctor: ctor,
                        _status: -1,
                        _result: null
                    };
                    var defaultProps;
                    var propTypes;
                    Object.defineProperties(lazyType, {
                        defaultProps: {
                            configurable: !0,
                            get: function() {
                                return defaultProps;
                            },
                            set: function(newDefaultProps) {
                                error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                                defaultProps = newDefaultProps;
                                Object.defineProperty(lazyType, "defaultProps", {
                                    enumerable: !0
                                });
                            }
                        },
                        propTypes: {
                            configurable: !0,
                            get: function() {
                                return propTypes;
                            },
                            set: function(newPropTypes) {
                                error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                                propTypes = newPropTypes;
                                Object.defineProperty(lazyType, "propTypes", {
                                    enumerable: !0
                                });
                            }
                        }
                    });
                    return lazyType;
                };
                exports.memo = function(type, compare) {
                    isValidElementType(type) || error("memo: The first argument must be a component. Instead received: %s", null === type ? "null" : typeof type);
                    return {
                        $$typeof: REACT_MEMO_TYPE,
                        type: type,
                        compare: void 0 === compare ? null : compare
                    };
                };
                exports.useCallback = function(callback, deps) {
                    return resolveDispatcher().useCallback(callback, deps);
                };
                exports.useContext = function(Context, unstable_observedBits) {
                    var dispatcher = resolveDispatcher();
                    void 0 !== unstable_observedBits && error("useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s", unstable_observedBits, "number" == typeof unstable_observedBits && Array.isArray(arguments[2]) ? "\n\nDid you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://fb.me/rules-of-hooks" : "");
                    if (void 0 !== Context._context) {
                        var realContext = Context._context;
                        realContext.Consumer === Context ? error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : realContext.Provider === Context && error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
                    }
                    return dispatcher.useContext(Context, unstable_observedBits);
                };
                exports.useDebugValue = function(value, formatterFn) {
                    return resolveDispatcher().useDebugValue(value, formatterFn);
                };
                exports.useEffect = function(create, deps) {
                    return resolveDispatcher().useEffect(create, deps);
                };
                exports.useImperativeHandle = function(ref, create, deps) {
                    return resolveDispatcher().useImperativeHandle(ref, create, deps);
                };
                exports.useLayoutEffect = function(create, deps) {
                    return resolveDispatcher().useLayoutEffect(create, deps);
                };
                exports.useMemo = function(create, deps) {
                    return resolveDispatcher().useMemo(create, deps);
                };
                exports.useReducer = function(reducer, initialArg, init) {
                    return resolveDispatcher().useReducer(reducer, initialArg, init);
                };
                exports.useRef = function(initialValue) {
                    return resolveDispatcher().useRef(initialValue);
                };
                exports.useState = function(initialState) {
                    return resolveDispatcher().useState(initialState);
                };
                exports.version = "16.13.1";
            }();
        },
        "./node_modules/react/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            module.exports = __webpack_require__("./node_modules/react/cjs/react.development.js");
        },
        "./test/module.ts": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, "render", (function() {
                return component_render;
            }));
            __webpack_require__.d(__webpack_exports__, "foo", (function() {
                return foo;
            }));
            __webpack_require__.d(__webpack_exports__, "Foo", (function() {
                return Foo;
            }));
            function _extends() {
                return (_extends = Object.assign || function(target) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = arguments[i];
                        for (var key in source) ({}).hasOwnProperty.call(source, key) && (target[key] = source[key]);
                    }
                    return target;
                }).apply(this, arguments);
            }
            function _objectWithoutPropertiesLoose(source, excluded) {
                if (null == source) return {};
                var target = {};
                var sourceKeys = Object.keys(source);
                var key, i;
                for (i = 0; i < sourceKeys.length; i++) excluded.indexOf(key = sourceKeys[i]) >= 0 || (target[key] = source[key]);
                return target;
            }
            function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
                try {
                    var info = gen[key](arg);
                    var value = info.value;
                } catch (error) {
                    reject(error);
                    return;
                }
                info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw);
            }
            function _asyncToGenerator(fn) {
                return function() {
                    var self = this, args = arguments;
                    return new Promise((function(resolve, reject) {
                        var gen = fn.apply(self, args);
                        function _next(value) {
                            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
                        }
                        function _throw(err) {
                            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
                        }
                        _next(void 0);
                    }));
                };
            }
            var react = __webpack_require__("./node_modules/react/index.js");
            var react_default = __webpack_require__.n(react);
            var component_render = function() {
                return react_default.a.createElement("div", null);
            };
            function foo() {
                return _foo.apply(this, arguments);
            }
            function _foo() {
                return (_foo = _asyncToGenerator((function*() {
                    _extends({
                        y: 7
                    }, _objectWithoutPropertiesLoose({
                        baz: 123,
                        x: 1
                    }, [ "baz" ]));
                    console.log("I am in debug mode");
                    return yield (new Foo).baz();
                }))).apply(this, arguments);
            }
            var Foo = function() {
                function Foo() {
                    this.bar = 1337;
                }
                Foo.prototype.baz = function() {
                    return 5;
                };
                return Foo;
            }();
        }
    });
}));