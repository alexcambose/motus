import Motus from '../src/Motus';

describe('Point', () => {
  let motus;
  beforeEach(() => {
    motus = new Motus();
  });
  describe('getPxFromPoint()', () => {
    it('returns same value if a number is specified', () => {
      const point = new motus.Point(123);
      expect(point.px).toEqual(123);
    });
  });
});
