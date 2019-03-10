export const isNumber = val => typeof val === 'number';
export const isString = val => typeof val === 'string';
export const isObject = val => typeof val === 'object';
export const isArray = val => Array.isArray(val);
export const isNumeric = val => (isNumber(val) || isString(val)) && !isNaN(val);
export const isHtmlElement = val => val instanceof Element;
