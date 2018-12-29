import { isNumber, isString } from '../utils';

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
    if (isString(value)) this._applyString(name, value);
  }
  /**
   * Sets the property to the element style
   * @param  {string} name Property name
   * @param  {number} value Property value
   * @param  {string} unit Property unit
   */
  _applyNumber (name, value, unit) {
    const { $element } = this;
    console.log(name, value, unit);
    if (unit) value += unit;
    $element.style[name] = value;
  }
  _applyString (name, value) {
    this._applyNumber(name, value);
  }
}
