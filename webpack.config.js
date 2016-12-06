var path = require('path');
var webpack = require('webpack');

module.exports = {
  devServer: {
    inline: true,
    contentBase: './public',
    port: 3000
  },
  devtool: 'cheap-module-eval-source-map',
  entry: './client/app/index.js',
  module: {
    loaders: [
    {
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/
    },
    { 
      test: /\.css$/, 
      loader: "style-loader!css-loader" 
    },
    {
      test: /\.scss/,
      loader: 'style-loader!css-loader!sass-loader'
    },
    {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'file'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      }
    ]
  },
  output: {
    path: 'client',
    filename: 'js/react-blog.min.js'
  },
  plugins: [
  new webpack.optimize.OccurrenceOrderPlugin()
  ]
};
