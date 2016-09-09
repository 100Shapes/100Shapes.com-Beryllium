var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var loaders = [
  {
    test: /\.js?$/,
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
    loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader?browsers=last 2 versions')
  },
  {
    test: /\.scss?$/,
    exclude: /node_modules/,
    loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader?browsers=last 2 versions!sass-loader')
  },
  {
    test: /\.(png|jpg)$/,
    loader: 'url?limit=8192'
  },
  {
    test: require.resolve('animate.css'),
    loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
  },
  {
    test: require.resolve('wowjs'),
    loader: 'imports?this=>window!exports?window.WOW'
  },
  {
    test: /\.(eot|svg|ttf|woff|woff2)$/,
    loader: 'url?name=static/webfonts/[name].[ext]'
  }
];

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: path.resolve('static/js', 'main.js'),
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
    publicPath: '/dist/'
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
      'foundation': 'foundation-sites'
    }
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, 'node_modules')]
  }
};
