/*
 * @Author: your name
 * @Date: 2020-09-09 23:31:27
 * @LastEditTime: 2020-09-09 23:33:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \小卡车的博客f:\Github_my_project\数据结构与算法\3.函数.js
 */
function fn1(num) {
  var sum = 0;
  for (var i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}
console.log(fn1(100));
