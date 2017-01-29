var path = require('path');
var webpack = require('webpack');



module.exports = {
  output: {
    path: path.resolve(__dirname, '../bin'),
    filename: '[name].[hash].bundle.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      },
      sourceMap: false
    })
  ]
};
