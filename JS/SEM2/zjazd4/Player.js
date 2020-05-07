"use strict";

module.exports = class Player {
  constructor(id) {
    this.id = id;
    this.memory = [];
    this.matches = 0;
  }
};
