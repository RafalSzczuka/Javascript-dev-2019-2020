// EXAM: Solve sudoku (easy sudoku)

let sudoku = [
  [7, 0, 4, 8, 0, 0, 3, 0, 1],
  [8, 2, 0, 5, 0, 0, 0, 4, 0],
  [0, 0, 9, 4, 3, 0, 5, 0, 0],
  [3, 1, 0, 0, 0, 0, 8, 0, 7],
  [0, 8, 0, 0, 0, 0, 0, 1, 0],
  [9, 0, 7, 0, 0, 0, 0, 3, 2],
  [0, 0, 6, 0, 1, 5, 4, 0, 0],
  [0, 7, 0, 0, 0, 9, 0, 6, 5],
  [5, 0, 8, 0, 0, 2, 1, 0, 3]
];

// it counts how may times number appear in sudoku (at the end every number must appear 9 times).
let counts = {};

const refreshCounts = () => {
  sudoku.forEach(row => {
    row.forEach(num => {
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    });
  });
};
// console.log(counts);

let rows = [];
let cols = [];
let fields = [];

sudoku.forEach(row => {
  rows.push(row);
});

for (let i = 0; i < 9; i++) {
  let col = [];
  for (let j = 0; j < 9; j++) {
    col.push(sudoku[j][i]);
  }
  cols.push(col);
}
// console.log(cols);
