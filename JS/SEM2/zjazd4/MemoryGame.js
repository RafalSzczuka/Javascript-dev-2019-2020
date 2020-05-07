const Player = require("./Player");

const utils = (() => {
  const random = (range) => Math.floor(Math.random() * range.length);
})();

class MemoryGame {
  constructor(playersNumber = 2) {
    if (playersNumber < 2 || playersNumber > 4)
      throw Error(
        "Players number must be between 2 nad 4. If you don't set a players number, default value is 2."
      );
    this.playersNumber = playersNumber;

    this.board = require("./Board");
    this.players = this.setPlayers();
    this.gameFinished = false;
  }

  setPlayers() {
    let players = [];
    for (let i = 0; i < this.playersNumber; i++) {
      let player = new Player(this.board, i + 1);
      this.initializePlayerMemory(player);
      players.push(player);
    }
    return players;
  }

  initializePlayerMemory(player) {
    for (let i = 0; i < this.board.length; i++) {
      player.memory.push("");
    }
  }
}

const nb = new MemoryGame(3);

console.log(nb.players);
