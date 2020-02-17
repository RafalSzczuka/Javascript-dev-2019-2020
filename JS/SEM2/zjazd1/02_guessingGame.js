let guessTries = 0;
let secretNumber = 0;
let range = [];

const rangeGenerator = () => {
  for (let i = 1; i <= 100; i++) {
    range.push(i);
  }
};

rangeGenerator();
console.log(range);
