console.log("\n--------------- Map 的创建 ---------------\n");

let map = new Map([
  ["theme", "Github Dark"],
  ["font", "黑体"],
  ["font-size", 14],
]);

console.log(`map.length : ${map.size}`);

console.log("\n--------------- 增删查 ---------------\n");

// * 查
console.log(map.has("indent"));
console.log(map.get("font"));
console.log("\n");

// * 增
map.set("indent", 4);
console.log(map.get("indent"));
console.log("\n");

// * 删
map.delete("indent");
console.log(map.get("indent"));

// map.clear()  一次性删除所有键值对

console.log("\n--------------- 迭代 ---------------\n");

// * keys() values() entries()

for (const pair of map.entries()) {
  console.log(pair);
}

console.log("\n");

// * forEach()

map.forEach((value, key) => console.log(`${key} --> ${value}`));

console.log("\n--------------- 解构 ---------------\n");

console.log(...map);
console.log([...map]);
