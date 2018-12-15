import {
  camelToKebabCase,
  getValue,
  getElementDefaultProperty,
} from '../src/utils';
const { JSDOM } = require('jsdom');
const dom = new JSDOM(`<!DOCTYPE html><p>test</p>`);
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
      expect(
        getElementDefaultProperty(
          dom.window.document.querySelector('p'),
          'width',
          dom.window
        )
      ).toEqual(0 || '');
    });
  });
});
