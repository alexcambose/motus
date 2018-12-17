import Animation from '../../src/animation/Animation';
document.body.innerHTML = `<p>test</p>`;
const element = document.querySelector('p');
element.style.width = '10px';
element.style.height = '10px';

describe('Animation', () => {
  const keyframesArr = [
    {
      width: 100,
      height: {
        from: 10,
        to: 20,
      },
    },
    {
      width: 200,
      height: {
        from: 10,
        to: 20,
      },
    },
  ];
  const keyframesObj = {
    0: {
      width: 100,
      height: {
        from: 10,
        to: 20,
      },
    },
    100: {
      width: 200,
      height: {
        from: 10,
        to: 20,
      },
    },
  };
  it('', () => {});
});
