"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
class Animation {
    constructor(startPoint, endPoint, element, keyframes) {
        this.apply = () => {
            const scroll = window.scrollY;
            if (scroll >= this.startPoint && scroll <= this.endPoint) {
                const currentScroll = scroll - this.startPoint;
                const maxScroll = this.endPoint - this.startPoint;
                const percent = utils_1.percentFrom(currentScroll, maxScroll);
                const keyframePercentIndex = utils_1.closest(percent, Object.keys(this.keyframes));
                utils_1.loopWhile(Object.keys(this.keyframes), i => i < keyframePercentIndex, i => {
                    this.setAttributes(this.keyframes[Object.keys(this.keyframes)[i]], 100);
                });
                this.applyKeyframe(keyframePercentIndex, currentScroll, maxScroll);
            }
            else { // apply all keyframes if scroll is over the end point
                if (scroll < this.endPoint) {
                    this.setAttributes(this.keyframes[Object.keys(this.keyframes)[0]], 0);
                }
                else {
                    this.setAttributes(this.keyframes[Object.keys(this.keyframes)[Object.keys(this.keyframes).length - 1]], 100);
                }
            }
        };
        this.setAttributes = (keyframe, percent) => {
            for (let attribute in keyframe) {
                if (keyframe.hasOwnProperty(attribute)) {
                    const keyframeStyle = keyframe[attribute];
                    attribute = utils_1.camelToKebabCase(attribute);
                    const { to, from, unit } = keyframeStyle;
                    this.element.style[attribute] = from + utils_1.sliceFromPercent(to - from, percent) + unit;
                }
            }
        };
        this.applyKeyframe = (keyframePercentIndex, currentScroll, maxScroll) => {
            const keyframe = this.keyframes[Object.keys(this.keyframes)[keyframePercentIndex]]; // needs refactoring because it is very confusing
            if (!keyframe) {
                return;
            }
            const startKeyframePositon = utils_1.sliceFromPercent(maxScroll, parseInt(Object.keys(this.keyframes)[keyframePercentIndex - 1]) || 0);
            const endKeyframePositon = utils_1.sliceFromPercent(maxScroll, parseInt(Object.keys(this.keyframes)[keyframePercentIndex]));
            const keyframePercent = utils_1.percentFrom(currentScroll - startKeyframePositon, endKeyframePositon - startKeyframePositon);
            this.setAttributes(keyframe, keyframePercent);
        };
        if (!startPoint || !endPoint || !element || !keyframes || !Object.keys(keyframes)) {
            throw new Error('startPoint endPoint element keyframes must be specified!');
        }
        this.uid = Math.random() * 100000000; // basic uid
        this.startPoint = startPoint.getPosition();
        this.endPoint = endPoint.getPosition();
        window.addEventListener('resize', () => {
            this.startPoint = startPoint.getPosition();
            this.endPoint = endPoint.getPosition();
        });
        this.element = element;
        this.keyframes = keyframes;
        for (const keyframePercent of Object.keys(this.keyframes)) {
            const keyframe = this.keyframes[keyframePercent];
            for (const keyframeProperty of Object.keys(keyframe)) {
                const keyframeStyle = keyframe[keyframeProperty];
                const previousKeyframe = utils_1.previousKeyframeValue(this.keyframes, parseInt(keyframePercent), keyframeProperty);
                let to = null;
                let from = null;
                if (typeof keyframeStyle === 'string' || typeof keyframeStyle === 'number') {
                    to = utils_1.getValue(keyframeStyle);
                    from = utils_1.getElementDefaultProperty(this.element, keyframeProperty);
                }
                else {
                    if (!keyframeStyle.hasOwnProperty('to')) {
                        throw new Error(`${keyframeProperty} doesn't have 'to' property!`);
                    }
                    else {
                        to = keyframeStyle.to;
                    }
                }
                if (keyframe[keyframeProperty].hasOwnProperty('from')) {
                    from = keyframeStyle.from;
                }
                else if (previousKeyframe) {
                    from = previousKeyframe.to;
                }
                else {
                    from = utils_1.getElementDefaultProperty(this.element, keyframeProperty);
                }
                this.keyframes[keyframePercent][keyframeProperty] = {
                    from: utils_1.getValue(from),
                    to: utils_1.getValue(to),
                    unit: keyframeStyle.unit || utils_1.getUnit(from) || utils_1.getUnit(to) || previousKeyframe.unit,
                };
            }
        }
    }
}
exports.default = Animation;
//# sourceMappingURL=Animation.js.map