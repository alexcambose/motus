import Animation from './Animation';
import Point from './Point';

export default class Motus {
    public Animation = Animation;
    public Point = Point;
    private animations: Animation[] = [];
    constructor() {
        window.addEventListener('scroll', () => {
            const windowScroll = window.scrollY;
            console.log(windowScroll);
            this.animations.forEach(e => e.applyAnimation(windowScroll));
        });
    }
    public addAnimation = (animation: Animation): void => {
        this.animations.push(animation);
    }
    public removeAnimation = (uid: number): void => {
        const index = this.animations.findIndex((e) => e.uid === uid);
        this.animations.splice(index, 1);
    }
}
