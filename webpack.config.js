const path = require('path');

module.exports = (env, argv) => {
  const targetNode = env && env.TARGET_ENV === 'NODE';
  const mode = argv.mode || 'development';
  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: targetNode ? 'motus.node.js' : 'motus.web.js',
      libraryTarget: targetNode ? 'commonjs2' : 'umd',
    },
    mode,
    devtool: 'sourcemaps',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
    stats: 'verbose',
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 3001,
    },
  };
};
