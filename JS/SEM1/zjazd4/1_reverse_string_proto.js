String.prototype.reverseString = function() {
  return this.split("")
    .reverse()
    .join("");
};

console.log("Rafał".reverseString());

//new line test
