
// * 八进制字面量表示整数 第一个数字必须为 0，后续数字必须位于 [0, 7] 区间内

let octalNum = 0o70;
// let octalNum2 = 0o79; ERROR
console.log(octalNum);

// * 十六进制字面量表示整数 必须 0x 开头，然后是 0-9 及 A-F
let hexNum1 = 0x4FC;
console.log(hexNum1);

let hexNum2 = 0xA;
console.log(hexNum2);

// * 值的范围
console.log(Number.MAX_VALUE);

// 查看一个值是不是有限的 无穷 Infinity
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);
console.log(isFinite(Number.MAX_VALUE * 2));

// * NaN 表示不是一个数值 Not a number
console.log(0/0);

// * isNaN() 函数会将传入的值试图转换为整数，如果可以转换为整数返回 false，否则 true
console.log('------------------isNaN test-----------------');
console.log('NaN' + ' : ' + isNaN(NaN));
console.log('67' + ' : ' + isNaN('67'));
console.log('str' + ' : ' + isNaN('str'));
console.log('true' + ' : ' + isNaN(true));
console.log('undefined' + ':' + isNaN(undefined));
console.log('null' + ' : ' + isNaN(null));

console.log(Number(null));

// * parseInt()
console.log('---------------------------------------------');
console.log(parseInt(22.7));
console.log(parseInt('123u5'));
console.log(parseInt(0o70));
console.log(parseInt(''));
console.log(parseInt(null));
console.log(parseInt(false));

// 可指定第二个参数，按指定的进制进行解析

console.log(parseInt('AF', 16));
console.log(parseInt(110, 11));

// * parseFloat() 只解析十进制, 不能指定进制数
console.log('---------------------------------------------');
console.log(0o7);
console.log(parseFloat('AF'));
console.log(parseFloat("22.34.5"));