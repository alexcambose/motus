(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/color-name/index.js":
/*!******************************************!*\
  !*** ./node_modules/color-name/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};


/***/ }),

/***/ "./node_modules/color-string/index.js":
/*!********************************************!*\
  !*** ./node_modules/color-string/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* MIT license */
var colorNames = __webpack_require__(/*! color-name */ "./node_modules/color-name/index.js");
var swizzle = __webpack_require__(/*! simple-swizzle */ "./node_modules/simple-swizzle/index.js");

var reverseNames = {};

// create a list of reverse color names
for (var name in colorNames) {
	if (colorNames.hasOwnProperty(name)) {
		reverseNames[colorNames[name]] = name;
	}
}

var cs = module.exports = {
	to: {},
	get: {}
};

cs.get = function (string) {
	var prefix = string.substring(0, 3).toLowerCase();
	var val;
	var model;
	switch (prefix) {
		case 'hsl':
			val = cs.get.hsl(string);
			model = 'hsl';
			break;
		case 'hwb':
			val = cs.get.hwb(string);
			model = 'hwb';
			break;
		default:
			val = cs.get.rgb(string);
			model = 'rgb';
			break;
	}

	if (!val) {
		return null;
	}

	return {model: model, value: val};
};

cs.get.rgb = function (string) {
	if (!string) {
		return null;
	}

	var abbr = /^#([a-f0-9]{3,4})$/i;
	var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
	var rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var keyword = /(\D+)/;

	var rgb = [0, 0, 0, 1];
	var match;
	var i;
	var hexAlpha;

	if (match = string.match(hex)) {
		hexAlpha = match[2];
		match = match[1];

		for (i = 0; i < 3; i++) {
			// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
			var i2 = i * 2;
			rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
		}

		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(abbr)) {
		match = match[1];
		hexAlpha = match[3];

		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i] + match[i], 16);
		}

		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha + hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(rgba)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i + 1], 0);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(per)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(keyword)) {
		if (match[1] === 'transparent') {
			return [0, 0, 0, 0];
		}

		rgb = colorNames[match[1]];

		if (!rgb) {
			return null;
		}

		rgb[3] = 1;

		return rgb;
	} else {
		return null;
	}

	for (i = 0; i < 3; i++) {
		rgb[i] = clamp(rgb[i], 0, 255);
	}
	rgb[3] = clamp(rgb[3], 0, 1);

	return rgb;
};

cs.get.hsl = function (string) {
	if (!string) {
		return null;
	}

	var hsl = /^hsla?\(\s*([+-]?(?:\d*\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hsl);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = (parseFloat(match[1]) + 360) % 360;
		var s = clamp(parseFloat(match[2]), 0, 100);
		var l = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);

		return [h, s, l, a];
	}

	return null;
};

cs.get.hwb = function (string) {
	if (!string) {
		return null;
	}

	var hwb = /^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hwb);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var w = clamp(parseFloat(match[2]), 0, 100);
		var b = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
		return [h, w, b, a];
	}

	return null;
};

cs.to.hex = function () {
	var rgba = swizzle(arguments);

	return (
		'#' +
		hexDouble(rgba[0]) +
		hexDouble(rgba[1]) +
		hexDouble(rgba[2]) +
		(rgba[3] < 1
			? (hexDouble(Math.round(rgba[3] * 255)))
			: '')
	);
};

cs.to.rgb = function () {
	var rgba = swizzle(arguments);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
		: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
};

cs.to.rgb.percent = function () {
	var rgba = swizzle(arguments);

	var r = Math.round(rgba[0] / 255 * 100);
	var g = Math.round(rgba[1] / 255 * 100);
	var b = Math.round(rgba[2] / 255 * 100);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
		: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
};

cs.to.hsl = function () {
	var hsla = swizzle(arguments);
	return hsla.length < 4 || hsla[3] === 1
		? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
		: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
};

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
cs.to.hwb = function () {
	var hwba = swizzle(arguments);

	var a = '';
	if (hwba.length >= 4 && hwba[3] !== 1) {
		a = ', ' + hwba[3];
	}

	return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
};

cs.to.keyword = function (rgb) {
	return reverseNames[rgb.slice(0, 3)];
};

// helpers
function clamp(num, min, max) {
	return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
	var str = num.toString(16).toUpperCase();
	return (str.length < 2) ? '0' + str : str;
}


/***/ }),

/***/ "./node_modules/color-to-color/index.js":
/*!**********************************************!*\
  !*** ./node_modules/color-to-color/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const color = __webpack_require__(/*! color-string */ "./node_modules/color-string/index.js")
const rgbObject = value => {
  const array = color.get.rgb(value)
  return {
    r: array[0],
    g: array[1],
    b: array[2],
    a: array[3]
  }
}

module.exports = from => {
  from = rgbObject(from)

  let colorDiff, result
  this.toColor = colorValue => {
    colorValue = rgbObject(colorValue)
    colorDiff = {
      r: colorValue.r - from.r,
      g: colorValue.g - from.g,
      b: colorValue.b - from.b
    }
    return { withPercent }
  }
  const withPercent = p => {
    const percentF = p / 100

    result = {
      r:
        from.r +
        Math.floor(
          colorDiff.r > 0 ? colorDiff.r * percentF : -(-colorDiff.r * percentF)
        ),
      g:
        from.g +
        Math.floor(
          colorDiff.g > 0 ? colorDiff.g * percentF : -(-colorDiff.g * percentF)
        ),
      b:
        from.b +
        Math.floor(
          colorDiff.b > 0 ? colorDiff.b * percentF : -(-colorDiff.b * percentF)
        )
    }
    return { get }
  }
  const get = type => {
    if (!type) return result
    const values = Object.keys(color.to)
    if (values.indexOf(type) !== -1) { return color.to[type]([result.r, result.g, result.b]) } else throw new Error(`Unknown type '${type}'`)
  }
  return this
}


/***/ }),

