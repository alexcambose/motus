import {
  previousArrayValue,
  calculatePercent,
  calculateValueFromPercent,
  floorWithPrecision,
  uniqid
} from '../../src/helpers/index';
describe('previousArrayValue()', () => {
  const obj = {
    1: {},
    4: {},
    3: {},
  };
  it('returns the previous key of an object', () => {
    expect(previousArrayValue(Object.keys(obj), 3)).toEqual(1);
    expect(previousArrayValue(Object.keys(obj), 4)).toEqual(3);
  });
  it('returns false if the provided key is the first one', () => {
    expect(previousArrayValue(Object.keys(obj), 1)).toBeFalsy();
    expect(typeof previousArrayValue(Object.keys(obj), 1)).toEqual('boolean');
  });
  it("returns false if the provided key doesn't exist ", () => {
    expect(previousArrayValue(Object.keys(obj), 6)).toBeFalsy();
    expect(typeof previousArrayValue(Object.keys(obj), 1)).toEqual('boolean');
  });
});
describe('calculatePercent', () => {
  it('gets the percent with values starting from 0 to 100', () => {
    expect(calculatePercent(0, 100, 50)).toEqual(50);
  });
  it('gets the percent with values starting from 50 to 100 or any values', () => {
    expect(calculatePercent(50, 100, 50)).toEqual(0);
    expect(calculatePercent(80, 100, 60)).toEqual(-100);
    expect(calculatePercent(80, 100, 100)).toEqual(100);
  });
});
describe('floorWithPrecision()', () => {
  it('returns the same number if precision is 0', () => {
    expect(floorWithPrecision(123)).toEqual(123);
    expect(floorWithPrecision(123.43)).toEqual(123.43);
  });
  it('returns the same number if precision is over the number of decimals of the number', () => {
    expect(floorWithPrecision(123.3, 4)).toEqual(123.3);
  });
  it('trims the number of decimals to a specified count', () => {
    expect(floorWithPrecision(123.123456, 1)).toEqual(123.1);
    expect(floorWithPrecision(123.123456, 2)).toEqual(123.12);
    expect(floorWithPrecision(123.123456, 5)).toEqual(123.12345);
    expect(floorWithPrecision(123.123456, 6)).toEqual(123.123456);
  });
});
describe('calculateValueFromPercent()', () => {
  it('returns the same value for min an max: 0 and 100', () => {
    expect(calculateValueFromPercent(0, 100, 20)).toEqual(20);
  });
  it('calculates the difference if min and max are custom', () => {
    expect(calculateValueFromPercent(10, 60, 50)).toEqual(35);
  });
  it('converts a number into a number fixed decimal length', () => {
    expect(calculateValueFromPercent(0, 100, 50, 2)).toEqual(50);
  });
  it('returns the value trimmed by precision', () => {
    for (let i = 1; i <= 10; i++) {
      expect(calculateValueFromPercent(0, 100, Math.PI, i)).toEqual(floorWithPrecision(Math.PI, i));
    }
  });
});
describe('uniqid()', () => {
  it('generates an unique id', () => {
    for (let i = 0; i < 100; i++) expect(uniqid()).not.toEqual(uniqid());
  });
  it('generates a string', () => {
    expect(typeof uniqid()).toEqual('string');
  })
});