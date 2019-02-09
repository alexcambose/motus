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
  - [Creating an animation]()
  - [Adding animation to Mouts]()
  - [Animation hooks]()
- [Overview of the project]()
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
let newAnimation = new Motus.Animation(false, false, document.getElementById('1'), [
  {width: 100},
  {width: 200}
]);
Motus.addAnimation(newAnimation);
```

<!--- [start code] -->
<div class="box" id="1"></div>
<!--- [end code] -->

## Road map
- Support for multiple unit rules like: `padding: 10px 20px 30px`
- Modularity, users can add, swap, and remove custom modules that handle custom functionality
- Create a React version

## License

Motus is made available under the [MIT License](LICENSE).

## Credits
Motus is created and maintained by Alexandru Cambose *(alexcambose)*

*I'm open to suggestions. Feel free to message me or open an issue. Pull requests are also welcome!*

---