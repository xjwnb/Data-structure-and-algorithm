/*
 * @Author: your name
 * @Date: 2020-09-09 23:23:40
 * @LastEditTime: 2020-09-09 23:28:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \小卡车的博客f:\Github_my_project\数据结构与算法\2.循环结构.js
 */
// while 循环
var num1 = 1;
var sum1 = 0;
while (num1 < 100) {
  sum1 += num1;
  num1++;
}
console.log(sum1);

// for 循环
var num2 = 1;
var sum2 = 0;
for (var i = num2; i < 100; i++) {
  sum2 += i;
}
console.log(sum2);

// for 循环数组
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
