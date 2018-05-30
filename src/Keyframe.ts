export default interface Keyframe {
    [propName: number]: {
        from?: number;
        to: number;
        unit?: string;
    };
}
