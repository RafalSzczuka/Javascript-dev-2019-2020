// 2)	Chess board. Program is to choose at random one of the chess piece (except the pawn)
// and place it at the random spot on the board. After placing any piece (except first one)
// check all present pieces move ranges and see if any can reach other piece.
// Is so Give that pieces position and quit program. FACTORY (with class hierarhy) + SINGLETON pattern

"use strict";

// utilities
const utils = (function () {
  function randomNumber(range) {
    return Math.floor(Math.random() * range);
  }

  function excludeOwnField(figure) {
    for (let i = 0; i < figure.moves.length; i++) {
      let index = figure.moves.findIndex(
        (pos) => pos.x === figure.posX && pos.y === figure.posY
      );
      if (index === -1) break;
      figure.moves.splice(index, 1);
    }
  }

  const figureTypes = ["rook", "queen", "bishop", "knight", "king"];

  return { randomNumber, excludeOwnField, figureTypes };
})();

let done = false;

//general classes
class Board {
  constructor() {
    this.fields = [];

    for (let i = 1; i < 9; i++) {
      for (let j = 1; j < 9; j++) {
        this.fields.push({
          id: this.fields.length + 1,
          x: i,
          y: j,
          figure: null,
        });
      }
    }
  }
}
const board = new Board();

const chessBoard = board.fields;
let emptyFieldsIds = [];
chessBoard.forEach((field) => emptyFieldsIds.push(field.id));

class Figure {
  constructor() {
    this.posX = null;
    this.posY = null;
    this.moves = [];
    this.collisions = [];
    this.checked = false;
  }
}

class Rook extends Figure {
  constructor() {
    super();
    this.type = "rook";
  }
}

class Queen extends Figure {
  constructor() {
    super();
    this.type = "queen";
  }
}

class Bishop extends Figure {
  constructor() {
    super();
    this.type = "bishop";
  }
}

class Knight extends Figure {
  constructor() {
    super();
    this.type = "knight";
  }
}

class King extends Figure {
  constructor() {
    super();
    this.type = "king";
  }
}

class FigureCreator {
  setRandomType() {
    let idx = utils.randomNumber(utils.figureTypes.length);
    let randomType = utils.figureTypes[idx];
    return { type: randomType };
  }

  setFigure(options) {
    if (options.type === "rook") return new Rook();
    else if (options.type === "queen") return new Queen();
    else if (options.type === "bishop") return new Bishop();
    else if (options.type === "knight") return new Knight();
    else if (options.type === "king") return new King();
  }

  createFigure() {
    const type = this.setRandomType();
    const figure = this.setFigure(type);
    return figure;
  }
}

class FigureMovesChecker {
  checkStraights(figure) {
    for (let i = 1; i < 9; i++) {
      figure.moves.push({
        x: i,
        y: figure.posY,
      });
    }

    for (let i = 1; i < 9; i++) {
      figure.moves.push({
        x: figure.posX,
        y: i,
      });
    }

    utils.excludeOwnField(figure);
  }

  checkDiagonal(figure) {
    // left to right diagonal
    for (let i = 1; i < 8; i++) {
      figure.moves.push({
        x: figure.posX + i,
        y: figure.posY + i,
      });
    }
    for (let i = 1; i < 8; i++) {
      figure.moves.push({
        x: figure.posX - i,
        y: figure.posY - i,
      });
    }

    // right to left diagonal
    for (let i = 1; i < 8; i++) {
      figure.moves.push({
        x: figure.posX + i,
        y: figure.posY - i,
      });
    }
    for (let i = 1; i < 8; i++) {
      figure.moves.push({
        x: figure.posX - i,
        y: figure.posY + i,
      });
    }

    // filter all positions beyond a board :)
    figure.moves = figure.moves.filter(
      (move) => move.x < 9 && move.y < 9 && move.x > 0 && move.y > 0
    );
  }

