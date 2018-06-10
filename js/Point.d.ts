export default class Point {
    point: number | HTMLElement;
    /**
     * @param  {number|HTMLElement} point
     */
    constructor(point: number | HTMLElement);
    /** Get X of Y absolute position of the point
     * @param  {} isHorizontal=false
     * @returns number
     */
    getPosition: (isHorizontal?: boolean) => number;
}
