# Working with functions

Motus supports the following css functions: 
- **transform**: `matrix` `matrix3d` `translate` `translate3d` `translateX` `translateY` `translateZ` `scale` `scale3d` `scaleX` `scaleY` `scaleZ` `rotate` `rotate3d` `rotateX` `rotateY` `rotateZ` `skew` `skewX` `skewY` `perspective`
- **filter**:`blur`, `brightness`, `contrast`, `grayscale`, `invert`, `saturate`, `sepia`

Functions are applied to the html element with [css-func](https://github.com/alexcambose/css-func) library.

## Transform
Example:

This is the only way of defining functions in an animation
```js
const newAnimation = new Motus.Animation({
  $el: document.getElementById('element1'),
  keyframes: {
    50: {
      translate: ['40px', '10px'],
      rotate: ['40deg'],
      scale: [3]
    },
    100: {
      rotate: ['90deg'],
      scale: [1],
      translateY: '-40px', // a single parameter can be written without [...]
    }
  }
});
Motus.addAnimation(newAnimation);
```

<!--- [start code] -->
<div class="box" id="element1"></div>
<!-- [end code] -->

## Filter
```js
const newAnimation = new Motus.Animation({
  $el: document.getElementById('element2'),
  keyframes: [
    {blur: ['10px']}
  ],
});
Motus.addAnimation(newAnimation);
```

<!--- [start code] -->
<div class="box" id="element2"></div>
<!-- [end code] -->
