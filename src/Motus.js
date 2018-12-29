import Animation from './animation/Animation';
import Point from './Point';
import throwError from './error/throwError';
import { ANIMATION_NOT_INSTANCE_OF_ANIMATION } from './enum/errorEnum';

class Motus {
  constructor () {
    this.Animation = Animation;
    this.Point = Point;
    this._animations = [];
  }

  /** Adds an animation
   * @param  {Motus.Animation} animation The animation class
   * @param  {boolean} autostart=true If thrue the scroll event listener will be automatically added
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
  /** Removes all registered animations
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
