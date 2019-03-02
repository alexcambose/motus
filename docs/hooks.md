# Hooks

Hooks are a way to declare code that runs *before* and *after* various internal events.

## List of available hooks
- `onScroll`: called on scroll
- `onScrollBetween`: called if the top (or left if *horizontal*=true) is between the start and end position 
- `onScrollBefore`: called if the scroll is before the start position
- `onScrollAfter`: called if the scroll is after the start position
- `onHitTop`: called once when the scroll just passed start position
- `onHitBottom`: called once when the scroll just passed end position
- `onStart`: called when animation is started
- `onStop`: called when animation is stopped

## Setting hooks

```js
const newAnimation = new Motus.Animation({
  $el: document.getElementById('element19'),
  keyframes: [
    {width: 10, marginLeft: 20},
  ]
});
Motus.addAnimation(newAnimation);
```

<!--- [start code] -->
<div class="box" id="element19"></div>
<!-- [end code] -->
