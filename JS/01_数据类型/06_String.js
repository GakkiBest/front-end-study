// * 反引号会保留空格
let pageHtml = `
<div>
    <span>Jake</span>
</div>
`
console.log(pageHtml);

// * 获取字符串长度
let str = 'JavaScript'
console.log(str.length);

// * 转换为字符串
let booleanValue = true
console.log(booleanValue.toString());
console.log(typeof booleanValue.toString());

// * 可传入参数按指定进制转换
let value = 14
console.log(value.toString(16));
console.log(value.toString(8));

let undefinedValue
console.log(String(undefinedValue));

// * 字符串插值
let num = 5
console.log(`${num} to the second power is ${num * num}`);


console.log('----------标签函数----------');
// 标签函数
let num1 = 4;
var num2 = 7;
function simpleTag(String, ...expressions){
    console.log(String);
    for (const expression of expressions) {
        console.log(expression);
    }
    return 'foobar';
}

let untaggedResult = `${num1} + ${num2} = ${num1 + num2}`
let taggedResult = simpleTag`${num1} + ${num2} = ${num1 + num2}`

simpleTag(untaggedResult)
console.log('---------------------------');
simpleTag(taggedResult)