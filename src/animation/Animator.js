import {
  calculatePercent,
  isNumber,
  calculateValueFromPercent,
} from '../utils';
import Styler from './Styler';

export default class Animator {
  constructor (keyframes, $element) {
    this.keyframes = keyframes;
    this.elementStyles = new Styler($element);
  }

  _getCurrentKeyframesPercent (percent) {
    const { keyframes } = this;
    // get percentages
    const percentages = Object.keys(keyframes);
    // loop through all of percentages and return the percent that is after the current scroll percent
    for (let i = 0; i < percentages.length; i++) {
      if (percent === parseInt(percentages[i])) {
        return [percentages[i - 1] || '0', percentages[i]];
      }
      if (percent > percentages[i] && percent < percentages[i + 1]) {
        return [percentages[i], percentages[i + 1]];
      }
    }
    // if the first keyframe percent is bigger that the current scroll percent
    if (percentages[0] > percent) return ['0', percentages[0]];
  }

  applyAnimations (percent) {
    const [
      previousKeyframePercent,
      currentKeyframePercent,
    ] = this._getCurrentKeyframesPercent(percent);
    const currentKeyframeScrollPercent = calculatePercent(
      previousKeyframePercent,
      currentKeyframePercent,
      percent
    );
    this._applyKeyframe(
      this.keyframes[currentKeyframePercent],
      currentKeyframeScrollPercent
    );
  }
  _applyKeyframe (keyframe, percent) {
    Object.keys(keyframe).forEach(property => {
      const { from, to, unit } = keyframe[property];
      if (isNumber(from) && isNumber(to)) {
        this._applyNumberValues(property, from, to, unit, percent);
      }
    });
  }
  _applyNumberValues (property, from, to, unit, percent) {
    const { elementStyles } = this;
    const value = calculateValueFromPercent(from, to, percent);
    elementStyles.apply(property, value + unit)
  }
}
