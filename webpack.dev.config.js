const baseWebpackConfig = require('./webpack.config.js');
const merge = require('webpack-merge')

module.exports = merge(baseWebpackConfig, {
  entry: "./src/dev.js"
});
