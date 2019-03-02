# Start and End points
## Specifing start and end points
Motus supports custom start and end points. These points can be either a number representing the position from the top of the document or an HTML elment.

- if no start point is defined, it will be considered as the point in which the element that is animated (`#el`) enters the viewport, the end point is similar to the start point but when `$el` leaves the viewport

## Ways of specifing points

- as a number(ex. `100`, `500`): represents the position from the top of the document (or `$scrollElement`)
- as an array with a number (ex: `[100]`): represents the offset from the point where the animated elemenet is in viewport (for the start point) or it leaves the viewport
(for th eend port)
- as an html element (ex: `document.querySelector('#someElement')`): acts like defining a number and takes the offsetTop of the element to compute the actual number

Examples:
```js
{ignore}// animation runs when scroll is at 100 and ends when scroll passes $el
const newAnimation = new Motus.Animation({
  //...
  startPoint: 100,
  //...
});
```

```js {ignore}
// animation runs when scroll is between 100 and 300
const newAnimation = new Motus.Animation({
  //...
  startPoint: 100,
  endPoint: 300,
  //...
});
```

- as an array with a number inside (ex: `[145]`, `[-210]`) : represents the position relative from the element that is animated (`$el`)

```js {ignore}
// animation runs with 100 px before the element enters the viewport
const newAnimation = new Motus.Animation({
  //...
  startPoint: [100],
  //...
});
```

```js {ignore}
// animation runs between 100 px after the element enters the viewport and 200 px before element leaves the viewport
const newAnimation = new Motus.Animation({
  //...
  startPoint: [-100],
  endPoint: [200]
  //...
});
```

- as an HTML element

```js {ignore}
// animation runs between the two HTML elements
const newAnimation = new Motus.Animation({
  //...
  startPoint: document.getElementbyId('#startElement'),
  endPoint: document.getElementbyId('#endElement')
  //...
});
```

## Start point

```js
// the animation starts at 100px from the top of the document
const newAnimation = new Motus.Animation({
  $el: document.getElementById('element8'),
  startPoint: 100,
  keyframes: [
    {width: '300px'}
  ]
});
Motus.addAnimation(newAnimation);
```
<!--- [start code] -->
<div class="box" id="element8"></div>
<!--- [end code] -->

```js
// the animation starts at 100px after $el enters the viewport
const newAnimation = new Motus.Animation({
  $el: document.getElementById('element9'),
  startPoint: [100],
  keyframes: [
    {width: '300px'}
  ]
});
Motus.addAnimation(newAnimation);
```
<!--- [start code] -->
<div class="box" id="element9"></div>
<!--- [end code] -->

```js
// the animation starts at 100px before $el enters the viewport
const newAnimation = new Motus.Animation({
  $el: document.getElementById('element10'),
  startPoint: [-100],
  keyframes: [
    {width: '300px'}
  ]
});
Motus.addAnimation(newAnimation);
```
<!--- [start code] -->
<div class="box" id="element10"></div>
<!--- [end code] -->

<!--- [start code] -->
<div class="box pointing-element point-start" id="pointElement1"></div>
<!--- [end code] -->

```js
// the animation starts when the top of the viewport is under startPoint element
const newAnimation = new Motus.Animation({
  $el: document.getElementById('element11'),
  startPoint: document.getElementById('pointElement1'),
  endPoint: document.getElementById('pointElement2'),
  keyframes: [
    {width: '300px'}
  ]
});
Motus.addAnimation(newAnimation);
```
<!--- [start code] -->
<div class="box pointing-element point-end" id="pointElement2"></div>
<!--- [end code] -->

<!--- [start code] -->
<div class="box bg-purple" id="element11"></div>
<!--- [end code] -->

## End point

```js
// the animation ends at 13000px from the top of the document
const newAnimation = new Motus.Animation({
  $el: document.getElementById('element12'),
  endPoint: 13000,
  keyframes: [
    {width: '300px'}
  ]
});
Motus.addAnimation(newAnimation);
```
<!--- [start co de] -->
<div class="box" id="element12"></div>
<!--- [end code] -->

```js
// the animation ends at 100px after $el leaves the viewport
const newAnimation = new Motus.Animation({
  $el: document.getElementById('element13'),
  endPoint: [100],
  keyframes: [
    {width: '300px'}
  ]
});
Motus.addAnimation(newAnimation);
```
<!--- [start code] -->
<div class="box" id="element13"></div>
<!--- [end code] -->

```js
// the animation ends at 100px before $el leaves the viewport
const newAnimation = new Motus.Animation({
  $el: document.getElementById('element14'),
  endPoint: [-100],
  keyframes: [
    {width: '300px'}
  ]
});
Motus.addAnimation(newAnimation);
```

<!--- [start code] -->
<div class="box" id="element14"></div>
<!--- [end code] -->
