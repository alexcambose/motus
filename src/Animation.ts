import Keyframes from './Keyframes';
import Point from './Point';

export default class Animation {
    public uid: number;
    public startPoint: Point;
    public endPoint: Point;
    public element: HTMLElement;
    public keyframes: Keyframes;
    constructor(startPoint: Point, endPoint: Point, element: HTMLElement, keyframes: Keyframes) {
        if (!startPoint || !endPoint || !element || !keyframes || !Object.keys(keyframes)) {
            throw new Error('startPoint endPoint element keyframes must be specified!');
        }
        this.uid = Math.random(); // basic uid
        this.startPoint = startPoint;
        this.endPoint = endPoint;
        this.element = element;
        this.keyframes = keyframes;
    }
}
