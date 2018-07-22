// 该模块对外暴露两个接口 一个是变量n 一个是函数sayHello

export var n = 1208;
export function sayHello(name) {
  var person = name || 'stranger'
  console.log(`hello ${person}`)
}