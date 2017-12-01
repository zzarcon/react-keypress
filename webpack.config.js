const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
  devServer: {
    // index: './src/index.ts',
    contentBase: path.join(__dirname, "example")
  },
  entry: './example/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [
    new CheckerPlugin()
  ]
};