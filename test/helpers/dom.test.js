import {
  getValue,
  getElementDefaultProperty,
  getElementScroll,
  getElementDimensions,
} from '../../src/helpers/';
import { NO_UNIT, COLOR_UNIT } from '../../src/enum/specialUnitEnum';
import { getOffset } from '../../src/helpers/dom';
document.body.innerHTML = `<p>test</p>`;
const $element = document.querySelector('p');

describe('helpers', () => {
  describe('getValue()', () => {
    describe('returns an array with the value and unit', () => {
      it('works with negative values', () => {
        expect(getValue('-20px')).toEqual([-20, 'px']);
      });
      it('works for standard css units', () => {
        expect(getValue('20px')).toEqual([20, 'px']);
        expect(getValue(['20px', '20px'])).toEqual([[20, 'px'], [20, 'px']]);
      });
      it('returns [value, NO_UNIT] if the unit is not specified', () => {
        expect(getValue(1)).toEqual([1, NO_UNIT]);
      });
      describe('works with colors', () => {
        it('returns [value, COLOR_UNIT] if the value is a color', () => {
          expect(getValue('#fff')).toEqual(['rgb(255, 255, 255)', COLOR_UNIT]);
        });
        it('converts the given color into rgb/rgba format', () => {
          expect(getValue('red')).toEqual(['rgb(255, 0, 0)', COLOR_UNIT]);
          expect(getValue('rgba(123, 123, 123, .3)')).toEqual([
            'rgba(123, 123, 123, 0.3)',
            COLOR_UNIT,
          ]);
        });
      });
      describe('works with array values', () => {
        it('returns an array of arrays with the value and unit', () => {
          expect(getValue(['20px', 0.3, '3%'])).toEqual([
            [20, 'px'],
            [0.3, NO_UNIT],
            [3, '%'],
          ]);
        });
      });
      it('throws error if an invalid value is specified', () => {
        expect(() => getValue('px')).toThrow();
      });
    });
  });
  describe('getElementDefaultProperty()', () => {
    it('gets a default property of a dom element', () => {
      expect(getElementDefaultProperty($element, 'width')).toEqual(0 || '');
    });
  });
  describe('getElementScroll()', () => {
    describe('works for html elements', () => {
      // TODO define a custom getter to set the values
      it('returns the vertical scroll position', () => {
        expect(getElementScroll($element)).toEqual(0);
      });
      it('returns the horizontal scroll position if horizontal parameter is true', () => {
        // $element.offsetLeft= 100;
        expect(getElementScroll($element, true)).toEqual(0);
      });
    });
    describe('works for window element', () => {
      it('returns the vertical scroll position', () => {
        window.scrollY = 100;
        expect(getElementScroll(window)).toEqual(100);
      });
      it('returns the horizontal scroll position if horizontal parameter is true', () => {
        window.scrollX = 100;
        expect(getElementScroll(window, true)).toEqual(100);
      });
    });
  });
  describe('getElementDimensions()', () => {
    it('returns width and height for html element', () => {
      expect(getElementDimensions($element)).toEqual({ width: 0, height: 0 });
    });
    it('returns width and height for window element', () => {
      window.innerHeight = 100;
      window.innerWidth = 200;
      expect(getElementDimensions(window)).toEqual({ width: 200, height: 100 });
    })
  });
  describe('getOffset()', () => {
    document.body.innerHTML = `<div id="div"><svg><path id="p"/></svg></div>`;
    const $element = document.querySelector('p');
    const $parentElement = document.querySelector('div');
    it('returns 0 if no element is specified', () => {
      expect(getOffset()).toEqual(0);
    });
    it('returns the offset of the element', () => {
      expect(getOffset($element)).toEqual(0);
    });
    it('navigates to the first parent element that has offset properties and returns it\'s value', () => {
      expect(getOffset($element)).toEqual(getOffset($parentElement));
    });
    // todo testing offset properties
  });
});
