import Keyframes from './Keyframes';
import Point from './Point';
import { percentFrom, sliceFromPercent, closest, loopWhile } from './utils';
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
    public apply = (): void => {
        const scroll = window.scrollY;
        console.log(scroll)
        if (scroll >= this.startPoint && scroll <= this.endPoint) {
            const currentScroll: number = scroll - this.startPoint;
            const maxScroll: number = this.endPoint - this.startPoint;
            const percent: number = percentFrom(currentScroll, maxScroll);
            const keyframePercentIndex: number = closest(percent, Object.keys(this.keyframes))];
            loopWhile(Object.keys(this.keyframes), i => i === keyframePercentIndex, i => {
                console.log(i);
            });
            this.applyKeyframe(keyframePercentIndex, currentScroll, maxScroll);
        }
    }
    private applyKeyframe = (keyframePercentIndex: number, currentScroll: number, maxScroll: number): void => {
        const keyframe: Keyframe = this.keyframes[Object.keys(this.keyframes)[keyframePercentIndex]]; // needs refactoring because it is very confusing
        if(!keyframe) return;
        const startKeyframePositon = sliceFromPercent(maxScroll, Object.keys(this.keyframes)[keyframePercentIndex-1] || 0);
        const endKeyframePositon = sliceFromPercent(maxScroll, Object.keys(this.keyframes)[keyframePercentIndex]);
        const keyframePercent = percentFrom(currentScroll - startKeyframePositon, endKeyframePositon-startKeyframePositon);
        // console.log(keyframe, startKeyframePositon, endKeyframePositon, currentScroll, keyframePercent);

        this.setAttributes(keyframe, keyframePercent);
    }
    public setAttributes = (keyframe: Keyframe, percent: number) => {
        for(const attribute: Keyframe in keyframe) {
            const keyframeStyle = keyframe[attribute];
            // console.log(attribute, keyframeStyle.from + sliceFromPercent(keyframeStyle.to - keyframeStyle.from, percent) + keyframeStyle.unit)
            this.element.style[attribute] = keyframeStyle.from + sliceFromPercent(keyframeStyle.to - keyframeStyle.from, percent) + keyframeStyle.unit ;
        }
        // console.log('---')
    }
}
