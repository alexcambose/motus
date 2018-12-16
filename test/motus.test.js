import Motus from '../src/Motus';

describe('Motus', () => {
  it('has `Animation` class in class properties', () => {
    const animation = Motus.Animation;

    expect(animation).toBeTruthy();
  });
  it('has `Point` class in class properties', () => {
    const point = new Motus.Point();

    expect(point instanceof Motus.Point).toBeTruthy();
  });
});
