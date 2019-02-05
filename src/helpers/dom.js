import colorString from 'color-string';
import { NO_UNIT, COLOR_UNIT } from '../enum/specialUnitEnum';
import { NO_VALUE_SPECIFIED } from '../enum/errorEnum';
import throwError from '../error/throwError';
import transformValuesEnums from '../enum/functionValuesEnum';
import { isArray, camelToKebabCase } from './';

export const getElementDimensions = $element => {
  if ($element === window) {
    return { width: window.innerWidth, height: window.innerHeight };
  }
  return { width: $element.clientWidth, height: $element.clientHeight };
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
