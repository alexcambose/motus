import Animation from './animation/Animation';
import Point from './Point';
import throwError from './helpers/throwError.js';
import { ANIMATION_NOT_INSTANCE_OF_ANIMATION, NO_ANIMATION_FOUND } from './enum/errorEnum';
import { COLOR_UNIT, NO_UNIT } from './enum/specialUnitEnum';

/** Main motus object, contains all animations */
class Motus {
  constructor () {
    this.Animation = Animation;
    this.Point = Point;
    this._animations = [];
    this.NO_UNIT = NO_UNIT;
    this.COLOR_UNIT = COLOR_UNIT;
  }

  /** Adds an animation
   * @example
   * const newAnimation = new Motus.Animation({...});
   * Motus.addAnimation(newAnimation);
   * @param  {Motus.Animation} animation The animation class
   * @param  {boolean} autostart=true If true the scroll event listener will be automatically added
   */
  addAnimation (animation, autostart = true) {
    // provided animation must be an instance of Motus.Animation
    if (animation instanceof this.Animation) {
      this._animations.push(animation);
      if (autostart) animation.start();
    } else {
      throwError(ANIMATION_NOT_INSTANCE_OF_ANIMATION);
    }
  }

  /**
   * Removes a registered animation
   * @example
   * const newAnimation = new Motus.Animation({...});
   * Motus.addAnimation(newAnimation);
   * Motus.clearAnimation(newAnimation);
   * @param  {Motus.Animation} animation The animation that will be cleared
   * @param  {boolean} autostop=true If true the animation will be automatically stopped
   */
  clearAnimation (animation, autostop = true) {
    // check if animation parameter is a valid animation
    if (!(animation instanceof this.Animation)) throwError(ANIMATION_NOT_INSTANCE_OF_ANIMATION);
    const foundAnimationIndex = this._animations.findIndex(e => animation.getUid() === e.getUid());
    // if there is no found animation
    if (foundAnimationIndex === -1) throwError(NO_ANIMATION_FOUND);

    if (autostop) {
      this._animations[foundAnimationIndex].stop();
    }
    this._animations.splice(foundAnimationIndex, 1);
  }

  /**
   * Removes all registered animations
   * @example
   * Motus.clearAnimations();
   * @param  {boolean} autostop=true If true the registered animations will be automatically stopped
   */
  clearAnimations (autostop = true) {
    if (autostop) {
      this._animations.forEach(animation => animation.stop());
    }
    this._animations = [];
  }
}

export default new Motus();
