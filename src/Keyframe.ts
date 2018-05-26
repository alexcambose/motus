export default interface Keyframe {
    [propName: string]: {
        from: number,
        to: number,
        unit: string
    }
}