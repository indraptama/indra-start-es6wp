var fs                = require('fs');
var path              = require('path');
var webpack           = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var atImport          = require('postcss-import');
var customProperties  = require('postcss-custom-properties');
var bemLinter         = require('postcss-bem-linter');
var autoprefixer      = require('autoprefixer');
var calcCSS           = require('postcss-calc');
var cssFocus          = require('postcss-focus');
var cssMedia          = require('postcss-custom-media');
var cssReport         = require('postcss-reporter');
var extend            = require('postcss-simple-extend');
var hexA              = require('postcss-hexrgba');
var inputStyle        = require('postcss-input-style');
var mqPacker          = require('css-mqpacker');
var nested            = require('postcss-nested');
var resType           = require('postcss-responsive-type');

module.exports = {
  entry: {
    homepage: './src/index.js',
  },
  output: {
    path: './dist/',
    filename: 'index.js',

    // just for testing in the example page
    library: 'App',
    libraryTarget: 'umd'
  },
  resolve: {
    modulesDirectories: ['node_modules', './src'],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders:[
      // react
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: ['babel'],
        query: {
          presets:['es2015','react']
        }
      },
      // CSS
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
      },
      // Image
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader?name=images/[name].[ext]'
      },
      // SVG
      { test: /\.svg$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      },
      // Fonts
      {
        test: /\.woff$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      }
    ]
  },


  postcss: [
    atImport({
      path: ['node_modules', './src']
    }),
    autoprefixer(),
    bemLinter(),
    customProperties(),
    cssMedia(),
    inputStyle(),
    extend(),
    nested(),
    calcCSS(),
    hexA(),
    resType(),
    cssFocus(),
    mqPacker(),
    cssReport({clearMessages: true})
  ],
  plugins: [
    new ExtractTextPlugin('app.css')
  ]
};
