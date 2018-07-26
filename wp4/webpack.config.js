const ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");
var path = require("path");
module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {

    rules: [
      { 
        test: /\.css$/, 
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",  // 指定加载器 用于当css文件(也就是额外的chunk)没有被提取
          use: "css-loader"  // 指定加载器 用于将资源(.css文件)转换成一个输出的CSS模块
        })
      },
      {
        test: /\.js$/, 
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('custom-styles.css')
  ]
}