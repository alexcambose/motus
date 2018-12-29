import {
  calculatePercent,
  isNumber,
  calculateValueFromPercent,
  isArray,
} from '../utils';
import Styler from './Styler';
import c2c from 'color-to-color';
import { COLOR_UNIT, NO_UNIT } from '../enum/specialUnitEnum';
import throwError from '../error/throwError';
import { UNEXPECTED_ERROR } from '../enum/errorEnum';

export default class Animator {
  constructor (keyframes, $element) {
    this.keyframes = keyframes;
    this.elementStyles = new Styler($element);
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
   * Apply keyrame rules based on the scroll position
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
    const currentKeyframeScrollPercent = calculatePercent(
      previousKeyframePercent,
      currentKeyframePercent,
      percent
    );
    // modify dom element styled based on the keyframe rules
    this._applyKeyframe(
      this.keyframes[currentKeyframePercent],
      currentKeyframeScrollPercent
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
        this._applyNumberValues(property, from, to, unit, percent);
      } else if (unit === COLOR_UNIT) {
        this._applyColorValues(property, from, to, percent);
      } else if (unit === NO_UNIT) {
        this._applyNumberValues(property, from, to, '', percent);
      } else if (!unit && isArray(from) && isArray(to)) {
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
    const { elementStyles } = this;
    // the percent of the scrolling position from the previous keyframe to the next one
    const value = calculateValueFromPercent(from, to, percent);
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
  _applyArrayValues (property, from, to, percent) {
    const { elementStyles } = this;
    console.log(arguments);
  }
}
