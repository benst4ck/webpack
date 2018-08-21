import _ from 'lodash';

function component() {
  var element = document.createElement('div');
  var button = document.createElement('button');
  var br = document.createElement('br');

  button.innerHTML = 'Click me and look at the console!';
  element.innerHTML = _.join(['Hello', 'webpack'], '! ');
  element.appendChild(br);
  element.appendChild(button);

  // 当点击按钮时 懒加载(按需加载)print模块 这里用到了动态加载import() 它返回一个Promise对象 这里动态加载的print模块会动态打包到 /dist 目录下
  // e 表示点击事件 module指的是print模块
  button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
    var print = module.default;
    print();
  });

  return element;
}

document.body.appendChild(component());