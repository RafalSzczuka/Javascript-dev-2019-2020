// const dog = {
//   name: "szama",
//   speed: 1000,
//   showText() {
//     return "walczę ze złem";
//   }
// };

// console.log(dog.name);

// const name = "lama";
// const speed = 1000;

// const dog = {
//   name,
//   speed,
//   showText() {
//     return `${name} walczy ze złem`;
//   }
// };

// console.log(dog["showText"]());

// const tab = ["kot", "pies", "lama"];

// console.log(tab["1"]);

// const [animal1, animal2] = tab;

// console.log(animal1);

// const ob = {
//   name: "rafał",
//   lastName: "szczuka",
//   age: 31,
//   "what likes": "nic"
// };

// console.log(ob);
// const { name, lastName, age } = ob;

// console.log(name, lastName, age);

// ob["my pet"] = "kot";

// console.log(ob["what likes"]);

// const car = {
//   brand: "Mercedes",
//   color: "black",
//   showText() {
//     console.log(this.brand + " koloru " + this.color);
//   }
// };

// console.log(car.brand);

// car.showText();

// class Car {
//   constructor(brand, color) {
//     this.brand = brand;
//     this.color = color;
//   }

//   showText() {
//     console.log(this.brand + " koloru " + this.color);
//   }
// }

// // console.log(Car);

// const mercedes = new Car("Mercedes", "czarny");

// console.log(mercedes);

// // mercedes.showText();

// for (const key in mercedes) {
//   console.log(key + " - " + mercedes[key]);
// }

// const pioter = {
//   name: "piotr",
//   age: 30
// };

// const rafał = {
//   name: "rafał",
//   age: 31
// };

// const copy = Object.assign({}, pioter, rafał);

// console.log(copy);

// function Enemy(speed, power) {
//   this.live = 3;
//   this.speed = speed;
//   this.power = power;

//   const isNinja = 1;

//   if (isNinja) {
//     this.weapon = "shuriken";
//     this.ammo = 20;
//     this.speed += 30;
//   }

//   this.print = function() {
//     console.log(`
// Przeciwnik ma:
// życia: ${this.live}
// szybkość: ${this.speed}
// siłę: ${this.power}
//         `);
//   };
// }

// const enemy1 = new Enemy(10, 54);
// enemy1.print();
// const enemy2 = new Enemy(4, 43);
// enemy2.print();

// console.log(enemy1);

// console.dir(Enemy);

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   static addAge() {
//     this.age += 1;
//   }

//   greeting() {
//     console.log(
//       `Witaj, nazywam się ${this.name}. Za rok będę miał ${this.age}`
//     );
//   }
// }

// const rafal = new Person("Rafał", 30);

// console.log(rafal);

// rafal.greeting();

// const user = {
//   name: "rafał",
//   height: 184,
//   sayName() {
//     console.log(`Nazywam się ${this.name}`);
//   }
// };

// user.sayName();
// user.toString();

// class Enemy {
//     constructor(type, health) {
//         this.type = type;
//         this.health = health;
//     }

// }

// const ob = {
//   name: "x-wing",
//   print(shootCount, speed) {
//     console.log(
//       `${this.name} strzela ${shootCount} razy z szybkością ${speed}`
//     );
//   }
// };

// const tie = {
//   name: "tie-fighter"
// };

// ob.print(100, 5);

// ob.print.call(null, 200, 8);

// class Enemy {
//   constructor(name, x, y) {
//     this.name = name;
//     this.x = x;
//     this.y = y;
//     console.log("Tworzę przeciwnika: " + this.name);
//   }

//   fly() {
//     return this.name + " latam";
//   }
// }

// class EnemyShoot extends Enemy {
//   constructor(...params) {
//     super(...params);
//     this.type = "shooter";
//   }

//   shoot() {
//     return this.name + " strzelam";
//   }
//   fly() {
//     const text = super.fly();
//     return text + " i czasami strzelam";
//   }
// }

// const enemyNormal = new Enemy("Normal enemy");
// console.log(enemyNormal.fly());
// // console.log(enemyNormal.shoot());

// const enemyShooter = new EnemyShoot("Shooter enemy");
// console.log(enemyShooter.fly());
// console.log(enemyShooter.shoot());

// console.log(this);

// "use strict";

// const ob = {
//   name: "pies",
//   show() {
//     console.log(this);
//   }
// };

// ob.show();

// function myFn() {
//   console.log("Pokaż " + this);
// }

// myFn();

// const anotherFn = myFn.bind("->tutaj był THIS<-");

// anotherFn();
// var a = ["dog", "cat", "hen"];

// a[100] = "fox";

// console.log(a.length);

// console.log([] == []);

// class X {
//   get Y() {
//     return 42;
//   }
// }

// x

var a;
var b = (a = 3) ? true : false;
