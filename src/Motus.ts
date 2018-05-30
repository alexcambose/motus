import Animation from './Animation';
import Point from './Point';

export default class Motus {
    public Animation = Animation;
    public Point = Point;
    private animations: Animation[] = [];
    constructor() {
        window.addEventListener('scroll', () => {
            const windowScroll = window.scrollY;
            this.animations.forEach(e => e.apply(windowScroll));
        });
    }
    /**Register new animation
     * @param  {Animation} animation
     * @returns void
     */
    public addAnimation = (animation: Animation): void => {
        this.animations.push(animation);
    }
    
    /**Delete animation
     * @param  {number} uid Animation uid
     * @returns void
     */
    public removeAnimation = (uid: number): void => {
        const index = this.animations.findIndex((e) => e.uid === uid);
        this.animations.splice(index, 1);
    }
}
