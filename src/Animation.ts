import Keyframes from './Keyframes';
import Point from './Point';
import { percentFrom, sliceFromPercent, closest, loopWhile, getUnit, getDefaultStyle, getValue, calmelToKebabCase, kebabToCamelCase } from './utils';
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
        if (scroll >= this.startPoint && scroll <= this.endPoint) {
            const currentScroll: number = scroll - this.startPoint;
            const maxScroll: number = this.endPoint - this.startPoint;
            const percent: number = percentFrom(currentScroll, maxScroll);
            const keyframePercentIndex: number = closest(percent, Object.keys(this.keyframes))];
            loopWhile(Object.keys(this.keyframes), i => i < keyframePercentIndex, i => {
                this.setAttributes(this.keyframes[Object.keys(this.keyframes)[i]], 100);
            });
            this.applyKeyframe(keyframePercentIndex, currentScroll, maxScroll);
        } else if (scroll > this.endPoint) { // apply all keyframes if scroll is over the end point
            for(const percent in this.keyframes) {
                this.setAttributes(this.keyframes[percent], 100);
            }
        }
    }
    private applyKeyframe = (keyframePercentIndex: number, currentScroll: number, maxScroll: number): void => {
        const keyframe: Keyframe = this.keyframes[Object.keys(this.keyframes)[keyframePercentIndex]]; // needs refactoring because it is very confusing
        if(!keyframe) return;
        const startKeyframePositon = sliceFromPercent(maxScroll, Object.keys(this.keyframes)[keyframePercentIndex-1] || 0);
        const endKeyframePositon = sliceFromPercent(maxScroll, Object.keys(this.keyframes)[keyframePercentIndex]);
        const keyframePercent = percentFrom(currentScroll - startKeyframePositon, endKeyframePositon-startKeyframePositon);
        this.setAttributes(keyframe, keyframePercent);
    }
    public setAttributes = (keyframe: Keyframe, percent: number) => {
        for(let attribute in keyframe) {
            const keyframeStyle = keyframe[attribute];
            attribute = calmelToKebabCase(attribute);
            const to = getValue(keyframeStyle.to);
            const from = getValue(keyframeStyle.from || '0px');
            const unit = getUnit(keyframeStyle.to); // to and from should be equal
            this.element.style[attribute] = from + sliceFromPercent(to - from, percent) + unit;
        }
    }
}
