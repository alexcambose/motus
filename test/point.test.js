import Motus from '../src/Motus';

describe('Point', () => {
  describe('getPxFromPoint()', () => {
    it('returns same value if a number is specified', () => {
      const point = new Motus.Point(123);
      expect(point.px).toEqual(123);
    });
  });
});
