import {
  isNumber,
  isString,
  isObject,
  isArray,
  isNumeric,
  getElementDefaultProperty,
  getValue,
  previousArrayValue,
} from '../helpers/index';

import throwError from '../error/throwError';
import {
  UNKNOWN_PROPERTY_VALUE,
  KEYFRAMES_VALUE_NOT_SPECIFIED,
  INVALID_KEYFRAME_PERCENT,
  PREVIOUS_UNIT_DOES_NOT_MATCH_CURRENT,
  KEYFRAME_TO_IS_NOT_SET,
  NO_KEYFRAMES,
} from '../enum/errorEnum';

export default class Keyframes {
  /**
   * Convert the keyframes to a standard form
   * @param  {Object|Array} keyframes
   */
  static normalize (keyframes, $element) {
    if (Array.isArray(keyframes)) {
      keyframes = this._arrayToObject(keyframes);
    }
    // check if the user has specified keyframes
    if (!Object.keys(keyframes).length) throwError(NO_KEYFRAMES);

    // loop through each keyframe values
    Object.keys(keyframes).forEach(keyframePercent => {
      // check if the percent is a number or a string
      if (!isNumeric(keyframePercent)) {
        throwError(INVALID_KEYFRAME_PERCENT, keyframePercent);
      }

      // get the keyframe associated with the percent
      const keyframe = keyframes[keyframePercent];

      Object.keys(keyframe).forEach(keyframeProperty => {
        // returns something like { from: 10, to: 100, unit: 'px' }

        const normalizedValue = this._normalizeKeyframeRule(
          keyframeProperty,
          keyframePercent,
          keyframes,
          $element
        );
        // rewrite the current property and keep the old ones to be normalized
        keyframes[keyframePercent] = {
          ...keyframes[keyframePercent],
          [keyframeProperty]: normalizedValue,
        };
      });
    });

    return keyframes;
  }

  /**
   * @param  {string} property
   * @param  {number|string|object} value
   * @param  {number} keyframePercent
   */
  static _normalizeKeyframeRule (
    property,
    keyframePercent,
    keyframes,
    $element
  ) {
    let from, to, unit;
    const value = keyframes[keyframePercent][property];
    // {height: value}, value must be defined
    if (!value && value !== 0) throwError(KEYFRAMES_VALUE_NOT_SPECIFIED);
    // if the provided value is a number, we need to set `from` and `unit`
    if (isNumber(value)) {
      [from, to, unit] = this._normalizeNumberValue(
        property,
        keyframePercent,
        keyframes,
        $element
      );
    } else if (isString(value)) {
      // if value is a string
      [from, to, unit] = this._normalizeStringValue(
        property,
        keyframePercent,
        keyframes,
        $element
      );
    } else if (isArray(value)) {
      const previousKeyframe = this._previousKeyframeProperty(
        property,
        keyframePercent,
        keyframes,
        $element
      );
      from = previousKeyframe;

      to = getValue(value);
    } else if (isObject(value)) {
      // if value is an object
      [from, to, unit] = this._normalizeObjectValue(
        property,
        keyframePercent,
        keyframes,
        $element
      );
    } else {
      throwError(UNKNOWN_PROPERTY_VALUE, property);
    }

    return {
      from,
      to,
      unit,
    };
  }
  /**
   * Convert an array of keyframes into an object, like:
   * keyframesArr = [{width: 100},{width: 200}]
   * to
   * keyframesArr = {0: {width: 100},100: {width: 200}};
   * @param  {array} keyframes
   */
  static _arrayToObject (keyframes) {
    // create a new object and set it's properties
    // convert arrays like: [{}, {}, {}] to {0:{}, 50: {}, 100: {}}
    return keyframes.reduce((carry, e, i) => {
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
  static _getPreviousKeyframe (keyframes, percent) {
    const points = Object.keys(keyframes);
    return previousArrayValue(points, percent);
  }
  /** Get the previous keyframe property, if the property
   * is not present that it will return the default style taken from the dom
   *
   * @param  {string} property
   * @param  {number|string} currentPercent
   * @param  {object} keyframes
   * @returns {array} returns the unit and the value [ value, unit ]
   */
  static _previousKeyframeProperty (
    property,
    currentPercent,
    keyframes,
    $element
  ) {
    // get previous keyframe percent
    const previousKeyframePercent = this._getPreviousKeyframe(
      keyframes,
      currentPercent
    );

    if (previousKeyframePercent === false) {
      // if there are no keyframes before the `currentPercent`, get the default value taken from the dom
      return getValue(getElementDefaultProperty($element, property));
    }

    // if there exists a previous keyframe
    // get keyframe value
    const propertyValue = keyframes[previousKeyframePercent][property];
    // check if the value exists on the current keyframe
    if (propertyValue) {
      // if the value is an array return the array because it should also contain the unit, [value, unit]
      if (isArray(propertyValue.to)) {
        return propertyValue.to;
      }
      // return an array [from, unit]
      return [propertyValue.to, propertyValue.unit];
    } else {
      // get the previous keyframe property related to the previous keyframe percent, recursively
      return this._previousKeyframeProperty(
        property,
        previousKeyframePercent,
        keyframes,
        $element
      );
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
  static _normalizeNumberValue (
    property,
    currentKeyframePercent,
    keyframes,
    $element
  ) {
    const value = keyframes[currentKeyframePercent][property];
    let [from, unit] = this._previousKeyframeProperty(
      property,
      currentKeyframePercent,
      keyframes,
      $element
    );

    return [from, value, unit]; // [from, to, unit]
  }

  static _normalizeStringValue (
    property,
    currentKeyframePercent,
    keyframes,
    $element
  ) {
    const value = keyframes[currentKeyframePercent][property];
    let [to, unit] = getValue(value);

    const [previousFrom, previousUnit] = this._previousKeyframeProperty(
      property,
      currentKeyframePercent,
      keyframes,
      $element
    );
    if (previousUnit !== unit) {
      throwError(PREVIOUS_UNIT_DOES_NOT_MATCH_CURRENT, previousUnit, unit);
    }

    return [previousFrom, to, unit];
  }
  static _normalizeObjectValue (
    property,
    currentKeyframePercent,
    keyframes,
    $element
  ) {
    let { from, to, unit } = keyframes[currentKeyframePercent][property];

    const [previousFrom, previousUnit] = this._previousKeyframeProperty(
      property,
      currentKeyframePercent,
      keyframes,
      $element
    );

    // if `from` is not specified
    if (!from) {
      from = previousFrom;
    }
    if (!unit) {
      unit = previousUnit;
    }
    // throw error if `to` is not defined
    if (!to) {
      throwError(KEYFRAME_TO_IS_NOT_SET);
    }
    return [from, to, unit];
  }
}
