const palindromes = function (_words) {
  let words = _words.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g, ""); // removes punctuation from string
  let arrayWords = words.split(" "); // splites words and return array of it
  let lastWord = arrayWords[arrayWords.length - 1].toLowerCase();
  let noSpacesWords = words.replace(/\s+/g, "").toLowerCase(); // removes space from original string
  let reverseWord = "";
  for (let i = lastWord.length - 1; i >= 0; i--) {
    reverseWord += lastWord.charAt(i);
  }
  return noSpacesWords.startsWith(reverseWord);
};

// Do not edit below this line
module.exports = palindromes;