  rookAvaliableMoves(figure) {
    this.checkStraights(figure);
  }
  bishopAvaliableMoves(figure) {
    this.checkDiagonal(figure);
  }
  queenAvaliableMoves(figure) {
    this.checkStraights(figure);
    this.checkDiagonal(figure);
  }
  kingAvaliableMoves(figure) {
    let x = figure.posX;
    let y = figure.posY;
    figure.moves.push(
      { x: x, y: y + 1 },
      { x: x, y: y - 1 },
      { x: x + 1, y: y },
      { x: x - 1, y: y },
      { x: x + 1, y: y + 1 },
      { x: x + 1, y: y - 1 },
      { x: x - 1, y: y - 1 },
      { x: x - 1, y: y + 1 }
    );
    figure.moves = figure.moves.filter(
      (move) => move.x < 9 && move.y < 9 && move.x > 0 && move.y > 0
    );
  }
  knightAvaliableMoves(figure) {
    let x = figure.posX;
    let y = figure.posY;
    figure.moves.push(
      { x: x + 1, y: y + 2 },
      { x: x + 1, y: y - 2 },
      { x: x + 2, y: y + 1 },
      { x: x + 2, y: y - 1 },
      { x: x - 1, y: y + 2 },
      { x: x - 1, y: y - 2 },
      { x: x - 2, y: y + 1 },
      { x: x - 2, y: y - 1 }
    );
    figure.moves = figure.moves.filter(
      (move) => move.x < 9 && move.y < 9 && move.x > 0 && move.y > 0
    );
  }
}

class FigureCollisionChecker {
  isCollision(board) {
    //optimal reduce for fields only with figures
    const onlyFigures = board.filter((field) => field.figure !== null);

    if (onlyFigures.length > 1) {
      for (let i = 0; i < onlyFigures.length; i++) {
        if (!onlyFigures[i].figure.checked) {
          onlyFigures[i].figure.moves.forEach((move) => {
            for (let j = 1; j < onlyFigures.length; j++) {
              if (
                move.x === onlyFigures[j].figure.posX &&
                move.y === onlyFigures[j].figure.posY
              ) {
                onlyFigures[i].figure.collisions.push(onlyFigures[j].figure);
              }
            }
          });
          if (onlyFigures[i].figure.collisions.length > 0) {
            const takes = onlyFigures[i].figure.collisions;

            done = true;

            console.log(
              `${onlyFigures[i].figure.type.toUpperCase()} on ${
                onlyFigures[i].figure.posX
              }x, ${onlyFigures[i].figure.posY}y position TAKES:`
            );
            takes.forEach((take) =>
              console.log(
                `- ${take.type} on ${take.posX}x, ${take.posY}y position`
              )
            );
            console.log();

            return true;
          } else {
            onlyFigures[i].figure.checked = true;
            onlyFigures.push(onlyFigures[i]);
            onlyFigures.shift();
          }
        }
      }
      onlyFigures.forEach((figure) => {
        figure.figure.checked = false;
      });
      return false;
    }
  }
}

class RandomFigureGenerator {
  setFigureRandomlyOnBoard(board) {
    let figure = figureCreator.createFigure();

    let index = utils.randomNumber(emptyFieldsIds.length);
    let id = emptyFieldsIds[index];
    emptyFieldsIds.splice(index, 1);
    let idIndex = board.findIndex((field) => field.id === id);

    board[idIndex].figure = figure;
    figure.posX = board[idIndex].x;
    figure.posY = board[idIndex].y;

    // switch case - checking type of a figure, and apply method checking avaliable moves
    switch (figure.type) {
      case "rook":
        moveChecker.rookAvaliableMoves(figure);
        break;
      case "queen":
        moveChecker.queenAvaliableMoves(figure);
        break;
      case "bishop":
        moveChecker.bishopAvaliableMoves(figure);
        break;
      case "knight":
        moveChecker.knightAvaliableMoves(figure);
        break;
      case "king":
        moveChecker.kingAvaliableMoves(figure);
        break;
    }

    console.log(
      `Figure created: ${board[idIndex].figure.type.toUpperCase()} on ${
        board[idIndex].x
      }x, ${board[idIndex].y}y position\n`
    );
  }
}

// ***************** EXECUTION *****************

const figureCreator = new FigureCreator();
const randomFigure = new RandomFigureGenerator();
const moveChecker = new FigureMovesChecker();
const collision = new FigureCollisionChecker();

randomFigure.setFigureRandomlyOnBoard(chessBoard);

while (!done) {
  randomFigure.setFigureRandomlyOnBoard(chessBoard);
  collision.isCollision(chessBoard);
}
