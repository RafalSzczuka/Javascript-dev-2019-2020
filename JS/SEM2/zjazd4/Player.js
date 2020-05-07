"use strict";

module.exports = class Player {
  constructor(playerId) {
    this.playerId = playerId;
    this.memory = [];
    this.matches = 0;
  }
};
