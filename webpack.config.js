const path = require('path');
const webpack = require('webpack');
const postcssImport = require('postcss-import');
const autoprefixer = require('autoprefixer');

// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        loaders: ['react-hot', 'babel'],
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, 'src'),
        loader: 'style!css!postcss',
      },
    ],
  },
  postcss: (webp) => {
    return [
      postcssImport({
        addDependencyTo: webp,
      }),
      autoprefixer(),
    ];
  },
};
