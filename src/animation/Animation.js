import Keyframes from './Keyframes';
import Point from '../Point';
import Animator from '../animation/Animator';
import throttle from 'lodash.throttle';
import { calculatePercent } from '../utils';
export default class Animation {
  constructor (startPoint, endPoint, $element, keyframes, options) {
    // default options
    options = Object.assign(
      {
        throttle: 40,
        $scrollElement: window,
        horizontal: false,
      },
      options
    );
    this.$element = $element;
    this.startPoint = new Point(
      startPoint,
      options.$scrollElement,
      options.horizontal
    );
    this.endPoint = new Point(
      endPoint,
      options.$scrollElement,
      options.horizontal
    );
    this.keyframes = Keyframes.normalize(keyframes, $element);
    this.options = options;
    this.started = false;
    this._animator = new Animator(this.keyframes, $element);
    this._compute = throttle(this.__compute, this.options.throttle);
  }
  start () {
    this.started = true;
    const { $scrollElement } = this.options;
    $scrollElement.addEventListener('scroll', this._compute.bind(this));
  }
  stop () {
    this.started = false;
    const { $scrollElement } = this.options;
    $scrollElement.removeEventListener('scroll', this._compute);
  }
  _getScrollPosition () {
    const { options } = this;
    const { horizontal, $scrollElement } = options;
    let scrollPosition = horizontal
      ? $scrollElement.scrollLeft
      : $scrollElement.scrollTop;
    // window uses scrollX, scrollY instead of scrollLeft, scrollTop
    if ($scrollElement === window) {
      scrollPosition = horizontal
        ? $scrollElement.scrollX
        : $scrollElement.scrollY;
    }
    return scrollPosition;
  }
  __compute () {
    const scroll = this._getScrollPosition();
    const start = this.startPoint.getPxFromPoint();
    const end = this.endPoint.getPxFromPoint();

    if (scroll > start && scroll < end) {
      Animator.applyAnimations(calculatePercent(start, end, scroll));
    }
  }
}
