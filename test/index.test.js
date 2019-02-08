import Motus from '../src/';
describe('index', () => {
  it('exports motus object as default', () => {
    expect(typeof Motus).toEqual('object');
  });
  it('adds the motus object to the window object', () => {
    expect(typeof window.Motus).toEqual('object');
  });
});
