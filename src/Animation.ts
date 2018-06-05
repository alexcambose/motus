import Keyframe from './Keyframe';
import Keyframes from './Keyframes';
import Point from './Point';
import { calmelToKebabCase, closest, getUnit, getValue, loopWhile, percentFrom, sliceFromPercent } from './utils';

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
        console.log(keyframes);
    }
    public apply = (): void => {
        const scroll = window.scrollY;
        if (scroll >= this.startPoint && scroll <= this.endPoint) {
            const currentScroll: number = scroll - this.startPoint;
            const maxScroll: number = this.endPoint - this.startPoint;
            const percent: number = percentFrom(currentScroll, maxScroll);
            const keyframePercentIndex: number = closest(percent, Object.keys(this.keyframes));
            loopWhile(Object.keys(this.keyframes), i => i < keyframePercentIndex, i => {
                this.setAttributes(this.keyframes[Object.keys(this.keyframes)[i]], 100);
            });
            this.applyKeyframe(keyframePercentIndex, currentScroll, maxScroll);
        } else if (scroll > this.endPoint) { // apply all keyframes if scroll is over the end point
            for (const percent in this.keyframes) {
                if (this.keyframes.hasOwnProperty(percent)) {
                    this.setAttributes(this.keyframes[percent], 100);
                }
            }
        }
    }
    public setAttributes = (keyframe: Keyframe, percent: number) => {
        for (let attribute in keyframe) {
            if (keyframe.hasOwnProperty(attribute)) {
                const keyframeStyle = keyframe[attribute];
                attribute = calmelToKebabCase(attribute);
                const to = getValue(keyframeStyle.to);
                const from = getValue(keyframeStyle.from || '0px');
                const unit = getUnit(keyframeStyle.to); // to and from should be equal
                this.element.style[attribute] = from + sliceFromPercent(to - from, percent) + unit;
            }
        }
    }
    private applyKeyframe = (keyframePercentIndex: number, currentScroll: number, maxScroll: number): void => {
        const keyframe: Keyframe = this.keyframes[Object.keys(this.keyframes)[keyframePercentIndex]]; // needs refactoring because it is very confusing
        if (!keyframe) { return; }
        const startKeyframePositon = sliceFromPercent(maxScroll, parseInt(Object.keys(this.keyframes)[keyframePercentIndex - 1]) || 0);
        const endKeyframePositon = sliceFromPercent(maxScroll, parseInt(Object.keys(this.keyframes)[keyframePercentIndex]));
        const keyframePercent = percentFrom(currentScroll - startKeyframePositon, endKeyframePositon - startKeyframePositon);
        this.setAttributes(keyframe, keyframePercent);
    }
}
