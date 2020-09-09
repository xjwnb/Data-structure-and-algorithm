/*
 * @Author: your name
 * @Date: 2020-09-09 23:47:29
 * @LastEditTime: 2020-09-10 00:11:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \小卡车的博客f:\Github_my_project\数据结构与算法\6.面向对象.js
 */
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}
var p1 = new Person('小卡车', 20, '男');
console.log(p1)

console.log('------------------------------');

function Animal(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.speed = function(speed) {
    console.log(`${name}今年${age}岁，可以跑${speed}km/h`);
  }
}
var animal1 = new Animal('蜘蛛侠', 18, '男')
console.log(animal1)
animal1.speed(1000)

console.log('------------------------------');

function Phone(name, price) {
  this.name = name;
  this.price = price;
  this.performance = performance;
}
function performance(CPU, capacitance) {
  console.log(`${this.name}的CPU是${CPU},电池容量是${capacitance}mAh`)
}
var phone1 = new Phone('小米10',5999);
console.log(phone1);
phone1.performance('晓龙865',4500);