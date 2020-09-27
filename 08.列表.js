/*
 * @Author: your name
 * @Date: 2020-09-10 16:41:57
 * @LastEditTime: 2020-09-10 17:27:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \小卡车的博客f:\Github_my_project\数据结构与算法\8.列表.js
 */
//
function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];
  this.clear = clear;
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.length = length;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.contains = contains;
}

// append：给列表添加元素
function append(element) {
  return (this.dataStore[this.listSize++] = element);
}

// find：从列表中找到某个元素
function find(element) {
  for (var i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i] === element) {
      return i;
    }
  }
  return -1;
}

// remove：从列表中删除元素
function remove(element) {
  var foundAt = this.find(element);
  if (foundAt > -1) {
    this.dataStore.splice(foundAt, 1);
    --this.listSize;
    return true;
  }
  return false;
}

// length：列表中有多少个元素
function length() {
  return this.listSize;
}

// toString：显示列表中的元素
function toString() {
  return this.dataStore;
}

// insert：向列表中插入一个元素
function insert(element, after) {
  var insertPos = this.find(after);
  if (insertPos > -1) {
    this.dataStore.splice(insertPos + 1, 0, element);
    ++this.listSize;
    return true;
  }
  return false;
}

// clear：清空列表中所有的元素
function clear() {
  delete this.dataStore;
  this.dataStore.length = 0;
  this.listSize = this.pos = 0;
}

// contains 判断给定值是否在列表中
function contains(element) {
  for (var i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i] === element) {
      return true;
    }
  }
  return false;
}

function front() {
  this.pos = 0;
}

function end() {
  this.pos = this.listSize - 1;
}

function prev() {
  --this.pos;
}

function next() {
  if (this.pos < this.listSize) {
    ++this.pos;
  }
}

function currPos() {
  return this.pos;
}

function moveTo(position) {
  this.pos = position;
}

function getElement() {
  return this.dataStore[this.pos];
}

function hasNext() {
  return this.pos < this.listSize;
}

function hasPrev() {
  return this.pos >= 0;
}

var list = new List();
list.append("xkc");
list.append("小卡车");
list.append("China");
list.append("广州");
console.log(list.pos);
console.log(list.getElement());
console.log(list.insert("唱歌", "小卡车"));
list.moveTo(2);
console.log(list.getElement());
