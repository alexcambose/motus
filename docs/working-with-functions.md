# Working with functions
Motus supports the following css functions: 
- **transform**: `matrix` `matrix3d` `translate` `translate3d` `translateX` `translateY` `translateZ` `scale` `scale3d` `scaleX` `scaleY` `scaleZ` `rotate` `rotate3d` `rotateX` `rotateY` `rotateZ` `skew` `skewX` `skewY` `perspective`

Functions are applied to the html element with [css-func](https://github.com/alexcambose/css-func) library.

Example:

This is the only way of defining functions in an animation
```js
const newAnimation = new Motus.Animation({
  $el: document.getElementById('element18'),
  keyframes: {
    50: {
      translate: ['40px', '10px'],
      rotate: ['40deg'],
      scale: [3]
    },
    100: {
      rotate: ['40deg'],
      scale: [1]
    }
  }
});
Motus.addAnimation(newAnimation);
```

<!--- [start code] -->
<div class="box" id="element18"></div>
<!-- [end code] -->
