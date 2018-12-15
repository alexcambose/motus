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
  element,
  property,
  _window = window
) =>
  _window
    .getComputedStyle(element, null)
    .getPropertyValue(camelToKebabCase(property));
