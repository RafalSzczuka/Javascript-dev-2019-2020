//  1) Write a program that finds the longest palindromic substring of a given string. ‘karakis’, ‘baerren’, ‘kajak’, ‘inni’.

"use strict";

const utils = (function () {
  function reverse(word) {
    let reversed = word.toLowerCase().split("").reverse().join("");

    return reversed;
  }
  function compareWithReversed(word) {
    if (word.toLowerCase() === reverse(word)) {
      return true;
    }
    return false;
  }
  return { compareWithReversed };
})();

class Word {
  constructor(word) {
    this.word = word;
    this.longestPalindrome = "";
    this.maxLength = 0;
  }

  isPalindrome() {
    if (utils.compareWithReversed(this.word)) {
      return "Yes, this word is a palindrome";
    } else {
      return "No, this word is not a palindrome";
    }
  }

  hasSubstringPalindrome() {
    for (let i = 0; i < this.word.length; i++) {
      let substring = this.word.substr(i, this.word.length);

      for (let j = substring.length; j >= 0; j--) {
        let subSubstring = substring.substr(0, j);
        if (subSubstring.length <= 1) continue;

        if (utils.compareWithReversed(subSubstring)) {
          if (subSubstring.length > this.maxLength) {
            this.maxLength = subSubstring.length;
            this.longestPalindrome = subSubstring;
          }
        }
      }
    }
    return "Yes, it has a substring palindrome: " + this.longestPalindrome;
  }
}

const baerren = new Word("baerren");

console.log(baerren.isPalindrome());
console.log(baerren.hasSubstringPalindrome());
