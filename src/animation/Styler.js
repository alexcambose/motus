import { camelToKebabCase, isArray, isNumber, isString } from '../helpers/';
import functionValuesEnum from '../enum/functionValuesEnum';
import CssFunc from 'css-func';
import { NO_UNIT } from '../enum/specialUnitEnum';

/** Handles applying stiling to the dom element */
export default class Styler {
  /**
   * @param  {HTMLElement} $el
   */
  constructor ($el) {
    this.$el = $el;
  }

  /**
   * @param  {string} name Property name
   * @param  {number|string|array} value Property value
   * @param  {string} unit  Property unit
   */
  apply (name, value, unit) {
    // if the property name is a function but the value (the argument) is not an array
    if(functionValuesEnum[name]) this._applyArray(name, [value + unit]);
    if (isNumber(value)) this._applyNumber(name, value, unit);
    if (isString(value)) this._applyString(name, value);
    if (isArray(value)) this._applyArray(name, value);
  }

  /**
   * Gets element style property
   * @param  {string} property
   */
  _getStyle (property) {
    return this.$el.style[property];
  }

  /**
   * Sets element style property
   * @param  {string} property
   * @param  {string|number} value
   */
  _setStyle (property, value) {
    this.$el.style[property] = value;
  }

  /**
   * Remove all element styles
   */
  removeAll () {
    this.$el.style = '';
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
    // if value is an array of arrays convert it into an array of arguments string
    value = value.map(e => {
      if (isArray(e)) {
        if (e[1] === NO_UNIT) return e[0];
        return e[0] + e[1];
      }
      return e;
    });
    CssFunc(this.$el, functionName).add(name, value);
  }
}
