## 使用webpack.config.js配置文件来完善wp1项目中的缺点

首先 在命令行下执行

	cp -r wp1/* wp2

复制wp1文件夹下的所有目录及文件到wp2文件夹

然后在wp2项目中 创建webpack.config.js配置文件

	touch webpack.config.js

通过配置文件对打包的过程进行定义

现在只需要命令行下执行 webpack 命令 系统就会自动在当前目录下查找webpack.config.js配置文件 并按照其中的定义来执行打包

webpack.config.js配置文件中使用到webpack插件时 需要在项目依赖中安装webpack 安装为开发和测试时需要的package

	npm i webpack -D

如果webpack命令后跟了 -w 参数 就意味着开启了监听模式
	
	webpack -w

这时如果被打包的文件及其依赖有修改 会自动重新打包 不用手动去再次执行webpack命令 同时 没有变化的模块会在编译后缓存到内存中 而不会每次都被重新编译 所以监听模式的整体速度是很快的

但是 就算在监听模式下 还是需要不断手动刷新浏览器 可以考虑下webpack-dev-server
