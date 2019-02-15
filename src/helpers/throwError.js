export default (errorType, ...args) => {
  throw new Error(errorType(...args));
};
