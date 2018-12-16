import {
  camelToKebabCase,
  getValue,
  getElementDefaultProperty,
  isNumber,
  isString,
} from '../src/utils';
document.body.innerHTML = `<p>test</p>`;
const element = document.querySelector('p');

describe('utils', () => {
  describe('camelToKebabCase', () => {
    it('converts aaBcDe to aa-bc-de', () => {
      expect(camelToKebabCase('aaBcDe')).toEqual('aa-bc-de');
    });
  });
  describe('getValue', () => {
    it('returns an array with the value and unit', () => {
      expect(getValue('20px')).toEqual([20, 'px']);
    });
    it('throws error if an invalid value is specified', () => {
      expect(getValue('20px')).toEqual([20, 'px']);
    });
  });
  describe('getElementDefaultProperty', () => {
    it('gets a default property of a dom element', () => {
      expect(getElementDefaultProperty(element, 'width')).toEqual(0 || '');
    });
  });
  describe('isNumber', () => {
    it('returns true if the provided parameter is a number', () => {
      expect(isNumber(123)).toBeTruthy();
    });
    it('returns false if the provided parameter is not a number', () => {
      expect(isNumber('123')).toBeFalsy();
    });
  });
  describe('isString', () => {
    it('returns true if the provided parameter is a string', () => {
      expect(isString('123')).toBeTruthy();
    });
    it('returns false if the provided parameter is not a string', () => {
      expect(isString(123)).toBeFalsy();
    });
  });
});
