import Styler from '../../src/animation/Styler';
import { NO_UNIT } from '../../src/enum/specialUnitEnum';
document.body.innerHTML = `<p>test</p>`;
const $element = document.querySelector('p');
describe('styler', () => {
  const styler = new Styler($element);
  beforeEach(() => {
    $element.style['height'] = '10px';
  });
  describe('apply()', () => {
    it('property selects the method to apply the styles', () => {
      styler.apply('height', 10, 'px');
      styler.apply('width', '10px');
      styler.apply('rotate', ['10px']);
      expect($element.style.height).toEqual('10px');
      expect($element.style.width).toEqual('10px');
      expect($element.style.transform).toEqual('rotate(10px)');
    });
  });
  describe('removeAll()', () => {
    it('removes all element styles', () => {
      styler.removeAll();
      expect($element.style._values).toEqual({});
    });
  });
  describe('_setStyle()', () => {
    it('sets the property to the element style', () => {
      styler._setStyle('height', '123px');
      expect($element.style.height).toEqual('123px');
    });
  });
  describe('_getStyle()', () => {
    it('gets the property from element style', () => {
      $element.style['height'] = '120px';
      expect(styler._getStyle('height')).toEqual('120px');
    });
  });
  describe('_applyNumber()', () => {
    it('sets the property to the element style', () => {
      styler._applyNumber('height', 123, 'px');
      expect($element.style.height).toEqual('123px');
    });
    it('ignores unit if not specified or is NO_UNIT', () => {
      styler._applyNumber('opacity', 0.7, NO_UNIT);
      expect($element.style.opacity).toEqual('0.7');
      styler._applyNumber('opacity', 0.8);
      expect($element.style.opacity).toEqual('0.8');
    });
  });
  describe('_applyString()', () => {
    it('sets the property to the element style', () => {
      styler._applyString('height', '123px');
      expect($element.style.height).toEqual('123px');
    });
  });
  describe('_applyArray()', () => {
    it('sets the property to the element style', () => {
      styler._applyArray('translate', [[10, 'px'], [20, 'px']]);
      expect($element.style.transform).toEqual('translate(10px, 20px)');
    });
  });
});
