import Motus from '../src/Motus';
document.body.innerHTML = `<p>test</p>`;
const $element = document.querySelector('p');

describe('Point', () => {
  describe('getPxFromPoint()', () => {
    it('returns same value as the specified number if a number is specified', () => {
      const point = new Motus.Point(123, window);
      expect(point.getPxFromPoint()).toEqual(123);
    });
    describe(' if the specified argument is of type HTMLElement', () => {
      it('returns html element top position', () => {
        const point = new Motus.Point($element, window);
        expect(point.getPxFromPoint()).toEqual(0);
      });
      it('returns html element left position', () => {
        const point = new Motus.Point($element, window, true);
        expect(point.getPxFromPoint()).toEqual(0);
      });
    });
  });
});
