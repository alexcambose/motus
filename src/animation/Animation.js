import Keyframes from './Keyframes';
import Point from '../Point';
import Animator from '../animation/Animator';
import throttle from 'lodash.throttle';
import { calculatePercent, isHtmlElement } from '../utils';
import throwError from '../error/throwError';
import { VALUE_IS_NOT_HTML_ELEMENT } from '../enum/errorEnum';
export default class Animation {
  static defaultOptions = {
    // how many decimals should a css property have
    precision: Animator.defaultOptions.precision,
    // interval of sleep
    throttle: 40,
    // the element that will get the scroll listener and that will be used to calculate the scroll top and left
    $scrollElement: window,
    // is true the left offset wil be used to calculate the animation evolution
    horizontal: false,
    // invoked on scroll (throttle will be applied)
    onScroll: null,
    // invoked only if the top (or left if horizontal) is between the start and end position
    onScrollBetween: null,
    // invoked if the scroll is before the start position
    onScrollBefore: null,
    // invoked if the scroll is after the start position
    onScrollAfter: null,
    // invoked once when the scroll just passed start position
    onHitTop: null,
    // invoked once when the scroll just passed end position
    onHitBottom: null,
    // sets the default value of the started parmeter
    started: false,
  };
  constructor (startPoint, endPoint, $element, keyframes, options = {}) {
    // default options
    this.options = { ...Animation.defaultOptions, ...options };
    if (!isHtmlElement($element)) {
      throwError(VALUE_IS_NOT_HTML_ELEMENT, $element);
    }
    // element that will be animated
    this.$element = $element;
    // normalized keyframes
    this.keyframes = Keyframes.normalize(keyframes, $element);
    // set the default started value
    this.started = this.options.started;
    // animator used to apply keyframes to the $element based on percent
    this._animator = new Animator(this.keyframes, $element);
    // throttle the method that will be called on scroll
    this._compute = throttle(this.__compute, this.options.throttle);
    // variables that are true if the scroll is before or after the animation start and end points
    this.appliedAllBefore = false;
    this.appliedAllAfter = false;
    this._computePositions(startPoint, endPoint);
    const handleResize = throttle(() => this._computePositions(startPoint, endPoint), this.options.throttle);
    window.addEventListener('onResize', handleResize);
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
    // also call compute once for setting initial values
    this._compute();
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
    // check for the horizontal config
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
  _computePositions (startPoint, endPoint) {
    // start point
    if (startPoint || startPoint === 0) {
      this.startPoint = new Point(
        startPoint,
        this.options.$scrollElement,
        this.options.horizontal
      );
    }
    if (endPoint || endPoint === 0) {
      // end point
      this.endPoint = new Point(
        endPoint,
        this.options.$scrollElement,
        this.options.horizontal
      );
    }
  }
  /**
   * Method called on throttled scroll
   */
  __compute () {
    const { onScrollBefore, onScrollAfter, onScrollBetween, onScroll, onHitTop, onHitBottom } = this.options;
    // run only if the animation is started
    if (!this.started) return;
    // user scroll position
    const scroll = this._getScrollPosition();
    // top position for the start point
    const start = this.startPoint.getPxFromPoint();
    // top position for the end point
    const end = this.endPoint.getPxFromPoint();

    // call scroll animation hook
    onScroll && onScroll(scroll);

    // if scroll is between the start and the end position
    if (scroll > start && scroll < end) { // BETWEEN
      this.appliedAllBefore = false;
      this.appliedAllAfter = false;
      const scrollPercent = calculatePercent(start, end, scroll);
      // call Animator to apply animations
      this._animator.applyAnimations(scrollPercent);
      // call animation hook
      onScrollBetween && onScrollBetween(scroll, scrollPercent);
    } else if (scroll < start) { // BEFORE
      onScrollBefore && onScrollBefore(scroll);
      // apply only once
      if (!this.appliedAllBefore) {
        onHitTop && onHitTop();
        // if the scroll position is before the start point set element style to the initial keyframe rules with 0 percent
        this.appliedAllBefore = true;
        this._animator.applyNoAnimations();
      }
    } else if (scroll > end) { // AFTER
      onScrollAfter && onScrollAfter(scroll);
      // apply only once
      if (!this.appliedAllAfter) {
        onHitBottom && onHitBottom();
        // if the scroll position if after the start set element style to all keyframes with 100 percent
        this.appliedAllAfter = true;
        this._animator.applyAllAnimations();
      }
    }
  }
}
