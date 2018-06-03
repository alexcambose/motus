export default interface Keyframe {
    [propName: string]: {
        from?: string;
        to: string;
    };
}
