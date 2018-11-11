import Animation from '../../src/animation/Animation';
describe('Animation', () => {
  const keyframesArr = [
    {
      width: 100,
      height: {
        from: 10,
        to: 20,
      },
    },
    {
      width: 200,
      height: {
        from: 10,
        to: 20,
      },
    },
  ];
  const keyframesObj = {
    0: {
      width: 100,
      height: {
        from: 10,
        to: 20,
      },
    },
    100: {
      width: 200,
      height: {
        from: 10,
        to: 20,
      },
    },
  };

  describe('normalize', () => {
    const animation = new Animation(keyframesArr);
    it('throws an error if the array provided is smaller that 1 element', () => {
      expect(() => new Animation(keyframesArr.slice(0, 0))).toThrow();
    });
    it('converts an array of keyframes to an object', () => {
      expect(Array.isArray(animation.keyframes)).toBeTruthy();
    });
    describe('normalizeKeyframeRule', () => {
      it('converts the short form of describing property values to the long form', () => {
        expect(animation.keyframes).toEqual(keyframesObj);
      });
    });
  });
});
