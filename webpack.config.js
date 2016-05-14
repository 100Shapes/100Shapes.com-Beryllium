var path = require('path');
var webpack = require('webpack');

var loaders = [
  {
    test: /\.js?$/,
    exclude: /node_modules/,
    loader: 'babel',
    query: {
      presets: [
        'es2015'
      ],
      plugins: []
    }
  },
  {
    test: /\.css?$/,
    exclude: /node_modules/,
    loader: 'style!css'
  },
  {
    test: /\.scss?$/,
    exclude: /node_modules/,
    loader: 'style!css!sass'
  }
];

module.exports = {
  devtool: 'eval-source-map',
  entry: path.resolve('static/js', 'main.js'),
  output: {
    path: path.resolve('static/lib'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.BannerPlugin('---\nlayout: null\n---\n\n', {raw: true})
  ],
  module: {
    loaders: loaders
  }
};
