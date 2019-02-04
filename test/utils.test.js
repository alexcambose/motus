import {
  camelToKebabCase,
  getValue,
  getElementDefaultProperty,
  isNumber,
  isString,
  isObject,
  isNumeric,
  previousArrayValue,
  calculatePercent,
  calculateValueFromPercent,
  createFunctionString,
  floorWithPrecision,
  isHtmlElement,
  getElementScroll,
} from '../src/utils';
import { NO_UNIT, COLOR_UNIT } from '../src/enum/specialUnitEnum';

document.body.innerHTML = `<p>test</p>`;
const $element = document.querySelector('p');

describe('utils', () => {
  describe('camelToKebabCase()', () => {
    it('converts aaBcDe to aa-bc-de', () => {
      expect(camelToKebabCase('aaBcDe')).toEqual('aa-bc-de');
    });
  });
  describe('getValue()', () => {
    describe('returns an array with the value and unit', () => {
      it('return px as default is unit is not specified', () => {
        expect(getValue('20px')).toEqual([20, 'px']);
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
  describe('getElementDefaultProperty()', () => {
    it('gets a default property of a dom element', () => {
      expect(getElementDefaultProperty($element, 'width')).toEqual(0 || '');
    });
  });
  describe('isNumber()', () => {
    it('returns true if the provided parameter is a number', () => {
      expect(isNumber(123)).toBeTruthy();
      expect(isNumber(4321)).toBeTruthy();
    });
    it('returns false if the provided parameter is not a number', () => {
      expect(isNumber('123')).toBeFalsy();
      expect(isNumber(true)).toBeFalsy();
    });
  });
  describe('isString()', () => {
    it('returns true if the provided parameter is a string', () => {
      expect(isString('123')).toBeTruthy();
    });
    it('returns false if the provided parameter is not a string', () => {
      expect(isString(123)).toBeFalsy();
    });
  });
  describe('isObject()', () => {
    it('returns true if the provided parameter is an object', () => {
      expect(isObject({})).toBeTruthy();
    });
    it('returns false if the provided parameter is not an object', () => {
      expect(isObject(213)).toBeFalsy();
    });
  });
  describe('isArray()', () => {
    it('returns true if the provided parameter is an array', () => {
      expect(isObject([])).toBeTruthy();
    });
    it('returns false if the provided parameter is not an array', () => {
      expect(isObject('')).toBeFalsy();
    });
  });
  describe('isNumeric()', () => {
    it('returns true if the provided parameter is a numeric value', () => {
      expect(isNumeric('123')).toBeTruthy();
      expect(isNumeric(123)).toBeTruthy();
    });
    it('returns false if the provided parameter is not a numeric value', () => {
      expect(isNumeric('123a')).toBeFalsy();
      expect(isNumeric([])).toBeFalsy();
    });
  });
  describe('previousArrayValue()', () => {
    const obj = {
      1: {},
      4: {},
      3: {},
    };
    it('returns the previous key of an object', () => {
      expect(previousArrayValue(Object.keys(obj), 3)).toEqual(1);
      expect(previousArrayValue(Object.keys(obj), 4)).toEqual(3);
    });
    it('returns false if the provided key is the first one', () => {
      expect(previousArrayValue(Object.keys(obj), 1)).toBeFalsy();
      expect(typeof previousArrayValue(Object.keys(obj), 1)).toEqual('boolean');
    });
    it("returns false if the provided key doesn't exist ", () => {
      expect(previousArrayValue(Object.keys(obj), 6)).toBeFalsy();
      expect(typeof previousArrayValue(Object.keys(obj), 1)).toEqual('boolean');
    });
  });
  describe('calculatePercent', () => {
    it('gets the percent with values starting from 0 to 100', () => {
      expect(calculatePercent(0, 100, 50)).toEqual(50);
    });
    it('gets the percent with values starting from 50 to 100 or any values', () => {
      expect(calculatePercent(50, 100, 50)).toEqual(0);
      expect(calculatePercent(80, 100, 60)).toEqual(-100);
      expect(calculatePercent(80, 100, 100)).toEqual(100);
    });
  });
  describe('floorWithPrecision()', () => {
    it('returns the same number if precision is 0', () => {
      expect(floorWithPrecision(123)).toEqual(123);
      expect(floorWithPrecision(123.43)).toEqual(123.43);
    });
    it('returns the same number if precision is over the number of decimals of the number', () => {
      expect(floorWithPrecision(123.3, 4)).toEqual(123.3);
    });
    it('trims the number of decimals to a specified count', () => {
      expect(floorWithPrecision(123.123456, 1)).toEqual(123.1);
      expect(floorWithPrecision(123.123456, 2)).toEqual(123.12);
      expect(floorWithPrecision(123.123456, 5)).toEqual(123.12345);
      expect(floorWithPrecision(123.123456, 6)).toEqual(123.123456);
    });
  });
  describe('calculateValueFromPercent()', () => {
    it('returns the same value for min an max: 0 and 100', () => {
      expect(calculateValueFromPercent(0, 100, 20)).toEqual(20);
    });
    it('calculates the difference if min and max are custom', () => {
      expect(calculateValueFromPercent(10, 60, 50)).toEqual(35);
    });
    it('converts a number into a number fixed decimal length', () => {
      expect(calculateValueFromPercent(0, 100, 50, 2)).toEqual(50);
    });
    it('returns the value trimmed by precision', () => {
      for (let i = 1; i <= 10; i++) {
        expect(calculateValueFromPercent(0, 100, Math.PI, i)).toEqual(floorWithPrecision(Math.PI, i));
      }
    });
  });
  describe('createFunctionString()', () => {
    it('returns a string representing the function with specified parameters', () => {
      expect(
        createFunctionString('translate', [[10, 'px'], [90, 'px']])
      ).toEqual('translate(10px, 90px)');
    });
    it('returns a function with no params if no parameters are specified', () => {
      expect(createFunctionString('translate', [])).toEqual('translate()');
    });
  });
  describe('isHtmlElement()', () => {
    it('returns true if the value is an instance of an html element', () => {
      expect(isHtmlElement(document.body)).toBeTruthy();
      expect(isHtmlElement('123')).toBeFalsy();
    })
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
});
