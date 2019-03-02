# Working with colors
Working with colors is no more different that with any other property. Motus supports any way of defining colors.

Ex. `green` == `rgb(0,255,0)` == `#00FF00` == `#0F0`

```js
const newAnimation = new Motus.Animation({
  $el: document.getElementById('element17'),
  keyframes: [
    {},
    {backgroundColor: '#0F0'},
    {backgroundColor: 'red'},
  ]
});
Motus.addAnimation(newAnimation);
```
<!--- [start code] -->
<div class="box" id="element17"></div>
<!-- [end code] -->
