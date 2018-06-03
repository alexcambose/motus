// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({6:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.percentFrom = function (current, total) {
    var multiplier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
    return current / total * multiplier;
};
exports.sliceFromPercent = function (value, percent) {
    var multiplier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
    return percent * value / multiplier;
};
exports.getUnit = function (value) {
    var unitReg = /[0-9]+(cm|mm|in|px|pt|pc|em|ex|ch|%|rem|vw|vh|vmin|vmax)$/;
    var match = value.match(unitReg);
    return match[1];
};
exports.getValue = function (value) {
    var unitReg = /([0-9]+)(cm|mm|in|px|pt|pc|em|ex|ch|%|rem|vw|vh|vmin|vmax)$/;
    var match = value.match(unitReg);
    return parseInt(match[1]);
};
exports.calmelToKebabCase = function (value) {
    value = value.trim();
    value = value.replace(value[0], value[0].toLowerCase());
    for (var i = 0; i < value.length; i++) {
        if (value[i] === value[i].toUpperCase()) {
            value = value.substring(0, i) + '-' + value[i].toLowerCase() + value.substring(i + 1);
        }
    }
    return value;
};
exports.kebabToCamelCase = function (value) {
    return value.replace(/-([a-z])/g, function ($1) {
        return $1[1].toUpperCase();
    });
};
exports.closest = function (value, arr) {
    arr = arr.sort(function (a, b) {
        return a - b;
    });
    var closestIndex = -1;
    var i = 0;
    while (i < arr.length) {
        if (value < arr[i] && i == 0) return i;
        if (value < arr[i] && value > arr[i - 1]) return i;
        i++;
    }
    return closestIndex;
};
exports.loopWhile = function (value, until, func, done) {
    var index = 0;
    while (until(index) || index === value.length) {
        func(index);
        index++;
    }
    if (done) {
        done(index);
    }
};
},{}],4:[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");

var Animation = function Animation(startPoint, endPoint, element, keyframes) {
    var _this = this;

    _classCallCheck(this, Animation);

    this.apply = function () {
        var scroll = window.scrollY;
        if (scroll >= _this.startPoint && scroll <= _this.endPoint) {
            var currentScroll = scroll - _this.startPoint;
            var maxScroll = _this.endPoint - _this.startPoint;
            var percent = utils_1.percentFrom(currentScroll, maxScroll);
            var keyframePercentIndex = utils_1.closest(percent, Object.keys(_this.keyframes));
            utils_1.loopWhile(Object.keys(_this.keyframes), function (i) {
                return i < keyframePercentIndex;
            }, function (i) {
                _this.setAttributes(_this.keyframes[Object.keys(_this.keyframes)[i]], 100);
            });
            _this.applyKeyframe(keyframePercentIndex, currentScroll, maxScroll);
        } else if (scroll > _this.endPoint) {
            // apply all keyframes if scroll is over the end point
            for (var _percent in _this.keyframes) {
                _this.setAttributes(_this.keyframes[_percent], 100);
            }
        }
    };
    this.applyKeyframe = function (keyframePercentIndex, currentScroll, maxScroll) {
        var keyframe = _this.keyframes[Object.keys(_this.keyframes)[keyframePercentIndex]]; // needs refactoring because it is very confusing
        if (!keyframe) return;
        var startKeyframePositon = utils_1.sliceFromPercent(maxScroll, Object.keys(_this.keyframes)[keyframePercentIndex - 1] || 0);
        var endKeyframePositon = utils_1.sliceFromPercent(maxScroll, Object.keys(_this.keyframes)[keyframePercentIndex]);
        var keyframePercent = utils_1.percentFrom(currentScroll - startKeyframePositon, endKeyframePositon - startKeyframePositon);
        _this.setAttributes(keyframe, keyframePercent);
    };
    this.setAttributes = function (keyframe, percent) {
        for (var attribute in keyframe) {
            var keyframeStyle = keyframe[attribute];
            attribute = utils_1.calmelToKebabCase(attribute);
            var to = utils_1.getValue(keyframeStyle.to);
            var from = utils_1.getValue(keyframeStyle.from || '0px');
            var unit = utils_1.getUnit(keyframeStyle.to); // to and from should be equal
            console.log('from', from, 'p', utils_1.sliceFromPercent(to - from, percent), 'set style', from + utils_1.sliceFromPercent(to - from, percent) + unit);
            _this.element.style[attribute] = from + utils_1.sliceFromPercent(to - from, percent) + unit;
        }
    };
    if (!startPoint || !endPoint || !element || !keyframes || !Object.keys(keyframes)) {
        throw new Error('startPoint endPoint element keyframes must be specified!');
    }
    this.uid = Math.random() * 100000000; // basic uid
    this.startPoint = startPoint.getPosition();
    this.endPoint = endPoint.getPosition();
    this.element = element;
    this.keyframes = keyframes;
};

exports.default = Animation;
},{"./utils":6}],5:[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var Point = function Point(point) {
    var _this = this;

    _classCallCheck(this, Point);

    this.getPosition = function () {
        var isHorizontal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (_this.point instanceof HTMLElement) {
            return isHorizontal ? _this.point.offsetLeft : _this.point.offsetTop;
        }
        return _this.point;
    };
    this.point = point;
};

exports.default = Point;
},{}],3:[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Animation_1 = __importDefault(require("./Animation"));
var Point_1 = __importDefault(require("./Point"));

var Motus = function Motus() {
    var _this = this;

    _classCallCheck(this, Motus);

    this.Animation = Animation_1.default;
    this.Point = Point_1.default;
    this.animations = [];
    /**Register new animation
     * @param  {Animation} animation
     * @returns void
     */
    this.addAnimation = function (animation) {
        _this.animations.push(animation);
        animation.apply(); // initial apply
    };
    /**Delete animation
     * @param  {number} uid Animation uid
     * @returns void
     */
    this.removeAnimation = function (uid) {
        var index = _this.animations.findIndex(function (e) {
            return e.uid === uid;
        });
        _this.animations.splice(index, 1);
    };
    window.addEventListener('scroll', function () {
        _this.animations.forEach(function (e) {
            return e.apply();
        });
    });
};

exports.default = Motus;
},{"./Animation":4,"./Point":5}],2:[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Motus_1 = __importDefault(require("./Motus"));
window.Motus = new Motus_1.default();
var headera = new window.Motus.Animation(new window.Motus.Point(100), new window.Motus.Point(600), document.getElementById('anim'), {
    60: {
        fontSize: {
            to: '100px'
        }
    }
});
window.Motus.addAnimation(headera);
},{"./Motus":3}],7:[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '33857' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
      // Clear the console after HMR
      console.clear();
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},[7,2], null)
//# sourceMappingURL=/src.dd2ee578.map