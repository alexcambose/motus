import Keyframes from '../../src/animation/Keyframes';
import { COLOR_UNIT, NO_UNIT } from '../../src/enum/specialUnitEnum';

document.body.innerHTML = `<p>test</p>`;
const $element = document.querySelector('p');
$element.style.width = '10px';
$element.style.height = '10px';
$element.style.color = 'rgb(255, 255, 255)';
$element.style.opacity = '1';

describe('keyframes', () => {
  describe('normalize', () => {
    it('throws error if no keyframes are specified', () => {
      expect(() => Keyframes.normalize({})).toThrow();
    });
    it('throws error if the keyframe percent value is not a valid number', () => {
      expect(() => Keyframes.normalize({ '13a2': {} })).toThrow();
    });
    it('throws error if the keyframe value is not an object / string / number', () => {
      expect(() => Keyframes.normalize({ 0: { height: () => {} } })).toThrow();
    });
    it('throws error if the keyframe value is not defined', () => {
      expect(() => Keyframes.normalize({ 0: { height: undefined } })).toThrow();
    });
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
      it('sets 100 percent if in the animation is just one keyframe', () => {
        expect(Keyframes._arrayToObject([{}])).toEqual({100:{}});
      })
    });

    describe('_normalizeKeyframeRule', () => {
      describe('converts the short form of describing property values to the long form', () => {
        it('sets `from` property to the default $element property', () => {
          expect(
            Keyframes._normalizeKeyframeRule(
              'width',
              0,
              { 0: { width: 20 } },
              $element
            )
          ).toEqual({
            from: 10,
            to: 20,
            unit: 'px',
          });
        });
        it('throws error if the specified `to` parameter has the unit different from the default unit', () => {
          expect(() =>
            Keyframes._normalizeKeyframeRule('width', '20%', 0, {}, $element)
          ).toThrow();
        });
        it('throws error if the property value is not a number, string or object', () => {
          expect(
            () => Keyframes._normalizeKeyframeRule('width', 0, {}, $element) // when the property value does not exist
          ).toThrow();
        });
        it('does not throw error if property value is 0 (falsy)', () => {
          expect(
            () =>
              Keyframes._normalizeKeyframeRule(
                'width',
                0,
                { 0: { width: 0 } },
                $element
              ) // when the property value does exist but it's 0
          ).not.toThrow();
        });
      });
    });

    describe('_getPreviousKeyframe', () => {
      const obj = { 0: { a: 'b' }, 100: { c: 'd' } };
      it('returns previous keyframe', () => {
        expect(Keyframes._getPreviousKeyframe(obj, 100)).toEqual(0);
      });
      it('returns false if the provided keyframe is the first one', () => {
        expect(Keyframes._getPreviousKeyframe(obj, 0)).toBeFalsy();
      });
    });
    describe('_previousKeyframeProperty', () => {
      const obj = {
        0: {
          width: { from: 100, to: 200, unit: 'px' },
          translate: { to: ['30px'] },
        },
        50: { height: { from: 100, to: 100, unit: 'px' }, translate: ['40px'] },
        100: { width: 300 },
      };
      it('searces the property in the keyframes before', () => {
        expect(
          Keyframes._previousKeyframeProperty('width', 100, obj, $element)
        ).toEqual([200, 'px']);
      });
      it('returns the default property if the keyframes did not contain any properties related to the one that is searched', () => {
        expect(
          Keyframes._previousKeyframeProperty('height', 50, obj, $element)
        ).toEqual([10, 'px']);
      });
      it('returns only the `to` property if the searched value is an array', () => {
        expect(
          Keyframes._previousKeyframeProperty('translate', 50, obj, $element)
        ).toEqual(['30px']);
      });
    });
    describe('_normalizeNumberValue', () => {
      it('inherits the unit from the default property', () => {
        const k = {
          0: { width: 100, color: 'red', opacity: 0.5 },
        };
        expect(
          Keyframes._normalizeNumberValue('width', 0, k, $element)
        ).toEqual([10, 100, 'px']);
        expect(
          Keyframes._normalizeNumberValue('color', 0, k, $element)
        ).toEqual(['rgb(255, 255, 255)', 'red', COLOR_UNIT]);
        expect(
          Keyframes._normalizeNumberValue('opacity', 0, k, $element)
        ).toEqual([1, 0.5, NO_UNIT]);
      });
      it('inherits the unit and sets the `from` from the property before', () => {
        const k = {
          0: { width: { from: 10, to: 100, unit: '%' } },
          100: { width: 200 },
        };
        expect(
          Keyframes._normalizeNumberValue('width', 100, k, $element)
        ).toEqual([100, 200, '%']);
      });
    });
    describe('_normalizeStringValue', () => {
      it('throws error if the property that is inherited from the previous keyframe has a diferent unit', () => {
        expect(() =>
          Keyframes._normalizeStringValue(
            'width',
            0,
            { 0: { width: '30%' } },
            $element
          )
        ).toThrow();
      });
      it('throws error if the property that is inherited from the default value has a diferent unit', () => {
        expect(() =>
          Keyframes._normalizeStringValue(
            'width',
            0,
            { 0: { width: '100pt' } },
            $element
          )
        ).toThrow();
      });
      it('inherits the unit from the default property', () => {
        const k = {
          0: { width: '100px', color: 'red', opacity: 0.5 },
        };
        expect(
          Keyframes._normalizeStringValue('width', 0, k, $element)
        ).toEqual([10, 100, 'px']);
        expect(
          Keyframes._normalizeNumberValue('color', 0, k, $element)
        ).toEqual(['rgb(255, 255, 255)', 'red', COLOR_UNIT]);
        expect(
          Keyframes._normalizeNumberValue('opacity', 0, k, $element)
        ).toEqual([1, 0.5, NO_UNIT]);
      });
      it('inherits the unit and sets the `from` from the property before', () => {
        const k = {
          0: { width: { from: 10, to: 100, unit: '%' } },
          100: { width: '200%' },
        };
        expect(
          Keyframes._normalizeStringValue('width', 100, k, $element)
        ).toEqual([100, 200, '%']);
      });
    });

    describe('_normalizeObjectValue', () => {
      it('does not throw error if the property that is inherited from the previous keyframe has a diferent unit', () => {
        expect(() =>
          Keyframes._normalizeObjectValue(
            'width',
            0,
            { 0: { width: { to: 30, unit: '%' } } },
            $element
          )
        ).not.toThrow();
      });
      it('throws error if the `from` and `to` property have different units', () => {
        expect(() =>
          Keyframes._normalizeObjectValue(
            'width',
            0,
            { 0: { width: { from: '10px', to: '30%' } } },
            $element
          )
        ).toThrow();
      });
      it('throws error `to` is not defined', () => {
        expect(() =>
          Keyframes._normalizeObjectValue(
            'width',
            0,
            { 0: { width: { from: '10px'} } },
            $element
          )
        ).toThrow();
      });
      it('inherits the unit from the default property', () => {
        const k = {
          0: {
            width: { from: 10, to: 100 },
            color: { from: 'rgb(255, 255, 255)', to: 'red' },
            opacity: { from: 1, to: 0.5 },
          },
        };
        expect(
          Keyframes._normalizeObjectValue('width', 0, k, $element)
        ).toEqual([10, 100, 'px']);

        expect(
          Keyframes._normalizeObjectValue('color', 0, k, $element)
        ).toEqual(['rgb(255, 255, 255)', 'rgb(255, 0, 0)', COLOR_UNIT]);

        expect(
          Keyframes._normalizeObjectValue('opacity', 0, k, $element)
        ).toEqual([1, 0.5, NO_UNIT]);
      });
      it('inherits the unit and sets the `from` from the property before', () => {
        const k = {
          0: { width: { from: 10, to: 100, unit: '%' } },
          100: { width: { to: '200%' } },
        };
        expect(
          Keyframes._normalizeObjectValue('width', 100, k, $element)
        ).toEqual([100, 200, '%']);
      });

      it('thorws error if property `to` is not defined', () => {
        expect(() =>
          Keyframes._normalizeObjectValue(
            'height',
            0,
            { 0: { height: {} } },
            $element
          )
        ).toThrow();
      });
    });
  });
});
