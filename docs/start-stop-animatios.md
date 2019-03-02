# Starting and stopping animations

Animations can be manually started or stopped.

```js
// starting the animation immediately after creation
const newAnimation = new Motus.Animation({
  $el: document.getElementById('element1'),
  endPoint: [-100],
  keyframes: [
    {width: '300px'}
  ]
});
Motus.addAnimation(newAnimation);
```

<!--- [start code] -->
<div class="box" id="element1"></div>
<!--- [end code] -->


```js
// toggle animation
const newAnimation = new Motus.Animation({
  $el: document.getElementById('element2'),
  endPoint: [-100],
  keyframes: [
    {width: '300px'}
  ]
});

// if the second argument is set to false the animation will not be started by default 
Motus.addAnimation(newAnimation, false);

const button = document.getElementById('toggleButton1');
button.addEventListener('click', () => {
  if(newAnimation.isStarted()) {
    newAnimation.stop();
    button.innerHTML = 'Start animation';
  } else {
    newAnimation.start();
    button.innerHTML = 'Stop animation';
  }
});
```

<!--- [start code] -->
<button id="toggleButton1">Start animation</button>
<div class="box" id="element2"></div>
<!--- [end code] -->

