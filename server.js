/**
 * Require Browsersync along with webpack and middleware for it
 */
const browserSync = require('browser-sync');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

/**
 * Require ./webpack.config.js and make a bundler from it
 */
const webpackConfig = require('./webpack.config.dev');
const bundler = webpack(webpackConfig);

/**
 * Run Browsersync and use middleware for Hot Module Replacement
 */
browserSync({
  server: {
    baseDir: 'dist',

    middleware: [
      webpackDevMiddleware(bundler, {
        // IMPORTANT: dev middleware can't access config, so we should
        // provide publicPath by ourselves
        publicPath: webpackConfig.output.publicPath,

        // pretty colored output
        stats: { colors: true },

        // for other settings see
        // http://webpack.github.io/docs/webpack-dev-middleware.html
      }),

      // bundler should be the same as above
      webpackHotMiddleware(bundler),
    ],
  },

    // no need to watch '*.js' here, webpack will take care of it for us,
    // including full page reloads if HMR won't work
  files: [
    'src/css/*.css',
    'src/components/**/*.css',
    'src/css/style.css',
    'dist/*.html',
  ],
});