/***/ "./node_modules/css-func/index.js":
/*!****************************************!*\
  !*** ./node_modules/css-func/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class CssFunc {
  constructor($element, attr) {
    this.$element = $element;
    this.attr = attr;
    // some sort of "virtual style" object
    this._functionObject = this._getFunctions(this._getValue($element, attr));
  }
  _getValue($element, attr) {
    return $element.style[attr];
    // return window.getComputedStyle($element).getPropertyValue(attr);
  }
  _setValue(value) {
    this.$element.style[this.attr] = value;
  }
  /**
   * Generates a string from object functions
   * @param  {object} object
   * @return {string}
   */
  _getValueFromObject(object) {
    let valueString = '';
    Object.keys(object).forEach(functionName => {
      valueString += `${functionName}(${object[functionName].join(', ')}) `;
    });
    return valueString.substring(0, valueString.length - 1);
  }

  /**
   * Returns an object containing functions from the string
   * @param  {object} functionsString
   * @return {object}
   */
  _getFunctions(functionsString) {
    const regex = /(\w+)\((.*?)\)/; // .*? for ungreedy
    const values = functionsString.split(regex);
    let functions = {};
    for (let i = 1; i < values.length; i += 3) {
      functions[values[i]] = values[i + 1].replace(' ', '').split(',');
    }
    return functions;
  }
  /**
   * Gets the property from element
   * @example
   * cssfunc(element, 'transform').get(); // "translate(10px, 20px) scale(1.1)"
   *
   * @return {string} Element property value
   */
  get() {
    return this._getValue(this.$element, this.attr);
  }
  /**
   * Adds or updates a function
   * @example
   * cssfunc(element, 'transform').add('rotate', '10px');
   * cssfunc(element, 'transform').add('translate', ['10px', '20px']);
   * cssfunc(element, 'transform').add('translateX', ['10px']);
   *
   * @param  {string} fproperty CSS function name
   * @param  {(string|array)} value CSS function parameters
   * @param  {boolean} [autoUpdate=true] True to automatically update function if aleady presentTrue to automatically add new function if not present
   * @return {boolean} True if a function was added or updated
   */
  add(fproperty, value, autoUpdate = true) {
    if (!this.exists(fproperty)) {
      if (typeof value === 'string') value = [value];
      this._functionObject[fproperty] = value;
      this._setValue(this._getValueFromObject(this._functionObject));
      return true;
    } else if (autoUpdate) {
      // if autoUpdate automatically update the function if it doesn't exist
      this.update(fproperty, value);
      return true;
    }
    return false;
  }
  /**
   * Updates or adds a function
   * @example
   * cssfunc(element, 'transform').update('rotate');
   *
   * @param  {string} fproperty CSS function name
   * @param  {string|array} value CSS function parameters
   * @param  {boolean} [autoAdd=true] True to automatically add new function if not present
   * @return {boolean} True if a function was updated or added
   */
  update(fproperty, value, autoAdd = true) {
    if (this.exists(fproperty)) {
      // if the provided value is a string convert it in an array
      if (typeof value === 'string') value = [value];
      // add the function to the functions object
      this._functionObject[fproperty] = value;
      this._setValue(this._getValueFromObject(this._functionObject));
      return true;
    } else if (autoAdd) {
      // if autoAdd automatically add the function if it doesn't exist
      this.add(fproperty, value);
      return true;
    }
    return false;
  }
  /**
   * Delete functoin from element style property
   * @example
   * cssfunc(element, 'transform').delete('rotate');
   *
   * @param  {string} fproperty CSS function name
   * @return {boolean} True if there was a function to delete
   */
  delete(fproperty) {
    if (this.exists(fproperty)) {
      delete this._functionObject[fproperty];
      this._setValue(this._getValueFromObject(this._functionObject));
      return true;
    }
    return false;
  }
  /**
   * Returns true if function exists
   * @example
   * cssfunc(element, 'transform').exists('rotate');
   *
   * @param  {string} fproperty CSS function name
   * @return {boolean} True if function exists
   */
  exists(fproperty) {
    // check if object has property
    return this._functionObject.hasOwnProperty(fproperty);
  }
}

module.exports = ($element, attr) => new CssFunc($element, attr);


/***/ }),

/***/ "./node_modules/lodash.throttle/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.throttle/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/simple-swizzle/index.js":
/*!**********************************************!*\
  !*** ./node_modules/simple-swizzle/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArrayish = __webpack_require__(/*! is-arrayish */ "./node_modules/simple-swizzle/node_modules/is-arrayish/index.js");

var concat = Array.prototype.concat;
var slice = Array.prototype.slice;

var swizzle = module.exports = function swizzle(args) {
	var results = [];

	for (var i = 0, len = args.length; i < len; i++) {
		var arg = args[i];

		if (isArrayish(arg)) {
			// http://jsperf.com/javascript-array-concat-vs-push/98
			results = concat.call(results, slice.call(arg));
		} else {
			results.push(arg);
		}
	}

	return results;
};

swizzle.wrap = function (fn) {
	return function () {
		return fn(swizzle(arguments));
	};
};


/***/ }),

/***/ "./node_modules/simple-swizzle/node_modules/is-arrayish/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/simple-swizzle/node_modules/is-arrayish/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isArrayish(obj) {
	if (!obj || typeof obj === 'string') {
		return false;
	}

	return obj instanceof Array || Array.isArray(obj) ||
		(obj.length >= 0 && (obj.splice instanceof Function ||
			(Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/Motus.js":
/*!**********************!*\
  !*** ./src/Motus.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _animation_Animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation/Animation */ "./src/animation/Animation.js");
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Point */ "./src/Point.js");
/* harmony import */ var _error_throwError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error/throwError */ "./src/error/throwError.js");
/* harmony import */ var _enum_errorEnum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enum/errorEnum */ "./src/enum/errorEnum.js");







var Motus =
/*#__PURE__*/
function () {
  function Motus() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Motus);

    this.Animation = _animation_Animation__WEBPACK_IMPORTED_MODULE_2__["default"];
    this.Point = _Point__WEBPACK_IMPORTED_MODULE_3__["default"];
    this._animations = [];
  }
  /** Adds an animation
   * @param  {Motus.Animation} animation The animation class
   * @param  {boolean} autostart=true If thrue the scroll event listener will be automatically added
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Motus, [{
    key: "addAnimation",
    value: function addAnimation(animation) {
      var autostart = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      // provided animation must be an instance of Motus.Animation
      if (animation instanceof this.Animation) {
        this._animations.push(animation);

        if (autostart) animation.start();
      } else {
        Object(_error_throwError__WEBPACK_IMPORTED_MODULE_4__["default"])(_enum_errorEnum__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_NOT_INSTANCE_OF_ANIMATION"]);
      }
    }
    /** Removes all registered animations
     * @param  {boolean} autostop=true If true the registered animations will be automatically stopped
     */

  }, {
    key: "clearAnimations",
    value: function clearAnimations() {
      var autostop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (autostop) {
        this._animations.forEach(function (animation) {
          return animation.stop();
        });
      }

      this._animations = [];
    }
  }]);

  return Motus;
}();

/* harmony default export */ __webpack_exports__["default"] = (new Motus());

/***/ }),

/***/ "./src/Point.js":
/*!**********************!*\
  !*** ./src/Point.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Point; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/ */ "./src/helpers/index.js");


 // import throwError from './error/throwError';
// import { VALUE_IS_NOT_HTML_ELEMENT } from './enum/errorEnum';

var Point =
/*#__PURE__*/
function () {
  function Point() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Point);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Point, null, [{
    key: "getPxFromPoint",

    /**
     * Gets the pixels from a given number or dom element
     *
     * @param  {number|HTMLElement} point
     * @returns number
     */
    value: function getPxFromPoint(point, $scrollElement, horizontal) {
      if (Object(_helpers___WEBPACK_IMPORTED_MODULE_2__["isHtmlElement"])(point)) {
        if (horizontal) {
          return point.offsetLeft - ($scrollElement.offsetLeft || 0);
        }

        return point.offsetTop - ($scrollElement.offsetTop || 0);
      }

      return point;
    }
  }, {
    key: "getDistanceFromParent",
    value: function getDistanceFromParent($element, $parent, horizontal) {
      var parentOffset = $parent === window ? 0 : horizontal ? $parent.offsetLeft : $parent.offsetTop;
      var elementOffset = horizontal ? $element.offsetLeft : $element.offsetTop;
      return elementOffset - parentOffset;
    }
  }]);

  return Point;
}();



/***/ }),

/***/ "./src/animation/Animation.js":
/*!************************************!*\
  !*** ./src/animation/Animation.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Animation; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Keyframes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Keyframes */ "./src/animation/Keyframes.js");
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Point */ "./src/Point.js");
/* harmony import */ var _animation_Animator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../animation/Animator */ "./src/animation/Animator.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helpers___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/ */ "./src/helpers/index.js");
/* harmony import */ var _error_throwError__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../error/throwError */ "./src/error/throwError.js");
/* harmony import */ var _enum_errorEnum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../enum/errorEnum */ "./src/enum/errorEnum.js");












