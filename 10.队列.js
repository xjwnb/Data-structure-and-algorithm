/*
 * @Author: your name
 * @Date: 2020-09-10 22:55:51
 * @LastEditTime: 2020-09-10 23:04:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \小卡车的博客f:\Github_my_project\数据结构与算法\10.队列.js
 */
// 队列
// 先进先出
function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
}

function enqueue(element) {
  this.dataStore.push(element);
}

function dequeue() {
  return this.dataStore.shift();
}

function front() {
  return this.dataStore[0];
}

function back() {
  return this.dataStore[this.dataStore.length - 1];
}

function toString() {
  var retStr = "";
  for (var i = 0; i < this.dataStore.length; i++) {
    retStr += this.dataStore[i] + "\t";
  }
  return retStr;
}

function empty() {
  if (this.dataStore.length == 0) {
    return true;
  } else {
    return false;
  }
}

var queue = new Queue();
queue.enqueue("xkc");
queue.enqueue("小卡车");
queue.enqueue(20);
queue.enqueue("China");
console.log(queue.toString());
queue.dequeue();
console.log(queue.toString());
console.log(queue.front());
console.log(queue.back());