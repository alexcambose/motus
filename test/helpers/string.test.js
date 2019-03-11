import {
  camelToKebabCase,
  createFunctionString
} from '../../src/helpers/';
describe('helpers', () => {
  describe('camelToKebabCase()', () => {
    it('converts aaBcDe to aa-bc-de', () => {
      expect(camelToKebabCase('aaBcDe')).toEqual('aa-bc-de');
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
});