var Animation =
/*#__PURE__*/
function () {
  function Animation(startPoint, endPoint, $element, keyframes) {
    var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Animation);

    // default options
    this.options = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, Animation.defaultOptions, options);

    if (!Object(_helpers___WEBPACK_IMPORTED_MODULE_8__["isHtmlElement"])($element)) {
      Object(_error_throwError__WEBPACK_IMPORTED_MODULE_9__["default"])(_enum_errorEnum__WEBPACK_IMPORTED_MODULE_10__["VALUE_IS_NOT_HTML_ELEMENT"], $element);
    } // element that will be animated


    this.$element = $element; // normalized keyframes

    this.keyframes = _Keyframes__WEBPACK_IMPORTED_MODULE_4__["default"].normalize(keyframes, $element); // set the default started value

    this.started = this.options.started; // animator used to apply keyframes to the $element based on percent

    this._animator = new _animation_Animator__WEBPACK_IMPORTED_MODULE_6__["default"](this.keyframes, $element); // throttle the method that will be called on scroll

    this._compute = lodash_throttle__WEBPACK_IMPORTED_MODULE_7___default()(this.__compute, this.options.throttle); // variables that are true if the scroll is before or after the animation start and end points

    this.appliedAllBefore = false;
    this.appliedAllAfter = false;

    this._computePositions(startPoint, endPoint);

    var handleResize = lodash_throttle__WEBPACK_IMPORTED_MODULE_7___default()(this._computePositions.bind(this), this.options.throttle);
    window.addEventListener('resize', function () {
      return handleResize(startPoint, endPoint);
    });
  }
  /**
   * Start listening to scroll events in order to enable animation
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Animation, [{
    key: "start",
    value: function start() {
      var options = this.options,
          started = this.started;
      var $scrollElement = options.$scrollElement;

      if (!started) {
        // add event listener if not started
        $scrollElement.addEventListener('scroll', this._compute.bind(this));
      }

      this.started = true; // also call compute once for setting initial values

      this._compute();
    }
  }, {
    key: "stop",
    value: function stop() {
      var options = this.options,
          started = this.started;
      var $scrollElement = options.$scrollElement;

      if (started) {
        // remove event listener if started
        $scrollElement.removeEventListener('scroll', this._compute);
      }

      this.started = false;
    }
    /**
     * Get user scroll position based on $scrollElement
     */

  }, {
    key: "_getScrollPosition",
    value: function _getScrollPosition() {
      var _this$options = this.options,
          horizontal = _this$options.horizontal,
          $scrollElement = _this$options.$scrollElement;
      return Object(_helpers___WEBPACK_IMPORTED_MODULE_8__["getElementScroll"])($scrollElement, horizontal);
    }
    /** Method that sets the start and end point to the class properties to be used later when animating, also called on every resize
     * @param  {} startPoint
     * @param  {} endPoint
     */

  }, {
    key: "_computePositions",
    value: function _computePositions(startPoint, endPoint) {
      var _this$options2 = this.options,
          $scrollElement = _this$options2.$scrollElement,
          horizontal = _this$options2.horizontal; // start point

      if (startPoint || startPoint === 0) {
        this.startPoint = _Point__WEBPACK_IMPORTED_MODULE_5__["default"].getPxFromPoint(startPoint, $scrollElement, horizontal);
      } else {
        // if point is not defined get the distance to it
        this.startPoint = _Point__WEBPACK_IMPORTED_MODULE_5__["default"].getDistanceFromParent(this.$element, $scrollElement, horizontal) - Object(_helpers___WEBPACK_IMPORTED_MODULE_8__["getElementDimensions"])($scrollElement)[horizontal ? 'width' : 'height'];
      }

      if (endPoint || endPoint === 0) {
        // end point
        this.endPoint = _Point__WEBPACK_IMPORTED_MODULE_5__["default"].getPxFromPoint(endPoint, $scrollElement, horizontal);
      } else {
        // if point is not defined get the distance to it
        this.endPoint = _Point__WEBPACK_IMPORTED_MODULE_5__["default"].getDistanceFromParent(this.$element, $scrollElement, horizontal);
      }
    }
    /**
     * Method called on throttled scroll
     */

  }, {
    key: "__compute",
    value: function __compute() {
      var _this$options3 = this.options,
          onScrollBefore = _this$options3.onScrollBefore,
          onScrollAfter = _this$options3.onScrollAfter,
          onScrollBetween = _this$options3.onScrollBetween,
          onScroll = _this$options3.onScroll,
          onHitTop = _this$options3.onHitTop,
          onHitBottom = _this$options3.onHitBottom; // top position for the start and end point

      var startPoint = this.startPoint,
          endPoint = this.endPoint; // run only if the animation is started

      if (!this.started) return; // user scroll position

      var scroll = this._getScrollPosition(); // console.log(start, end, scroll, )
      // call scroll animation hook


      onScroll && onScroll(scroll); // if scroll is between the start and the end position

      if (scroll > startPoint && scroll < endPoint) {
        // BETWEEN
        this.appliedAllBefore = false;
        this.appliedAllAfter = false;
        var scrollPercent = Object(_helpers___WEBPACK_IMPORTED_MODULE_8__["calculatePercent"])(startPoint, endPoint, scroll); // call Animator to apply animations

        this._animator.applyAnimations(scrollPercent); // call animation hook


        onScrollBetween && onScrollBetween(scroll, scrollPercent);
      } else if (scroll < startPoint) {
        // BEFORE
        onScrollBefore && onScrollBefore(scroll); // apply only once

        if (!this.appliedAllBefore) {
          onHitTop && onHitTop(); // if the scroll position is before the start point set element style to the initial keyframe rules with 0 percent

          this.appliedAllBefore = true;

          this._animator.applyNoAnimations();
        }
      } else if (scroll > endPoint) {
        // AFTER
        onScrollAfter && onScrollAfter(scroll); // apply only once

        if (!this.appliedAllAfter) {
          onHitBottom && onHitBottom(); // if the scroll position if after the start set element style to all keyframes with 100 percent

          this.appliedAllAfter = true;

          this._animator.applyAllAnimations();
        }
      }
    }
  }]);

  return Animation;
}();

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(Animation, "defaultOptions", {
  // how many decimals should a css property have
  precision: _animation_Animator__WEBPACK_IMPORTED_MODULE_6__["default"].defaultOptions.precision,
  // interval of sleep
  throttle: 40,
  // the element that will get the scroll listener and that will be used to calculate the scroll top and left
  $scrollElement: window,
  // is true the left offset wil be used to calculate the animation evolution
  horizontal: false,
  // invoked on scroll (throttle will be applied)
  onScroll: null,
  // invoked only if the top (or left if horizontal) is between the start and end position
  onScrollBetween: null,
  // invoked if the scroll is before the start position
  onScrollBefore: null,
  // invoked if the scroll is after the start position
  onScrollAfter: null,
  // invoked once when the scroll just passed start position
  onHitTop: null,
  // invoked once when the scroll just passed end position
  onHitBottom: null,
  // sets the default value of the started parmeter
  started: false
});



/***/ }),

/***/ "./src/animation/Animator.js":
/*!***********************************!*\
  !*** ./src/animation/Animator.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Animator; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/ */ "./src/helpers/index.js");
