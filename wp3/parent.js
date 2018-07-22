import * as c from './child'  // 引入child模块中暴露的所有借口(*) 通过变量c来访问从child模块引入的接口
console.log(c.n)
console.log(c.sayHello('Ben'))