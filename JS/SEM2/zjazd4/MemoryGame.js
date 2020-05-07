"use strict";

const Player = require("./Player");
const board = require("./Board");
const utils = require("./utils");

class MemoryGame {
  constructor(playersNumber = 2) {
    if (playersNumber < 2 || playersNumber > 4)
      throw Error(
        "Players number must be between 2 nad 4. If you don't set a players number, default value is 2."
      );
    this.playersNumber = playersNumber;
    this.board = board.getRandomBoard();
    this.players = this.setPlayers();
  }

  setPlayers() {
    let players = [];
    for (let i = 0; i < this.playersNumber; i++) {
      let player = new Player(i + 1);
      players.push(player);
    }
    return players;
  }

  start() {
    while (this.board.length > 0) {
      for (let i = 0; i < this.players.length; i++) {
        let activePlayer = this.players[i];

        if (this.board.length === 0) break;

        let card1 = utils.getRandomCard(this.board);
        let card2 = utils.getRandomCard(this.board);

        while (card2.id === card1.id) {
          card2 = utils.getRandomCard(this.board);
        }

        if (card1.figure === card2.figure) {
          activePlayer.matches++;
          this.board = this.board.filter((c) => c.figure !== card1.figure);
        }
      }
    }
  }
}

const game = new MemoryGame(4);

game.start();
console.log(game.players);
