// * 空值合并运算符
// * a ?? b 如果 a 是 null/undefined 则返回 b, 否则返回 a

let a = null,
  b = "JavaScript";
let result = a ?? b;
console.log(result);

let user;
loginUser = a ?? "匿名用户";
console.log(`你好，${loginUser}`);

console.log(a ?? user ?? b);

// * && 与操作符
/**
 * * && 运算符是逻辑与（AND）运算符，它的工作机制是短路求值（short-circuit evaluation）。短路求值的具体规则是：
 * * 如果左侧操作数是 false（在布尔上下文中为假值），则直接返回左侧操作数，不再评估右侧操作数。
 * * 如果左侧操作数是 true（在布尔上下文中为真值），则返回右侧操作数
 */
let x = 1 && 2;
console.log(x);     // 2

let y = NaN && 7
console.log(y);     // NaN