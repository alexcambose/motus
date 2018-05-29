export default class Point {
    public point: number | HTMLElement;
    constructor(point: number | HTMLElement) {
        this.point = point;
    }
    getPosition = (isHorizontal = false): number => {
        if (this.point instanceof HTMLElement) {
            return (isHorizontal ? this.point.offsetLeft : this.point.offsetTop);
        }
        return this.point;
    }
}