/* harmony import */ var _Styler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Styler */ "./src/animation/Styler.js");
/* harmony import */ var color_to_color__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! color-to-color */ "./node_modules/color-to-color/index.js");
/* harmony import */ var color_to_color__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(color_to_color__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _enum_specialUnitEnum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../enum/specialUnitEnum */ "./src/enum/specialUnitEnum.js");
/* harmony import */ var _error_throwError__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../error/throwError */ "./src/error/throwError.js");
/* harmony import */ var _enum_errorEnum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../enum/errorEnum */ "./src/enum/errorEnum.js");












var Animator =
/*#__PURE__*/
function () {
  function Animator(keyframes, $element) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Animator);

    this.options = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, Animator.defaultOptions, options);
    this.keyframes = keyframes;
    this.elementStyles = new _Styler__WEBPACK_IMPORTED_MODULE_6__["default"]($element);
  }
  /**
   * Returns a pair of two keyframe percentages, [previous, next]
   * @param  {number} percent
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Animator, [{
    key: "_getCurrentKeyframesPercent",
    value: function _getCurrentKeyframesPercent(percent) {
      var keyframes = this.keyframes; // get percentages

      var percentages = Object.keys(keyframes); // loop through all of percentages and return the percent that is after the current scroll percent

      for (var i = 0; i < percentages.length; i++) {
        // if the current percent matches exactly a frame
        if (percent === parseInt(percentages[i])) {
          // return the previous if exists and the current one
          return [percentages[i - 1] || '0', percentages[i]];
        } // search two percentages, one smaller and one bigger that the current scroll percent


        if (percent > percentages[i] && percent < percentages[i + 1]) {
          return [percentages[i], percentages[i + 1]];
        }
      } // if the first keyframe percent is bigger that the current scroll percent


      if (percentages[0] > percent) return ['0', percentages[0]]; // if the last keyframe is smaller that the current scroll percent

      if (percentages[percentages.length - 1] < percent) return [];
    }
    /**
     * Apply keyrame rules based on the scroll position
     * @param  {number} percent
     */

  }, {
    key: "applyAnimations",
    value: function applyAnimations(percent) {
      var _this = this;

      var currentKeyframesPercent = this._getCurrentKeyframesPercent(percent); // check if there is a pair of keyframe percentages


      if (!currentKeyframesPercent.length) return;

      var _currentKeyframesPerc = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(currentKeyframesPercent, 2),
          previousKeyframePercent = _currentKeyframesPerc[0],
          currentKeyframePercent = _currentKeyframesPerc[1]; // get the scrolled percent from the last keyframe to the previous


      var currentKeyframeScrollPercent = Math.floor(Object(_helpers___WEBPACK_IMPORTED_MODULE_5__["calculatePercent"])(previousKeyframePercent, currentKeyframePercent, percent)); // apply all keyframes at 100 with a lower berakpoint percent

      Object.keys(this.keyframes).forEach(function (percent) {
        // both of them are string so web aprseInt to compare them as numerals
        if (parseInt(percent) < parseInt(currentKeyframePercent)) {
          _this._applyKeyframe(_this.keyframes[percent], 100);
        }
      }); // modify dom element styled based on the keyframe rules at current percent

      this._applyKeyframe(this.keyframes[currentKeyframePercent], currentKeyframeScrollPercent);
    }
  }, {
    key: "applyNoAnimations",
    value: function applyNoAnimations() {
      this.elementStyles.removeAll();
      if (this.keyframes[0]) this._applyKeyframe(this.keyframes[0], 100);
    }
  }, {
    key: "applyAllAnimations",
    value: function applyAllAnimations() {
      var _this2 = this;

      Object.keys(this.keyframes).forEach(function (percent) {
        return _this2._applyKeyframe(_this2.keyframes[percent], 100);
      });
    }
    /**
     * Apply keyframe rules on the dom element
     * @param  {object} keyframe
     * @param  {number} percent
     */

  }, {
    key: "_applyKeyframe",
    value: function _applyKeyframe(keyframe, percent) {
      var _this3 = this;

      // loop through all keyframe rules
      Object.keys(keyframe).forEach(function (property) {
        var _keyframe$property = keyframe[property],
            from = _keyframe$property.from,
            to = _keyframe$property.to,
            unit = _keyframe$property.unit; // if the keyfrme value is something like { width: { from: 10, to: 20, unit: 'px' } }

        if (Object(_helpers___WEBPACK_IMPORTED_MODULE_5__["isNumber"])(from) && Object(_helpers___WEBPACK_IMPORTED_MODULE_5__["isNumber"])(to)) {
          _this3._applyNumberValues(property, from, to, unit === _enum_specialUnitEnum__WEBPACK_IMPORTED_MODULE_8__["NO_UNIT"] ? '' : unit, percent);
        } else if (unit === _enum_specialUnitEnum__WEBPACK_IMPORTED_MODULE_8__["COLOR_UNIT"]) {
          _this3._applyColorValues(property, from, to, percent);
        } else if (!unit && Object(_helpers___WEBPACK_IMPORTED_MODULE_5__["isArray"])(from) && Object(_helpers___WEBPACK_IMPORTED_MODULE_5__["isArray"])(to)) {
          _this3._applyArrayValues(property, from, to, percent);
        } else {
          Object(_error_throwError__WEBPACK_IMPORTED_MODULE_9__["default"])(_enum_errorEnum__WEBPACK_IMPORTED_MODULE_10__["UNEXPECTED_ERROR"]);
        }
      });
    }
    /**
     * Set the element style attribute based on the current keyframe scroll percent
     * @param  {string} property
     * @param  {number} from
     * @param  {number} to
     * @param  {string} unit Property unit
     * @param  {number} percent The percent of the scrolling position from the previous keyframe to the next one
     */

  }, {
    key: "_applyNumberValues",
    value: function _applyNumberValues(property, from, to, unit, percent) {
      var elementStyles = this.elementStyles,
          options = this.options; // the percent of the scrolling position from the previous keyframe to the next one

      var value = Object(_helpers___WEBPACK_IMPORTED_MODULE_5__["calculateValueFromPercent"])(from, to, percent, options.precision); // apply the values to the element style

      elementStyles.apply(property, value, unit);
    }
  }, {
    key: "_applyColorValues",
    value: function _applyColorValues(property, from, to, percent) {
      var elementStyles = this.elementStyles; // calculate color from percent

      var value = color_to_color__WEBPACK_IMPORTED_MODULE_7___default()(from).toColor(to).withPercent(percent).get('rgb'); // apply the values to the element style

      elementStyles.apply(property, value);
    }
    /**
     * Calculates the value of all function parameters based on the specified percent and then applies it to the dom element via Styler class
     * @param  {string} property
     * @param  {array} from - Shape: [[10, 'px'], [10, 'px]]
     * @param  {array} to - Shape: [[10, 'px'], [10, 'px]]
     * @param  {number} percent
     */

  }, {
    key: "_applyArrayValues",
    value: function _applyArrayValues(property, from, to, percent) {
      var elementStyles = this.elementStyles; // value length, minimum from both of them

      var length = Math.min(from.length, to.length);
      var params = [];

      for (var i = 0; i < length; i++) {
        params[i] = [];
        params[i][0] = Object(_helpers___WEBPACK_IMPORTED_MODULE_5__["calculateValueFromPercent"])(from[i][0], to[i][0], percent, this.options.precision);
        params[i][1] = to[i][1];
      }

      elementStyles.apply(property, params);
    }
  }]);

  return Animator;
}();

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(Animator, "defaultOptions", {
  precision: 1
});



