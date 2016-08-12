var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
    loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
  },
  {
    test: /\.scss?$/,
    exclude: /node_modules/,
    loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader?')
  }
];

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: path.resolve('static/js', 'main.js'),
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new ExtractTextPlugin('main.css', {
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ],
  module: {
    loaders: loaders
  },
  resolve: {
    alias: {
      'foundation': 'foundation-sites',
      'settings': 'static/_settings'
    }
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, 'node_modules')]
  }
};
