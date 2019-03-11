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

export const camelToKebabCase = value =>
  value.replace(/([A-Z])/g, $1 => '-' + $1.toLowerCase());