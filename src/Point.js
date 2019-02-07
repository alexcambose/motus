import { isHtmlElement } from './helpers/';
import { getOffset } from './helpers/dom';
// import throwError from './error/throwError';
// import { VALUE_IS_NOT_HTML_ELEMENT } from './enum/errorEnum';

export default class Point {
  /**
   * Gets the pixels from a given number or dom element
   *
   * @param  {number|HTMLElement} point
   * @returns number
   */
  static getPxFromPoint (point, $scrollElement, horizontal) {
    if (isHtmlElement(point)) {
      if (horizontal) {
        return point.offsetLeft - ($scrollElement.offsetLeft || 0);
      }
      return point.offsetTop - ($scrollElement.offsetTop || 0);
    }
    return point;
  }
  static getDistanceFromParent ($element, $parent, horizontal) {
    const parentOffset = $parent === window ? 0 : getOffset($parent, horizontal);
    const elementOffset = getOffset($element, horizontal);

    return elementOffset - parentOffset;
  }
}
