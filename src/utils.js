import colorString from 'color-string';
import { NO_UNIT, COLOR_UNIT } from './enum/specialUnitEnum';
import { NO_VALUE_SPECIFIED } from './enum/errorEnum';
import throwError from './error/throwError';
import transformValuesEnums from './enum/functionValuesEnum';
export const camelToKebabCase = value =>
  value.replace(/([A-Z])/g, $1 => '-' + $1.toLowerCase());

export const getValue = value => {
  /// call getValue recursively for each item in the array
  if (isArray(value)) {
    return value.map(getValue);
  }
  value = String(value);
  // check if it is a color
  if (colorString.get(value)) {
    // returns a rgb array that needs to be further converted into rgb string
    const rgbArr = colorString.get.rgb(value);
    // convert array to rgb/rgba
    const color = colorString.to.rgb(rgbArr);
    return [color, COLOR_UNIT];
  }
  const unitReg = /([0-9.]+)(cm|mm|in|px|pt|pc|em|ex|ch|%|rem|vw|vh|vmin|vmax|deg)*/;

  const match = value.match(unitReg);
  if (match && match.length === 3) {
    return [parseFloat(match[1]), match[2] || NO_UNIT];
  }
  throwError(NO_VALUE_SPECIFIED);
};

export const getElementDefaultProperty = (
  $element,
  property,
  _window = window
) => {
  if (transformValuesEnums[property]) {
    return transformValuesEnums[property].defaultValue;
  }
  return _window
    .getComputedStyle($element, null)
    .getPropertyValue(camelToKebabCase(property));
};

export const isNumber = val => typeof val === 'number';
export const isString = val => typeof val === 'string';
export const isObject = val => typeof val === 'object';
export const isArray = val => Array.isArray(val);
export const isNumeric = val => (isNumber(val) || isString(val)) && !isNaN(val);
export const isHtmlElement = val => val instanceof window.HTMLElement;
/**
 * Returns the previous closest number found aftar the `value`
 * ``` array = [1,5,3,7,6] and value = 3 => returns 1 ```
 * @param  {array} array
 * @param  {number|string} value Must be a number or an array that represents a number
 */
export const previousArrayValue = (array, value) => {
  array = array.map(e => parseInt(e));
  const arrValue = array[array.indexOf(parseInt(value)) - 1];
  if (arrValue || arrValue === 0) return arrValue;
  return false;
};

/**
 * @param  {number} min
 * @param  {number} max
 * @param  {number} current
 */
export const calculatePercent = (min, max, current) => {
  current -= min;
  max -= min;
  return (current / max) * 100;
};

/**
 * Rounds a number with a set precision
 * @param  {number} number
 * @param  {number} precision
 * @return {float}
 */
export const floorWithPrecision = (number, precision) => !precision ? number : Math.floor(number * Math.pow(10, precision)) / Math.pow(10, precision);

/**
 * @param  {number} min
 * @param  {number} max
 * @param  {number} percent
 * @param  {number} precision
 * @return {float}
 */
export const calculateValueFromPercent = (min, max, percent, precision) => {
  const value = min + ((max - min) * percent) / 100;
  if (precision) {
    return floorWithPrecision(value, precision);
  }
  return value;
};

/**
 * @param  {string} name
 * @param  {array} parameters
 */
export const createFunctionString = (name, parameters) => {
  const length = parameters.length;
  let value = '';
  for (let i = 0; i < length; i++) {
    value += parameters[i].join('');
    if (i < length - 1) value += ', ';
  }
  return `${name}(${value})`;
};

export const getElementScroll = ($element, horizontal = false) => {
  // window uses scrollX, scrollY instead of scrollLeft, scrollTop
  if ($element === window) {
    return horizontal
      ? $element.scrollX
      : $element.scrollY;
  }
  return horizontal
    ? $element.scrollLeft
    : $element.scrollTop;
};
