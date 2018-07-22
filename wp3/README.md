## webpack + babel使chrome浏览器支持ES6语法的import和export语法

如果在index.html中直接引入parent.js文件则会报错 因为当前的浏览器还不支持ES6的import和export语法

	<script src="./parent.js"></script> 

创建默认的package.json文件

	npm init -y

编辑package.json文件 添加

	"devDependencies": {
	  "babel": "^6.23.0",
	  "babel-cli": "^6.24.1",
	  "babel-core": "^6.24.1",
	  "babel-loader": "^7.0.0",
	  "babel-preset-es2015": "^6.24.1"
	}	

然后安装项目依赖

	npm i

创建.babelrc文件 配置babel 将.js为后缀的文件都编译为ES5语法

最后 执行命令

	webpack

系统访问当前目录下的webpack.config.js文件 访问入口parent.js进行打包 发现parent.js中引入了child.js 打包依赖文件child.js 最终将打包的所有内容保存到bundle.js中 html页面中引入bundle.js即可

打开index.html 查看控制台输出 成功