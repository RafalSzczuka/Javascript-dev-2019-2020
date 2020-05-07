"use strict";
const utils = require("./utils");

class Board {
  constructor() {
    this.board = [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ];
    this.figures = ["!", "@", "#", "$", "%", "^", "&", "*", "=", "+", "-", "_"];
  }

  getRandomBoard() {
    let figuresCopy = [...this.figures];

    const fillBoard = () => {
      let result = [...this.board];

      for (let i = 0; i < figuresCopy.length; i++) {
        for (let j = 0; j < 2; j++) {
          let rnd = utils.random(this.board);
          while (result[rnd] !== "") {
            rnd = utils.random(this.board);
          }
          result[rnd] = {
            figure: figuresCopy[i],
            id: rnd,
          };
        }

        figuresCopy.splice(i, 1);
        i = -1;
      }
      return result;
    };

    // return random board filled randomly with two copies of each figure
    return fillBoard();
  }
}

const board = new Board();

module.exports = board;
