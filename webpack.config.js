const Webpack = require('webpack');
const Path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");


const config = {
  context: Path.resolve(__dirname, 'src'),
  //entry point
  entry:  Path.resolve(__dirname,  'src/js/index.js'),
  // output
  output: {
    // path: Path.resolve(__dirname, 'dist/static/js'), deploy need this path
    publicPath: '/static/js',
    filename: 'bundle.js'
  },
//The content packaged by webpack-dev-server is in memory,The root directory of the resource 
//is publicPath, The publicPath specifies the public URL address of the output files when referenced in a browser. 
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          Path.resolve(__dirname, "node_modules"),
        ],//Block files that do not need to be processed
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
        // use: ExtractTextPlugin.extract({
        //   fallback: 'style-loader',
        //   use: ['css-loader', 'sass-loader']
        // })
      }
    ]
  },
  //style-loader takes those styles and creates a <style> tag in the page's <head> element containing those styles.
  plugins: [
    // new ExtractTextPlugin({
    //   filename: "style.css",
    //   disable: false,
    //   allChunks: true
    // }),
    new CopyWebpackPlugin([
      { from: Path.join(__dirname, 'src/data'), to: Path.join(__dirname, 'dist/data')},
      { from: Path.join(__dirname, 'src/media'), to: Path.join(__dirname, 'dist/media')},
      { from: Path.join(__dirname, 'src/banners'), to: Path.join(__dirname, 'dist/banners')}
    ])
  ],
//dev server config
  devServer: {
    contentBase: Path.join(__dirname, 'dist'),//read from memory
    inline: true,
    //compress bundle
    compress: true,
    // historyApiFallback: true,
    port: 9000,
    hot: true,
    open: true
  }
};

module.exports = config;