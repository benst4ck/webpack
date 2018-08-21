const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  // 设置为生产模式(production) 将bundle切换到压缩输出
	mode: "production", 

  // 当多个文件打包到一个bundle中时 如果其中一个文件的某个地方出错 那么控制台报错时只会简单的指出错误发生在bundle中的位置 如果使用了source map 则会具体指出错误发生在源文件中的位置
  // 避免在生产中使用 inline-*** 和 eval-*** 因为它们可以增加bundle大小 并降低整体性能
  devtool: 'source-map',

  // 告知 webpack-dev-server 在localhost:8080下建立服务 将dist目录下的文件 作为可访问文件
  // 项目中的文件处于被检测状态 一旦有文件内容改变 浏览器就会自动更新
  devServer: {
    contentBase: './dist'
  },
  entry: {
    // 代码分离打包 这里设置了两个入口起点 print.js文件是index.js文件的依赖 它们将分别被打包到与属性名对应的 app.bundle.js 和 print.bundle.js 
    app: './src/index.js',
    another: './src/another-module.js'
  },
  output: {
    // 前面在entry中指定的键名将被这里的 '[name]' 占位符使用 
    // 根据入口起点名称动态生成 bundle 名称
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {test: /\.js$/, use: 'babel-loader'},
      {test: /\.css$/, use: ['style-loader', 'css-loader']}
    ]
  },

  plugins: [
    // html-webpack-plugin插件会在output指定的目录下生成一个全新的index.html文件 所有打包好的bundle会自动添加到这个html中 不用手动去添加
    new HtmlWebpackPlugin({
      title: 'Caching'  // 指定index.html文件中<title>标签的内容
    }),

    // 每次执行webpack命令时都清理dist文件夹 清理掉遗留的文件
    new CleanWebpackPlugin(['dist']),

    // 压缩打包后的bundles 同时维持sourceMap功能 与production模式下的压缩程度是不一样的
    new UglifyJSPlugin({
      sourceMap: true
    })

  ],

  optimization: {
    // 代码分离和去重 在index.js和another-module.js文件中都用到了lodash 这里将lodash提取到common.bundle.js中 而不是将lodash分别打包到两个文件对应的bundle中 这样减小了代码量
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'common',  // 共享代码模块bundle的名字
          chunks: 'initial',
          minChunks: 2  // 当大于等于2个chunks共享了模块时 就将共享的代码提取到common.bundle.js中
        }
      }
    }
  }
};