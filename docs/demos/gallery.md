# Gallery

<div class="demo"> 
    <div id="gallery">
        <section>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend orci vel aliquet aliquam. 
        </section>
        <section>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend orci vel aliquet aliquam. 
        </section>
        <section class="gallery">
          <div id="gallery-container"class="gallery-container">
            <div class="gallery-item" style="background-image: url('https://i.imgur.com/xIWwI16.jpg');"></div>
            <div class="gallery-item" style="background-image: url('https://i.imgur.com/WhmVhZ0.jpg');"></div>
            <div class="gallery-item" style="background-image: url('https://i.imgur.com/fPqp9ef.jpg');"></div>
            <div class="gallery-item" style="background-image: url('https://i.imgur.com/igJuIgx.jpg');"></div>
            <div class="gallery-item" style="background-image: url('https://i.imgur.com/mZl6NZx.jpg');"></div>
            <div class="gallery-item" style="background-image: url('https://i.imgur.com/ClkV6zx.jpg');"></div>
            <div class="gallery-item" style="background-image: url('https://i.imgur.com/1o1eh3X.jpg');"></div>
          </div>
        </section>
    </div>
</div>

```js
const parallaxAnimation = new Motus.Animation({
    $el: document.getElementById('gallery-container'),
    keyframes: [
      {marginLeft: -400},
    ],
});
Motus.addAnimation(parallaxAnimation);
```
