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
// 1)	Do you like treasure hunts? In this problem you are to write a program to explore the above array for a treasure. The values in the array are clues. Each cell contains an integer between 11 and 55; for each value the ten's digit represents the row number and the unit's digit represents the column number of the cell containing the next clue. Starting in the upper left corner (at 1,1), use the clues to guide your search of the array. (The first three clues are 11, 34, 42). The treasure is a cell whose value is the same as its coordinates. Your program should output the cells it visits during its search, and a message indicating where you found the treasure.

"use strict";

const map = [
  [34, 21, 32, 41, 25],
  [14, 42, 43, 14, 31],
  [54, 45, 52, 42, 23],
  [33, 15, 51, 31, 35],
  [21, 52, 33, 13, 23],
];

class Clue {
  constructor(row, col, clueRow, clueCol) {
    this.row = row;
    this.col = col;
    this.clueRow = clueRow;
    this.clueCol = clueCol;
  }
}

let clues = [];

for (let i = 0; i < map.length; i++) {
  for (let j = 0; j < map[i].length; j++) {
    clues.push(
      new Clue(
        i + 1,
        j + 1,
        parseInt(map[i][j].toString()[0]),
        parseInt(map[i][j].toString()[1])
      )
    );
  }
}

// console.log(clues);

let visitedCell = {
  row: 1,
  col: 1,
};

function findTreasure() {
  for (let i = 0; i < clues.length; i++) {
    console.log(
      `Visiting cell: ${visitedCell.row} row ${visitedCell.col} col position`
    );
    console.log(
      `Next clue: ${clues[i].clueRow} row and ${clues[i].clueCol} col position\n`
    );

    visitedCell.row = clues[i].clueRow;
    visitedCell.col = clues[i].clueCol;

    if (visitedCell.row === clues[i].row && visitedCell.col === clues[i].col) {
      console.log(
        `Visiting cell: ${visitedCell.row} row ${visitedCell.col} col position`
      );
      console.log(
        `Next clue: ${clues[i].clueRow} row and ${clues[i].clueCol} col position\n`
      );
      console.log(
        `\nTreasure is in ${visitedCell.row} row and ${visitedCell.col} col position`
      );
      break;
    }
  }
}

findTreasure();
