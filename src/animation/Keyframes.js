import {
  isNumber,
  getElementDefaultProperty,
  getValue,
  isString,
  isObject,
  isArray,
  previousArrayValue,
  isNumeric,
} from '../utils';
import throwError from '../error/throwError';
import {
  UNIT_DOES_NOT_MATCH_DEFAULT,
  UNKNOWN_PROPERTY_VALUE,
  KEYFRAMES_VALUE_NOT_SPECIFIED,
  INVALID_KEYFRAME_PERCENT,
  PREVIOUS_UNIT_DOES_NOT_MATCH_CURRENT,
  DEFAULT_UNIT_DOES_NOT_MATCH_CURRENT,
  KEYFRAME_TO_IS_NOT_SET,
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
    // convert each keyframe values
    keyframes = Object.keys(keyframes).map(keyframePercent => {
      // check if the percent is a number or a string
      if (!isNumeric(keyframePercent)) {
        throwError(INVALID_KEYFRAME_PERCENT, keyframePercent);
      }

      // get the keyframe associated with the percent
      const keyframe = keyframes[keyframePercent];

      return Object.keys(keyframe).map(keyframeProperty =>
        this._normalizeKeyframeRule(
          keyframeProperty,
          keyframePercent,
          keyframes,
          $element
        )
      );
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
    if (!value) throwError(KEYFRAMES_VALUE_NOT_SPECIFIED);

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
      [to, unit] = getValue(value);
      const [defaultFrom, defaultUnit] = getValue(
        getElementDefaultProperty($element, property)
      );
      if (defaultUnit !== unit) {
        throwError(UNIT_DOES_NOT_MATCH_DEFAULT, unit, defaultUnit);
      }
      from = defaultFrom;
    } else if (isObject(value) && !isArray(value)) {
      ({ from, to, unit } = value);
      console.log(value);
    } else {
      throwError(UNKNOWN_PROPERTY_VALUE, property);
    }
    // console.log(property, value, keyframePercent, '- ');

    return {
      [property]: {
        from,
        to,
        unit,
      },
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
    return keyframes[previousArrayValue(points, percent)];
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
    let from, unit;
    const value = keyframes[currentKeyframePercent][property];

    // get previous keyframe
    const previousKeyframe = this._getPreviousKeyframe(
      keyframes,
      currentKeyframePercent
    );
    // if there is a previous keyframe inherit `unit` and get `from`
    if (previousKeyframe) {
      // get previous `to`(actual `from`) and unit
      unit = previousKeyframe[property].unit;
      from = previousKeyframe[property].to;
      // automatically assigned
    } else {
      [from, unit] = getValue(getElementDefaultProperty($element, property));
    }
    return [from, value, unit]; // [from, to, unit]
  }

  static _normalizeStringValue (
    property,
    currentKeyframePercent,
    keyframes,
    $element
  ) {
    let from, to, unit;

    const value = keyframes[currentKeyframePercent][property];
    [to, unit] = getValue(value);

    // get previous keyframe
    const previousKeyframe = this._getPreviousKeyframe(
      keyframes,
      currentKeyframePercent
    );

    // if there is a previous keyframe inherit `unit` and get `from`
    if (previousKeyframe) {
      // get previous `to`(actual `from`) and unit
      const previousUnit = previousKeyframe[property].unit;
      const previousTo = previousKeyframe[property].to;
      // previousUnit and unit must be equal
      if (previousUnit !== unit) {
        throwError(PREVIOUS_UNIT_DOES_NOT_MATCH_CURRENT, previousUnit, unit);
      }
      from = previousTo;
      // unit is the same as the previous one so no need for assignment
    } else {
      const [defaultFrom, defaultUnit] = getValue(
        getElementDefaultProperty($element, property)
      );
      if (defaultUnit !== unit) {
        throwError(DEFAULT_UNIT_DOES_NOT_MATCH_CURRENT, defaultUnit, unit);
      }
      // unit is the same as the default one so no need for assignment
      from = defaultFrom;
    }
    return [from, to, unit];
  }
  static _normalizeObjectValue (
    property,
    currentKeyframePercent,
    keyframes,
    $element
  ) {
    let { from, to, unit } = keyframes[currentKeyframePercent][property];
    // get previous keyframe
    const previousKeyframe = this._getPreviousKeyframe(
      keyframes,
      currentKeyframePercent
    );

    // if `from` is not specified
    if (!from) {
      // if `from` is not specified and there is a previous keyframe
      if (previousKeyframe) {
        // get previous `to`(actual `from`) and unit
        const previousUnit = previousKeyframe[property].unit;
        const previousTo = previousKeyframe[property].to;
        // if `unit` is set, previousUnit and unit must be equal
        if (unit && previousUnit !== unit) {
          throwError(PREVIOUS_UNIT_DOES_NOT_MATCH_CURRENT, previousUnit, unit);
        }
        // set `from` with the provious keyframe `to`
        from = previousTo;
      } else {
        // if there is no previous keyframe
        const [defaultFrom, defaultUnit] = getValue(
          getElementDefaultProperty($element, property)
        );
        if (defaultUnit !== unit) {
          throwError(DEFAULT_UNIT_DOES_NOT_MATCH_CURRENT, defaultUnit, unit);
        }
        from = defaultFrom;
      }
    }
    if (!unit) {
      // there is a keyframe
      if (previousKeyframe) {
        // update with the previous unit
        ({ unit } = previousKeyframe[property]);
      } else {
        // if there is no previous keyframe
        [, unit] = getValue(getElementDefaultProperty($element, property));
      }
    }
    // throw error if `to` is not defined
    if (!to) {
      throwError(KEYFRAME_TO_IS_NOT_SET);
    }
    return [from, to, unit];
  }
}
