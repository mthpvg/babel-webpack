var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/app.js')
  },
  resolve: {
    extensions: ['.js', 'json']
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        include:  [path.resolve(__dirname, '../src/views')]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include:  [path.resolve(__dirname, '../src')]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/views/index.pug'),
      inject: 'body',
      chunks: ['app']
    })
  ]
};
