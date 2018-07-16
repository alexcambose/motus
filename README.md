# motus
![Motus Logo](https://i.imgur.com/7LBn4c7.png "Motus logo")

[![Build Status](https://travis-ci.com/alexcambose/motus.svg?token=zpfhtmtiyLf5iVSdDrUd&branch=master)](https://travis-ci.com/alexcambose/motus)

Animation library that mimics CSS keyframes when scrolling.
### [DEMO Website](https://alexcambose.github.io/motus/)
## Installation
As [npm](https://www.npmjs.com/package/motus) package

```bash
npm i -S motus
```

Standalone script file

```html
<script src="dist/motus.js"></script>
```

## Usage

Basic usage

```js
const myAnimation = new Motus.Animation(
    new Motus.Point(100), // set animation start position in px
    new Motus.Point(200), // set animation end position in px,
    document.getElementById('some-element'), // element that will animated
    {
        50: { // make font size 10 px before it hits 50% of the distance (in this case <150px)
            fontSize: 10, // px by default
        },
        100: { // make font size 20 px after 50%
            fontSize: 20, // px by default
        }
    }
);
Motus.addAnimation(myAnimation);
```

Different usages

```js
/********************************************
    Different ways of defining keyframes
*********************************************/
const k1 = {
    50: {
        'font-size': {
            to: 10, // px by default
        }
    },
    100: {
        'font-size': {
            to: 20,
        }
    }
}
//*******************************************
const k2 = {
    50: {
        'font-size': {
            from: '5em', // initial value (in this case at 0%)
            to: '10em',
        }
    },
    100: {
        fontSize: {
            from: '10em',
            to: '20em',
        }
    }
}
//*******************************************
const k3 = {
    50: {
        fontSize: {
            to: 10,
            unit: 'em',
        }
    },
    100: {
        'font-size': {
            from: 10,
            to: 20,
            unit: 'em',
        }
    }
}

const mYaNiMaTiOn = new Motus.Animation(
    new Motus.Point(document.getElementById('start-point')), // dom elements instead of px
    new Motus.Point(document.getElementById('end-point')),
    document.getElementById('some-element'),
    k1 || k2 || k3 // your choice
);
Motus.addAnimation(mYaNiMaTiOn);
```

## Development

`npm run tsc` - compiles *ts* files in *js* files

`npm run build` - watches for changes and compiles *ts* files into *dist* in develompent mode

`npm run watch` - watches for changes and compiles with `build` *ts* files into *dist*

`npm run prod` - watches for changes and compiles *ts* files into *dist* in production mode

## License

[MIT](LICENSE)
