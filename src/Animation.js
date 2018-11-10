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
    convery an array of keyframes into an object like:
    keyframesArr = [{width: 100},{width: 200}]
    to
    keyframesArr = {0: {width: 100},100: {width: 200}};
    */
    if (Array.isArray(keyframes)) {
      if (keyframes.length < 2) {
        throw new Error(
          'The keyframes array provided must contain at least 2 items!'
        );
      }
      keyframes = keyframes.reduce((carry, e, i) => {
        carry[i ? 100 / i : 0] = e;
        return carry;
      }, {});
    }
    return keyframes;
  }
}
