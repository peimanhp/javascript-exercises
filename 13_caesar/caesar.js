const caesar = function (str, num) {
  this.str = str;
  let unicodeArray = str.split("").map((letter) => letter.charCodeAt(0));
  let newUnicodeArray = [];
  for (const letter of unicodeArray) {
    if (num > 26 || num < -26) num = num % 26;
    let newLetter = letter + num;
    if (letter >= 65 && letter <= 90) {
      if (newLetter < 65) newLetter = 91 - (65 - newLetter);
      if (newLetter > 90) newLetter = 64 + (newLetter - 90);
      newUnicodeArray.push(newLetter);
    } else if (letter >= 97 && letter <= 122) {
      if (newLetter < 97) newLetter = 123 - (97 - newLetter);
      if (newLetter > 122) newLetter = 96 + (newLetter - 122);
      newUnicodeArray.push(newLetter);
    } else {
      newUnicodeArray.push(letter);
    }
  }
  newStr = newUnicodeArray.map((x) => String.fromCharCode(x)).join("");
  return newStr;
};

// Do not edit below this line
module.exports = caesar;
