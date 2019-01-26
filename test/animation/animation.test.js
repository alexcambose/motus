import Animation from '../../src/animation/Animation';
import { NO_UNIT, COLOR_UNIT } from '../../src/enum/specialUnitEnum';
document.body.innerHTML = `<p>test</p>`;
const $element = document.querySelector('p');
$element.style.width = '10px';
$element.style.height = '10px';
$element.style.opacity = 1;
$element.style.color = 'rgb(0,0,0)';

describe('Animation', () => {
  const keyframesArr = [
    {
      width: 100,
      height: {
        to: 20,
      },
    },
    {
      scale: 1.1,
      color: 'red',
      translate: ['30px', '30%'],
      width: 400,
      opacity: 0.2,
      height: {
        from: 100,
        to: 40,
      },
    },
  ];
  const keyframesObj = {
    0: {
      width: {
        from: 10,
        to: 100,
        unit: 'px',
      },
      height: {
        from: 10,
        to: 20,
        unit: 'px',
      },
    },
    100: {
      opacity: {
        from: 1,
        to: 0.2,
        unit: NO_UNIT,
      },
      width: {
        from: 100,
        to: 400,
        unit: 'px',
      },
      height: {
        from: 100,
        to: 40,
        unit: 'px',
      },
      translate: {
        from: [[0, 'px'], [0, 'px']],
        to: [[30, 'px'], [30, '%']],
        unit: undefined,
      },
      scale: {
        from: 1,
        to: 1.1,
        unit: NO_UNIT,
      },
      color: {
        from: 'rgb(0, 0, 0)',
        to: 'rgb(255, 0, 0)',
        unit: COLOR_UNIT,
      },
    },
  };
  const animation = new Animation(0, 200, $element, keyframesArr);
  it('keyframe normalization', () => {
    expect(animation.keyframes).toEqual(keyframesObj);
  });
  describe('start()', () => {
    it('sets the started parameter to true', () => {
      expect(animation.started).toEqual(false);
      animation.start();
      expect(animation.started).toEqual(true);
    });
  });
  describe('stop()', () => {
    it('sets the started parameter to false', () => {
      expect(animation.started).toEqual(true);
      animation.stop();
      expect(animation.started).toEqual(false);
    });
  });
  describe('_getScrollPosition()', () => {
    it('returns the top scroll position', () => {
      expect(animation._getScrollPosition()).toEqual(0);
    });
    it('returns the left scroll position', () => {
      animation.options.horizontal = true;
      expect(animation._getScrollPosition()).toEqual(0);
      animation.options.horizontal = false;
    });
  });
  describe('__compute()', () => {
    it('does not work if the animation is not started', () => {
      const style = $element.style._values;
      animation.__compute();
      expect($element.style._values).toEqual(style);
    });
    it('applies the animation that is matched with the scroll', () => {
      animation.start();
      window.scrollY = 100;
      animation.__compute();
      expect($element.style.width).toEqual('250px');
      expect($element.style.height).toEqual('70px');
    });
    it('applies all the keyframes if the scroll is over the last keyframe', () => {
      animation.start();

      window.scrollY = 201;
      animation.__compute();
      expect($element.style.width).toEqual('400px');
      expect($element.style.height).toEqual('40px');
    });
    it('erases all the styles and applies the 0 keyframe if exists if the scroll is before all keyframes', () => {
      animation.start();

      window.scrollY = -1;
      animation.__compute();
      expect($element.style.width).toEqual('100px');
      expect($element.style.height).toEqual('20px');
    });
  });
});
