// # 原始值：Undefined, Boolean, Number, String, Null, Symbol
// * 复制值

/**
 *  * 复制前的变量对象
 *  —— —— —— —— —— —— ——
 *  |     |             |
 *  |—— —— —— —— —— —— —|
 *  |     |             |
 *  |—— —— —— —— —— —— —|
 *  |num1 |5(Number类型)|
 *  |—— —— —— —— —— —— —|
 *
 *
 * * 复制后的变量对象
 *   —— —— —— —— —— —— ——
 *  |     |             |
 *  |—— —— —— —— —— —— —|
 *  |num2 |5(Number类型)|
 *  |—— —— —— —— —— —— —|
 *  |num1 |5(Number类型)|
 *  |—— —— —— —— —— —— —|
 *
 */

let num1 = 5;
// * 原始值被复制到新变量的位置，两者完全独立
let num2 = num1;
console.log(`num1 : ${num1} \nnum2 : ${num2}`);

num2 = 8;
console.log(`num1 : ${num1} \nnum2 : ${num2}`);

// # 引用值：保存在内存中的对象。
// # JS 不允许直接访问内存位置。在操作对象时，实际上是操作的该对象的引用而非实际的对象本身。

/**
 * * 在把引用值从一个变量赋给另一个变量时，存储在变量中的值也会被复制到新变量所在的位置。
 * * 区别在于，这里复制的值实际上是一个指针，它指向存储在堆内存中的对象。操作完成后，两个
 * * 变量实际上指向同一个对象
 */
let obj1 = new Object();
obj1.name = "JavaScript";
let obj2 = obj1;
obj2.name = "Java";
console.log(`obj1.name is ${obj1.name}\nobj2.name is ${obj2.name}`);

// * 向函数传参
// * 如果是原始值就跟原始值的复制一样
// * 如果是引用值就跟引用值变量的复制一样

// ! 原始值
let value = 10;
console.log(`调用函数前 ：${value}`);

let add = function (argValue) {
  argValue += 20;
  return argValue;
};

add(value);
console.log(`调用函数后 : ${value}`);

// ! 引用值
let user = new Object();
function setName(obj) {
  obj.name = "Jake";
}
setName(user);
console.log(`user.name is ${user.name}`);

// * instanceof 操作符

console.log(user instanceof Object);
