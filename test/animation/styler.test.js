import Styler from '../../src/animation/Styler';
document.body.innerHTML = `<p>test</p>`;
const $element = document.querySelector('p');
describe('styler', () => {
  const styler = new Styler($element);

  describe('apply', () => {});
  describe('_applyNumber', () => {
    it('sets the property to the element style', () => {
      styler.apply('height', 123, 'px');
      expect($element.style.height).toEqual('123px');
    });
  });
});
