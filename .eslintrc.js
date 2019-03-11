module.exports = {
  extends: 'standard',
  parser: 'babel-eslint',
  rules: {
    semi: ['error', 'always'],
    indent: ['error', 2],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
  },
};
