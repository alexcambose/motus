import Keyframes from './Keyframes';
import throttle from 'lodash.throttle';

export default class Animation {
  constructor (
    startPoint,
    endPoint,
    $element,
    keyframes,
    options = {
      throttle: 10,
    }
  ) {
    this.$element = $element;
    this.startPoint = startPoint;
    this.endPoint = endPoint;
    this.keyframes = Keyframes.normalize(keyframes, $element);
    this.started = false;
  }
  start () {
    this.started = true;
  }
  stop () {
    this.started = false;
  }
  _compute () {
    return throttle(() => {
      if (!this.started) return;
      console.log('a');
    }, this.options.throttle);
  }
}
