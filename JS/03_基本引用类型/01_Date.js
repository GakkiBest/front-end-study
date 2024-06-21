// * 创建 Date 对象

let now = new Date();
console.log(now);
console.log(now.toString());

// * 创建指定日期对象
// * 字符串的格式应该为：YYYY-MM-DDTHH:mm:ss.sssZ，其中：
// * YYYY-MM-DD —— 日期：年-月-日。
// * 字符 "T" 是一个分隔符。
// * HH:mm:ss.sss —— 时间：小时，分钟，秒，毫秒。
// * 可选字符 'Z' 为 +-hh:mm 格式的时区。单个字符 Z 代表 UTC+0 时区。

let date = new Date("2016-09-01T13:51:42");
console.log(date);

// * Date.now() 方法
let start = Date.now();
console.log(start);

console.log(`getFullYear : ${now.getFullYear()}`);
console.log(`getMonth : ${now.getMonth()}`);
console.log(`getDate : ${now.getDate()}`);
console.log(`getHour : ${now.getHours()}`);
console.log(`getMinutes : ${now.getMinutes()}`);
console.log(`getDay : 星期 ${now.getDay()}`);
