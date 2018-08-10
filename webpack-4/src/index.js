import _ from 'lodash'
import printMsg from './print.js'
import './style.css'
import { cube } from './math.js'

// ---------------------------

// 创建一个节点 h1元素
var titleNode = document.createElement("h1");

// 创建一个文本节点
var titleText = document.createTextNode("webpack 4");

// appendChild()方法可向节点的子节点列表的末尾添加新的子节点
// 将文本节点添加到h1节点上 
titleNode.appendChild(titleText);

// 创建一个属性 并设置属性值
var att=document.createAttribute("class");
att.value="titleStyle";

// 将创建的属性添加到h1节点上
titleNode.setAttributeNode(att);

// 将h1节点添加到body元素中
document.body.appendChild(titleNode);

// ---------------------------

function component() {
  var element = document.createElement('div');

  // lodash对于执行这一行是必需的
  // innerHTML属性设置或返回元素的开始和结束标签之间的HTML
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');  

  var btn = document.createElement('button');
	btn.innerHTML = 'Click me and check the console!';
	btn.onclick = printMsg;

	element.appendChild(btn);

  return element;
}

document.body.appendChild(component());

// ---------------------------

var element2 = document.createElement('pre');
element2.innerHTML = [
  'Hey~ man',
  '5 cubed is equal to ' + cube(5)
].join('\n\n');

document.body.appendChild(element2);
