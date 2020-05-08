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

  checkIfCardInMemory(card, memory) {
    let check = memory.filter((c) => c.id === card.id).length;
    if (check !== 0) {
      return true;
    } else {
      return false;
    }
  }

  checkIfFigureInMemory(card, memory) {
    let check = memory.filter((c) => c.figure === card.figure).length;
    if (check !== 0) {
      return true;
    } else {
      return false;
    }
  }

  takeRandomCard(player) {
    let card = utils.getRandomCard(this.board);

    let checkInMemory = this.checkIfCardInMemory(card, player.memory);
    while (checkInMemory) {
      card = utils.getRandomCard(this.board);
      checkInMemory = this.checkIfCardInMemory(card, player.memory);
    }
    console.log(
      `Player ${player.id} choosed Card: [${card.figure}], id: ${card.id}`
    );
    return card;
  }

  removeFromBoard(player, card) {
    player.matches++;
    this.board = this.board.filter((elem) => elem.figure !== card.figure);
    console.log(
      `Player ${player.id} have a match! Card: [${card.figure}], id: ${card.id}`
    );
  }

  start() {
    while (this.board.length > 0) {
      for (let i = 0; i < this.players.length; i++) {
        let activePlayer = this.players[i];
        let card1, card2;
        let checkInMemory;
        let reset = true;

        while (reset) {
          reset = false;

          card1 = this.takeRandomCard(activePlayer);
          checkInMemory = this.checkIfFigureInMemory(
            card1,
            activePlayer.memory
          );
          if (checkInMemory) {
            this.removeFromBoard(activePlayer, card1);
            reset = true;
          } else {
            activePlayer.memory.push(card1);

            card2 = this.takeRandomCard(activePlayer);
            checkInMemory = this.checkIfFigureInMemory(
              card2,
              activePlayer.memory
            );
            if (checkInMemory) {
              this.removeFromBoard(activePlayer, card1);
              reset = true;
            } else {
              if (card2.figure === card1.figure) {
                this.removeFromBoard(activePlayer, card2);
                reset = true;
              } else {
                activePlayer.memory.push(card2);
              }
            }
          }
        }

        // card1 = this.takeRandomCard(activePlayer);

        // if (this.checkIfFigureInMemory(card1, activePlayer.memory)) {
        //   this.removeFromBoard(activePlayer, card1);
        // } else {
        //   activePlayer.memory.push(card1);
        //   card2 = this.takeRandomCard(activePlayer);
        //   if (this.checkIfFigureInMemory(card2, activePlayer.memory)) {
        //     this.removeFromBoard(activePlayer, card2);
        //   } else {
        //     activePlayer.memory.push(card2);
        //     if (card1.figure === card2.figure) {
        //       this.removeFromBoard(activePlayer, card1);
        //     }
        //   }
        // }

        // for (let i = 0; i < 2; i++) {
        //   card1 = utils.getRandomCard(this.board);

        //   if (checkInMemory) {
        //     i--;
        //     continue;
        //   } else {
        //     activePlayer.memory.push(card);
        //   }
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
