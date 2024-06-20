// * 在使用 var 声明变量时，变量会被自动添加到最接近的上下文
// * 用 var 声明的变量会被提升到包围它的函数作用域的顶部。
// * try/catch 中的 catch 块 以及 with 语句 会使作用域链增强

// 案例一
let location = new Object();
location.href = "http://www.xxx.com";
function buildUrl() {
  let qs = "?debug=true";
  with (location) {
    // 使用 let 会报错
    var url = href + qs;
  }

  return url;
}
let buildUrlResult = buildUrl();
console.log(buildUrlResult);

// 案例2
function multiply(a, b) {
  {
    // 使用 let 会报错
    var result = a * b;
  }
  return result;
}

let multiplyValue = multiply(2, 7);
console.log(multiplyValue);

// * 未被声明的变量具有全局作用域

function add(a, b) {
  sum = a + b;
  return sum;
}

add(3, 6);
console.log(sum); // 9

// * 重复的 var 声明会被忽略，重复的 let 声明会报错

var a;
var a;

let b;
// let b; // ! Error

// * const 声明时必须被初始化, 初始化后不能再被赋予新值
// const value;  // ! Error
const value = 9;
// value = 24;   // ! 报错
