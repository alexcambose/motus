import { isNumber, isString, isArray } from '../helpers/';
import functionValuesEnum from '../enum/functionValuesEnum';
import CssFunc from 'css-func';
import { NO_UNIT } from '../enum/specialUnitEnum';

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
   * @param  {string} unit  Property unit
   */
  apply (name, value, unit) {
    if (isNumber(value)) this._applyNumber(name, value, unit);
    if (isString(value)) this._applyString(name, value);
    if (isArray(value)) this._applyArray(name, value);
  }
  /**
   * Gets element style property
   * @param  {string} property
   */
  _getStyle (property) {
    return this.$element.style[property];
  }
  /**
   * Sets element style property
   * @param  {string} property
   * @param  {string|number} value
   */
  _setStyle (property, value) {
    this.$element.style[property] = value;
  }
  /**
   * Remove all element styles
   */
  removeAll () {
    this.$element.style = '';
  }
  /**
   * Sets the property to the element style
   * @param  {string} name Property name
   * @param  {number} value Property value
   * @param  {string} unit Property unit
   */
  _applyNumber (name, value, unit) {
    if (unit && unit !== NO_UNIT) value += unit;
    this._setStyle(name, value);
  }
  /**
   * Sets the property to the element style
   * @param  {string} name
   * @param  {string} value
   */
  _applyString (name, value) {
    this._applyNumber(name, value);
  }
  /**
   * @param  {string} name
   * @param  {array} value - [[10, 'px'], [20, 'px']] or ['10px', '30px']
   */
  _applyArray (name, value) {
    const functionName = functionValuesEnum[name].functionName;
    // if value is an array of arrays convert it into an arrat of arguments string
    value = value.map(e => (isArray(e) ? e.join('') : e));
    CssFunc(this.$element, functionName).add(name, value);
  }
}
