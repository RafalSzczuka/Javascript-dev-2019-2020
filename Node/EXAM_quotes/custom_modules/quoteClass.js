module.exports = class Quote {
  constructor(id, quote, author, group, counter) {
    (this.id = id),
      (this.quote = quote),
      (this.author = author),
      (this.group = group),
      (this.counter = counter);
  }
};
