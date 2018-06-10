import Animation from './Animation';
import Point from './Point';
export default class Motus {
    Animation: typeof Animation;
    Point: typeof Point;
    private animations;
    constructor();
    /**Register new animation
     * @param  {Animation} animation
     * @returns void
     */
    addAnimation: (animation: Animation) => void;
    /**Delete animation
     * @param  {number} uid Animation uid
     * @returns void
     */
    removeAnimation: (uid: number) => void;
}
