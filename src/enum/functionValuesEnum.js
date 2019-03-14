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
let filters = {
  blur: {
    defaultValue: ['0px'],
  },
  brightness: {
    defaultValue: ['100%'],
  },
  contrast: {
    defaultValue: ['100%'],
  },
  hueRotate: {
    defaultValue: ['0deg'],
  },
  grayscale: {
    defaultValue: ['0%'],
  },
  invert: {
    defaultValue: ['0%'],
  },
  saturate: {
    defaultValue: ['100%'],
  },
  sepia: {
    defaultValue: ['0%'],
  },
};
// add function name property to transforms object, will be useful later to know which function is the property from
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
Object.keys(transforms).forEach(
  prop =>
    (transforms[prop] = { ...transforms[prop], functionName: 'transform' })
);
Object.keys(filters).forEach(
  prop =>
    (filters[prop] = { ...filters[prop], functionName: 'filter' })
);


export default {
  ...transforms,
  ...filters,
};
