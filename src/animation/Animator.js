import { calculatePercent, calculateValueFromPercent, isArray, isNumber, } from '../helpers/';
import Styler from './Styler';
import c2c from 'color-to-color';
import { COLOR_UNIT, NO_UNIT } from '../enum/specialUnitEnum';
import throwError from '../helpers/throwError.js';
import { UNEXPECTED_ERROR } from '../enum/errorEnum';

/** Each animation has an animator class. Handles getting the current keyframe that needs to be applied and also the percent of current keyframe. */
export default class Animator {
  static defaultOptions = {
    precision: 1,
  };

  constructor (keyframes, $el, options = {}) { // todo the options object is not currently used
    this.options = { ...Animator.defaultOptions, ...options };
    this.keyframes = keyframes;

    this.elementStyles = new Styler($el);
  }

  /**
   * Returns a pair of two keyframe percentages, [previous, next]
   * @param  {number} percent
   */
  _getCurrentKeyframesPercent (percent) {
    const { keyframes } = this;
    // get percentages
    const percentages = Object.keys(keyframes);
    // loop through all of percentages and return the percent that is after the current scroll percent
    for (let i = 0; i < percentages.length; i++) {
      // if the current percent matches exactly a frame
      if (percent === parseInt(percentages[i])) {
        // return the previous if exists and the current one
        return [percentages[i - 1] || '0', percentages[i]];
      }
      // search two percentages, one smaller and one bigger that the current scroll percent
      if (percent > percentages[i] && percent < percentages[i + 1]) {
        return [percentages[i], percentages[i + 1]];
      }
    }
    // if the first keyframe percent is bigger that the current scroll percent
    if (percentages[0] > percent) return ['0', percentages[0]];
    // if the last keyframe is smaller that the current scroll percent
    if (percentages[percentages.length - 1] < percent) return [];
  }

  /**
   * Apply keyframe rules based on the scroll position
   * @param  {number} percent
   */
  applyAnimations (percent) {
    const currentKeyframesPercent = this._getCurrentKeyframesPercent(percent);
    // check if there is a pair of keyframe percentages
    if (!currentKeyframesPercent.length) return;

    const [
      previousKeyframePercent,
      currentKeyframePercent,
    ] = currentKeyframesPercent;
    // get the scrolled percent from the last keyframe to the previous
    const currentKeyframeScrollPercent = Math.floor(
      calculatePercent(previousKeyframePercent, currentKeyframePercent, percent)
    );

    // apply all keyframes at 100 with a lower berakpoint percent
    Object.keys(this.keyframes).forEach(percent => {
      // both of them are string so web aprseInt to compare them as numerals
      if (parseInt(percent) < parseInt(currentKeyframePercent)) {
        this._applyKeyframe(this.keyframes[percent], 100);
      }
    });
    // modify dom element styled based on the keyframe rules at current percent
    this._applyKeyframe(
      this.keyframes[currentKeyframePercent],
      currentKeyframeScrollPercent
    );
  }

  /**
   * Removes all animation styles from the element and applies only the 0% keyframe if specified
   */
  applyNoAnimations () {
    this.elementStyles.removeAll();
    if (this.keyframes[0]) this._applyKeyframe(this.keyframes[0], 100);
  }

  /**
   * Applies all the animation stiling
   */
  applyAllAnimations () {
    Object.keys(this.keyframes).forEach(percent =>
      this._applyKeyframe(this.keyframes[percent], 100)
    );
  }

  /**
   * Apply keyframe rules on the dom element
   * @param  {object} keyframe
   * @param  {number} percent
   */
  _applyKeyframe (keyframe, percent) {
    // loop through all keyframe rules
    Object.keys(keyframe).forEach(property => {
      const { from, to, unit } = keyframe[property];
      // if the keyfrme value is something like { width: { from: 10, to: 20, unit: 'px' } }
      if (isNumber(from) && isNumber(to)) {
        this._applyNumberValues(
          property,
          from,
          to,
          unit === NO_UNIT ? '' : unit,
          percent
        );
      } else if (unit === COLOR_UNIT) {
        this._applyColorValues(property, from, to, percent);
      } else if (isArray(from) && isArray(to)) {
        this._applyArrayValues(property, from, to, percent);
      } else {
        throwError(UNEXPECTED_ERROR);
      }
    });
  }

  /**
   * Set the element style attribute based on the current keyframe scroll percent
   * @param  {string} property
   * @param  {number} from
   * @param  {number} to
   * @param  {string} unit Property unit
   * @param  {number} percent The percent of the scrolling position from the previous keyframe to the next one
   */
  _applyNumberValues (property, from, to, unit, percent) {
    const { elementStyles, options } = this;
    // the percent of the scrolling position from the previous keyframe to the next one
    const value = calculateValueFromPercent(
      from,
      to,
      percent,
      options.precision
    );
    // apply the values to the element style
    elementStyles.apply(property, value, unit);
  }

  _applyColorValues (property, from, to, percent) {
    const { elementStyles } = this;
    // calculate color from percent
    const value = c2c(from)
      .toColor(to)
      .withPercent(percent)
      .get('rgb');
    // apply the values to the element style
    elementStyles.apply(property, value);
  }

  /**
   * Calculates the value of all function parameters based on the specified percent and then applies it to the dom element via Styler class
   * @param  {string} property
   * @param  {array} from - Shape: [[10, 'px'], [10, 'px]]
   * @param  {array} to - Shape: [[10, 'px'], [10, 'px]]
   * @param  {number} percent
   */
  _applyArrayValues (property, from, to, percent) {
    const { elementStyles } = this;
    // value length, minimum from both of them
    const length = Math.min(from.length, to.length);
    let params = [];
    for (let i = 0; i < length; i++) {
      params[i] = [];
      params[i][0] = calculateValueFromPercent(
        from[i][0],
        to[i][0],
        percent,
        this.options.precision
      );
      params[i][1] = to[i][1];
    }
    elementStyles.apply(property, params);
  }
}
