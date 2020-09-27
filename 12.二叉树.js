/*
 * @Author: your name
 * @Date: 2020-09-27 00:29:55
 * @LastEditTime: 2020-09-27 11:14:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \数据结构与算法\12.二叉树.js
 */
//
function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}
function show() {
  return this.data;
}
function BST() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
}
// 插入
function insert(data) {
  var n = new Node(data, null, null);
  if (this.root == null) {
    this.root = n;
  } else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current == null) {
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if (current == null) {
          parent.right = n;
          break;
        }
      }
    }
  }
}
// 中序遍历
function inOrder(node) {
  if (!(node == null)) {
    inOrder(node.left);
    console.log(node.show() + " ");
    inOrder(node.right);
  }
}
// 先序遍历
function preOrder(node) {
  if (!(node == null)) {
    console.log(node.show());
    preOrder(node.left);
    preOrder(node.right);
  }
}
// 后序遍历
function postOrder(node) {
  if (!(node == null)) {
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.show());
  }
}
// 查找最小值
function getMin() {
  var current = this.root;
  while (!(current.left == null)) {
    current = current.left;
  }
  return current.data;
}
// 查找最大值
function getMax() {
  var current = this.root;
  while (!(current.right == null)) {
    current = current.right;
  }
  return current.data;
}

var nums = new BST();
nums.insert(66);
nums.insert(12);
nums.insert(19);
nums.insert(199);
nums.insert(300);
nums.insert(15);
inOrder(nums.root); // 12 15 19 66 199 300
preOrder(nums.root); // 66 12 19 15 199 300
postOrder(nums.root); // 15 19 13 300 199 66
