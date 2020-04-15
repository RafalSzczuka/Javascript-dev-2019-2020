// +-------------------------+
// ¦ 34 ¦ 21 ¦ 32 ¦ 41 ¦ 25  ¦
// +----+----+----+----+-----¦
// ¦ 14 ¦ 42 ¦ 43 ¦ 14 ¦ 31  ¦
// +----+----+----+----+-----¦
// ¦ 54 ¦ 45 ¦ 52 ¦ 42 ¦ 23  ¦
// +----+----+----+----+-----¦
// ¦ 33 ¦ 15 ¦ 51 ¦ 31 ¦ 35  ¦
// +----+----+----+----+-----¦
// ¦ 21 ¦ 52 ¦ 33 ¦ 13 ¦ 23  ¦
// +-------------------------+
// 1)	Do you like treasure hunts? In this problem you are to write a program to explore the above array for a treasure. The values in the array are cells. Each cell contains an integer between 11 and 55; for each value the ten's digit represents the row number and the unit's digit represents the column number of the cell containing the next clue. Starting in the upper left corner (at 1,1), use the cells to guide your search of the array. (The first three cells are 11, 34, 42). The treasure is a cell whose value is the same as its coordinates. Your program should output the cells it visits during its search, and a message indicating where you found the treasure.

"use strict";

const treasureMap = [
  [34, 21, 32, 41, 25],
  [14, 42, 43, 14, 31],
  [54, 45, 52, 42, 23],
  [33, 15, 51, 31, 35],
  [21, 52, 33, 13, 23],
];

class Cell {
  constructor(row, col, clueRow, clueCol) {
    this.row = row;
    this.col = col;
    this.clueRow = clueRow;
    this.clueCol = clueCol;
  }
}

let cells = [];

for (let i = 0; i < treasureMap.length; i++) {
  for (let j = 0; j < treasureMap[i].length; j++) {
    cells.push(
      new Cell(
        i + 1,
        j + 1,
        parseInt(treasureMap[i][j].toString()[0]),
        parseInt(treasureMap[i][j].toString()[1])
      )
    );
  }
}

// console.log(cells);

let actualCell = {
  row: 1,
  col: 1,
};
let nextCell = {
  row: null,
  col: null,
};

function findTreasure() {
  for (let i = 0; i < cells.length; i++) {
    if (nextCell.row !== actualCell.row || nextCell.col !== actualCell.col) {
      actualCell.row = cells[i].row;
      actualCell.col = cells[i].col;
      console.log(
        `Actual cell: ${actualCell.row} row and ${actualCell.col} col`
      );

      nextCell.row = cells[i].clueRow;
      nextCell.col = cells[i].clueCol;
      console.log(`Next cell: ${nextCell.row} row and ${nextCell.col} col\n`);

      const nextIndex = cells.findIndex(
        (clue) => clue.row === nextCell.row && clue.col === nextCell.col
      );

      i = nextIndex - 1;
    } else {
      console.log(
        `Bingo. Treasure is in ${nextCell.row} row and ${nextCell.col} col position`
      );
      break;
    }
  }
}

findTreasure();
