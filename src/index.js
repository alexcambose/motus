import Motus from './Motus';
if (typeof window === 'undefined') {
  module.exports = Motus;
} else {
  window.Motus = Motus;
}
