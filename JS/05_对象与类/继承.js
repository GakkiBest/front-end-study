function Animals(name) {
  this.name = name;
  this.color = ["white", "black"];
}

Animals.prototype.bark = function () {
  return "动物的叫声";
};

Animals.prototype.getName = function () {
  return this.name;
};

// # 子类 Cat
// * 组合继承

function Cat(name) {
  // 盗用构造函数
  Animals.call(this, name);
}

Cat.prototype = new Animals();

// * 重写方法
Cat.prototype.bark = function () {
  return "喵喵喵";
};

let cat = new Cat("kitty");
console.log(`\ncat 的叫声 : ${cat.bark()}`);
console.log(`cat's name : ${cat.getName()}\n`);

let animal = new Animals("Molly");
console.log(`animal 的叫声 : ${animal.bark()}`);
console.log(`animal's name : ${animal.getName()}\n`);

let cat2 = new Cat("fairy");

cat.color.push("orange");
console.log(`animal 的 color 属性 : ${animal.color}`);
// 注释掉 Animals.call(this) 观察下面两行输出的变化
console.log(`cat 的 color 属性 : ${cat.color}`);
console.log(`cat2 的 color 属性 : ${cat2.color}\n`);

// # 子类 Dog
// * 寄生式组合继承

function Dog(name, abilities) {
  Animals.call(this, name);
  this.abilities = abilities;
}

function inheritPrototype(superType, subType) {
  let prototype = Object(superType.prototype);
  prototype.constructor = subType;
  subType.prototype = prototype;
}

inheritPrototype(Animals, Dog);

Dog.prototype.bark = function () {
  return "汪汪汪";
};

Dog.prototype.getName = function () {
  return this.name;
};

Dog.prototype.describeAbilities = function () {
  this.abilities.forEach((ability) => console.log(ability));
};

let dog = new Dog("Billy", ["看家", "搜救", "警犬", "娱乐"]);

console.log(dog.getName());
console.log(dog.color);
console.log(dog.bark());
dog.describeAbilities();
