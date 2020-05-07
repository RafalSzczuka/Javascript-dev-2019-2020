module.exports = class Player {
  constructor(board, playerId) {
    this.tempBoard = board;
    this.memory = [];
    this.highscore = 0;
    this.playerId = playerId;
  }

  // choose 2 random cards from a board, set this cards to player memory
  chooseCards() {
    return [card1, card2];
  }

  // check if 2 chosen cards are the same. If so - take them from a board, and increment player highscore
  checkPair() {}

  // compares chosen 2 cards with player memorized cards. If there's match - take them from a board
  compareWithMemory(figure) {}
};
