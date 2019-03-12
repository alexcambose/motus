import Keyframes from './Keyframes';
import Point from '../Point';
import Animator from '../animation/Animator';
import throttle from 'lodash.throttle';
import {
  calculatePercent,
  getElementDimensions,
  getElementScroll,
  isArray,
  isHtmlElement,
  isSet,
  uniqid
} from '../helpers/';
import throwError from '../helpers/throwError.js';
import { VALUE_IS_NOT_HTML_ELEMENT } from '../enum/errorEnum';

/**
 * Class representing a new animation, here are set all the animation's opitons and triggered element calculations based on the scroll percent
 */
class Animation {
  static defaultOptions = {
    // where animation starts
    startPoint: null,
    // where animaiton ends
    endPoint: null,
    // element that will be animated
    $el: null,
    // the keyframe used to specify the properties to animate $el
    keyframes: [],
    // how many decimals should a css property have
    precision: Animator.defaultOptions.precision,
    // interval of sleep
    throttle: 10,
    // the element that will get the scroll listener and that will be used to calculate the scroll top and left
    $scrollElement: window,
    // is true the left offset wil be used to calculate the animation evolution
    horizontal: false,
    // invoked on scroll
    onScroll: null,
    // invoked only if the top (or left if `horizontal`=true) is between the start and end position
    onScrollBetween: null,
    // invoked if the scroll is before the start position
    onScrollBefore: null,
    // invoked if the scroll is after the start position
    onScrollAfter: null,
    // invoked once when the scroll just passed start position
    onHitTop: null,
    // invoked once when the scroll just passed end position
    onHitBottom: null,
    // invoked when animation is started
    onStart: null,
    // invoked when animation is stopped
    onStop: null,
    // sets the default value of the started parmeter
    started: false,
  };

  /**
   * Create a new animation
   * @param  {object} options - Options object
   * @param {HTMLElement} options.$el - The html element that will be animated
   * @param {HTMLElement|number|array} options.startPoint - The position where the animation will start, if not defined, it will be calculated by the $el when it enters the viewport
   * @param {HTMLElement|number|array} options.endPoint - The position where the animation will end, if not defined, it will be calculated by the $el when it leaves the viewport
   * @param {object} options.keyframes - Keyframes
   * @param {object} options.throttle [10]- Limit the amount of times the function that calclates element properties is invoked
   * @param {HTMLElement|object} options.$scrollElement [window] - The element that is scrollable and contains $el
   * @param {boolean} options.horizontal [false] - If true the whole animation will run on horizontal scroll
   * @param {function} options.onScroll [false] - Callback called on scroll
   * @param {function} options.onScrollBetween - Callback called on scroll between start and end point
   * @param {function} options.onScrollBefore - Callback called on scroll before the start point
   * @param {function} options.onScrollAfter - Callback called on scroll after the end point
   * @param {function} options.onHitTop - Callback called on the top of the window reaches the start point.
   * @param {function} options.onHitBottom - Callback called on the top of the window reaches the end point.
   * @param {boolean} options.horizontal [false] - If true the whole animation will run on horizontal scroll
   * @param {boolean} options.started [false] - If true the animation will be started without manually calling start method
   */
  constructor (options) {
    // generate unique identifier
    this.uid = uniqid();
    this.options = { ...Animation.defaultOptions, ...options };
    // element that will be animated
    this.$el = this.options.$el;
    if (!isHtmlElement(this.$el)) {
      throwError(VALUE_IS_NOT_HTML_ELEMENT, this.$el);
    }
    // normalized keyframes
    this.keyframes = Keyframes.normalize(this.options.keyframes, this.options.$el);
    // set the default started value
    this.started = this.options.started;
    // default options
    // variables that are true if the scroll is before or after the animation start and end points
    this.appliedAllBefore = false;
    this.appliedAllAfter = false;

    // animator used to apply keyframes to the $el based on percent
    this._animator = new Animator(this.keyframes, this.options.$el);
    // throttle the method that will be called on scroll
    this._compute = throttle(this.__compute, this.options.throttle);
    // throttle the method that will be called on on resize to update start and end point
    this._computePositions(this.options.startPoint, this.options.endPoint);
    const handleResize = throttle(this._computePositions.bind(this), this.options.throttle);
    window.addEventListener('resize', () => handleResize(this.options.startPoint, this.options.endPoint));
  }

