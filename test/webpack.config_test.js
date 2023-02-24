const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = [{
  mode: 'development',
  target: 'web',
  entry: './index.js',
  output: {
    filename: "wplug-test.js"
  },
  watchOptions: {
    ignored: 'node_modules/**',
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/i,
      loader: "babel-loader",
    }],
  }
},];