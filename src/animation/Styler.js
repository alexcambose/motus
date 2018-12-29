export default class Styler {
  constructor ($element) {
    this.$element = $element;
  }
  apply (name, value) {
    const { $element } = this;
    $element.style[name] = value;
  }
}
