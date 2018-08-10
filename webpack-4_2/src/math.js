export function square(x) {
  return x * x;
}

export function cube(x) {
  return x * x * x;
}

// 在index.js文件中只导入了cube方法 而并未导入square方法 对于未引用代码(dead code) 不应该进行打包到bundle中 这就需要通过tree shaking来实现
// tree shaking依赖于ES2015模块系统中的静态结构特性 例如import和export 通过package.json的 "sideEffects" 属性来实现

// 对于依赖包 如果只是单纯的暴露一个或多个export(就像当前的math.js文件) 那么它是无副作用的 只需要简单的将 "sideEffects" 属性设置为false 未被import的export就不会被打包到bundle中

/*
	{
	  "name": "webpack-4",
	  "sideEffects": false
	}
*/

// 如果依赖包有副作用(例如影响全局作用域) 那么可将其放到一个数组中 这时候就不会被忽略
// 任何被import导入的文件都会受到tree shaking的影响 这意味着 如果在项目中使用类似css-loader并导入CSS文件 则需要将其添加到side effect列表中 以免在生产模式中无意中将它删除

/*
	{
	  "name": "webpack-4",
	  "sideEffects": [
	    "./src/some-side-effectful-file.js",
	    "*.css"
	  ]
	}
*/