/***/ }),

/***/ "./src/animation/Keyframes.js":
/*!************************************!*\
  !*** ./src/animation/Keyframes.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Keyframes; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/ */ "./src/helpers/index.js");
/* harmony import */ var _error_throwError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../error/throwError */ "./src/error/throwError.js");
/* harmony import */ var _enum_errorEnum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../enum/errorEnum */ "./src/enum/errorEnum.js");









var Keyframes =
/*#__PURE__*/
function () {
  function Keyframes() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Keyframes);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Keyframes, null, [{
    key: "normalize",

    /**
     * Convert the keyframes to a standard form
     * @param  {Object|Array} keyframes
     */
    value: function normalize(keyframes, $element) {
      var _this = this;

      if (Array.isArray(keyframes)) {
        keyframes = this._arrayToObject(keyframes);
      } // check if the user has specified keyframes


      if (!Object.keys(keyframes).length) Object(_error_throwError__WEBPACK_IMPORTED_MODULE_6__["default"])(_enum_errorEnum__WEBPACK_IMPORTED_MODULE_7__["NO_KEYFRAMES"]); // loop through each keyframe values

      Object.keys(keyframes).forEach(function (keyframePercent) {
        // check if the percent is a number or a string
        if (!Object(_helpers___WEBPACK_IMPORTED_MODULE_5__["isNumeric"])(keyframePercent)) {
          Object(_error_throwError__WEBPACK_IMPORTED_MODULE_6__["default"])(_enum_errorEnum__WEBPACK_IMPORTED_MODULE_7__["INVALID_KEYFRAME_PERCENT"], keyframePercent);
        } // get the keyframe associated with the percent


        var keyframe = keyframes[keyframePercent];
        Object.keys(keyframe).forEach(function (keyframeProperty) {
          // returns something like { from: 10, to: 100, unit: 'px' }
          var normalizedValue = _this._normalizeKeyframeRule(keyframeProperty, keyframePercent, keyframes, $element); // rewrite the current property and keep the old ones to be normalized


          keyframes[keyframePercent] = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({}, keyframes[keyframePercent], _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, keyframeProperty, normalizedValue));
        });
      });
      return keyframes;
    }
    /**
     * @param  {string} property
     * @param  {number|string|object} value
     * @param  {number} keyframePercent
     */

  }, {
    key: "_normalizeKeyframeRule",
    value: function _normalizeKeyframeRule(property, keyframePercent, keyframes, $element) {
      var from, to, unit;
      var value = keyframes[keyframePercent][property]; // {height: value}, value must be defined

      if (!value && value !== 0) Object(_error_throwError__WEBPACK_IMPORTED_MODULE_6__["default"])(_enum_errorEnum__WEBPACK_IMPORTED_MODULE_7__["KEYFRAMES_VALUE_NOT_SPECIFIED"]); // if the provided value is a number, we need to set `from` and `unit`

      if (Object(_helpers___WEBPACK_IMPORTED_MODULE_5__["isNumber"])(value)) {
        var _this$_normalizeNumbe = this._normalizeNumberValue(property, keyframePercent, keyframes, $element);

        var _this$_normalizeNumbe2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_this$_normalizeNumbe, 3);

        from = _this$_normalizeNumbe2[0];
        to = _this$_normalizeNumbe2[1];
        unit = _this$_normalizeNumbe2[2];
      } else if (Object(_helpers___WEBPACK_IMPORTED_MODULE_5__["isString"])(value)) {
        // if value is a string
        var _this$_normalizeStrin = this._normalizeStringValue(property, keyframePercent, keyframes, $element);

        var _this$_normalizeStrin2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_this$_normalizeStrin, 3);

        from = _this$_normalizeStrin2[0];
        to = _this$_normalizeStrin2[1];
        unit = _this$_normalizeStrin2[2];
      } else if (Object(_helpers___WEBPACK_IMPORTED_MODULE_5__["isArray"])(value)) {
        var previousKeyframe = this._previousKeyframeProperty(property, keyframePercent, keyframes, $element);

        from = previousKeyframe;
        to = Object(_helpers___WEBPACK_IMPORTED_MODULE_5__["getValue"])(value);
      } else if (Object(_helpers___WEBPACK_IMPORTED_MODULE_5__["isObject"])(value)) {
        // if value is an object
        var _this$_normalizeObjec = this._normalizeObjectValue(property, keyframePercent, keyframes, $element);

        var _this$_normalizeObjec2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_this$_normalizeObjec, 3);

        from = _this$_normalizeObjec2[0];
        to = _this$_normalizeObjec2[1];
        unit = _this$_normalizeObjec2[2];
      } else {
        Object(_error_throwError__WEBPACK_IMPORTED_MODULE_6__["default"])(_enum_errorEnum__WEBPACK_IMPORTED_MODULE_7__["UNKNOWN_PROPERTY_VALUE"], property);
      }

      return {
        from: from,
        to: to,
        unit: unit
      };
    }
    /**
     * Convert an array of keyframes into an object, like:
     * keyframesArr = [{width: 100},{width: 200}]
     * to
     * keyframesArr = {0: {width: 100},100: {width: 200}};
     * @param  {array} keyframes
     */

  }, {
    key: "_arrayToObject",
    value: function _arrayToObject(keyframes) {
      // create a new object and set it's properties
      // convert arrays like: [{}, {}, {}] to {0:{}, 50: {}, 100: {}}
      return keyframes.reduce(function (carry, e, i) {
        carry[i ? 100 / (keyframes.length - i) : 0] = e;
        return carry;
      }, {});
    }
    /**
     * Gets the previous keyframe percent, if it's the first one returns falsy
     * ex:
     * ```js
     *  _getPreviousKeyframe({ 0: {a:'b'}, 50: {c:'d'}, 100: {e:'f'}, }, 50) -> 0
     * ```
     * @param  {object} keyframes
     * @param  {number|string} percent
     * @returns {number|boolean} false if the provided percent is the first one
     */

  }, {
    key: "_getPreviousKeyframe",
    value: function _getPreviousKeyframe(keyframes, percent) {
      var points = Object.keys(keyframes);
      return Object(_helpers___WEBPACK_IMPORTED_MODULE_5__["previousArrayValue"])(points, percent);
    }
    /** Get the previous keyframe property, if the property
     * is not present that it will return the default style taken from the dom
     *
     * @param  {string} property
     * @param  {number|string} currentPercent
     * @param  {object} keyframes
     * @returns {array} returns the unit and the value [ value, unit ]
     */

  }, {
    key: "_previousKeyframeProperty",
    value: function _previousKeyframeProperty(property, currentPercent, keyframes, $element) {
      // get previous keyframe percent
      var previousKeyframePercent = this._getPreviousKeyframe(keyframes, currentPercent);

      if (previousKeyframePercent === false) {
        // if there are no keyframes before the `currentPercent`, get the default value taken from the dom
        return Object(_helpers___WEBPACK_IMPORTED_MODULE_5__["getValue"])(Object(_helpers___WEBPACK_IMPORTED_MODULE_5__["getElementDefaultProperty"])($element, property));
      } // if there exists a previous keyframe
      // get keyframe value


      var propertyValue = keyframes[previousKeyframePercent][property]; // check if the value exists on the current keyframe

      if (propertyValue) {
        // if the value is an array return the array because it should also contain the unit, [value, unit]
        if (Object(_helpers___WEBPACK_IMPORTED_MODULE_5__["isArray"])(propertyValue.to)) {
          return propertyValue.to;
        } // return an array [from, unit]


        return [propertyValue.to, propertyValue.unit];
      } else {
        // get the previous keyframe property related to the previous keyframe percent, recursively
        return this._previousKeyframeProperty(property, previousKeyframePercent, keyframes, $element);
      }
    }
    /**
     * returns `[from, to, unit]` array for the current keyframe
     * @param  {string} property
     * @param  {number|string} value
     * @param  {number} currentKeyframePercent
     * @param  {object} keyframes
     * @param  {HTMLElement} $element
     */

  }, {
    key: "_normalizeNumberValue",
    value: function _normalizeNumberValue(property, currentKeyframePercent, keyframes, $element) {
      var value = keyframes[currentKeyframePercent][property];

      var _this$_previousKeyfra = this._previousKeyframeProperty(property, currentKeyframePercent, keyframes, $element),
          _this$_previousKeyfra2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_this$_previousKeyfra, 2),
          from = _this$_previousKeyfra2[0],
          unit = _this$_previousKeyfra2[1];

      return [from, value, unit]; // [from, to, unit]
    }
  }, {
    key: "_normalizeStringValue",
    value: function _normalizeStringValue(property, currentKeyframePercent, keyframes, $element) {
      var value = keyframes[currentKeyframePercent][property];

      var _getValue = Object(_helpers___WEBPACK_IMPORTED_MODULE_5__["getValue"])(value),
          _getValue2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_getValue, 2),
          to = _getValue2[0],
          unit = _getValue2[1];

      var _this$_previousKeyfra3 = this._previousKeyframeProperty(property, currentKeyframePercent, keyframes, $element),
          _this$_previousKeyfra4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_this$_previousKeyfra3, 2),
          previousFrom = _this$_previousKeyfra4[0],
          previousUnit = _this$_previousKeyfra4[1];

      if (previousUnit !== unit) {
        Object(_error_throwError__WEBPACK_IMPORTED_MODULE_6__["default"])(_enum_errorEnum__WEBPACK_IMPORTED_MODULE_7__["PREVIOUS_UNIT_DOES_NOT_MATCH_CURRENT"], previousUnit, unit);
      }

      return [previousFrom, to, unit];
    }
  }, {
    key: "_normalizeObjectValue",
    value: function _normalizeObjectValue(property, currentKeyframePercent, keyframes, $element) {
      var _keyframes$currentKey = keyframes[currentKeyframePercent][property],
          from = _keyframes$currentKey.from,
          to = _keyframes$currentKey.to,
          unit = _keyframes$currentKey.unit;

      var _this$_previousKeyfra5 = this._previousKeyframeProperty(property, currentKeyframePercent, keyframes, $element),
          _this$_previousKeyfra6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_this$_previousKeyfra5, 2),
          previousFrom = _this$_previousKeyfra6[0],
          previousUnit = _this$_previousKeyfra6[1]; // if `from` is not specified


      if (!from) {
        from = previousFrom;
      }

      if (!unit) {
        unit = previousUnit;
      } // throw error if `to` is not defined


      if (!to) {
        Object(_error_throwError__WEBPACK_IMPORTED_MODULE_6__["default"])(_enum_errorEnum__WEBPACK_IMPORTED_MODULE_7__["KEYFRAME_TO_IS_NOT_SET"]);
      }

      return [from, to, unit];
    }
  }]);

  return Keyframes;
}();



