## Installation
As [npm](https://www.npmjs.com/package/motus) package

```
npm i -S motus
```

Standalone script file

```html
<script src="dist/motus.web.js"></script>
```

Node import

```js
// commonjs import
const Motus = require('motus');
// es6 import
import Motus from 'motus';
```

# Creating an animation

To create an animation, a new instance of `Motus.Animation` needs to be instantiated and added to the motus animations list.
```js
const newAnimation = new Motus.Animation();
Motus.addAnimation(newAnimation);
```

# Target element
Setting the target element that will be animated is an essential step in creating the animation. it can be specified by setting the `$el` property.
```js

```