/*
Write function that translates a text to Pig Latin and back.
English is translated to Pig Latin by taking the first letter of every word,
moving it to the end of the word and adding ‘ay’.
“The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.
*/

// pig latin conversion method added to String prototype
String.prototype.toPigLatin = function() {
  // conversion of a text providet into array of separated words
  let wordsList = [...this.split(" ")];

  // empty array to store converted to pig latin words
  let pigLatinWords = [];

  // variable to store pig latin text
  let pigLatinText;

  // foreach method
  wordsList.forEach(word => {
    word = word
      .slice(1, word.length)
      .concat(word[0])
      .concat("ay")
      .toLowerCase();
    pigLatinWords.push(word);
  });
  pigLatinText = pigLatinWords.join(" ");
  return pigLatinText;
};

// english conversion method added to String prototype
String.prototype.reversePigLatin = function() {
  let wordsList = [...this.split(" ")];
  let englishWords = [];
  let englishText;

  wordsList.forEach(word => {
    word = [...word];
    word = word.slice(0, word.length - 2);
    let lastLetter = word[word.length - 1];
    word.pop();
    word.unshift(lastLetter);
    word = word.join("");
    englishWords.push(word);
  });
  englishText = englishWords.join(" ");
  return englishText;
};

let text = "the quick brown fox";

let pigText = text.toPigLatin();
let englishText = pigText.reversePigLatin();

console.log(`Original text: ${text}`);
console.log(`Converted to pig latin: ${pigText}`);
console.log(`Pig latin text converted to english: ${englishText}`);
