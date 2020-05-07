"use strict";

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

    const randomIndex = () => {
      const randomIndex = Math.floor(Math.random() * this.board.length);
      return randomIndex;
    };

    const fillBoard = () => {
      let result = [...this.board];

      for (let i = 0; i < figuresCopy.length; i++) {
        for (let j = 0; j < 2; j++) {
          let rnd = randomIndex();
          while (result[rnd] !== "") {
            rnd = randomIndex();
          }
          result[rnd] = { figure: figuresCopy[i], id: rnd };
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

module.exports = board.getRandomBoard();
