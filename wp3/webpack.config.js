var path = require("path");  // 导入Node.js的一个核心模块path
module.exports = {
  entry: './parent.js',
  output: {
    // 这里返回该webpack.config.js配置文件所在目录的绝对路径 然后在该路径下的dist目录(不存在则创建)中 创建bundle.js 所有的内容打包到bundle.js文件中
    path: path.resolve(__dirname, 'dist'),  // path.resolve()方法会把一个路径或路径片段的序列解析为一个绝对路径
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {test: /\.js$/, use: 'babel-loader'}
    ]
  }
  
}