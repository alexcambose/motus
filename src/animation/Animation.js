import Keyframes from './Keyframes';
export default class Animation {
  constructor (startPoint, endPoint, $element, keyframes) {
    this.$element = $element;
    this.startPoint = startPoint;
    this.endPoint = endPoint;
    this.keyframes = Keyframes.normalize(keyframes, $element);
    this.started = false;
  }
  start () {
    this.started = true;
    window.addEventListener('scroll', this.compute);
  }
  stop () {
    this.started = false;
    window.removeEventListener('scroll', this.compute);
  }
  _compute () {}
}
