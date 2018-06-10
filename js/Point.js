"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Point {
    /**
     * @param  {number|HTMLElement} point
     */
    constructor(point) {
        /** Get X of Y absolute position of the point
         * @param  {} isHorizontal=false
         * @returns number
         */
        this.getPosition = (isHorizontal = false) => {
            if (this.point instanceof HTMLElement) {
                const rect = this.point.getBoundingClientRect();
                return (isHorizontal ? rect.left + window.scrollX : rect.top + window.scrollY);
            }
            return this.point;
        };
        this.point = point;
    }
}
exports.default = Point;
//# sourceMappingURL=Point.js.map