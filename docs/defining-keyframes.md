# Defining keyframes

Motus offers a wide range of ways in wich you can define keyframes. Internally it converts any type of keyframe into a standardized form.


## Standard definition

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

## Unit inside property value

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

## Skipping *from*

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

## Inline definition

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

## Array definition
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
