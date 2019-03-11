# SVG

<div class="demo"> 
  <section>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend orci vel aliquet aliquam. 
  </section>
  <section>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend orci vel aliquet aliquam. 
  </section>
  <div id="svg">
     <svg height="200" viewBox="-2 -2 28 28" xmlns="http://www.w3.org/2000/svg" >
          <path id="svg-path" stroke-linecap="round" fill="whitesmoke" stroke-dasharray="100" stroke="black" d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/>
      </svg>
  </div>
</div>

```js
const parallaxAnimation = new Motus.Animation({
  $el: document.getElementById('svg-path'),
  keyframes: [
      {strokeDashoffset: 100},
      {strokeDashoffset: 0}
  ],
});
Motus.addAnimation(parallaxAnimation);
```
