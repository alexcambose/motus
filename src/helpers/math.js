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
 * Generates a random string
 */
export const uniqid = () => Math.random().toString(36).substr(2, 9);
