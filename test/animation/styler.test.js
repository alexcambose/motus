import Styler from '../../src/animation/Styler';
document.body.innerHTML = `<p>test</p>`;
const $element = document.querySelector('p');
describe('styler', () => {
  const styler = new Styler($element);
  beforeEach(() => {
    $element.style['height'] = '10px';
  });
  describe('apply', () => {});
  describe('_setStyle', () => {
    it('sets the property to the element style', () => {
      styler._setStyle('height', '123px');
      expect($element.style.height).toEqual('123px');
    });
  });
  describe('_getStyle', () => {
    it('gets the property from element style', () => {
      $element.style['height'] = '120px';
      expect(styler._getStyle('height')).toEqual('120px');
    });
  });
  describe('_applyNumber', () => {
    it('sets the property to the element style', () => {
      styler._applyNumber('height', 123, 'px');
      expect($element.style.height).toEqual('123px');
    });
  });
  describe('_applyString', () => {
    it('sets the property to the element style', () => {
      styler._applyString('height', '123px');
      expect($element.style.height).toEqual('123px');
    });
  });
  describe('_applyArray', () => {
    it('sets the property to the element style', () => {
      styler._applyArray('height', 'translate', [[10, 'px'], [20, 'px']]);
      expect($element.style.height).toEqual('123px');
    });
  });
});
