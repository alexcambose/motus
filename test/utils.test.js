import { camelToKebabCase, getValue } from '../src/utils';
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
  });
});
