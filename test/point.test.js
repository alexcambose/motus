import Motus from '../src/Motus';
document.body.innerHTML = `<div><p>test</p><div>`;
const $element = document.querySelector('p');
const $parentElement = document.querySelector('div');

describe('Point', () => {
  describe('getPxFromPoint()', () => {
    it('returns same value as the specified number if a number is specified', () => {
      expect(Motus.Point.getPxFromPoint(123, window)).toEqual(123);
      expect(Motus.Point.getPxFromPoint(123, window, true)).toEqual(123);
    });
    
    describe('if the specified argument is of type HTMLElement', () => {
      it('returns html element top position', () => {
        expect(Motus.Point.getPxFromPoint($element, window)).toEqual(0);
        expect(Motus.Point.getPxFromPoint($element, $parentElement)).toEqual(0);
      });
      it('returns html element left position', () => {
        expect(Motus.Point.getPxFromPoint($element, window, true)).toEqual(0);
        expect(Motus.Point.getPxFromPoint($element, $parentElement, true)).toEqual(0);
      });
    });
  });

  describe('getDistanceFromParent()', () => {
    it('returns html element top position', () => {
      expect(Motus.Point.getDistanceFromParent($element, $parentElement)).toEqual(0);
      expect(Motus.Point.getDistanceFromParent($element, window)).toEqual(0);
    });
    it('returns html element left position', () => {
      expect(Motus.Point.getDistanceFromParent($element, $parentElement, true)).toEqual(0);
      expect(Motus.Point.getDistanceFromParent($element, window, true)).toEqual(0);
    });
  })
});
