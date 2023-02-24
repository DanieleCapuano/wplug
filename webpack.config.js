const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = [{
  mode: 'development',
  target: 'web',
  entry: './src/index.js',
  output: {
    filename: "wplug.js",
    library: 'wplug',
    libraryTarget: 'umd'
  },
  watchOptions: {
    ignored: 'node_modules/**',
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/i,
      loader: "babel-loader",
      options: {
        plugins: ["import-directory"]
      }
    },
    {
      test: /\.glsl$/,
      loader: 'webpack-glsl-loader'
    }],
  }
}];