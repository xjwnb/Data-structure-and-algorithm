/*
 * @Author: your name
 * @Date: 2020-09-09 23:35:00
 * @LastEditTime: 2020-09-09 23:40:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \小卡车的博客f:\Github_my_project\数据结构与算法\4.变量作用域.js
 */
// 1
function fn1() {
  return data1;
}
var data1 = "global1";
console.log(data1);
console.log(fn1());
console.log('------------------------------');


// 2
function fn2() {
  var data2 = 'fn2';
  return data2;
}
var data2 = 'global2';
console.log(data2);
console.log(fn2());
console.log('------------------------------');

function fn3() {
  data3 = 'fn3';
  return data3;
}
data3 = 'global3';
console.log(data3);
console.log(fn3());
console.log(data3)


