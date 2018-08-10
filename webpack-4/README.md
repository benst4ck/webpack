## webpack 4 学习

	npm init -y

--save-dev 安装到开发时的依赖

--save 安装到运行时的依赖

	npm install webpack webpack-cli --save-dev

在package.json文件中添加一个npm脚本
    
	"build": "webpack --config webpack.config.js"

webpack命令 默认选择使用webpack.config.js配置文件 所以 "--config webpack.config.js" 其实是可以省略的
这里的 --config 选项只是想表明 可以传递任何名称的配置文件来替代默认的webpack.config.js文件 这对于需要拆分成多个文件的复杂配置非常有用

运行

	npm run build 

就相当于运行

	webpack 

运行

	npm run watch

这时候webpack开启观察模式 命令行不会退出(ctrl+c退出) script脚本保持观察文件 如果依赖图中的一个文件被更新 那么代码将会自动重新编译 
不需要重复的执行webpack命令来编译代码 但是还是需要重复的刷新浏览器 使用webpack-dev-server可以解决

对于package.json文件中的start脚本 只需要运行命令

	npm start

这个项目中包含了 tree shaking 的尝试 但是[好像没有什么用](https://segmentfault.com/a/1190000012794598)