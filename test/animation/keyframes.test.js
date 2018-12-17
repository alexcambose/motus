import Keyframes from '../../src/animation/Keyframes';

document.body.innerHTML = `<p>test</p>`;
const element = document.querySelector('p');
element.style.width = '10px';
element.style.height = '10px';

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
describe('keyframes', () => {
  describe('normalize', () => {
    describe('_arrayToObject', () => {
      it('converts an array of keyframes to an object', () => {
        expect(Keyframes._arrayToObject([{}, {}, {}])).toEqual({
          0: {},
          50: {},
          100: {},
        });
      });
      it('returns empty object if array is empty', () => {
        expect(Keyframes._arrayToObject([])).toEqual({});
      });
    });

    describe('_normalizeKeyframeRule', () => {
      describe('converts the short form of describing property values to the long form', () => {
        it('sets `from` property to the default element property', () => {
          expect(
            Keyframes._normalizeKeyframeRule('width', 20, {}, element)
          ).toEqual({
            width: {
              from: 10,
              to: 20,
              unit: 'px',
            },
          });
          expect(
            Keyframes._normalizeKeyframeRule('width', '20px', {}, element)
          ).toEqual({
            width: {
              from: 10,
              to: 20,
              unit: 'px',
            },
          });
        });
        it('throws error if the specified `to` parameter has the unit different from the default unit', () => {
          expect(() =>
            Keyframes._normalizeKeyframeRule('width', '20%', {}, element)
          ).toThrow();
        });
        it('throws error if the property value is not a number, string or object', () => {
          expect(() =>
            Keyframes._normalizeKeyframeRule('width', [], {}, element)
          ).toThrow();
        });
      });
    });
  });
});
