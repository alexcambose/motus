import Keyframe from './Keyframe';
import Keyframes from './Keyframes';
import Point from './Point';
import { camelToKebabCase, closest, getElementDefaultProperty, getUnit, getValue, kebabToCamelCase, loopWhile, percentFrom, previousKeyframeValue, sliceFromPercent } from './utils';

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
        for (const keyframePercent of Object.keys(this.keyframes)) {
            const keyframe = this.keyframes[keyframePercent];
            for (const keyframeProperty of Object.keys(keyframe)) {
                const keyframeStyle = keyframe[keyframeProperty];
                const previousKeyframe = previousKeyframeValue(this.keyframes, parseInt(keyframePercent), keyframeProperty);
                let to = null;
                let from = null;
                if (typeof keyframeStyle === 'string' || typeof keyframeStyle === 'number') {
                    to = getValue(keyframeStyle);
                    from = getElementDefaultProperty(this.element, keyframeProperty);
                } else {
                    if (!keyframeStyle.hasOwnProperty('to')) {
                        throw new Error(`${keyframeProperty} doesn't have 'to' property!`);
                    } else {
                        to = keyframeStyle.to;
                    }
                }
                if (keyframe[keyframeProperty].from) {
                    from = keyframeStyle.from;
                } else if (previousKeyframe) {
                    from = previousKeyframe.to;
                } else {
                    from = getElementDefaultProperty(this.element, keyframeProperty);
                }
                this.keyframes[keyframePercent][keyframeProperty] = {
                    from: getValue(from),
                    to: getValue(to),
                    unit: keyframeStyle.unit || getUnit(from) || getUnit(to) || previousKeyframe.unit, // to and from unit should be equal
                };
            }
        }
        console.log(this.keyframes);
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
        } else { // apply all keyframes if scroll is over the end point
            if (scroll < this.endPoint) {
                this.setAttributes(this.keyframes[Object.keys(this.keyframes)[0]], 0);
            } else {
                this.setAttributes(this.keyframes[Object.keys(this.keyframes)[Object.keys(this.keyframes).length - 1]], 100);
            }
        }
    }
    public setAttributes = (keyframe: Keyframe, percent: number) => {
        for (let attribute in keyframe) {
            if (keyframe.hasOwnProperty(attribute)) {
                const keyframeStyle = keyframe[attribute];
                attribute = camelToKebabCase(attribute);
                const { to, from, unit } = keyframeStyle;
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
