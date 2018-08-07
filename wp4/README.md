## 在webpack中将打包的代码分离到不同的bundle中 按需加载

在index.js文件中引入三个.css文件

	import './home.css';
	import './home2.css';
	import './home3.css';

最终CSS和JS代码会打包在一起 这样将无法利用浏览器的异步和并行加载CSS的能力 网页必须等待 直到整个JS包下载完成 然后重绘网页

使用extract-text-webpack-plugin插件 

该插件会将入口chunk(entry chunks)中引入的所有.css文件合并到custom-styles.css文件中 这时CSS代码和JS代码被分开 两者并行加载 在css文件较大的情况下 这样做效率更高

然后在index.html文件中 通过<link />标签链接custom-styles.css样式表

上面的代码都建立在webpack3版本