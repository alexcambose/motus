import { isNumber } from '../utils';

export default class Styler {
  /**
   * @param  {HTMLElement} $element
   */
  constructor ($element) {
    this.$element = $element;
  }
  /**
   * @param  {string} name Property name
   * @param  {number|string|array} value Property value
   * @param  {string} unit Property unit
   */
  apply (name, value, unit) {
    if (isNumber(value)) this._applyNumber(name, value, unit);
  }
  /**
   * Sets the property to the element style
   * @param  {string} name Property name
   * @param  {number} value Property value
   * @param  {string} unit Property unit
   */
  _applyNumber (name, value, unit) {
    const { $element } = this;
    $element.style[name] = value + unit;
  }
}
