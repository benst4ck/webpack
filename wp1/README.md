## 不使用webpack配置文件的情况下 初探webpack

webpack是一个基于node的项目 它是现代JS应用程序的静态模块打包器 它减少了html页面所引入文件的数量

首先全局安装webpack

	npm install webpack -g


在项目根目录下生成package.json文件
	
	npm init -y 

安装依赖包 这两个依赖用于打包.css文件

	npm i css-loader style-loader -D

这个项目中并没有使用webpack的内置插件等功能 所以没必要安装webpack到项目的依赖中

在entry.js文件中 写入要打包的内容

以entry.js文件为入口 分析该文件及其依赖(require到该文件的模块) 最终自动打包为一个名为bundle.js的文件 然后index.html页面引入这个打包好的文件

	webpack entry.js bundle.js --module-bind "css=style-loader\!css-loader"

整体来看 webpack就是一个打包工具 但是它打包的不光是.js文件 .css文件它也能打包 但是需要安装相应的loader

最后的打包命令看起来很麻烦 可以通过webpack.config.js配置文件来简化