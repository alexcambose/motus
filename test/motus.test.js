import Motus from '../src/Motus';

describe('Motus', () => {
  it('has `Animation` class in class properties', () => {
    const animation = Motus.Animation;
    expect(animation).toBeTruthy();
  });
  it('has `Point` class in class properties', () => {
    const point = new Motus.Point();
    expect(point instanceof Motus.Point).toBeTruthy();
  });

  describe('addAnimation()', () => {
    const animation = new Motus.Animation({ $el: document.body, keyframes: { 0: {} } });
    beforeEach(() => {
      Motus.clearAnimations();
    });
    it('appends to the _animations the animation', () => {
      expect(Motus._animations).toEqual([]);
      Motus.addAnimation(animation);
      expect(Motus._animations).toEqual([animation]);
    });
    it('sets the animation as started by default', () => {
      Motus.addAnimation(animation);
      expect(Motus._animations[0].started).toBeTruthy();
    });
    it('does not set the animation as started if the second parameter is false', () => {
      Motus.addAnimation(animation, false);
      expect(Motus._animations[0].started).toBeFalsy();
    });
    it('throws erorr if the specified animation is not an instance of Motus.Animation', () => {
      expect(() => {
        Motus.addAnimation({});
      }).toThrow();
    });
  });
  describe('clearAnimation()', () => {
    const animation = new Motus.Animation({ $el: document.body, keyframes: [{}] });
    it('automatically stops the animations by default', () => {
      Motus.addAnimation(animation);

      Motus.clearAnimation(animation);
      expect(animation.started).toBeFalsy();
    });
    it('removes the animation from the motus animations array', () => {
      Motus.addAnimation(animation);
      Motus.clearAnimation(animation);
      expect(Motus._animations).toEqual([]);
    });
    it('throws error if the specified animation has not been added to motus with Motus.addAnimation', () => {
      Motus._animations = [];
      expect(() => {
        Motus.clearAnimation(animation);
      }).toThrow();
      Motus.addAnimation(animation)
      expect(() => {
        Motus.clearAnimation(animation);
      }).not.toThrow();
    });
    it('throws error if the specified animation is not an instance of Motus.Animation', () => {
      expect(() => {
        Motus.clearAnimation({});
      }).toThrow();
    });
  });
  describe('clearAnimations()', () => {
    const animation = new Motus.Animation({ $el: document.body, keyframes: { 0: {} } });
    it('empties the _animations array', () => {
      Motus.addAnimation(animation);
      Motus.clearAnimations();
      expect(Motus._animations).toEqual([]);
    });
    it('automatically stops the animations by default', () => {
      Motus.addAnimation(animation);
      Motus.clearAnimations();
      expect(animation.started).toBeFalsy();
    });
    it('does not stop the animations if the `autostop` parameter is set to false', () => {
      Motus.addAnimation(animation);
      Motus.clearAnimations(false);
      expect(animation.started).toBeTruthy();
    });
  });
});
