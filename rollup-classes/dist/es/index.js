function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");

  return _classApplyDescriptorGet(receiver, descriptor);
}

function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");

  _classApplyDescriptorSet(receiver, descriptor, value);

  return value;
}

function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }

  return privateMap.get(receiver);
}

function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }

  return descriptor.value;
}

function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }

    descriptor.value = value;
  }
}

function _classPrivateMethodGet(receiver, privateSet, fn) {
  if (!privateSet.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }

  return fn;
}

function _checkPrivateRedeclaration(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}

function _classPrivateFieldInitSpec(obj, privateMap, value) {
  _checkPrivateRedeclaration(obj, privateMap);

  privateMap.set(obj, value);
}

function _classPrivateMethodInitSpec(obj, privateSet) {
  _checkPrivateRedeclaration(obj, privateSet);

  privateSet.add(obj);
}

var defaultOptions = {
  // Plugin options here...
  // Plugin Hooks
  init: false,
  destroy: false
};

var _$rootElement = /*#__PURE__*/new WeakMap();

var _options = /*#__PURE__*/new WeakMap();

var _onPluginClick = /*#__PURE__*/new WeakSet();

var PluginNameClass = /*#__PURE__*/function () {
  function PluginNameClass($rootElement, pluginOptions) {
    _classCallCheck(this, PluginNameClass);

    _classPrivateMethodInitSpec(this, _onPluginClick);

    _classPrivateFieldInitSpec(this, _$rootElement, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _options, {
      writable: true,
      value: void 0
    });

    console.log('Plugin constructor');

    _classPrivateFieldSet(this, _$rootElement, $rootElement);

    _classPrivateFieldSet(this, _options, pluginOptions);

    console.log('Init Click');

    _classPrivateFieldGet(this, _$rootElement).addEventListener('click', _classPrivateMethodGet(this, _onPluginClick, _onPluginClick2));
  }

  _createClass(PluginNameClass, [{
    key: "options",
    get: function get() {
      return _classPrivateFieldGet(this, _options);
    }
  }]);

  return PluginNameClass;
}();

function _onPluginClick2(event) {
  var $target = event.target;
  console.log('Click ' + $target.innerText);
}

var CreatePluginNameClass = /*#__PURE__*/_createClass(function CreatePluginNameClass(element, customOptions) {
  _classCallCheck(this, CreatePluginNameClass);

  var nodeList = [];
  var instances = [];

  if (element && element instanceof HTMLElement) {
    nodeList.push(element);
  } else if (element && typeof element === 'string') {
    var elementsList = document.querySelectorAll(element);

    for (var i = 0, l = elementsList.length; i < l; i += 1) {
      if (elementsList[i] instanceof HTMLElement) {
        nodeList.push(elementsList[i]);
      }
    }
  } else if (element && element.length) {
    for (var _i = 0, _l = element.length; _i < _l; _i += 1) {
      if (element[_i] instanceof HTMLElement) {
        nodeList.push(element[_i]);
      }
    }
  }

  for (var _i2 = 0, _l2 = nodeList.length; _i2 < _l2; _i2 += 1) {
    instances.push(new PluginNameClass(nodeList[_i2], _objectSpread2(_objectSpread2(_objectSpread2({}, defaultOptions), customOptions), {}, {
      name: 'PluginName'
    })));
  }

  return instances;
});

export { CreatePluginNameClass };
//# sourceMappingURL=index.js.map
