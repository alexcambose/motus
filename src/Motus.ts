import Animation from './Animation';
import Point from './Point';

export default class Motus {
    public Animation = Animation;
    public Point = Point;
    private animations: Animation[] = [];
    constructor() {
        window.addEventListener('scroll', () => {
            this.animations.forEach(e => e.apply());
        });
    }
    /**Register new animation
     * @param  {Animation} animation
     * @returns void
     */
    public addAnimation = (animation: Animation): void => {
        this.animations.push(animation);
        animation.apply(); // initial apply
    }

    /**Delete animation
     * @param  {number} uid Animation uid
     * @returns void
     */
    public removeAnimation = (uid: number): void => {
        const index = this.animations.findIndex(e => e.uid === uid);
        this.animations.splice(index, 1);
    }
}
