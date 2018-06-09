export default class Point {
    public point: number | HTMLElement;
    /**
     * @param  {number|HTMLElement} point
     */
    constructor(point: number | HTMLElement) {
        this.point = point;
    }
    /** Get X of Y absolute position of the point
     * @param  {} isHorizontal=false
     * @returns number
     */
    public getPosition = (isHorizontal = false): number => {
        if (this.point instanceof HTMLElement) {
            const rect = this.point.getBoundingClientRect();
            return (isHorizontal ? rect.left + window.scrollX : rect.top + window.scrollY);
        }
        return this.point;
    }
}
