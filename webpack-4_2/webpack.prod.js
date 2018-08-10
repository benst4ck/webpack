const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	// 在生产环境中使用 source-map 选项 而不是在开发环境中用到的 inline-source-map
	// 避免在生产中使用 inline-*** 和 eval-*** 因为它们可以增加bundle大小 并降低整体性能
	devtool: "source-map",  
  plugins: [
  	// UglifyJSPlugin插件用来压缩bundle中的代码
    new UglifyJSPlugin({
    	sourceMap: true
    }),

    // NODE_ENV 是一个由 Node.js 暴露给执行脚本的系统环境变量 通常用于决定在开发环境与生产环境下 服务器工具 构建脚本和客户端library的行为
    // 无法在构建脚本webpack.config.js中 将process.env.NODE_ENV设置为 "production"
    // 通过webpack内置的DefinePlugin 来定义这个变量
    // 在src/index.js文件中 通过判断NODE_ENV变量的值来决定要进行什么样的操作
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })  
  ]
});