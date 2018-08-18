## webpack 4 学习

在webpack-4的基础上学习

首先 安装webpack-merge 它提供合并功能

	 npm i -D webpack-merge

删掉之前的webpack.config.js

添加 

不同环境的公共配置
webpack.common.js

为每个环境编写彼此独立的 webpack 配置
webpack.dev.js
webpack.prod.js

通过webpack-merge来合并出不同的生产环境或开发环境 在package.json文件的scripts中 通过--config参数来传递webpack配置文件 取代了默认的webpack.config.js

