export default class Point {
  constructor (point) {
    this.px = this.getPxFromPoint(point);
  }

  /**
   * Gets the pixels from a given number or dom element
   *
   * @param  {number|HTMLElement} point
   * @returns number
   */
  getPxFromPoint (point) {
    // let a;
    if (this.point instanceof global.HTMLElement) {
      const rect = this.point.getBoundingClientRect();
      return rect.top + window.scrollY;
    }
    return point;
  }
}
