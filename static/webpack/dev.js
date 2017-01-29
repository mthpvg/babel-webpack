var path = require('path');
var OpenPackPlugin = require('openpack');



module.exports = {
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0'
  },
  output: {
    path: path.resolve(__dirname, '../'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new OpenPackPlugin({
      lan: true
    })
  ]
};
