import Motus from '../src/Motus';
document.body.innerHTML = `<p>test</p>`;
const $element = document.querySelector('p');

describe('Point', () => {
  describe('getPxFromPoint()', () => {
    it('returns same value as the specified number if a number is specified', () => {
      const point = new Motus.Point(123);
      expect(point.getPxFromPoint()).toEqual(123);
    });
    it('returns html element top position if the specified argument is of type HTMLElement', () => {
      const point = new Motus.Point($element);
      expect(point.getPxFromPoint()).toEqual(0);
    });
  });
});
