console.log("\n--------------- Array.from() 方法创建数组 ---------------\n");
let a1 = [1, 2, 3];
let a2 = Array.from(a1);
console.log(a2);
console.log(a1 == a2);
console.log(a1 === a2);

// * 可接收第二个参数 ：函数映射
// * 可接收第三个可选参数，用于指定映射函数中 this 的值。但这个重写的 this 值在箭头函数中不适用

let array1 = Array.from(a1, (x) => x ** 2);
console.log(`array1 is ${array1}`);

let array2 = Array.from(
  a1,
  function (x) {
    return x ** this.exponent;
  },
  { exponent: 2 }
);

console.log(`array2 is ${array2}`);

console.log("\n--------------- 使用 Array.of() 方法创建数组 ---------------\n");

let array3 = Array.of(1, 2, 3, 4);
console.log(`array3 is ${array3}`);

let array4 = Array.of(undefined);
console.log(`array4 is ${array4}`);

console.log("\n--------------- 数组索引 ---------------\n");

// ! JS 没有数组越界异常

// # 当 index 超过 array 的 length 时，会输出 undefined
let color = ["red", "yellow", "black", "pink"];
for (let i = 0; i <= color.length; ++i) {
  console.log(color[i]);
}

console.log(`\ncolor is ${color}\nlength of color is ${color.length}\n`);

// # 当为 index 超过 array 的 length 的数组赋值时，会自动扩充数组长度到 index + 1
color[color.length + 1] = "white";
console.log(`color is ${color}\nlength of color is ${color.length}\n`);

// # 数组的 length 属性是可修改的
console.log(
  `修改 length 属性前 length = ${color.length}, color[5] = ${color[5]}`
);
color.length = 4;
console.log(
  `修改 length 属性前 length = ${color.length}, color[5] = ${color[5]}`
);

console.log("\n--------------- 判断一个值是否为数组 ---------------\n");

console.log(Array.isArray(color));

console.log("\n--------------- 迭代器方法 ---------------\n");

// * keys() 返回数组索引的迭代器
// * values() 返回数组元素的迭代器
// * entries() 返回索引/值键值对的迭代器

for (const [index, value] of color.entries()) {
  console.log(`${index} : ${value}`);
}

console.log("\n--------------- 栈方法 ---------------\n");

// * push() 可传入多个元素，追加在末尾，返回数组的新长度
// * pop() 移除末尾元素，并返回该值

let push_return_value = color.push("purple", "grey");
console.log(`push_return_value is ${push_return_value}\ncolor : ${color}\n`);
let pop_return_value = color.pop();
console.log(`pop_return_value is ${pop_return_value}\ncolor : ${color}`);

console.log("\n--------------- toString() 与 valueOf() ---------------\n");

// * valueOf 返回数组本身, 在使用 console.log() 与 alter() 时会默认调用 toString() 输出
// * toString() 返回由数组中每个值的等效字符串拼接而成的一个逗号分隔的字符串

console.log(`color.valueOf() : ${color.valueOf()}\n`);
console.log(`color.toString() : ${color.toString()}`);

console.log("\n--------------- join() 方法 ---------------\n");

// * join() 方法接收一个参数，即字符串分隔符，返回包含所有项的字符串

console.log(`color.join("||") : ${color.join("||")}`);

console.log("\n--------------- 队列方法 ---------------\n");

// * unshift() 方法在数组头元素前添加若干个元素，返回数组的新长度
// * shift() 方法在移除数组的头元素，返回被删除的值

let unshift_return_value = color.unshift("orange", "grey", "green");
console.log(
  `unshift_return_value : ${unshift_return_value}\ncolor : ${color}\n`
);

let shift_return_value = color.shift();
console.log(`shift_return_value : ${shift_return_value}\ncolor : ${color}`);

console.log("\n--------------- splice() 方法 ---------------\n");

// # index : 下标索引，执行操作的位置
// # delNum : 要删除的元素个数
// # value : 要插入的元素

console.log(`before splice : \n\tcolor : ${color}\n`);

// * 删除 ：传入两个参数（index，delNum）
color.splice(0, 1);
console.log(`after delete splice : \n\tcolor : ${color}\n`);

// * 插入 ：传入的参数大于 3 个 （index，delNum, value, value ,...）
let color_length = color.length;
color.splice(color_length - 1, 0, "orange", "white");
console.log(`after insert splice : \n\tcolor : ${color}`);

console.log("\n--------------- 断言函数 ---------------\n");
// * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// * 都接收 3 个参数，元素、索引和数组本身, 两者一旦找到符合条件的元素就会终止
// * find() 返回符合条件的第一个元素
// * findIndex() 返回符合条件的第一个元素的下标

// 2024 年 6 月份创建
let people = [
  { name: "刘亦菲", age: 37 },
  { name: "单依纯", age: 22 },
  { name: "张雪迎", age: 27 },
];

const find_result = people.find((element, index, array) => element.age > 25);
console.log(find_result);

const find_index_result = people.findIndex(
  (element, index, array) => element.age < 25
);
console.log(find_index_result);

console.log("\n--------------- 迭代方法 ---------------\n");

// * map() 对数组的每一项都运行传入的函数，返回每次函数调用的结果构成的数组，并不会改变元数组

let number = [1, 3, 8, 13, 24];

let map_result = number.map((value) => value * 2);
console.log(map_result);

console.log("\n");

// * forEach() 对数组的每一项都运行传入的函数, 没有返回值

number.forEach((value) => {
  console.log(value);
});

console.log("\n");

// * filter() 对数组每一项都运行传入的函数，函数返回 true 的项会组成数组之后返回

let filter_result = people.filter((element) => element.age < 30);
console.log(filter_result);

console.log("\n");

// * every() 对数组每一项都运行传入的函数，如果对每一项函数都返回 true，则这个方法返回 true

let every_result = people.every((element) => element.age < 30);
console.log(every_result);

console.log("\n");

// * some()：对数组每一项都运行传入的函数，如果有一项函数返回 true，则这个方法返回 true

let some_result = people.some((element) => element.age < 25);
console.log(some_result);

console.log("\n--------------- 归并函数 ---------------\n");

// * reduce() reduceRight() 接收两个参数
// * 第一个参数 ：上一个归并值、当前项、当前项的索引和数组本身。
// * 第二个参数 ：初始值 第一次执行回调函数时，不存在“上一次的计算结果”。如果需要回调函数从数组索引为 0 的元素开始执行，则需要传递初始值。
// * 否则，数组索引为 0 的元素将被用作初始值，迭代器将从第二个元素开始执行（即从索引为 1 而不是 0 的位置开始）
// * 这两个函数返回的任何值都会作为下一次调用同一个函数的第一个参数

let reduce_result = number.reduce((pre, cur) => pre + cur, 5);
console.log(reduce_result);
