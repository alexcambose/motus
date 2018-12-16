import Animation from '../../src/animation/Animation';
document.body.innerHTML = `<p>test</p>`;
const element = document.querySelector('p');
element.style.width = '10px';
element.style.height = '10px';

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
    const animation = new Animation(element, keyframesArr);
    it('throws an error if the array provided is smaller that 1 element', () => {
      expect(() => new Animation(element, keyframesArr.slice(0, 0))).toThrow();
    });
    it('converts an array of keyframes to an object', () => {
      expect(Array.isArray(animation.keyframes)).toBeTruthy();
    });
    describe('normalizeKeyframeRule', () => {
      describe('converts the short form of describing property values to the long form', () => {
        it('sets `from` property to the default element property', () => {
          expect(animation.normalizeKeyframeRule('width', 20, {}, 0)).toEqual({
            width: {
              from: 10,
              to: 20,
              unit: 'px',
            },
          });
        });
        // expect(animation.keyframes).toEqual(keyframesObj);
      });
    });
  });
});
