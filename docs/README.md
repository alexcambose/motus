# motus
![Motus Logo](logo.png "Motus logo")

<!-- 
[![Build Status](https://travis-ci.com/alexcambose/motus.svg?token=zpfhtmtiyLf5iVSdDrUd&branch=master)](https://travis-ci.com/alexcambose/motus) [![install size](https://packagephobia.now.sh/badge?p=motus@1.0.1)](https://packagephobia.now.sh/result?p=motus@1.0.1)
![version](https://img.shields.io/npm/v/motus.svg?style=flat)

[![forthebadge](https://forthebadge.com/images/badges/makes-people-smile.svg)](https://forthebadge.com) -->

Animation library that mimics CSS keyframes when scrolling.

## Table of Contents
- [Features]()
- [Installation]()
- [Usage and examples]()
  - [Quick start]()
  - [Defining keyframes]()
  - [Adding animations to Motus]()
  - [Animation hooks]()
  - [Throttle]()
  - [Horizontal]()
- [API]()
- [Development]()
  - [Overview of the project]()
  - [Code structure]()
- [Road map]()
- [License]()
- [Credits]()

## Features
- Support for `cm`, `mm`, `in`, `px`, `pt`, `pc`, `em`, `ex`, `ch`, `%`, `rem`, `vw`, `vh`, `vmin`, `vmax`, `deg` units
- Support for standard 
- Scroll hooks

## Installation
As [npm](https://www.npmjs.com/package/motus) package
```
npm i -S motus
```
Standalone script file
```html
<script src="dist/motus.web.js"></script>
```

## Usage

### Quick start 
Basic usage
```js 
let newAnimation = new Motus.Animation({
  $el: document.getElementById('element1'),
  keyframes: [
    {width: 100},
    {width: 300}
  ]
});
Motus.addAnimation(newAnimation);
```

<!--- [start code] -->
<div class="box" id="element1"></div>
<!--- [end code] -->

this way of defining keyframes is very similar to the one used in css:
```css
@keyframes someName {
  0%   {width: 100px;}
  100% {width: 300px;}
}
```

### Defining keyframes

Motus offers a wide range of ways in wich you can define keyframes. Internally it converts any type of keyframe into a standardized form.


#### Standard definition

This is the standardized form in wich Motus transforms any type

```js
const newAnimation = new Motus.Animation({
  $el: document.getElementById('element2'),
  keyframes: {
      50: {
        width: {
          from: 50,
          to: 100,
          unit: "px"
        }
      },
      100: {
        width: {
          from: 100,
          to: 300,
          unit: "px"
        }
      }
    }
});
Motus.addAnimation(newAnimation);
```
<!--- [start code] -->
<div class="box" id="element2"></div>
<!--- [end code] -->

#### Unit inside property value

The unit can be specified either by setting the `unit` key inside each property or writing the value of the property as a string containing the unit like `from: '100px'`.

```js
const newAnimation = new Motus.Animation({
  $el: document.getElementById('element3'),
  keyframes: {
      50: {
        width: {
          from: '50px',
          to: '100px',
        }
      },
      100: {
        width: {
          from: '100px',
          to: '300px',
        }
      }
    }
});
Motus.addAnimation(newAnimation);
```
<!--- [start code] -->
<div class="box" id="element3"></div>
<!--- [end code] -->

#### Skipping *from*

To skip the `from` property you need to take these things into consideration:

- the first keyframe will consider the `from` property the element property that is currently has
- next keyframes will get the `from` property its previous keyframe `to`

```js
const newAnimation = new Motus.Animation({
  $el: document.getElementById('element4'),
  keyframes: {
      50: {
        width: { // #element4 has an initial width property of 50px so `from` is equal to '50px'
          to: '100px',
        }
      },
      100: {
        width: { // `from` is equal to `100px` from the previous keyframe
          to: '300px',
        }
      }
    }
});
Motus.addAnimation(newAnimation);
```

<!--- [start code] -->
<div class="box" id="element4"></div>
<!--- [end code] -->

#### Inline definition

You may write directly the `to` property as a value of the css key

```js
const newAnimation = new Motus.Animation({
  $el: document.getElementById('element5'),
  keyframes: {
      50: {
        width: '100px',
      },
      100: {
        width: '300px',
      }
    }
});
Motus.addAnimation(newAnimation);
```

<!--- [start code] -->
<div class="box" id="element5"></div>
<!--- [end code] -->

#### Array definition
Settings keyframes can be shortened using an array instead of an object. Note that **you will not be able to have full control over the animation percentages**, therefore you should only use an array only to create animations that do not need to have exact breakpoints.

| Array                          | Object                                      |
|--------------------------------|---------------------------------------------|
| `[{...}]`                      | `{100:{...}}`                               |
| `[{...}, {...}]`               | `{0:{...}, 100: {...}}`                     |
| `[{...}, {...}, {...}]`        | `{0:{...}, 50:{...}, 100: {...}}`           |
| `[{...}, {...}, {...}, {...}]` | `{0:{...}, 33:{...}, 66:{...}, 100: {...}}` |

and so on...

```js
const newAnimation = new Motus.Animation({
  $el: document.getElementById('element6'),
  keyframes: [
    {width: '10px'}, // 0
    {width: '300px'}, // 33
    {width: '200px'}, // 66
    {width: '300px'} // 100
  ]
});
Motus.addAnimation(newAnimation);
```
<!--- [start code] -->
<div class="box" id="element6"></div>
<!--- [end code] -->

Alternatively you may set the first array value to an emplty object `{}` to start the animation from a non zero percent

```js
const newAnimation = new Motus.Animation({
  $el: document.getElementById('element7'),
  keyframes: [
    {}, // 0
    {width: '300px'}, // 33
    {width: '200px'}, // 66
    {width: '300px'} // 100
  ]
});
Motus.addAnimation(newAnimation);
```
<!--- [start code] -->
<div class="box" id="element7"></div>
<!--- [end code] -->

### Specifing start and end points
Motus supports custom start and end points. These points can be either a number representing the position from the top of the document or an HTML elment.

- if no start point is defined, it will be considered as the point in which the element that is animated (`#el`) enters the viewport, the end point is similar to the start point but when `$el` leaves the viewport

#### Ways of specifing points

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

#### Start point

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

#### End point

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


<!--- [start code] -->
<div class="box" id="element20"></div>
<!--- [end code] -->

### Scroll element

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

### Horizontal mode

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

<!--- [start code] -->
<div class="horizontal-container" id="container-element11">
  <div style="width: 100vw;">
  <div class="box box-horizontal" id="element16"></div>
  </div>
</div>
<!--- [end code] -->

### Working with colors

Working with colors is no more different that with any other property. Motus supports any way of defining colors.

Ex. `green` == `rgb(0,255,0)` == `#00FF00` == `#0F0`

```js
const newAnimation = new Motus.Animation({
  $el: document.getElementById('element17'),
  keyframes: [
    {},
    {backgroundColor: '#0F0'},
    {backgroundColor: 'red'},
  ]
});
Motus.addAnimation(newAnimation);
```
<!--- [start code] -->
<div class="box" id="element17"></div>
<!-- [end code] -->

### Working with functions
Motus supports the following css functions: 
- **transform**: `matrix` `matrix3d` `translate` `translate3d` `translateX` `translateY` `translateZ` `scale` `scale3d` `scaleX` `scaleY` `scaleZ` `rotate` `rotate3d` `rotateX` `rotateY` `rotateZ` `skew` `skewX` `skewY` `perspective`

Functions are applied to the html element with [css-func](https://github.com/alexcambose/css-func) library.

Example:

This is the only way of defining functions in an animation
```js
const newAnimation = new Motus.Animation({
  $el: document.getElementById('element18'),
  keyframes: {
    50: {
      translate: ['40px', '10px'],
      rotate: ['40deg'],
      scale: [3]
    },
    100: {
      rotate: ['40deg'],
      scale: [1]
    }
  }
});
Motus.addAnimation(newAnimation);
```

<!--- [start code] -->
<div class="box" id="element18"></div>
<!-- [end code] -->

### Hooks

Hooks are a way to declare code that runs *before* and *after* various internal events.

#### List of available hooks
- `onScroll`: called on scroll
- `onScrollBetween`: called if the top (or left if *horizontal*=true) is between the start and end position 
- `onScrollBefore`: called if the scroll is before the start position
- `onScrollAfter`: called if the scroll is after the start position
- `onHitTop`: called once when the scroll just passed start position
- `onHitBottom`: called once when the scroll just passed end position
- `onStart`: called when animation is started
- `onStop`: called when animation is stopped

#### Setting hooks

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

### Throttle

The **throttle** parameter give us control over the rate at which the function that calculates current scroll percentage and applies stiling on the element.
By default **throttle** is set to *10*.

```js
const newAnimation = new Motus.Animation({
  $el: document.getElementById('element99'),
  throttle: 100, // ms
  keyframes: [
    {marginLeft: '200px'},
  ]
});
Motus.addAnimation(newAnimation);
```

The animation looks very laggy but saves cpu cycles.

<!--- [start code] -->
<div class="box" id="element99"></div>
<!--- [end code] -->

## API
API here

## Development

### Scripts

These scripts are available in the `package.json` file and can be executed with `npm run <script>`.

- `test`: Test command that calls [jest](https://jestjs.io)
- `test:watch`: Run tests related to changed files [in watch mode](https://jestjs.io/docs/en/cli#watch)
- `test:coverage`: Run tests, display and collect [coverage information](https://jestjs.io/docs/en/cli#coverage)
- `lint`: Lint command that calls [eslint](https://eslint.org/)
- `start:dev`: Start [webpack-dev-server](https://webpack.js.org/configuration/dev-server/)
- `build:node`: Build in development mode as a [commonjs2](https://webpack.js.org/configuration/output/#module-definition-systems) module, used for nodejs
- `build:web`: Build in development mode as a [umd](https://webpack.js.org/configuration/output/#module-definition-systems) module, used for web
- `build`: Runs `build:node` `build:web` together
- `build:watch`: Runs `build:node` `build:web` together in watch mode
- `prod:web`: Build in production mode as a [commonjs2](https://webpack.js.org/configuration/output/#module-definition-systems) module, used for nodejs
- `prod:node`: Build in production mode as a [umd](https://webpack.js.org/configuration/output/#module-definition-systems) module, used for web
- `prod`: Runs `prod:node` `prod:web` together in watch mode
- `servedocs`: Opens [docsify](https://docsify.js.org) server with the documentation
- `start`: Runs `servedocs` and `start:dev`

### Overview of the project

```
src/
├── animation
│   ├── Animation.js // Class representing a new animation, here are set all the animation's opitons and triggered element calculations based on the scroll percent
│   ├── Animator.js // Each animation has an animator class. Handles getting the current keyframe that needs to be applied and also the percent of current keyframe.
│   ├── Keyframes.js // Handles keyframe normalization
│   └── Styler.js // Handles applying stiling to the dom element
├── enum
│   ├── errorEnum.js // Contains all possible error messages as functions
│   ├── functionValuesEnum.js // Specifies the ralationship between custom css functions and also the default parameters
│   └── specialUnitEnum.js // 
├── helpers
│   ├── dom.js // Style related functions
│   ├── index.js // exports all helpers from this file
│   ├── math.js // Math helpers
│   ├── string.js // String helpers
│   ├── throwError.js // Function used to throw errors from errorEnum 
│   ├── type.js // Type checking helpers
│   └── validation.js // Validation helpers
├── index.js // entry point
├── Motus.js // Main motus object, contains all animations
└── Point.js // Class used to get start and end point, contains only static methods
```

### Contributing

- Fork it
- Create your feature branch
- *Do something awesome*
- Commit what you have done `git commit -am 'Some changes'`
- Push to the branch `git push origin my-new-feature`
- Submit a pull request

## Road map

- [ ] Support for multiple unit rules like: `padding: 10px 20px 30px`
- [ ] Modularity, users can add, swap, and remove custom modules that handle custom functionality
- [ ] Create a React version
- [ ] Split Keyframes.js into smaller files
- [ ] Improve testing
- [ ] Improve docs
- [ ] Keep initial inlined style css for $el

## License

Motus is made available under the [MIT License](LICENSE).

## Credits
Motus is created and maintained by Alexandru Cambose *(alexcambose)*

*I'm open to suggestions. Feel free to message me or open an issue. Pull requests are also welcome!*

---