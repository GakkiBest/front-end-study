// ! String
// new 实例化引用类型后，得到的实例会在离开作用域时被销毁
let s1 = new String("some text");
let s2 = s1.substring(2);
console.log(`s1 : ${s1}\ns2 : ${s2}`);

// 自动创建的原始值包装对象则只存在于访问它的那行代码执行期间。这意味着不能在运行时给原始值添加属性和方法
let str1 = "JavaScript";
// 第二行代码运行时会临时创建一个 String 对象，而当第三行代码执行时，这个对象已经被销毁了
str1.color = "yellow";
// 第三行代码在这里创建了自己的 String 对象，但这个对象没有 color 属性
console.log(str1.color);

console.log(
  "\n--------------------------chatAt 方法----------------------------\n"
);

// * charAt(index:int)
let name = "Mary";
console.log(name.charAt(2));

// * concat() 将一个或多个字符串拼接为一个新字符串
let first_name = "Bill ";
let last_name = "Clinton";
let full_name = first_name.concat(last_name);
console.log(full_name);

console.log(
  "\n-------------------------提取子字符串-----------------------------\n"
);

// * 提取子字符串的方法：slice()、substr()和 substring()
// * 都可以接收 1 或 2 个参数，
// * slice() 与 substring() 的参数表示 [firstArg, secondArg)
// * substr() 第二个参数表示返回的子字符串数量
// # 当参数为负数时
// # substr() 将第一个负参数当成字符串长度加上该值，第二个负参数解析为 0
// # substring() 将所有负参数解析为 0

let my_favorite_fruit = "watermelon";
console.log(`length is ${my_favorite_fruit.length}`);
console.log("--------");
console.log(`slice(2,7) : ${my_favorite_fruit.slice(2, 7)}`);
console.log(`substring(2,7) : ${my_favorite_fruit.substring(2, 7)}`);
console.log(`substr(2, 7) : ${my_favorite_fruit.substr(2, 7)}`);
console.log("--------");
console.log(`slice(-3) : ${my_favorite_fruit.slice(-3)}`); // 等价于 slice(10-3) 字符串长度 + 负参数
console.log(`substring(-3) : ${my_favorite_fruit.substring(-3)}`); // 等价于 substring(0)
console.log(`substr(-3) : ${my_favorite_fruit.substr(-3)}`); // 等价于 substr(10-3) 字符串长度 + 负参数
console.log("--------");
console.log(`slice(2,-4) : ${my_favorite_fruit.slice(2, -4)}`); // 等价于 slice(2, 7) 字符串长度 + 负参数
console.log(`substring(2,-4) : ${my_favorite_fruit.substring(2, -4)}`); // 等价于 substring(0, 2)
console.log(`substr(2,-4) : ${my_favorite_fruit.substr(2, -4)}`); //等价于 substr(2, 0) 返回长度为 0 的字符串，因此为空

console.log(
  "\n-------------------------定位子字符串-----------------------------\n"
);

// * 定位子字符串 indexOf(arg:string, from:int) lastIndexOf(arg:string, from:int)——反向搜索
// 第二个参数表示开始搜索的位置

let me_index = my_favorite_fruit.indexOf("me", 2);
console.log(me_index);

console.log(
  "\n-------------------------includes 方法-----------------------------\n"
);

// * 字符串包含方法
// * startWith() 可传入第二个参数，表示开始搜索的位置
// * endWith()
// * includes() 可传入第二个参数，表示开始搜索的位置

console.log(
  `my_favorite_fruit includes me ? ${
    my_favorite_fruit.includes("me") ? "yes" : "no"
  }`
);

console.log(
  "\n-------------------------trim 方法-----------------------------\n"
);

// * trim() 删除字符串前后空格
// * trimLeft() trimRight()
let classic = "  Hello world!      ";
let after_trim = classic.trim();
console.log(`classic is ${classic}\nafter_trim is ${after_trim}`);

console.log(
  "\n-------------------------repeat 方法-----------------------------\n"
);

// * repeat() 这个方法接收一个整数参数，表示要将字符串复制多少次
let na = "na ";
console.log("oh, " + na.repeat(5));

console.log(
  "\n-------------------------padStart 方法-----------------------------\n"
);

// * padStart() 和 padEnd()方法
// * padStart()和 padEnd()方法会复制字符串，如果小于指定长度，则在相应一边填充字符，直至满足长度条件。
// * 这两个方法的第一个参数是长度，第二个参数是可选的填充字符串，默认为空格。
let stringValue = "foo";
console.log(stringValue.padStart(6));
console.log(stringValue.padStart(9, "."));
console.log(stringValue.padEnd(6));
console.log(stringValue.padEnd(9, "."));

console.log(
  "\n-------------------------字符串的循环输出-----------------------------\n"
);

for (const value of my_favorite_fruit) {
  console.log(value);
}

console.log(
  "\n-------------------------字符串的解构-----------------------------\n"
);

console.log([...my_favorite_fruit]);

console.log(
  "\n-------------------------字符串模式匹配方法-----------------------------\n"
);

// * match() 方法
let text = "cat, bat, sat, fat";
let pattern = /.at/;

let matches = text.match(pattern);
console.log(matches);

// * search() 方法 返回模式第一个匹配的位置索引，如果没找到则返回-1
console.log(`\nat first index is ${text.search(/at/)}\n`);

// * replace() 方法
// * 这个方法接收两个参数，第一个参数可以是一个 RegExp 对象或一个字符串（这个字符串不会转换为正则表达式），第二个参数可以是一个字符串或一个函数。
// * 如果第一个参数是字符串，那么只会替换第一个子字符串。要想替换所有子字符串，第一个参数必须为正则表达式并且带全局标记

let after_replace = text.replace(/(at)/g, "ond ($1)");
console.log(`text : ${text}`);
console.log(`after_replace : ${after_replace}`);
console.log(
  "\n-------------------------localeCompare 方法-----------------------------\n"
);

let color = "purple";
console.log(color.localeCompare("yellow"));
console.log(color.localeCompare("purple"));

console.log(
  "\n------------------------toFixed 方法------------------------------\n"
);

// ! Number
// toFixed() 传入一个值，指定小数位数，超过这个值，四舍五入

let float_value = 12.249;
let fixed_float_value = float_value.toFixed(2);
console.log(fixed_float_value);

console.log(
  "\n-------------------------toExponential 方法-----------------------------\n"
);

// toExponential() 返回以科学计数法表示的字符串
let num = 149000;
let exponentialNum = num.toExponential();
console.log(exponentialNum);
console.log(`typeof exponentialNum : ${typeof exponentialNum}`);

console.log(
  "--------------------------toPrecision 方法----------------------------\n"
);

// toPrecision()
// 根据情况返回最合理的输出结果，可能是固定长度，也可能是科学记数法形式
// 接受一个参数，表示结果的总位数
let number = 99;
console.log(number.toPrecision(1)); // 99 不能只用 1 位数字来精确表示，所以这个方法就将它舍入为 100
console.log(number.toPrecision(2));
console.log(number.toPrecision(3));

console.log(
  "---------------------------isInteger 方法---------------------------\n"
);

// Number.isInteger()
console.log(Number.isInteger(num));
console.log(Number.isInteger(float_value));

console.log("------------------------------------------------------\n");
