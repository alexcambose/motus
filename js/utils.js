"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.percentFrom = (current, total, multiplier = 100) => current / total * multiplier;
exports.sliceFromPercent = (value, percent, multiplier = 100) => percent * value / multiplier;
exports.getUnit = (value) => {
    const unitReg = /[0-9]+(cm|mm|in|px|pt|pc|em|ex|ch|%|rem|vw|vh|vmin|vmax)$/;
    if (typeof value === 'number') {
        return null;
    }
    const match = value.match(unitReg);
    if (match) {
        return match[1];
    }
    return null;
};
exports.getValue = (value) => {
    const unitReg = /([0-9]+)(cm|mm|in|px|pt|pc|em|ex|ch|%|rem|vw|vh|vmin|vmax)$/;
    if (typeof value === 'number') {
        return value;
    }
    const match = value.match(unitReg);
    if (match) {
        return parseInt(match[1]);
    }
    return null;
};
exports.camelToKebabCase = (value) => value.replace(/([A-Z])/g, $1 => '-' + $1.toLowerCase());
exports.kebabToCamelCase = (value) => value.replace(/-([a-z])/g, $1 => $1[1].toUpperCase());
exports.closest = (value, arr) => {
    arr = arr.sort((a, b) => a - b);
    const closestIndex = -1;
    let i = 0;
    while (i < arr.length) {
        if (value < arr[i] && i === 0) {
            return i;
        }
        if (value < arr[i] && value > arr[i - 1]) {
            return i;
        }
        i++;
    }
    return closestIndex;
};
exports.loopWhile = (value, until, func, done) => {
    let index = 0;
    while (until(index) || index === value.length) {
        func(index);
        index++;
    }
    if (done) {
        done(index);
    }
};
exports.getElementDefaultProperty = (element, property) => {
    return window.getComputedStyle(element, null).getPropertyValue(exports.camelToKebabCase(property));
};
exports.previousKeyframeValue = (keyframes, percent, property) => {
    const keyframePercents = Object.keys(keyframes);
    const previousPercent = keyframePercents.findIndex(e => parseInt(e) === percent) - 1;
    const previousKeyframe = keyframes[keyframePercents[previousPercent]];
    if (previousKeyframe) {
        if (typeof previousKeyframe === 'number' || typeof previousKeyframe === 'string') {
            return previousKeyframe;
        }
        return previousKeyframe[property];
    }
    return false;
};
//# sourceMappingURL=utils.js.map