var Webpack = require("webpack");  // 后面代码会使用到webpack的内置插件 所以需要安装webpack在当前项目依赖中 而不单单是全局安装
module.exports = {
	// 告知webpack使用相应模式的内置优化
	mode: "none",
	// 指定入口起点 webpack会找出入口起点(直接或间接)依赖的文件 最终将他们全部打包到指定的输出文件 数组用于指定多个入口起点 这里只有一个入口起点 可以将外层的数组符号去掉
  entry: ["./entry.js"],  
  // 告诉webpack在哪里(path)输出它所创建的bundles 以及如何命名(filename)这些文件
  output: {
    path: __dirname,  // __dirname表示webpack.config.js配置文件所在的目录
    filename: "bundle.js"
  },
  module: {
    // loader使得webpack能够去处理那些非JS文件(webpack自身只理解JS)
    rules: [
      // 以.css结尾的文件 使用style-loader和css-loader处理后进行打包
      // "嘿 webpack编译器 当你碰到「在 require()/import语句中被解析为'.css'的路径」时 在你对它打包之前 先使用 style-loader和css-loader 转换一下"
      { 
      	test: /\.css$/, 
      	use: [
      		{ loader: 'style-loader' },
          { loader: 'css-loader' }
      	]
      }
    ]
  },
  plugins: [
  	new Webpack.BannerPlugin("这里是打包文件头部注释")  // 该插件在打包后的输出文件(bundle.js)头部添加注释
  ]
}
