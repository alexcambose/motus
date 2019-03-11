import { isSet } from '../../src/helpers/';

describe('helpers', () => {
  describe('isSet()', () => {
    it('returns true for truthy values and 0', () => {
      expect(isSet(true)).toBeTruthy();
      expect(isSet(1)).toBeTruthy();
      expect(isSet(0)).toBeTruthy();
      expect(isSet([])).toBeTruthy();
    });
    it('returns false for falsy values', () => {
      expect(isSet(false)).toBeFalsy();
      expect(isSet(null)).toBeFalsy();
      expect(isSet(undefined)).toBeFalsy();
    });
  });
})