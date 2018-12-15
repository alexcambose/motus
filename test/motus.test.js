import Motus from '../src/Motus';

describe('Motus', () => {
  it('has `Animation` class in class properties', () => {
    const animation = new Motus.Animation({});

    expect(animation instanceof Motus.Animation).toBeTruthy();
  });
  it('has `Point` class in class properties', () => {
    const point = new Motus.Point();

    expect(point instanceof Motus.Point).toBeTruthy();
  });
});
