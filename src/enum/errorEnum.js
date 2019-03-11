// export const UNIT_DOES_NOT_MATCH_DEFAULT = (unit, defaultUnit) =>
//   `The specified unit ('${unit}') does not match the default unit ('${defaultUnit}')`;
export const UNKNOWN_PROPERTY_VALUE = property =>
  `The value for the '${property}' property must be a number, string or object`;
export const KEYFRAMES_VALUE_NOT_SPECIFIED = () =>
  `Property value not specified`;
export const INVALID_KEYFRAME_PERCENT = percent =>
  `Keyframe percent '${percent}' is not a valid number`;
export const NO_VALUE_SPECIFIED = () => 'No value specified';
export const PREVIOUS_UNIT_DOES_NOT_MATCH_CURRENT = (
  previousUnit,
  currentUnit
) =>
  `Previous unit '${previousUnit}' does not match current unit '${currentUnit}'`;
export const TO_UNIT_DOES_NOT_MATCH_FROM = (toUnit, fromUnit) => `'to' unit ('${toUnit}') does not match 'from' unit ('${fromUnit}')`;
// export const DEFAULT_UNIT_DOES_NOT_MATCH_CURRENT = (defaultUnit, currentUnit) =>
//   `Previous unit '${defaultUnit}' does not match current unit '${currentUnit}'`;
export const KEYFRAME_TO_IS_NOT_SET = () => `Keyframe property 'to' must be set`;
export const ANIMATION_NOT_INSTANCE_OF_ANIMATION = () => `The provided animation object is not an instance of Motus.Animation`;
export const NO_KEYFRAMES = () => `No keyframes specified`;
export const UNEXPECTED_ERROR = () => `Unexpected error`;
export const VALUE_IS_NOT_HTML_ELEMENT = val => `${val} is not a valid html element`;
export const NO_ANIMATION_FOUND = () => `No animation found. Have you attached the animation with Motus.addAnimation ?`;
