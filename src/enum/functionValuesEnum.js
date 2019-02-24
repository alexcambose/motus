let transforms = {
  matrix: {
    defaultValue: [0, 0, 0, 0, 0, 0],
  },
  matrix3d: {
    defaultValue: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  translate: {
    defaultValue: ['0px', '0px'],
  },
  translate3d: {
    defaultValue: ['0px', '0px', '0px'],
  },
  translateX: {
    defaultValue: '0px',
  },
  translateY: {
    defaultValue: '0px',
  },
  translateZ: {
    defaultValue: '0px',
  },
  scale: {
    defaultValue: [1],
  },
  scale3d: {
    defaultValue: [1, 1, 1],
  },
  scaleX: {
    defaultValue: 1,
  },
  scaleY: {
    defaultValue: 1,
  },
  scaleZ: {
    defaultValue: 1,
  },
  rotate: {
    defaultValue: ['0deg'],
  },
  rotate3d: {
    defaultValue: [0, '0deg', '0deg', '0deg'],
  },
  rotateX: {
    defaultValue: '0deg',
  },
  rotateY: {
    defaultValue: '0deg',
  },
  rotateZ: {
    defaultValue: '0deg',
  },
  skew: {
    defaultValue: ['0deg'],
  },
  skewX: {
    defaultValue: ['0deg'],
  },
  skewY: {
    defaultValue: ['0deg'],
  },
  perspective: {
    defaultValue: 0,
  },
};

// add function name property to transforms object, will be useful later to know which function is the property from
Object.keys(transforms).forEach(
  prop =>
    (transforms[prop] = { ...transforms[prop], functionName: 'transform' })
);

/*
transforms = {
  ...
  rotate: {
    defaultValue: 0,
    functionName: 'transform',
  }
  ...
}
*/

export default {
  ...transforms,
};
