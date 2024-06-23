// * 每个函数都会创建一个 prototype 属性，这个属性是一个对象，包含特定引用类型的实例共享的属性和方法

function Person() {}

Person.prototype.name = "Mike";
Person.prototype.age = 23;
Person.prototype.job = "Software Engineer";
Person.prototype.sayHi = function () {
  console.log(`Hi, ${this.name}`);
};

let person1 = new Person();

// # 原型对象的构造器指向构造函数，每个构造函数都有一个原型对象，实例内部有一个指向原型的指针。
// # 实例通过__proto__链接到原型对象
// # 构造函数通过 prototype 属性链接到原型对象

console.log(
  `\nPerson.prototype.constructor === Person : ${
    Person.prototype.constructor === Person
  }`
);

console.log(
  `\nperson1.__proto__ === Person.prototype : ${
    person1.__proto__ === Person.prototype
  }`
);

console.log(
  `\nperson1.__proto__.constructor === Person : ${
    person1.__proto__.constructor === Person
  }`
);

console.log(
  "\n------------------------------ Object.getPrototypeOf() ------------------------------\n"
);

// # 获取对象的原型
console.log(Object.getPrototypeOf(person1));

console.log(
  "\n------------------------------ hasOwnProperty() ------------------------------\n"
);

// # 只要给对象实例添加一个属性，这个属性就会遮蔽原型对象上的同名属性
// # 虽然不会修改它，但会屏蔽对它的访问

console.log(
  `给 person1 实例添加 name 属性之前\n\tperson1.name : ${person1.name} (from person1.prototype)`
);
console.log(
  `\tperson1.hasOwnProperty('name') ：${person1.hasOwnProperty("name")}\n`
);

person1.name = "Greg";

console.log(
  `给 person1 实例添加 name 属性之后\n\tperson1.name : ${
    person1.name
  } (from person1)\n\tperson1.hasOwnProperty('name') ：${person1.hasOwnProperty(
    "name"
  )}`
);

// * 删除实例上与原型对象同名的属性，恢复对原型对象上该属性的访问

delete person1.name;

console.log(
  `\n删除 person1 实例 name 属性之后\n\tperson1.name : ${
    person1.name
  } (from person1.prototype)\n\tperson1.hasOwnProperty('name') ：${person1.hasOwnProperty(
    "name"
  )}`
);

console.log(
  "\n------------------------------ in 操作符 ------------------------------\n"
);

// # in 操作符会在可以通过对象访问指定属性时返回 true，无论该属性是在实例上还是在原型上

console.log(
  `给 person1 实例添加 name 属性之前\n\t'nam'e in person1 : ${
    "name" in person1
  }\n`
);

person1.name = "Grey";

console.log(
  `给 person1 实例添加 name 属性之后\n\t'name' in person1 : ${
    "name" in person1
  }`
);

console.log(
  "\n------------------------------ Object.getOwnPropertyNames() ------------------------------\n"
);

// # 获取传入对象的所有属性

let person1_properties = Object.getOwnPropertyNames(person1);
console.log(`properties of person1 : ${person1_properties}`);

let person_properties = Object.getOwnPropertyNames(Person.prototype);
console.log(`properties of Person : ${person_properties}`);

console.log(
  "\n------------------------------ Object.keys() -----------------------------\n"
);

// # 获取传入实例的所有可枚举属性

console.log(
  `Person 原型对象所有可枚举属性\n\t${Object.keys(Person.prototype)}`
);

console.log("\n------------------------------------------------------------\n");
