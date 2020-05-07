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

  initializeMemory(player) {
    if (!player.memory.length) {
      let card = utils.getRandomCard(this.board);
      player.memory.push(card);
      console.log(
        `Player ${player.id} choosed Card: ${card.figure}, id: ${card.id}`
      );
    }
  }

  getCard(player) {
    if (this.board.length > 0) {
      let card = utils.getRandomCard(this.board);
      console.log(
        `Player ${player.id} choosed Card: ${card.figure}, id: ${card.id}`
      );

      // if card is in memory, choose another one
      while (player.memory.filter((c) => c.id === card.id).length) {
        card = utils.getRandomCard(this.board);
        console.log(
          `Player ${player.id} choosed Card: ${card.figure}, id: ${card.id}`
        );
      }
      this.compareCards(player, card);

      player.memory.push(card);
    }
  }

  compareCards(player, card) {
    let check = player.memory.find((c) => c.figure === card.figure);
    if (check) {
      this.board = this.board.filter((elem) => elem.figure !== card.figure);
      player.matches++;
      console.log(
        `Player ${player.id} have a match! Card: ${card.figure}, id: ${card.id} and Card: ${check.figure}, id ${check.id}`
      );

      this.getCard(player);
    } else {
      return;
    }
  }

  start() {
    while (this.board.length > 0) {
      for (let i = 0; i < this.players.length; i++) {
        let activePlayer = this.players[i];

        this.initializeMemory(activePlayer);
        this.getCard(activePlayer);

        // if (this.board.length === 0) break;

        // let card1 = utils.getRandomCard(this.board);
        // let card2 = utils.getRandomCard(this.board);

        // while (card2.id === card1.id) {
        //   card2 = utils.getRandomCard(this.board);
        // }

        // if (card1.figure === card2.figure) {
        //   activePlayer.matches++;
        //   this.board = this.board.filter((c) => c.figure !== card1.figure);
        // }
      }
    }
  }
}

const game = new MemoryGame(2);

game.start();
console.log(`Game finished.\nScore:`);
game.players.forEach((player) =>
  console.log(`Player ${player.id}: ${player.matches}`)
);
// console.log(game.players);
