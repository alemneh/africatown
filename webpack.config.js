var webpack = require('webpack');
var path = require('path');
var env = process.env.NODE_ENV || 'development';
var autoprefixer = require('autoprefixer');
var CONFIG = require('./config/config')[env];
var BUILD_DIR = path.resolve(__dirname, 'src/public');
var APP_DIR = path.resolve(__dirname, 'src/app');
var PROD;
if(process.env.NODE_ENV == 'production') {
  PROD = true;
}

var definePlugin = new webpack.DefinePlugin({
  'process.env': {
    'URL': JSON.stringify(CONFIG.host)
  }
});

var optimizeBundle = new webpack.optimize.UglifyJsPlugin({
  compress: {warnings: false}
});





var config = {
  entry: [
    APP_DIR + '/index.js'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?/, include: APP_DIR, loader: 'babel-loader' }
    ]
  },
  plugins: [definePlugin],
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  postcss: function() {
    return [autoprefixer];
  }
};
// ,
// { test: /\.css$/, loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!postcss-loader'},
// { test: /\.png(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=100000&mimetype=image/png'},
// { test: /\.jpg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?mimetype=image/jpg'},
// { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}


module.exports = config;
