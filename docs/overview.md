![Motus Logo](https://i.imgur.com/GpeWN0B.png "Motus logo")

[![Build](https://img.shields.io/travis/com/alexcambose/motus.svg?style=flat-square)](https://travis-ci.com/alexcambose/motus)
[![Coveralls github](https://img.shields.io/coveralls/github/alexcambose/motus.svg?style=flat-square)](https://coveralls.io/github/alexcambose/motus?branch=master)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/motus.svg?style=flat-square)](https://packagephobia.now.sh/result?p=motus)
[![Gitter](https://img.shields.io/gitter/room/alexcambose/motus.svg?color=%23B22C5B&style=flat-square)](https://gitter.im/alexcambose/motus)
[![GitHub issues](https://img.shields.io/github/issues/alexcambose/motus.svg?style=flat-square)](https://github.com/alexcambose/motus/issues)
[![version](https://img.shields.io/npm/v/motus.svg?style=flat-square)](https://www.npmjs.com/package/motus)
[![license](https://img.shields.io/github/license/alexcambose/motus.svg?style=flat-square)](https://github.com/alexcambose/motus/blob/master/LICENSE)
![Maintenance](https://img.shields.io/maintenance/yes/2019.svg?style=flat-square)

[![forthebadge](https://forthebadge.com/images/badges/makes-people-smile.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

# Why Motus ?
Motus allows developers to create beatuful animations that simulate css keyframes and are applied when the user scrolls.

## Features
- Node & Browser Support
- Simple and intuitive api
- Scroll hooks
- Both vertical and horizontal scrolling

# Getting started
Check out the [Quick Start](http://localhost:3000/#/quick-start) documentation to get started.
# Usage 
```js 
let newAnimation = new Motus.Animation({
  $el: document.getElementById('element'),
  keyframes: [
    {width: 100},
    {width: 300}
  ]
});
Motus.addAnimation(newAnimation);
```
<!--- [start code] -->
<div class="box mb-12" id="element"></div>
<!--- [end code] -->


# Contributing

- Fork it
- Create your feature branch
- *Do something awesome*
- Commit what you have done `git commit -am 'Some changes'`
- Push to the branch `git push origin my-new-feature`
- Submit a pull request

# Credits
Motus is created and maintained by Alexandru Cambose *(alexcambose)*

*I'm open to suggestions. Feel free to message me or open an issue. Pull requests are also welcome!*

# License

Motus is made available under the [MIT License](LICENSE).
