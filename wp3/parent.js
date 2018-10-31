import $ from 'jquery'

import * as c from './child'  // 引入child模块中暴露的所有接口(*) 通过变量c来访问从child模块引入的接口 这时候c是一个对象
import {name, age, multiply} from './child2'

console.log(c.n)
console.log(c.sayHello('Ben'))
var person = name + age
var num = multiply(c.n, 2)

$(function(){  // 加载完文档就执行该函数
	$("body").append("<div id='data'></div>")  // 向每个匹配的元素内部追加内容 追加意味着是添加到尾部
	$("#data").text(person)
})

setTimeout(
	()=>{  // 2秒后执行该函数
		$("#data").before("<span></span>")  // before()方法 在每个匹配的元素之前插入内容
		$("span").text(num)
	}, 2000
)
