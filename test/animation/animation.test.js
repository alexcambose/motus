import Animation from '../../src/animation/Animation';
import { NO_UNIT, COLOR_UNIT } from '../../src/enum/specialUnitEnum';
document.body.innerHTML = `<p>test</p>`;
const $element = document.querySelector('p');
const resetStyles = () => {
  $element.style.width = '10px';
  $element.style.height = '10px';
  $element.style.opacity = 1;
  $element.style.color = 'rgb(0,0,0)';
};
resetStyles();
describe('Animation', () => {
  const keyframesArr = [
    {
      width: 100,
      height: {
        to: '20px',
      },
    },
    {
      scale: [1.1],
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
        from: [[1, NO_UNIT]],
        to: [[1.1, NO_UNIT]],
        unit: undefined,
      },
      color: {
        from: 'rgb(0, 0, 0)',
        to: 'rgb(255, 0, 0)',
        unit: COLOR_UNIT,
      },
    },
  };
  const animation = new Animation({ startPoint: 0, endPoint: 200, $el: $element, keyframes: keyframesArr });
  it('keyframe normalization', () => {
    expect(animation.keyframes).toEqual(keyframesObj);
  });
  it ('getUid()', () => {
    expect(animation.getUid()).toBeTruthy();
  });
  it('throws error if the specified element is not a valid html element', () => {
    expect(() => {
      new Animation({ startPoint: 0, endPoint: 200, $el: false, keyframes: keyframesArr });
    }).toThrow();
  });
  describe('points', () => {
    describe('points not being defined', () => {
      it('start point is not defined or falsy', () => {
        const anim = new Animation({ endPoint: 200, $el: $element, keyframes: keyframesArr });
        // for some reason window height is 768
        expect(anim.startPoint).toEqual(-768);
      });
      it('end point is not defined or falsy', () => {
        const anim = new Animation({ startPoint: 200, $el: $element, keyframes: keyframesArr });
        expect(anim.endPoint).toEqual(0);
      });
      it('both start and end points are not defined', () => {
        const anim = new Animation({ $el: $element, keyframes: keyframesArr });
        expect(anim.startPoint).toEqual(-768);
        expect(anim.endPoint).toEqual(0);
      });
      it('get the element dimensions conditionally if the horizontal property is set or not', () => {
        const anim = new Animation({ $el: $element, keyframes: keyframesArr, horizontal: true });
        expect(anim.startPoint).toEqual(-1024); // for some reason it is this value

      });
    });
    describe('points as arrays - adds the number inside the array', () => {
      it('works for start point', () => {
        const oldAnimation = new Animation({ $el: $element, keyframes: keyframesArr });
        const newAnimation = new Animation({ startPoint: [10], $el: $element, keyframes: keyframesArr });
        expect(newAnimation.startPoint).toEqual(oldAnimation.startPoint + 10);
      });
      it('works for end point', () => {
        const oldAnimation = new Animation({ $el: $element, keyframes: keyframesArr });
        const newAnimation = new Animation({ endPoint: [10], $el: $element, keyframes: keyframesArr });
        expect(newAnimation.endPoint).toEqual(oldAnimation.endPoint + 10);
      });
    })
  });
  describe('animation hooks', () => {
    afterEach(() => {
      window.scrollY = 0;
      resetStyles();
    });
    const defaultConfig = {
      started: true,
    };

    describe('onScroll()', () => {
      const scrollMock = jest.fn();
      beforeEach(jest.resetAllMocks);
      const newAnimation = new Animation({ startPoint: 100, endPoint: 200, $el: $element, keyframes: keyframesArr,
        onScroll: scrollMock,
        ...defaultConfig,
      });
      // by default animation is not started
      newAnimation.started = true;
      it('contains the scroll position', () => {
        window.scrollY = 123;
        newAnimation.__compute();
        expect(scrollMock.mock.calls.length).toEqual(1);
        expect(scrollMock.mock.calls[0][0]).toEqual(123);
      });
      it('triggers if it is inside parameters', () => {
        // self assignment of window scrollY to simulate scroll
        window.scrollY = 123;
        // call the function that handles animation hooks
        newAnimation.__compute();
        expect(scrollMock.mock.calls.length).toEqual(1);
      });
      it('does not trigger if the animation is not started', () => {
        newAnimation.started = false;
        window.scrollY = 321;
        newAnimation.__compute();
        expect(scrollMock.mock.calls.length).toEqual(0);
      });
    });

    describe('onScrollBetween()', () => {
      const scrollMock = jest.fn();
      beforeEach(jest.resetAllMocks);
      const newAnimation = new Animation({
        startPoint: 100, endPoint: 200, $el: $element, keyframes: keyframesArr,
        onScrollBetween: scrollMock,
        ...defaultConfig,
      });

      it('contains the scroll position and scroll percent as parameters', () => {
        window.scrollY = 190;
        newAnimation.__compute();
        expect(scrollMock.mock.calls[0][0]).toEqual(190);
        expect(scrollMock.mock.calls[0][1]).toEqual(90);
      });

      it('triggers if it is inside parameters', () => {
        window.scrollY = 190;
        newAnimation.__compute();
        expect(scrollMock.mock.calls.length).toEqual(1);
      });

      it('does not trigger if it is outside parameters', () => {
        window.scrollY = 91;
        newAnimation.__compute();
        expect(scrollMock.mock.calls.length).toEqual(0);
      });
    });

    describe('onScrollBefore()', () => {
      const scrollMock = jest.fn();
      beforeEach(jest.resetAllMocks);

      const newAnimation = new Animation({
        startPoint: 100, endPoint: 200, $el: $element, keyframes: keyframesArr,
        onScrollBefore: scrollMock,
        ...defaultConfig,
      });

      it('contains the scroll position as parameter', () => {
        window.scrollY = 90;
        newAnimation.__compute();
        expect(scrollMock.mock.calls[0][0]).toEqual(90);
      });

      it('triggers if it is before start position', () => {
        window.scrollY = 90;
        newAnimation.__compute();
        expect(scrollMock.mock.calls.length).toEqual(1);
      });

      it('does not trigger if it is outside parameters', () => {
        window.scrollY = 100;
        newAnimation.__compute();
        expect(scrollMock.mock.calls.length).toEqual(0);
      });
    });

    describe('onScrollAfter()', () => {
      const scrollMock = jest.fn();
      beforeEach(jest.resetAllMocks);

      const newAnimation = new Animation({
        startPoint: 100, endPoint: 200, $el: $element, keyframes: keyframesArr,
        onScrollAfter: scrollMock,
        ...defaultConfig,
      });

      it('contains the scroll position as parameter', () => {
        window.scrollY = 290;
        newAnimation.__compute();
        expect(scrollMock.mock.calls[0][0]).toEqual(290);
      });

      it('triggers if it is after start position', () => {
        window.scrollY = 290;
        newAnimation.__compute();
        expect(scrollMock.mock.calls.length).toEqual(1);
      });

      it('does not trigger if it is outside parameters', () => {
        window.scrollY = 140;
        newAnimation.__compute();
        expect(scrollMock.mock.calls.length).toEqual(0);
      });
    });
    describe('onHitBottom()', () => {
      const scrollMock = jest.fn();
      const newAnimation = new Animation({
        startPoint: 100, endPoint: 200, $el: $element, keyframes: keyframesArr,
        onHitBottom: scrollMock,
        ...defaultConfig,
      });
      beforeEach(() => {
        jest.resetAllMocks();
        window.scrollY = 150;
        newAnimation.__compute();
      });

      it('triggers once if it hits the start point or over', () => {
        window.scrollY = 201;
        newAnimation.__compute();
        expect(scrollMock.mock.calls.length).toEqual(1);
      });

      it('triggers again only if the scroll went under the start point', () => {
        window.scrollY = 210;
        newAnimation.__compute();
        expect(scrollMock.mock.calls.length).toEqual(1);
        window.scrollY = 110;
        newAnimation.__compute();
        window.scrollY = 210;
        newAnimation.__compute();
        expect(scrollMock.mock.calls.length).toEqual(2);
      });
      it('does not trigger if outside parameters', () => {
        window.scrollY = 190;
        newAnimation.__compute();
        expect(scrollMock.mock.calls.length).toEqual(0);
      });
    });
    describe('onHitTop()', () => {
      const scrollMock = jest.fn();
      const newAnimation = new Animation({
        startPoint: 100, endPoint: 200, $el: $element, keyframes: keyframesArr,
        onHitTop: scrollMock,
        ...defaultConfig,
      });
      beforeEach(() => {
        jest.resetAllMocks();
        window.scrollY = 150;
        newAnimation.__compute();
      });

      it('triggers once if it hits the top point or higher', () => {
        window.scrollY = 99;
        newAnimation.__compute();
        expect(scrollMock.mock.calls.length).toEqual(1);
      });
      it('triggers again only if the scroll over under the end point', () => {
        window.scrollY = 99;
        newAnimation.__compute();
        expect(scrollMock.mock.calls.length).toEqual(1);
        window.scrollY = 101;
        newAnimation.__compute();
        window.scrollY = 99;
        newAnimation.__compute();
        expect(scrollMock.mock.calls.length).toEqual(2);
      });
      it('does not trigger if outside parameters', () => {
        window.scrollY = 101;
        newAnimation.__compute();
        expect(scrollMock.mock.calls.length).toEqual(0);
      });
    });
    describe('onStart()', () => {
      const scrollMock = jest.fn();
      const newAnimation = new Animation({
        startPoint: 100, endPoint: 200, $el: $element, keyframes: keyframesArr,
        onStart: scrollMock,
        ...defaultConfig,
        started: false,
      });
      beforeEach(() => {
        jest.resetAllMocks();
      });

      it('triggers when animation is started', () => {
        newAnimation.start();
        newAnimation.start();
        expect(scrollMock.mock.calls.length).toEqual(1);
      });
    });
    describe('onStop()', () => {
      const scrollMock = jest.fn();
      const newAnimation = new Animation({
        startPoint: 100, endPoint: 200, $el: $element, keyframes: keyframesArr,
        onStop: scrollMock,
        ...defaultConfig,
        started: true,
      });
      beforeEach(() => {
        jest.resetAllMocks();
      });

      it('triggers when animation is stopped', () => {
        newAnimation.stop();
        newAnimation.stop();
        expect(scrollMock.mock.calls.length).toEqual(1);
      });
    });
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
  describe('isStarted()', () => {
    it('returns the started status of the animation', () => {
      expect(animation.isStarted()).toEqual(animation.started);
      animation.stop();
      expect(animation.isStarted()).toEqual(animation.started);
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
