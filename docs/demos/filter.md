# Filters

<div class="demo"> 
    <div id="filter">
        <section>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend orci vel aliquet aliquam. 
        </section>
        <section>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend orci vel aliquet aliquam. 
        </section>
        <img id="image" src="https://i.imgur.com/wrc7sDe.jpg" />
    </div>
</div>

```js
const parallaxAnimation = new Motus.Animation({
    $el: document.getElementById('image'),
    keyframes: [
      {brightness: ['200%'], grayscale: ['100%']},
      {invert: ['100%']}
    ],
});
Motus.addAnimation(parallaxAnimation);
```
