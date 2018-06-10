"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Animation_1 = require("./Animation");
const Point_1 = require("./Point");
class Motus {
    constructor() {
        this.Animation = Animation_1.default;
        this.Point = Point_1.default;
        this.animations = [];
        /**Register new animation
         * @param  {Animation} animation
         * @returns void
         */
        this.addAnimation = (animation) => {
            this.animations.push(animation);
            animation.apply(); // initial apply
        };
        /**Delete animation
         * @param  {number} uid Animation uid
         * @returns void
         */
        this.removeAnimation = (uid) => {
            const index = this.animations.findIndex(e => e.uid === uid);
            this.animations.splice(index, 1);
        };
        window.addEventListener('scroll', () => {
            this.animations.forEach(e => e.apply());
        });
    }
}
exports.default = Motus;
//# sourceMappingURL=Motus.js.map