import Keyframes from './Keyframes';
import Point from './Point';
import { percentFrom, sliceFromPercent } from './utils';
import Keyframe from './Keyframe';

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
    public apply = (scroll: number): void => {
        if (scroll >= this.startPoint && scroll <= this.endPoint) {
            const percent: number = percentFrom(scroll - this.startPoint, this.endPoint - this.startPoint);
            let keyframePercent: number = null;
            for (let i = 0; i < Object.keys(this.keyframes).length && parseInt(Object.keys(this.keyframes)[i]) < percent; i++) keyframePercent = i;
            this.applyKeyframe(keyframePercent, scroll - this.startPoint, this.endPoint - this.startPoint);
        }
    }
    private applyKeyframe = (keyframePercent: number, currentScroll: number, maxScroll: number): void => {
        const keyframe: Keyframe = this.keyframes[Object.keys(this.keyframes)[keyframePercent]]; // needs refactoring because it is very confusing
        
        console.log(percentFrom(currentScroll, maxScroll), currentScroll, maxScroll);
        for(const attribute in keyframe) {
            console.log(attribute, );
        }
    }
}
