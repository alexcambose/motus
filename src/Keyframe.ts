export default interface Keyframe {
    [propName: string]: {
        from?: string | number;
        to: string | number;
        unit?: string;
    };
}
