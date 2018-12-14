import Animation from './Animation';
import Point from './Point';

class Motus {
  constructor () {
    this.Animation = Animation;
    this.Point = Point;
  }
  static getInstance () {
    if (!this.instance) this.instance = new Motus();
    return this.instance;
  }
}

export default Motus.getInstance();
