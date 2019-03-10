<a name="Motus"></a>

## Motus
Main motus object, contains all animations

**Kind**: global class  

* [Motus](#Motus)
    * [.addAnimation(animation, autostart)](#Motus+addAnimation)
    * [.clearAnimation(animation, autostop)](#Motus+clearAnimation)
    * [.clearAnimations(autostop)](#Motus+clearAnimations)

<a name="Motus+addAnimation"></a>

### motus.addAnimation(animation, autostart)
Adds an animation

**Kind**: instance method of [<code>Motus</code>](#Motus)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| animation | <code>Motus.Animation</code> |  | The animation class |
| autostart | <code>boolean</code> | <code>true</code> | If true the scroll event listener will be automatically added |

**Example**  
```js
const newAnimation = new Motus.Animation({...});
Motus.addAnimation(newAnimation);
```
<a name="Motus+clearAnimation"></a>

### motus.clearAnimation(animation, autostop)
Removes a registered animation

**Kind**: instance method of [<code>Motus</code>](#Motus)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| animation | <code>Motus.Animation</code> |  | The animation that will be cleared |
| autostop | <code>boolean</code> | <code>true</code> | If true the animation will be automatically stopped |

**Example**  
```js
const newAnimation = new Motus.Animation({...});
Motus.addAnimation(newAnimation);
Motus.clearAnimation(newAnimation);
```
<a name="Motus+clearAnimations"></a>

### motus.clearAnimations(autostop)
Removes all registered animations

**Kind**: instance method of [<code>Motus</code>](#Motus)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| autostop | <code>boolean</code> | <code>true</code> | If true the registered animations will be automatically stopped |

**Example**  
```js
Motus.clearAnimations();
```
<a name="Animation"></a>

## Animation
Class representing a new animation, here are set all the animation's opitons and triggered element calculations based on the scroll percent

**Kind**: global class  

* [Animation](#Animation)
    * [new Animation(options)](#new_Animation_new)
    * [.getUid()](#Animation+getUid) ⇒ <code>string</code>
    * [.isStarted()](#Animation+isStarted) ⇒ <code>boolean</code>
    * [.start()](#Animation+start)
    * [.stop()](#Animation+stop)

<a name="new_Animation_new"></a>

### new Animation(options)
Create a new animation


| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | Options object |
| options.$el | <code>HTMLElement</code> | The html element that will be animated |
| options.startPoint | <code>HTMLElement</code> \| <code>number</code> \| <code>array</code> | The position where the animation will start, if not defined, it will be calculated by the $el when it enters the viewport |
| options.endPoint | <code>HTMLElement</code> \| <code>number</code> \| <code>array</code> | The position where the animation will end, if not defined, it will be calculated by the $el when it leaves the viewport |
| options.keyframes | <code>object</code> | Keyframes |
| options.throttle | <code>object</code> | [10]- Limit the amount of times the function that calclates element properties is invoked |
| options.$scrollElement | <code>HTMLElement</code> \| <code>object</code> | [window] - The element that is scrollable and contains $el |
| options.horizontal | <code>boolean</code> | [false] - If true the whole animation will run on horizontal scroll |
| options.onScroll | <code>function</code> | [false] - Callback called on scroll |
| options.onScrollBetween | <code>function</code> | Callback called on scroll between start and end point |
| options.onScrollBefore | <code>function</code> | Callback called on scroll before the start point |
| options.onScrollAfter | <code>function</code> | Callback called on scroll after the end point |
| options.onHitTop | <code>function</code> | Callback called on the top of the window reaches the start point. |
| options.onHitBottom | <code>function</code> | Callback called on the top of the window reaches the end point. |
| options.horizontal | <code>boolean</code> | [false] - If true the whole animation will run on horizontal scroll |
| options.started | <code>boolean</code> | [false] - If true the animation will be started without manually calling start method |

<a name="Animation+getUid"></a>

### animation.getUid() ⇒ <code>string</code>
Returns the unique identifier

**Kind**: instance method of [<code>Animation</code>](#Animation)  
<a name="Animation+isStarted"></a>

### animation.isStarted() ⇒ <code>boolean</code>
Returns true if the animation is started

**Kind**: instance method of [<code>Animation</code>](#Animation)  
<a name="Animation+start"></a>

### animation.start()
Start animation. Listen to scroll events in order to enable animation.

**Kind**: instance method of [<code>Animation</code>](#Animation)  
<a name="Animation+stop"></a>

### animation.stop()
Stop animation. Stop listening to scroll events.

**Kind**: instance method of [<code>Animation</code>](#Animation)  
