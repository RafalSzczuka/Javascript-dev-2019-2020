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

console.log("Base sudoku:");
sudoku.forEach(row => console.log(row));
console.log("");

sudokuBacktrack(sudoku);

console.log("Resolved sudoku:");
sudoku.forEach(row => console.log(row));

//function validate if numbers in columns, rows and fields are not the same
function isValid(board, row, col, k) {
  for (let i = 0; i < 9; i++) {
    const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const n = 3 * Math.floor(col / 3) + (i % 3);
    if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
      return false;
    }
  }
  return true;
}

// backtrack algorithm checking if new number fits in board. If not, reset number to 0, and step back
function sudokuBacktrack(data) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (data[i][j] == 0) {
        for (let k = 1; k <= 9; k++) {
          if (isValid(data, i, j, k)) {
            data[i][j] = k;
            if (sudokuBacktrack(data)) {
              return true;
            } else {
              data[i][j] = 0;
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}
