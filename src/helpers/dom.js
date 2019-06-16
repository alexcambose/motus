import colorString from 'color-string';
import { COLOR_UNIT, NO_UNIT } from '../enum/specialUnitEnum';
import { NO_VALUE_SPECIFIED } from '../enum/errorEnum';
import throwError from '../helpers/throwError.js';
import transformValuesEnums from '../enum/functionValuesEnum';
import { camelToKebabCase, isArray } from './';

export const getElementDimensions = $el => {
  if ($el === window) {
    return { width: window.innerWidth, height: window.innerHeight };
  }
  return { width: $el.clientWidth, height: $el.clientHeight };
};

export const getElementScroll = ($el, horizontal = false) => {
  // window uses scrollX, scrollY instead of scrollLeft, scrollTop
  if ($el === window) {
    return horizontal
      ? $el.scrollX
      : $el.scrollY;
  }
  return horizontal
    ? $el.scrollLeft
    : $el.scrollTop;
};

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
  const unitReg = /([-0-9.]+)(cm|mm|in|px|pt|pc|em|ex|ch|%|rem|vw|vh|vmin|vmax|deg)*/;

  const match = value.match(unitReg);
  if (match && match.length === 3) {
    const value = parseFloat(match[1]);
    const unit = match[2] || NO_UNIT;
    return [value, unit];
  }
  throwError(NO_VALUE_SPECIFIED);
};

export const getElementDefaultProperty = (
  $el,
  property,
  _window = window
) => {
  if (transformValuesEnums[property]) {
    return transformValuesEnums[property].defaultValue;
  }
  return _window
    .getComputedStyle($el, null)
    .getPropertyValue(camelToKebabCase(property));
};
export const getOffset = (element, horizontal = false) => {
  if (!element) return 0;
  if (element.offsetLeft === undefined) return getOffset(element.parentElement, horizontal);
  return getOffset(element.offsetParent, horizontal) + (horizontal ? element.offsetLeft : element.offsetTop);
};
