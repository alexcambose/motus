import Keyframes from './Keyframes';
export default class Animation {
  constructor ($element, keyframes) {
    this.$element = $element;
    this.keyframes = Keyframes.normalize(keyframes, $element);
  }
}
