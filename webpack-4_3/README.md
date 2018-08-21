## webpack 4 学习

	mkdir webpack-4_3

	cp -r webpack-4/* webpack-4_3

但是 .babelrc文件并没有被复制

使用webpack打包模块化后的应用程序 webpack会生成一个可部署的 /dist 目录 然后将打包的内容放到该目录中

通常浏览器会使用缓存技术 如果在部署新版本时没有修改资源的文件名 浏览器可能会认为文件没有被更新 就会使用它的缓存版本

这时候可以修改output.filename的值为 '[name].[chunkhash].js' 

这样 当文件发生更改时 bundle对应的 [chunkhash] 都会发生改变

通常推荐将第三方库(library 例如 lodash react)提取到单独的vendor chunk中 因为它们很少像本地的源代码那样频繁修改

这时候利用客户端的长效缓存机制 通过命中缓存来减少向服务器请求资源 

同时 通过import()实现懒加载(按需加载) 每次页面加载的时候不会立即请求print.js模块 而是点击按钮时才加载 一定程度上提高了性能

print.js在没有点击按钮时 已经被打包到dist目录下

在加载index.html页面时 index.html页面中并没有引入dist目录下的print模块对应的bundle 

当点击按钮时 查看控制台的Network 这时print模块对应的bundle才被下载

在webpack打包的提示信息中
 	
	Entrypoint app = common.[hash].js app.[hash].js
	Entrypoint another = common.[hash].js another.[hash].js

可以看出 

	app: './src/index.js'

index.js文件中的代码 被拆分打包到了 common.[hash].js 和 app.[hash].js 这两个bundle中

	another: './src/another-module.js'

another-module.js文件中的代码 被拆分打包到了common.[hash].js 和 another.[hash].js 这两个bundle中

实际上 index.js和another-module.js文件的公共依赖是lodash模块 而lodash模块被提取打包到common.[hash].js中 从而减少了代码量