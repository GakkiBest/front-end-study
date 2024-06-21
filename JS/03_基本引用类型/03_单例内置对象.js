// ! Global
// 在全局作用域中定义的变量和函数都会变成 Global 对象的属性

// # window
// # 浏览器将 window 对象实现为 Global对象的代理。因此，所有全局作用域中声明的变量和函数都变成了 window 的属性

// ! 需要在浏览器的控制台运行这段代码
// var color = "blue";

// function displayColor() {
//   console.log(window.color);
// }

// window.displayColor();

// ! Math

let values = [1, 2, 3, 4, 5];
let max_num = Math.max(...values);
console.log(max_num);

// * Math.ceil()方法始终向上舍入为最接近的整数
// * Math.floor()方法始终向下舍入为最接近的整数
// * Math.round()方法执行四舍五入
// * Math.fround()方法返回数值最接近的单精度（32 位）浮点值表示

let float_value1 = 56.745;
let float_value2 = 45.113;

console.log(`ceil(56.745) : ${Math.ceil(float_value1)}`);
console.log(`floor(56.745) : ${Math.floor(float_value1)}`);
console.log(`round(56.745) : ${Math.round(float_value1)}`);
console.log(`round(45.113) : ${Math.round(float_value2)}`);
console.log(`fround(56.745) : ${Math.fround(float_value1)}`);
console.log(`fround(45.113) : ${Math.fround(float_value2)}`);

// * Math.random() 生成一个随机浮点数 [0, 1)
// 生成一个 1-10 的随机数

function randomInt() {
  return Math.floor(Math.random() * 10 + 1);
}

console.log(randomInt());
