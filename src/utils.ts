export const percentFrom = (current: number, total: number, multiplier = 100) => current / total * multiplier;
export const sliceFromPercent = (value: number, percent: number, multiplier = 100) => percent * value / multiplier;
export const getUnit = (value: string): string => {
    const unitReg = /[0-9]+(cm|mm|in|px|pt|pc|em|ex|ch|%|rem|vw|vh|vmin|vmax)$/;
    const match = value.match(unitReg);
    if (match) {
        return match[1];
    }
    return null;
};
export const getValue = (value: string): number => {
    const unitReg = /([0-9]+)(cm|mm|in|px|pt|pc|em|ex|ch|%|rem|vw|vh|vmin|vmax)$/;
    const match = value.match(unitReg);
    return parseInt(match[1]);
};
export const calmelToKebabCase = (value: string): string => {
    value = value.trim();
    value = value.replace(value[0], value[0].toLowerCase());
    for (let i = 0; i < value.length; i++) {
        if (value[i] === value[i].toUpperCase()) {
            value = value.substring(0, i) + '-' + value[i].toLowerCase() + value.substring(i + 1);
        }
    }
    return value;
};
export const kebabToCamelCase = (value: string): string => value.replace(/-([a-z])/g, $1 => $1[1].toUpperCase());
export const closest = (value: number, arr: any[]): number => {
    arr = arr.sort((a, b) => a - b);
    const closestIndex = -1;
    let i = 0;
    while (i < arr.length) {
        if (value < arr[i] && i === 0) { return i; }
        if (value < arr[i] && value > arr[i - 1]) { return i; }
        i++;
    }
    return closestIndex;
};
export const loopWhile = (value: any[], until: (index?: number) => boolean, func: (index?: number) => void, done?: (index?: number) => void): void => {
    let index = 0;
    while (until(index) || index === value.length) {
        func(index);
        index++;
    }
    if (done) {
        done(index);
    }
};
export const getElementDefaultProperty = (element: HTMLElement, property: string): any => {
    window.getComputedStyle(element, null).getPropertyValue(property);
};
