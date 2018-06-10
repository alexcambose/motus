import Keyframe from './Keyframe';
import Keyframes from './Keyframes';
import Point from './Point';
export default class Animation {
    uid: number;
    startPoint: number;
    endPoint: number;
    element: HTMLElement;
    keyframes: Keyframes;
    constructor(startPoint: Point, endPoint: Point, element: HTMLElement, keyframes: Keyframes);
    apply: () => void;
    setAttributes: (keyframe: Keyframe, percent: number) => void;
    private applyKeyframe;
}
