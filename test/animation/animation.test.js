import Animation from '../../src/animation/Animation';
import { NO_UNIT } from '../../src/enum/specialUnitEnum';
document.body.innerHTML = `<p>test</p>`;
const $element = document.querySelector('p');
$element.style.width = '10px';
$element.style.height = '10px';
$element.style.opacity = 1;

describe('Animation', () => {
  const keyframesArr = [
    {
      width: 100,
      opacity: 0.2,
      height: {
        to: 20,
      },
    },
    {
      // translateX: 30,
      // translate: ['30px', '39px'],
      width: 400,
      height: {
        from: 100,
        to: 40,
      },
    },
  ];
  const keyframesObj = {
    0: {
      opacity: {
        from: 1,
        to: 0.2,
        unit: NO_UNIT,
      },
      width: {
        from: 10,
        to: 100,
        unit: 'px',
      },
      height: {
        from: 10,
        to: 20,
        unit: 'px',
      },
    },
    100: {
      width: {
        from: 100,
        to: 400,
        unit: 'px',
      },
      height: {
        from: 100,
        to: 40,
        unit: 'px',
      },
    },
  };
  it('keyframe normalization', () => {
    const animation = new Animation($element, keyframesArr);
    expect(animation.keyframes).toEqual(keyframesObj);
  });
});