  /**
   * Returns the unique identifier
   * @returns {string}
   */
  getUid () {
    return this.uid;
  }

  /**
   * Returns true if the animation is started
   * @returns {boolean}
   */
  isStarted () {
    return this.started;
  }

  /**
   * Start animation. Listen to scroll events in order to enable animation.
   */
  start () {
    const { options, started } = this;
    if (started) return;
    // add event listener if not started
    options.$scrollElement.addEventListener('scroll', this._compute.bind(this));
    this.options.onStart && this.options.onStart();
    this.started = true;
    // also call compute once for setting initial values
    this._compute();
  }

  /**
   * Stop animation. Stop listening to scroll events.
   */
  stop () {
    const { started, options } = this;
    if (!started) return;
    // remove event listener if started
    options.$scrollElement.removeEventListener('scroll', this._compute);
    this.options.onStop && this.options.onStop();
    this.started = false;
  }

  /**
   * Get user scroll position based on $scrollElement
   * @ignore
   */
  _getScrollPosition () {
    const { horizontal, $scrollElement } = this.options;
    return getElementScroll($scrollElement, horizontal);
  }

  /** Method that sets the start and end point to the class properties to be used later when animating, also called on every resize
   * @param  {HTMLElement|object} startPoint
   * @param  {HTMLElement|object} endPoint
   * @ignore
   */
  _computePositions (startPoint, endPoint) {
    const { $scrollElement, horizontal } = this.options;
    // start point
    if (isSet(startPoint) && !isArray(startPoint)) {
      this.startPoint = Point.getPxFromPoint(
        startPoint,
        $scrollElement,
        horizontal
      );
    } else {
      // if point is not defined get the distance to it
      this.startPoint = Point.getDistanceFromParent(this.$el, $scrollElement, horizontal) - getElementDimensions($scrollElement)[horizontal ? 'width' : 'height'];
      if (isArray(startPoint)) this.startPoint += startPoint[0];
    }
    if (isSet(endPoint) && !isArray(endPoint)) {
      // end point
      this.endPoint = Point.getPxFromPoint(
        endPoint,
        $scrollElement,
        horizontal
      );
    } else {
      // if point is not defined get the distance to it
      this.endPoint = Point.getDistanceFromParent(this.$el, $scrollElement, horizontal) + getElementDimensions(this.$el)[horizontal ? 'width' : 'height'];
      if (isArray(endPoint)) this.endPoint += endPoint[0];
    }
  }

  /**
   * Method called on throttled scroll
   * Calls animator to apply keyframe properties
   * @ignore
   */
  __compute () {
    const { onScrollBefore, onScrollAfter, onScrollBetween, onScroll, onHitTop, onHitBottom } = this.options;
    // top position for the start and end point
    const { startPoint, endPoint } = this;
    // run only if the animation is started
    if (!this.started) return;
    // user scroll position
    const scroll = this._getScrollPosition();
    // call scroll animation hook
    onScroll && onScroll(scroll);
    // if scroll is between the start and the end position
    if (scroll > startPoint && scroll < endPoint) { // BETWEEN
      this.appliedAllBefore = false;
      this.appliedAllAfter = false;
      const scrollPercent = calculatePercent(startPoint, endPoint, scroll);
      // call Animator to apply animations
      this._animator.applyAnimations(scrollPercent);
      // call animation hook
      onScrollBetween && onScrollBetween(scroll, scrollPercent);
    } else if (scroll < startPoint) { // BEFORE
      onScrollBefore && onScrollBefore(scroll);
      // apply only once
      if (!this.appliedAllBefore) {
        onHitTop && onHitTop();
        // if the scroll position is before the start point set element style to the initial keyframe rules with 0 percent
        this.appliedAllBefore = true;
        this._animator.applyNoAnimations();
      }
    } else if (scroll > endPoint) { // AFTER
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

export default Animation;
