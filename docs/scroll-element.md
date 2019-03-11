# Scroll element


Motus can change the element on wich the scroll and calculations are applied. The `$scrollElement` property is by default set to `window`. This feature is useful when the element that is animated is in a scrollable container.

```js
const newAnimation = new Motus.Animation({
  $el: document.getElementById('element15'),
  $scrollElement: document.getElementById('container-element10'),
  keyframes: [
    {width: '100px'},
  ]
});
Motus.addAnimation(newAnimation);
```
<!--- [start code] -->
<div class="vertical-container" id="container-element10">
  S<br>o<br>m<br>e<br> <br>m<br>o<br>r<br>e<br> <br>c<br>o<br>n<br>t<br>e<br>n<br>t<br>
  <div class="box" id="element15"></div>
  S<br>o<br>m<br>e<br> <br>m<br>o<br>r<br>e<br> <br>c<br>o<br>n<br>t<br>e<br>n<br>t<br>
</div>
<!--- [end code] -->

