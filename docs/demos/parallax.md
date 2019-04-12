# Parallax

<div class="demo"> 
    <div id="parallax">
        <section>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus sapien molestie, cursus arcu non, tincidunt dolor.  lorem, at hendrerit nulla auctor ut. Aenean blandit, libero eu pretium condimentum, nisi tortor rutrum risus, e
        </section>
        <section class="background background1 font-big" id="parallax-element">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </section> 
        <section>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus sapien molestie, cursus arcu non, tincidunt dolor.  lorem, at hendrerit nulla auctor ut. Aenean blandit, libero eu pretium condimentum, nisi tortor rutrum risus, e
        </section>
    </div>
</div>

```js
const parallaxAnimation = new Motus.Animation({
    $el: document.getElementById('parallax-element'),
    keyframes: [
        {backgroundPositionY: 50},
        {backgroundPositionY: 0}
    ],
});
Motus.addAnimation(parallaxAnimation);
```

For more information on how to create a parallax effect from scratch using Motus, visit [this medium article](https://medium.com/@alexcambose/creating-a-parallax-effect-with-motus-af89bdc3ce1a).