/***/ }),

/***/ "./src/animation/Styler.js":
/*!*********************************!*\
  !*** ./src/animation/Styler.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Styler; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/ */ "./src/helpers/index.js");
/* harmony import */ var _enum_functionValuesEnum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enum/functionValuesEnum */ "./src/enum/functionValuesEnum.js");
/* harmony import */ var css_func__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! css-func */ "./node_modules/css-func/index.js");
/* harmony import */ var css_func__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(css_func__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _enum_specialUnitEnum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enum/specialUnitEnum */ "./src/enum/specialUnitEnum.js");







var Styler =
/*#__PURE__*/
function () {
  /**
   * @param  {HTMLElement} $element
   */
  function Styler($element) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Styler);

    this.$element = $element;
  }
  /**
   * @param  {string} name Property name
   * @param  {number|string|array} value Property value
   * @param  {string} unit  Property unit
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Styler, [{
    key: "apply",
    value: function apply(name, value, unit) {
      if (Object(_helpers___WEBPACK_IMPORTED_MODULE_2__["isNumber"])(value)) this._applyNumber(name, value, unit);
      if (Object(_helpers___WEBPACK_IMPORTED_MODULE_2__["isString"])(value)) this._applyString(name, value);
      if (Object(_helpers___WEBPACK_IMPORTED_MODULE_2__["isArray"])(value)) this._applyArray(name, value);
    }
    /**
     * Gets element style property
     * @param  {string} property
     */

  }, {
    key: "_getStyle",
    value: function _getStyle(property) {
      return this.$element.style[property];
    }
    /**
     * Sets element style property
     * @param  {string} property
     * @param  {string|number} value
     */

  }, {
    key: "_setStyle",
    value: function _setStyle(property, value) {
      this.$element.style[property] = value;
    }
    /**
     * Remove all element styles
     */

  }, {
    key: "removeAll",
    value: function removeAll() {
      this.$element.style = '';
    }
    /**
     * Sets the property to the element style
     * @param  {string} name Property name
     * @param  {number} value Property value
     * @param  {string} unit Property unit
     */

  }, {
    key: "_applyNumber",
    value: function _applyNumber(name, value, unit) {
      if (unit && unit !== _enum_specialUnitEnum__WEBPACK_IMPORTED_MODULE_5__["NO_UNIT"]) value += unit;

      this._setStyle(name, value);
    }
    /**
     * Sets the property to the element style
     * @param  {string} name
     * @param  {string} value
     */

  }, {
    key: "_applyString",
    value: function _applyString(name, value) {
      this._applyNumber(name, value);
    }
    /**
     * @param  {string} name
     * @param  {array} value - [[10, 'px'], [20, 'px']] or ['10px', '30px']
     */

  }, {
    key: "_applyArray",
    value: function _applyArray(name, value) {
      var functionName = _enum_functionValuesEnum__WEBPACK_IMPORTED_MODULE_3__["default"][name].functionName; // if value is an array of arrays convert it into an arrat of arguments string

      value = value.map(function (e) {
        return Object(_helpers___WEBPACK_IMPORTED_MODULE_2__["isArray"])(e) ? e.join('') : e;
      });
      css_func__WEBPACK_IMPORTED_MODULE_4___default()(this.$element, functionName).add(name, value);
    }
  }]);

  return Styler;
}();



/***/ }),

/***/ "./src/enum/errorEnum.js":
/*!*******************************!*\
  !*** ./src/enum/errorEnum.js ***!
  \*******************************/
