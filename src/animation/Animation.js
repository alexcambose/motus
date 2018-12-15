export default class Animation {
  constructor (keyframes) {
    this.keyframes = this.normalize(keyframes);
  }
  /**
   * Convert the keyframes to a standard form
   * @param  {Object|Array} keyframes
   */
  normalize (keyframes) {
    /*
    convert an array of keyframes into an object, like:
    keyframesArr = [{width: 100},{width: 200}]
    to
    keyframesArr = {0: {width: 100},100: {width: 200}};
    */
    if (Array.isArray(keyframes)) {
      // keframes array should be longer that 1 element
      if (keyframes.length < 1) {
        throw new Error(
          'The keyframes array provided must contain at least 1 item!'
        );
      }
      // create a new object and set it's properties
      // convert arrays like: [{}, {}, {}] to {0:{}, 50: {}, 100: {}}
      keyframes = keyframes.reduce((carry, e, i) => {
        carry[i ? 100 / (keyframes.length - i) : 0] = e;
        return carry;
      }, {});
    }

    // convert each keyframe values
    keyframes = Object.keys(keyframes).map(keyframePercent => {
      const keyframe = keyframes[keyframePercent];

      return Object.keys(keyframe).map(keyframeProperty =>
        this.normalizeKeyframeRule(
          keyframeProperty,
          keyframe[keyframeProperty],
          keyframes,
          keyframePercent
        )
      );
    });
    return keyframes;
  }
  normalizeKeyframeRule (property, value, keyframes, keyframePercent) {
    let from, to;
    if (value === undefined) throw new Error('Property value not specified');
    // if(typeof)
    console.log(property, value, keyframes, keyframePercent, '- ');
    return {
      [property]: {
        from,
        to,
      },
    };
  }
}
