/*
 * @Author: your name
 * @Date: 2020-09-10 22:12:36
 * @LastEditTime: 2020-09-10 22:42:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \小卡车的博客f:\Github_my_project\数据结构与算法\9.栈.js
 */
// 栈
// 先入后出 进栈 出栈
function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.length = length;
  this.clear = clear;
}

function push(element) {
  return this.dataStore[this.top++] = element;
}

function pop() {
  return this.dataStore[--this.top];
}

function peek() {
  return this.dataStore[this.top - 1];
}

function length() {
  return this.top;
}

function clear() {
  this.top = 0;
}

// 回文
// 例如 racecar 1001
function isPalindrome(work) {
  var s = new Stack();
  for (var i = 0; i < work.length; i++) {
    s.push(work[i]);
  }
  var rwork = "";
  while (s.length() > 0) {
    rwork += s.pop();
  }
  if (work == rwork) {
    return true;
  } else {
    return false;
  }
}
var work1 = "xkc";
console.log(isPalindrome(work1));
var work2 = "racecar";
console.log(isPalindrome(work2));
