/*
 * @Author: your name
 * @Date: 2020-09-09 23:43:06
 * @LastEditTime: 2020-09-09 23:44:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \小卡车的博客f:\Github_my_project\数据结构与算法\递归.js
 */
function fn1(num) {
  if (num === 1) {
    return num;
  } else {
    return num * fn1(num - 1);
  }
}
console.log(fn1(10));
