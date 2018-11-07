import Motus from '../src/Motus';

describe('Motus', () => {
  let motus;
  beforeEach(() => {
    motus = new Motus();
  });
  it('has `Animation` class in class properties', () => {
    const animation = new motus.Animation();

    expect(animation instanceof motus.Animation).toBeTruthy();
  });
  it('has `Point` class in class properties', () => {
    const point = new motus.Point();

    expect(point instanceof motus.Point).toBeTruthy();
  });
});
