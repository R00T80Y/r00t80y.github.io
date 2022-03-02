(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.PluginName = {}));
})(this, (function (exports) { 'use strict';

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

  /**
   * @author r00t80y<https://github.com/R00T80Y>
   * @file Utils used in plugin
   * @since 09-02-2022
   * @updated 14-02-2022
   * @version 0.2.1
   */
  var Utils = {
    // Data Type
    type: function type(data) {
      return Object.prototype.toString.call(data).replace(/^\[object (.+)\]$/, '$1').toLowerCase();
    },
    isFunction: function isFunction(func) {
      return Utils.type(func) === 'function';
    }
  };

  var defaultOptions = {
    // Plugin options here...
    // Plugin Hooks
    init: false,
    destroy: false
  };

  function Plugin($rootElement, pluginOptions) {
    // Plugin methods...
    // Plugin init...
    if (Utils.isFunction(pluginOptions.init)) {
      pluginOptions.init();
    } // Plugin code here...


    console.log('Plugin Init'); // Plugin interface

    return {
      // Public attributes
      get options() {
        return pluginOptions;
      },

      // Public method for destroying a plugin
      destroy: function destroy() {
        if (Utils.isFunction(pluginOptions.destroy)) {
          pluginOptions.destroy();
        } // Delete created tags and events


        return true;
      }
    };
  }

  function PluginName(element, customOptions) {
    var nodeList = [];
    var instances = [];
    return function init() {
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
        instances.push(new Plugin(nodeList[_i2], _objectSpread2(_objectSpread2(_objectSpread2({}, defaultOptions), customOptions), {}, {
          name: 'PluginName'
        })));
      }

      return instances;
    }();
  }

  exports.PluginName = PluginName;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.js.map
