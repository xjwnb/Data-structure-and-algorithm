/*
 * @Author: your name
 * @Date: 2020-09-10 10:57:07
 * @LastEditTime: 2020-09-10 15:17:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \小卡车的博客f:\Github_my_project\数据结构与算法\7.数组.js
 */
// 创建数组
console.log("创建数组");
var arr1 = [];
console.log(arr1); // []
console.log(arr1.length); // 0

var arr2 = new Array();
console.log(arr2); // []
console.log(arr2.length); // 0

// 判断是否是数组
console.log("判断是否是数组");
var arr3 = [1, 2];
console.log(Array.isArray(arr3)); // true
console.log(Object.prototype.toString.call(arr3) === "[object Array]"); // true
console.log(arr3 instanceof Array); // true
console.log(arr3.constructor === Array); // true

// 读写数组
console.log("读写数组");
var arr4 = [1, 2, 3, 4, 5, 6, 7, 8];
for (var i = 0; i < arr4.length; i++) {
  console.log(arr4[i]);
}

// 字符串生成数组
console.log("字符串生成数组");
var str1 = "I am xkc";
console.log(str1.split(" ")); // [ 'I', 'am', 'xkc' ]

// 查找数组元素
console.log("查找数组元素");
var arr5 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr5.indexOf(6)); // 5
console.log(arr5.indexOf(10)); // -1
console.log(arr5.lastIndexOf(8)); // 7

// 数组的字符串表示
console.log("数组的字符串表示");
var arr6 = ["I", "am", "xkc"];
console.log(arr6.join()); // I,am,xkc
console.log(arr6.toString()); // I,am,xkc

// 连接数组
console.log("连接数组");
var arr7 = [1, 2, 3, 4, 5];
var arr8 = [6, 7, 8, 9];
console.log(arr7.concat(arr8)); // [1,2,3,4,5,6,7,8,9]
console.log([...arr7, ...arr8]); // [1,2,3,4,5,6,7,8,9]

// 截取数组
console.log("截取数组");
var arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr9.slice(2, 7)); // [ 3, 4, 5, 6, 7 ]

// 替换数组
console.log("替换数组");
var arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr10.splice(2, 3, "xkc")); // [3,4,5]
console.log(arr10); // [1,2,'xkc',6,7,8,9]

// 增加数组元素
console.log("增加数组元素");
var arr11 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr11.push(10);
console.log(arr11); // [1,2,3,4,5,6,7,8,9,10]

// 开头添加元素
console.log("开头添加元素");
var arr12 = [2, 3, 4, 5, 6, 7, 8, 9];
arr12.unshift(1);
console.log(arr12); // [1,2,3,4,5,6,7,8,9]

// 删除末尾元素
console.log("删除末尾元素");
var arr13 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr13.pop();
console.log(arr13); // [1,2,3,4,5,6,7,8]

// 删除第一个元素
console.log("删除第一个元素");
var arr14 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr14.shift();
console.log(arr14); // [2,3,4,5,6,7,8,9]

// 数组倒序
console.log("数组倒序");
var arr15 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr15.reverse();
console.log(arr15); // [9,8,7,6,5,4,3,2,1]
var arr16 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var arr17 = [];
for (var i = 0; i < arr15.length; i++) {
  arr17[i] = arr16[arr15.length - 1 - i];
}
console.log(arr17); // [9,8,7,6,5,4,3,2,1]

// 数组排序
console.log("数组排序");
var arr18 = [2, 5, 7, 2, 6, 8, 4, 1];
arr18.sort();
console.log(arr18); // [1,2,2,4,5,6,7,8]
var arr19 = [5, 3, 6, 8, 3, 8, 0, 1];
arr19.sort((a, b) => b - a);
console.log(arr19); // [8,8,6,5,3,3,1,0]

// 创建二位数组
console.log("创建二位数组");
function makeDoubleArr(numRows, numCols, initValue) {
  var arr = [];
  for (var i = 0; i < numRows; i++) {
    var colArr = [];
    for (var j = 0; j < numCols; j++) {
      colArr[j] = initValue;
    }
    arr[i] = colArr;
  }
  return arr;
}
var arr20 = makeDoubleArr(6, 6, 6);
console.log(arr20);
/* [
  [ 6, 6, 6, 6, 6, 6 ],
  [ 6, 6, 6, 6, 6, 6 ],
  [ 6, 6, 6, 6, 6, 6 ],
  [ 6, 6, 6, 6, 6, 6 ],
  [ 6, 6, 6, 6, 6, 6 ],
  [ 6, 6, 6, 6, 6, 6 ]
] */