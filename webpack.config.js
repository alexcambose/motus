const path = require('path');

module.exports = env => {
  const targetNode = env.TARGET_ENV === 'NODE';
  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: targetNode ? 'motus.node.js' : 'motus.web.js',
      libraryTarget: targetNode ? 'commonjs2' : 'umd',
    },
    devtool: 'sourcemaps',
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      ],
    },
    stats: 'verbose',
  };
};
