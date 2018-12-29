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
    this.options = options;
    // element that will be animated
    this.$element = $element;
    // start point
    this.startPoint = new Point(
      startPoint,
      options.$scrollElement,
      options.horizontal
    );
    // end point
    this.endPoint = new Point(
      endPoint,
      options.$scrollElement,
      options.horizontal
    );
    // normalized keyframes
    this.keyframes = Keyframes.normalize(keyframes, $element);
    // by default animations are not statrted
    this.started = false;
    // animator used to apply keyframes to the $element based on percent
    this._animator = new Animator(this.keyframes, $element);
    // throttle the method that will be called on scroll
    this._compute = throttle(this.__compute, this.options.throttle);
    // variables that are true if the scroll is before or after the animation start and end points
    this.appliedAllBefore = false;
    this.appliedAllAfter = false;
  }
  /**
   * Start listening to scroll events in order to enable animation
   */
  start () {
    const { options, started } = this;
    const { $scrollElement } = options;
    if (!started) {
      // add event listener if not started
      $scrollElement.addEventListener('scroll', this._compute.bind(this));
    }
    this.started = true;
  }
  stop () {
    const { options, started } = this;
    const { $scrollElement } = options;
    if (started) {
      // remove event listener if started
      $scrollElement.removeEventListener('scroll', this._compute);
    }
    this.started = false;
  }
  /**
   * Get user scroll position based on $scrollElement
   */
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
  /**
   * Method called on throttled scroll
   */
  __compute () {
    // run only if the animation is started
    const { started, appliedAllBefore, appliedAllAfter } = this;
    if (!started) return;
    // user scroll position
    const scroll = this._getScrollPosition();
    // top position for the start point
    const start = this.startPoint.getPxFromPoint();
    // top position for the end point
    const end = this.endPoint.getPxFromPoint();
    // if scroll is between the start and the end position
    if (scroll > start && scroll < end) {
      this.appliedAllBefore = false;
      this.appliedAllAfter = false;
      // call Animator to apply animations
      this._animator.applyAnimations(calculatePercent(start, end, scroll));
    } else if (scroll < start && !appliedAllBefore) {
      this.appliedAllBefore = true;
      this._animator.applyAnimations(0);
      // console.log('a');
    } else if (scroll > end && !appliedAllAfter) {
      this.appliedAllAfter = true;
      this._animator.applyAnimations(100);
      // console.log('b');
    }
  }
}
