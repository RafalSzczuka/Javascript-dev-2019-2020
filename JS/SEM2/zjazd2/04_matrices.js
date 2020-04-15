// Write a code that multiplies two matrices together. Dimension validation required
/*      2 1 3
       -1 4 0

 1 3 2  15 -3 11
-2 0 1  -9 -3 2
 5-3 2
*/

"use strict";

const utils = (function () {
  function randomNumber(range) {
    return Math.floor(Math.random() * range);
  }
  return { randomNumber };
})();

class Matrix {
  constructor() {
    this.cols = 0;
    this.rows = 0;
    this.grid = [];
  }

  // public method, to set custom 2D grid
  setCustomGrid(grid) {
    this.grid = grid;
    this.cols = grid[0].length;
    this.rows = grid.length;
  }

  // public method, to set random 2D grid (by given cols and rows arguments)
  setRandomGrid(cols, rows) {
    this.cols = cols;
    this.rows = rows;
    for (let i = 0; i < rows; i++) {
      this.grid.push([]);
      for (let j = 0; j < cols; j++) {
        let random = utils.randomNumber(10);
        this.grid[i].push(random);
      }
    }
  }

  // Iterative algorithm, after: https://en.wikipedia.org/wiki/Matrix_multiplication_algorithm
  // it's static method, avaliable only for main Class, not for instances
  static multiply(matrix1, matrix2) {
    let result = [];

    if (matrix1.cols !== matrix2.rows) {
      throw new Error(
        "Columns of the first matrix must be the same number as rows of second matrix"
      );
    } else {
      for (let i = 0; i < matrix1.rows; i++) {
        result[i] = [];
        for (let j = 0; j < matrix2.cols; j++) {
          let sum = 0;
          for (let k = 0; k < matrix1.cols; k++) {
            sum += matrix1.grid[i][k] * matrix2.grid[k][j];
          }
          result[i][j] = sum;
        }
      }
    }
    return result;
  }
}

// *************** lets create and multiply some grids ***************

const m1 = new Matrix();
const m2 = new Matrix();
const m3 = new Matrix();
const m4 = new Matrix();

m1.setCustomGrid([
  [2, 1, 3],
  [-1, 4, 0],
]);

m2.setCustomGrid([
  [1, 3, 2],
  [-2, 0, 1],
  [5, -3, 2],
]);

m3.setRandomGrid(3, 2);
m4.setRandomGrid(2, 3);

// const multipliedCustomGrid = Matrix.multiply(m1, m2);
// console.log("Custom grids:");
// m1.grid.forEach((num) => console.log(num));
// console.log("***************");
// m2.grid.forEach((num) => console.log(num));
// console.log("***************");
// console.log("Multiplied:");
// multipliedCustomGrid.forEach((num) => console.log(num));

const multipliedRandomGrid = Matrix.multiply(m3, m4);
console.log("Random grids:");
m3.grid.forEach((num) => console.log(num));
console.log("***************");
m4.grid.forEach((num) => console.log(num));
console.log("***************");
console.log("Multiplied:");
multipliedRandomGrid.forEach((num) => console.log(num));
