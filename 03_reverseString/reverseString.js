function reverseString(_words) {
  let words = _words;
  const wordslength = words.length;
  const lettersArray = words.split("");
  let reverseWords = "";
  for (let i = wordslength - 1; i >= 0; i--) {
    reverseWords += lettersArray[i];
  }
  return reverseWords;
} // all tests passed with single try!!!!!

// Do not edit below this line
module.exports = reverseString;