/*! exports provided: UNKNOWN_PROPERTY_VALUE, KEYFRAMES_VALUE_NOT_SPECIFIED, INVALID_KEYFRAME_PERCENT, NO_VALUE_SPECIFIED, PREVIOUS_UNIT_DOES_NOT_MATCH_CURRENT, KEYFRAME_TO_IS_NOT_SET, ANIMATION_NOT_INSTANCE_OF_ANIMATION, NO_KEYFRAMES, UNEXPECTED_ERROR, VALUE_IS_NOT_HTML_ELEMENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNKNOWN_PROPERTY_VALUE", function() { return UNKNOWN_PROPERTY_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEYFRAMES_VALUE_NOT_SPECIFIED", function() { return KEYFRAMES_VALUE_NOT_SPECIFIED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVALID_KEYFRAME_PERCENT", function() { return INVALID_KEYFRAME_PERCENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NO_VALUE_SPECIFIED", function() { return NO_VALUE_SPECIFIED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PREVIOUS_UNIT_DOES_NOT_MATCH_CURRENT", function() { return PREVIOUS_UNIT_DOES_NOT_MATCH_CURRENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEYFRAME_TO_IS_NOT_SET", function() { return KEYFRAME_TO_IS_NOT_SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMATION_NOT_INSTANCE_OF_ANIMATION", function() { return ANIMATION_NOT_INSTANCE_OF_ANIMATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NO_KEYFRAMES", function() { return NO_KEYFRAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNEXPECTED_ERROR", function() { return UNEXPECTED_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALUE_IS_NOT_HTML_ELEMENT", function() { return VALUE_IS_NOT_HTML_ELEMENT; });
// export const UNIT_DOES_NOT_MATCH_DEFAULT = (unit, defaultUnit) =>
//   `The specified unit ('${unit}') does not match the default unit ('${defaultUnit}')`;
var UNKNOWN_PROPERTY_VALUE = function UNKNOWN_PROPERTY_VALUE(property) {
  return "The value for the '".concat(property, "' property must be a number, string or object");
};
var KEYFRAMES_VALUE_NOT_SPECIFIED = function KEYFRAMES_VALUE_NOT_SPECIFIED() {
  return "Property value not specified";
};
var INVALID_KEYFRAME_PERCENT = function INVALID_KEYFRAME_PERCENT(percent) {
  return "Keyframe percent '".concat(percent, "' is not a valid number");
};
var NO_VALUE_SPECIFIED = function NO_VALUE_SPECIFIED() {
  return 'No value specified';
};
var PREVIOUS_UNIT_DOES_NOT_MATCH_CURRENT = function PREVIOUS_UNIT_DOES_NOT_MATCH_CURRENT(previousUnit, currentUnit) {
  return "Previous unit '".concat(previousUnit, "' does not match current unit '").concat(currentUnit, "'");
}; // export const DEFAULT_UNIT_DOES_NOT_MATCH_CURRENT = (defaultUnit, currentUnit) =>
//   `Previous unit '${defaultUnit}' does not match current unit '${currentUnit}'`;

var KEYFRAME_TO_IS_NOT_SET = "Keyframe property 'to' must be set";
var ANIMATION_NOT_INSTANCE_OF_ANIMATION = "The provided animation object is not an instance of Motus.Animation";
var NO_KEYFRAMES = function NO_KEYFRAMES() {
  return "No keyframes specified";
};
var UNEXPECTED_ERROR = function UNEXPECTED_ERROR() {
  return "Unexpected error";
};
var VALUE_IS_NOT_HTML_ELEMENT = function VALUE_IS_NOT_HTML_ELEMENT(val) {
  return "".concat(val, " is not a valid html element");
};

/***/ }),

/***/ "./src/enum/functionValuesEnum.js":
/*!****************************************!*\
  !*** ./src/enum/functionValuesEnum.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);

var transforms = {
  matrix: {
    defaultValue: [0, 0, 0, 0, 0, 0]
  },
  matrix3d: {
    defaultValue: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  translate: {
    defaultValue: ['0px', '0px']
  },
  translate3d: {
    defaultValue: ['0px', '0px', '0px']
  },
  translateX: {
    defaultValue: '0px'
  },
  translateY: {
    defaultValue: '0px'
  },
  translateZ: {
    defaultValue: '0px'
  },
  scale: {
    defaultValue: 1
  },
  scale3d: {
    defaultValue: [1, 1, 1]
  },
  scaleX: {
    defaultValue: 1
  },
  scaleY: {
    defaultValue: 1
  },
  scaleZ: {
    defaultValue: 1
  },
  rotate: {
    defaultValue: ['0deg']
  },
  rotate3d: {
    defaultValue: [0, '0deg', '0deg', '0deg']
  },
  rotateX: {
    defaultValue: '0deg'
  },
  rotateY: {
    defaultValue: '0deg'
  },
  rotateZ: {
    defaultValue: '0deg'
  },
  skew: {
    defaultValue: 0
  },
  skewX: {
    defaultValue: 0
  },
  skewY: {
    defaultValue: 0
  },
  perspective: {
    defaultValue: 0
  }
}; // add function name property to transforms object, will be useful later to know which function is the property from

Object.keys(transforms).forEach(function (prop) {
  return transforms[prop] = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, transforms[prop], {
    functionName: 'transform'
  });
});
/* harmony default export */ __webpack_exports__["default"] = (_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, transforms));

/***/ }),

/***/ "./src/enum/specialUnitEnum.js":
/*!*************************************!*\
  !*** ./src/enum/specialUnitEnum.js ***!
  \*************************************/
/*! exports provided: NO_UNIT, COLOR_UNIT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NO_UNIT", function() { return NO_UNIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_UNIT", function() { return COLOR_UNIT; });
var NO_UNIT = 'NO_UNIT';
var COLOR_UNIT = 'COLOR_UNIT';

/***/ }),

/***/ "./src/error/throwError.js":
/*!*********************************!*\
  !*** ./src/error/throwError.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (errorType) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  throw new Error(errorType.apply(void 0, args));
});

/***/ }),

/***/ "./src/helpers/dom.js":
/*!****************************!*\
  !*** ./src/helpers/dom.js ***!
  \****************************/
/*! exports provided: getElementDimensions, getElementScroll, getValue, getElementDefaultProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementDimensions", function() { return getElementDimensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementScroll", function() { return getElementScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValue", function() { return getValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementDefaultProperty", function() { return getElementDefaultProperty; });
/* harmony import */ var color_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! color-string */ "./node_modules/color-string/index.js");
/* harmony import */ var color_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(color_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _enum_specialUnitEnum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enum/specialUnitEnum */ "./src/enum/specialUnitEnum.js");
/* harmony import */ var _enum_errorEnum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enum/errorEnum */ "./src/enum/errorEnum.js");
/* harmony import */ var _error_throwError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../error/throwError */ "./src/error/throwError.js");
/* harmony import */ var _enum_functionValuesEnum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enum/functionValuesEnum */ "./src/enum/functionValuesEnum.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ */ "./src/helpers/index.js");






