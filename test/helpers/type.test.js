import {
  isNumber,
  isString,
  isObject,
  isArray,
  isNumeric,
  isHtmlElement,
} from '../../src/helpers/';
describe('helpers', () => {
  describe('type', () => {
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
      // todo check for array
      it('returns true if the provided parameter is an object', () => {
        expect(isObject({})).toBeTruthy();
      });
      it('returns false if the provided parameter is not an object', () => {
        expect(isObject(213)).toBeFalsy();
      });
    });
    describe('isArray()', () => {
      it('returns true if the provided parameter is an array', () => {
        expect(isArray([])).toBeTruthy();
      });
      it('returns false if the provided parameter is not an array', () => {
        expect(isArray('')).toBeFalsy();
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
    describe('isHtmlElement()', () => {
      it('returns true if the value is an instance of an html element', () => {
        expect(isHtmlElement(document.body)).toBeTruthy();
        document.body.innerHTML = `<svg><path id="p"/><div>`;
        expect(isHtmlElement(document.getElementById('p'))).toBeTruthy();
        expect(isHtmlElement('123')).toBeFalsy();
      })
    });
  });
});
