![Motus Logo](https://i.imgur.com/GpeWN0B.png "Motus logo")

[![Build Status](https://travis-ci.com/alexcambose/motus.svg?token=zpfhtmtiyLf5iVSdDrUd&branch=master)](https://travis-ci.com/alexcambose/motus) [![install size](https://packagephobia.now.sh/badge?p=motus@1.0.1)](https://packagephobia.now.sh/result?p=motus@1.0.1)
![version](https://img.shields.io/npm/v/motus.svg?style=flat)

[![forthebadge](https://forthebadge.com/images/badges/makes-people-smile.svg)](https://forthebadge.com)

# Why Motus ?
Motus allows developers to create beatuful animations that simulate css keyframes and are applied when the user scrolls.

## Features
- Node & Browser Support
- Simple and intuitive api
- Minimal size: 8.5kb gzipped
- Scroll hooks

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
