![Motus Logo](https://i.imgur.com/GpeWN0B.png "Motus logo")

<p align="center">
      <a href="https://travis-ci.com/alexcambose/motus"><img alt="Build" src="https://img.shields.io/travis/com/alexcambose/motus.svg?style=flat-square"></a>
<a href="https://coveralls.io/github/alexcambose/motus?branch=master"><img alt="Coveralls github" src="https://img.shields.io/coveralls/github/alexcambose/motus.svg?style=flat-square"></a>
  <a href="https://packagephobia.now.sh/result?p=motus"><img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/motus.svg?style=flat-square"></a>
  <a href="https://gitter.im/alexcambose/motus"><img alt="Gitter" src="https://img.shields.io/gitter/room/alexcambose/motus.svg?color=%23B22C5B&style=flat-square"></a>
  <a href="https://github.com/alexcambose/motus/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/alexcambose/motus.svg?style=flat-square"></a>
   <a href="https://www.npmjs.com/package/motus"><img alt="version" src="https://img.shields.io/npm/v/motus.svg?style=flat-square"></a>
  <a href="https://github.com/alexcambose/motus/blob/master/LICENSE"><img alt="license" src="https://img.shields.io/github/license/alexcambose/motus.svg?style=flat-square"></a>
  <img alt="maintenance" src="https://img.shields.io/maintenance/yes/2019.svg?style=flat-square">
</p>

<p align="center">
  <a href="https://forthebadge.com"><img src="https://forthebadge.com/images/badges/makes-people-smile.svg"></a>
  <a href="https://forthebadge.com"><img src="https://forthebadge.com/images/badges/made-with-javascript.svg"></a>
</p>

# Why Motus ?
Motus allows developers to create beatuful animations that simulate css keyframes and are applied when the user scrolls.

## Features
- Node & Browser Support
- Simple and intuitive api
- Scroll hooks
- Both vertical and horizontal scrolling

# Getting started
Check out the [Quick Start](https://alexcambose.github.io/motus/) documentation to get started.

[Live demo](https://codesandbox.io/s/ol4v495l8z)

[Parallax demo](https://alexcambose.github.io/motus/parallax-demo)

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

For further information about the project please see the [development section](development) from the documentation.

# Credits
Motus is created and maintained by Alexandru Cambose *(alexcambose)*

*I'm open to suggestions. Feel free to message me or open an issue. Pull requests are also welcome!*

# License

Motus is made available under the [MIT License](LICENSE).
