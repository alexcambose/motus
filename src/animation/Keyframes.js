import {
  isNumber,
  getElementDefaultProperty,
  getValue,
  isString,
  isObject,
  isArray,
} from '../utils';
import throwError from '../error/throwError';
import {
  UNIT_DOES_NOT_MATCH_DEFAULT,
  UNKNOWN_PROPERTY_VALUE,
  KEYFRAMES_VALUE_NOT_SPECIFIED,
} from '../error/errorEnum';

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
      const keyframe = keyframes[keyframePercent];

      return Object.keys(keyframe).map(keyframeProperty =>
        this._normalizeKeyframeRule(
          keyframeProperty,
          keyframe[keyframeProperty],
          keyframePercent,
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
  static _normalizeKeyframeRule (property, value, keyframePercent, $element) {
    let from, to, unit;
    // {height: value}, value must be defined
    if (!value) throwError(KEYFRAMES_VALUE_NOT_SPECIFIED);

    // if the provided value is a number, we need to set `from` and `unit`
    if (isNumber(value)) {
      to = value;
      unit = 'px';
      [from] = getValue(getElementDefaultProperty($element, property));
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
}
