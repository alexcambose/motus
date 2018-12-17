export const camelToKebabCase = value =>
  value.replace(/([A-Z])/g, $1 => '-' + $1.toLowerCase());
export const getValue = value => {
  const unitReg = /([0-9]+)(cm|mm|in|px|pt|pc|em|ex|ch|%|rem|vw|vh|vmin|vmax|deg)*/;
  if (!value) throw new Error('No value specified');

  if (typeof value === 'number') {
    return [value, 'px'];
  }
  const match = value.match(unitReg);
  if (match.length === 3) {
    return [parseInt(match[1]), match[2]];
  }
  return [];
};
export const getElementDefaultProperty = (
  $element,
  property,
  _window = window
) =>
  _window
    .getComputedStyle($element, null)
    .getPropertyValue(camelToKebabCase(property));

export const isNumber = val => typeof val === 'number';
export const isString = val => typeof val === 'string';
export const isObject = val => typeof val === 'object';
export const isArray = val => Array.isArray(val);
/**
 * Returns the previous closest number found aftar the `value`
 * ``` array = [1,5,3,7,6] and value = 3 => returns 1 ```
 * @param  {array} array
 * @param  {number|string} value Must be a number or an array that represents a number
 */
export const previousArrayValue = (array, value) => {
  array = array.map(e => parseInt(e));
  return array[array.indexOf(parseInt(value)) - 1];
};
