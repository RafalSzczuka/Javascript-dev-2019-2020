/*
1)	Show a result of Josephus Problem for 7 soldiers.
a.	1 Kills 2
b.	3 Kills 4
c.	5 Kills 6
d.	7 Kills 1
e.	3 Kills 5
f.	7 Kills 3
g.	7 Remains alive
*/

//--------------------------------------------------------------------
/*
short bitwise solution after this doc:
https://en.wikipedia.org/wiki/Josephus_problem
and numberphille video:
https://www.youtube.com/watch?v=uCsD3ZGzMgE
*/

// function josephusResult(n) {
//   const l = n - (1 << (n.toString(2).length - 1));
//   const result = 2 * l + 1;

//   return result;
// }
// console.log(josephusResult(7));
//--------------------------------------------------------------------

// second solution

// const resolveJosephus = (soldiers, step) => {
//   if (soldiers == 1) return 1;
//   else {
//     return ((resolveJosephus(soldiers - 1, 2) + 2 - 1) % soldiers) + 1;
//   }
// };

// console.log(resolveJosephus(10, 2));
//--------------------------------------------------------------------

// third solution
class Soldier {
  constructor(position, name) {
    this.position = position;
    this.name = name;
  }
}

const names = [
  "Augustus",
  "Maximus",
  "Octavian",
  "Gaius",
  "Flavius",
  "Titus",
  "Josephus"
];
let soldiers = [];

for (let i = 0; i < 7; i++) {
  soldiers.push(new Soldier(i + 1, names[i]));
}

soldiers.forEach(soldier => {
  console.log(`Soldier: ${soldier.name} at ${soldier.position} position`);
});
console.log("");
for (let i = 0; soldiers.length != 1; i++) {
  whosKilled = i + 1;
  console.log(
    `${soldiers[i].name} at ${soldiers[i].position} position kills ${soldiers[whosKilled].name} at ${soldiers[whosKilled].position} position`
  );
  soldiers.splice(whosKilled, 1);
  soldiers.push(soldiers[i]);
  soldiers.splice(i, 1);

  i = -1;
}

console.log(
  `\nLast survivor is ${soldiers[0].name}, at position number ${soldiers[0].position}`
);
