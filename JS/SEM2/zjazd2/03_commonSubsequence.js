// 2) Given two strings, write a program that efficiently finds the longest common subsequence (substring), eg "karol rolki"

"use strict";

class Sequence {
  constructor(string1, string2) {
    this.string1 = string1;
    this.string2 = string2;
  }

  commonSubsequence() {
    let word1 = this.string1;
    let word2 = this.string2;
    let result = "";

    // checker, compares given substring with a longest word
    function checker(a, b) {
      let sub = word1.substring(a, b);
      if (word2.includes(sub)) {
        if (sub.length > result.length) result = sub;
      }
    }

    // loop checking substring from start to end
    for (let i = 0; i < word1.length; i++) {
      checker(i, word1.length);
    }
    // loop checking substring from end to start
    for (let i = word1.length; i >= 0; i--) {
      checker(0, i);
    }
    return result;
  }
}

const sequence = new Sequence("Karol", "rolki");

console.log(sequence.commonSubsequence());
