import Animation from '../src/Animation';
describe('Animation', () => {
  const keyframesArr = [
    {
      width: 100,
    },
    {
      width: 200,
    },
  ];
  const keyframesObj = {
    0: {
      width: 100,
    },
    100: {
      width: 200,
    },
  };

  describe('normalize', () => {
    const animation = new Animation(keyframesArr);
    it('throws an error if the array provided is smaller that 2', () => {
      expect(() => new Animation(keyframesArr.slice(0, 1))).toThrow();
    });
    it('converts an array of keyframes to an object', () => {
      expect(animation.keyframes).toEqual(keyframesObj);
    });
  });
});