var getElementDimensions = function getElementDimensions($element) {
  if ($element === window) {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  return {
    width: $element.clientWidth,
    height: $element.clientHeight
  };
};
var getElementScroll = function getElementScroll($element) {
  var horizontal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  // window uses scrollX, scrollY instead of scrollLeft, scrollTop
  if ($element === window) {
    return horizontal ? $element.scrollX : $element.scrollY;
  }

  return horizontal ? $element.scrollLeft : $element.scrollTop;
};
var getValue = function getValue(value) {
  /// call getValue recursively for each item in the array
  if (Object(___WEBPACK_IMPORTED_MODULE_5__["isArray"])(value)) {
    return value.map(getValue);
  }

  value = String(value); // check if it is a color

  if (color_string__WEBPACK_IMPORTED_MODULE_0___default.a.get(value)) {
    // returns a rgb array that needs to be further converted into rgb string
    var rgbArr = color_string__WEBPACK_IMPORTED_MODULE_0___default.a.get.rgb(value); // convert array to rgb/rgba

    var color = color_string__WEBPACK_IMPORTED_MODULE_0___default.a.to.rgb(rgbArr);
    return [color, _enum_specialUnitEnum__WEBPACK_IMPORTED_MODULE_1__["COLOR_UNIT"]];
  }

  var unitReg = /([0-9.]+)(cm|mm|in|px|pt|pc|em|ex|ch|%|rem|vw|vh|vmin|vmax|deg)*/;
  var match = value.match(unitReg);

  if (match && match.length === 3) {
    return [parseFloat(match[1]), match[2] || _enum_specialUnitEnum__WEBPACK_IMPORTED_MODULE_1__["NO_UNIT"]];
  }

  Object(_error_throwError__WEBPACK_IMPORTED_MODULE_3__["default"])(_enum_errorEnum__WEBPACK_IMPORTED_MODULE_2__["NO_VALUE_SPECIFIED"]);
};
var getElementDefaultProperty = function getElementDefaultProperty($element, property) {
  var _window = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;

  if (_enum_functionValuesEnum__WEBPACK_IMPORTED_MODULE_4__["default"][property]) {
    return _enum_functionValuesEnum__WEBPACK_IMPORTED_MODULE_4__["default"][property].defaultValue;
  }

  return _window.getComputedStyle($element, null).getPropertyValue(Object(___WEBPACK_IMPORTED_MODULE_5__["camelToKebabCase"])(property));
};

/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/*! exports provided: previousArrayValue, calculatePercent, floorWithPrecision, calculateValueFromPercent, getElementDimensions, getElementScroll, getValue, getElementDefaultProperty, createFunctionString, camelToKebabCase, isNumber, isString, isObject, isArray, isNumeric, isHtmlElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.js */ "./src/helpers/math.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "previousArrayValue", function() { return _math_js__WEBPACK_IMPORTED_MODULE_0__["previousArrayValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calculatePercent", function() { return _math_js__WEBPACK_IMPORTED_MODULE_0__["calculatePercent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "floorWithPrecision", function() { return _math_js__WEBPACK_IMPORTED_MODULE_0__["floorWithPrecision"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calculateValueFromPercent", function() { return _math_js__WEBPACK_IMPORTED_MODULE_0__["calculateValueFromPercent"]; });

/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/helpers/dom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getElementDimensions", function() { return _dom_js__WEBPACK_IMPORTED_MODULE_1__["getElementDimensions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getElementScroll", function() { return _dom_js__WEBPACK_IMPORTED_MODULE_1__["getElementScroll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getValue", function() { return _dom_js__WEBPACK_IMPORTED_MODULE_1__["getValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getElementDefaultProperty", function() { return _dom_js__WEBPACK_IMPORTED_MODULE_1__["getElementDefaultProperty"]; });

/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./string.js */ "./src/helpers/string.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFunctionString", function() { return _string_js__WEBPACK_IMPORTED_MODULE_2__["createFunctionString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "camelToKebabCase", function() { return _string_js__WEBPACK_IMPORTED_MODULE_2__["camelToKebabCase"]; });

/* harmony import */ var _type_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type.js */ "./src/helpers/type.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _type_js__WEBPACK_IMPORTED_MODULE_3__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _type_js__WEBPACK_IMPORTED_MODULE_3__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _type_js__WEBPACK_IMPORTED_MODULE_3__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _type_js__WEBPACK_IMPORTED_MODULE_3__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumeric", function() { return _type_js__WEBPACK_IMPORTED_MODULE_3__["isNumeric"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isHtmlElement", function() { return _type_js__WEBPACK_IMPORTED_MODULE_3__["isHtmlElement"]; });


















/***/ }),

/***/ "./src/helpers/math.js":
/*!*****************************!*\
  !*** ./src/helpers/math.js ***!
  \*****************************/
/*! exports provided: previousArrayValue, calculatePercent, floorWithPrecision, calculateValueFromPercent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "previousArrayValue", function() { return previousArrayValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculatePercent", function() { return calculatePercent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floorWithPrecision", function() { return floorWithPrecision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateValueFromPercent", function() { return calculateValueFromPercent; });
/**
 * Returns the previous closest number found aftar the `value`
 * ``` array = [1,5,3,7,6] and value = 3 => returns 1 ```
 * @param  {array} array
 * @param  {number|string} value Must be a number or an array that represents a number
 */
var previousArrayValue = function previousArrayValue(array, value) {
  array = array.map(function (e) {
    return parseInt(e);
  });
  var arrValue = array[array.indexOf(parseInt(value)) - 1];
  if (arrValue || arrValue === 0) return arrValue;
  return false;
};
/**
 * @param  {number} min
 * @param  {number} max
 * @param  {number} current
 */

var calculatePercent = function calculatePercent(min, max, current) {
  current -= min;
  max -= min;
  return current / max * 100;
};
/**
 * Rounds a number with a set precision
 * @param  {number} number
 * @param  {number} precision
 * @return {float}
 */

var floorWithPrecision = function floorWithPrecision(number, precision) {
  return !precision ? number : Math.floor(number * Math.pow(10, precision)) / Math.pow(10, precision);
};
/**
 * @param  {number} min
 * @param  {number} max
 * @param  {number} percent
 * @param  {number} precision
 * @return {float}
 */

var calculateValueFromPercent = function calculateValueFromPercent(min, max, percent, precision) {
  var value = min + (max - min) * percent / 100;

  if (precision) {
    return floorWithPrecision(value, precision);
  }

  return value;
};

/***/ }),

/***/ "./src/helpers/string.js":
/*!*******************************!*\
  !*** ./src/helpers/string.js ***!
  \*******************************/
/*! exports provided: createFunctionString, camelToKebabCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFunctionString", function() { return createFunctionString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelToKebabCase", function() { return camelToKebabCase; });
/**
 * @param  {string} name
 * @param  {array} parameters
 */
var createFunctionString = function createFunctionString(name, parameters) {
  var length = parameters.length;
  var value = '';

  for (var i = 0; i < length; i++) {
    value += parameters[i].join('');
    if (i < length - 1) value += ', ';
  }

  return "".concat(name, "(").concat(value, ")");
};
var camelToKebabCase = function camelToKebabCase(value) {
  return value.replace(/([A-Z])/g, function ($1) {
    return '-' + $1.toLowerCase();
  });
};

/***/ }),

/***/ "./src/helpers/type.js":
/*!*****************************!*\
  !*** ./src/helpers/type.js ***!
  \*****************************/
/*! exports provided: isNumber, isString, isObject, isArray, isNumeric, isHtmlElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumeric", function() { return isNumeric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHtmlElement", function() { return isHtmlElement; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);

var isNumber = function isNumber(val) {
  return typeof val === 'number';
};
var isString = function isString(val) {
  return typeof val === 'string';
};
var isObject = function isObject(val) {
  return _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(val) === 'object';
};
var isArray = function isArray(val) {
  return Array.isArray(val);
};
var isNumeric = function isNumeric(val) {
  return (isNumber(val) || isString(val)) && !isNaN(val);
};
var isHtmlElement = function isHtmlElement(val) {
  return val instanceof window.HTMLElement;
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Motus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Motus */ "./src/Motus.js");


if (typeof window !== 'undefined') {
  window.Motus = _Motus__WEBPACK_IMPORTED_MODULE_0__["default"];
}

/* harmony default export */ __webpack_exports__["default"] = (_Motus__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ })

/******/ });
});
//# sourceMappingURL=motus.web.js.map