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

Motus offeres a wide range of ways in wich you can define keyframes. Internally it converts any type of keyframe into a standardize form.


#### Standard definition

This is the normalized form in wich Motus transforms any type

```js
let newAnimation = new Motus.Animation({
  $el: document.getElementById('element2'),
  keyframes: {
      0: {
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
let newAnimation = new Motus.Animation({
  $el: document.getElementById('element3'),
  keyframes: {
      0: {
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

### Overview of the project
```
src/
├── animation
│   ├── Animation.js // Class representing a new animation, here are set all the animation's opitons and triggered element calculations based on the scroll percent
│   ├── Animator.js // Each animation has an animator class. Handles getting the current keyframe that needs to be applied and also the percent of current keyframe.
│   ├── Keyframes.js // Handles keyframe normalization
│   └── Styler.js // Handles applying stiling to the dom element
├── enum
│   ├── errorEnum.js // Contains all possible errors
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




## Road map

- [ ] Support for multiple unit rules like: `padding: 10px 20px 30px`
- [ ] Modularity, users can add, swap, and remove custom modules that handle custom functionality
- [ ] Create a React version
- [ ] Split Keyframes.js into smaller files

## License

Motus is made available under the [MIT License](LICENSE).

## Credits
Motus is created and maintained by Alexandru Cambose *(alexcambose)*

*I'm open to suggestions. Feel free to message me or open an issue. Pull requests are also welcome!*

---