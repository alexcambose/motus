import Keyframes from './Keyframes';
import Point from './Point';
import { percentFrom } from './utils';

export default class Animation {
    public uid: number;
    public startPoint: number;
    public endPoint: number;
    public element: HTMLElement;
    public keyframes: Keyframes;
    constructor(startPoint: Point, endPoint: Point, element: HTMLElement, keyframes: Keyframes) {
        if (!startPoint || !endPoint || !element || !keyframes || !Object.keys(keyframes)) {
            throw new Error('startPoint endPoint element keyframes must be specified!');
        }
        this.uid = Math.random() * 100000000; // basic uid
        this.startPoint = startPoint.getPosition();
        this.endPoint = endPoint.getPosition();
        this.element = element;
        this.keyframes = keyframes;
    }
    public apply = (scroll): void => {
        if (scroll >= this.startPoint && scroll <= this.endPoint) {
            const percent: number = percentFrom(scroll - this.startPoint, this.endPoint - this.startPoint);
            let k = null;
            for (let i = 0; i < Object.keys(this.keyframes).length && parseInt(Object.keys(this.keyframes)[i]) < percent; i++) k = this.keyframes[Object.keys(this.keyframes)[i]];
            this.applyKeyframe(k);
        }
    }
    private applyKeyframe = (keyframe): void => {
        for(const attribute in keyframe) {
            console.log(attribute, );
        }
    }
}
