import Animator from '../../src/animation/Animator';
import { NO_UNIT, COLOR_UNIT } from '../../src/enum/specialUnitEnum';
document.body.innerHTML = `<p>test</p>`;
const $element = document.querySelector('p');
describe('Animator', () => {
  const keyframes = {
    0: {
      width: { from: 10, to: 20, unit: 'px' },
    },
    50: { height: { from: 0, to: 100, unit: 'px' } },
    100: {
      width: { from: 0, to: 100, unit: '%' },
      translate: { from: [[10, 'px']], to: [[20, 'px']] },
      opacity: { from: 1, to: 0 },
      color: {
        from: 'rgb(0, 0, 0)',
        to: 'rgb(100, 100, 100)',
        unit: COLOR_UNIT,
      },
    },
  };
  const animator = new Animator(keyframes, $element);

  describe('_getCurrentKeyframesPercent()', () => {
    it('returns an array that contains the start and the end keyframe', () => {
      expect(animator._getCurrentKeyframesPercent(-1)).toEqual(['0', '0']);
      expect(animator._getCurrentKeyframesPercent(0)).toEqual(['0', '0']);
      expect(animator._getCurrentKeyframesPercent(30)).toEqual(['0', '50']);
      expect(animator._getCurrentKeyframesPercent(50)).toEqual(['0', '50']);
      expect(animator._getCurrentKeyframesPercent(70)).toEqual(['50', '100']);
      expect(animator._getCurrentKeyframesPercent(100)).toEqual(['50', '100']);
      expect(animator._getCurrentKeyframesPercent(101)).toEqual([]);
    });
  });
  describe('applyAnimation()', () => {
    it('applies all keyframes at 100 before the current precent', () => {
      animator.applyAnimations(50);
      expect($element.style.width).toEqual('20px');
    });
    it('applies the keyframe that is closest behind the current scroll position', () => {
      animator.applyAnimations(75);
      expect($element.style.width).toEqual('50%');
    });
  });
  describe('applyNoAnimations()', () => {
    it('removes all style properties from the dom element', () => {
      $element.style.opacity = 0.5;
      animator.applyNoAnimations();
      expect($element.style.opacity).toEqual('');
    });
    it('applies the first keyframe if exists', () => {
      animator.applyNoAnimations();
      expect($element.style._values).toEqual({ width: '20px' });
    });
  });
  describe('applyAllAnimations()', () => {
    it('applies all keyframes to 100', () => {
      animator.applyAllAnimations();
      expect($element.style._values).toEqual({
        height: '100px',
        color: 'rgb(100, 100, 100)',
        opacity: '0',
        transform: 'translate(20px)',
        width: '100%',
      });
    });
  });
  describe('_applyKeyframe()', () => {
    beforeEach(() => {
      animator._applyKeyframe(keyframes['100'], 50);
    });
    it('works with number values', () => {
      expect($element.style['width']).toEqual('50%');
      expect($element.style['opacity']).toEqual('0.5');
    });
    it('works with color values', () => {
      expect($element.style['color']).toEqual('rgb(50, 50, 50)');
    });
    it('works with array values', () => {
      expect($element.style['transform']).toEqual('translate(15px)');
    });
    it('throws error if an unknown combination is made', () => {
      expect(() =>
        animator._applyKeyframe(
          {
            width: { from: false, to: 100, unit: '%' },
          },
          50
        )
      ).toThrow();
    });
  });
  describe('_applyNumberValues()', () => {
    it('calculates and applies to the dom element proper number transformed based on percent', () => {
      animator._applyNumberValues('height', 100, 0, 'px', 50);
      expect($element.style.height).toEqual('50px');
      animator._applyNumberValues('opacity', 1, 0, NO_UNIT, 50);
      expect($element.style.opacity).toEqual('0.5');
    });
  });
  describe('_applyColorValues()', () => {
    it('calculates and applies to the dom element proper color transformed based on percent', () => {
      animator._applyColorValues(
        'background-color',
        'rgb(0,200,0)',
        'rgb(0,0,0)',
        50
      );
      expect($element.style.backgroundColor).toEqual('rgb(0, 100, 0)');
    });
  });
  describe('_applyArrayValues()', () => {
    it('property calculates the percent of all parameters and applies it to the dom element', () => {
      animator._applyArrayValues(
        'translate',
        [[10, 'px'], [10, 'px']],
        [[100, 'px'], [100, 'px']],
        50
      );

      expect($element.style.transform).toEqual('translate(55px, 55px)');
    });
  });
});
