# Horizontal mode

Motus supports the same config (startPoint, endPoint, keyframes, etc...) for horizontal scrolling.
Horizontal mode can be activated by setting `horizontal` value to *true*.

```js
const newAnimation = new Motus.Animation({
  $el: document.getElementById('element16'),
  horizontal: true,
  $scrollElement: document.getElementById('container-element11'),
  keyframes: [
    {height: '100px'},
  ]
});
Motus.addAnimation(newAnimation);
```
Because of the limitations of this website documentation, I have added a scrollable container so it will keep the scroll aspect.
<!--- [start code] -->
<div class="horizontal-container" id="container-element11">
  <div style="width: 100vw;">
  <div class="box box-horizontal" id="element16"></div>
  </div>
</div>
<!--- [end code] -->
