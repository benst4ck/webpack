// 该模块对外暴露两个接口 一个是变量n 一个是函数sayHello

export var n = 1208;
export function sayHello(name) {
  var person = name || 'stranger'  // 如果调用sayHello函数时没有出入name参数 那么就将 "stranger" 字符串传递给person变量
  console.log(`hello ${person}`)
}
