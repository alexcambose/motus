export default class Point {
    public point: number | HTMLElement;
    constructor(point: number | HTMLElement) {
        this.point = point;
    }
    public getPosition = (isHorizontal = false): number => {
        if (this.point instanceof HTMLElement) {
            const rect = this.point.getBoundingClientRect();
            return (isHorizontal ? rect.left + window.scrollX : rect.top + window.scrollY);
        }
        return this.point;
    }
}
