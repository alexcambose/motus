import { isHtmlElement } from './helpers/';
import { getOffset } from './helpers/dom';
// import throwError from './helpers/throwError.js';
// import { VALUE_IS_NOT_HTML_ELEMENT } from './enum/errorEnum';

/** Class used to get start and end point, contains only static methods  */
export default class Point {
  /**
   * Gets the pixels from a given number or dom element
   *
   * @param  {number|HTMLElement} point
   * @returns number
   */
  static getPxFromPoint (point, $scrollElement, horizontal) {
    // if the specified point is an html element
    // get the offset minus the offset of the container to get the real offset
    const containerOffset = getOffset($scrollElement, horizontal) || 0; // window offset is undefined
    const offset = getOffset(point, horizontal) - containerOffset;
    if (isHtmlElement(point)) {
      return offset;
    }
    return point;
  }

  static getDistanceFromParent ($el, $parent, horizontal) {
    const parentOffset = $parent === window ? 0 : getOffset($parent, horizontal);
    const elementOffset = getOffset($el, horizontal);
    return elementOffset - parentOffset;
  }
}
