import Animator from '../../src/animation/Animator';
document.body.innerHTML = `<p>test</p>`;
const $element = document.querySelector('p');
describe('Animator', () => {
  const animator = new Animator(
    {
      0: { height: 10 },
      50: { height: 20 },
      100: { height: 30 },
    },
    $element
  );
  describe('_getCurrentKeyframesPercent', () => {
    it('returns an array that contains the start and the end keyframe', () => {
      expect(animator._getCurrentKeyframesPercent(0)).toEqual(['0', '0']);
      expect(animator._getCurrentKeyframesPercent(30)).toEqual(['0', '50']);
      expect(animator._getCurrentKeyframesPercent(50)).toEqual(['0', '50']);
      expect(animator._getCurrentKeyframesPercent(70)).toEqual(['50', '100']);
      expect(animator._getCurrentKeyframesPercent(100)).toEqual(['50', '100']);
    });
  });
});
