function repeatString(string, num) {
  let words;
  if (string == "") {
    words = "";
  } else if (num < 0) {
    words = "ERROR";
  } else if (num == 0) {
    words = "";
  } else if (num > 0) {
    words = string;
    for (let i = 0; i < num - 1; i++) {
      words = words + string;
    }
  }
  return words;
}

// Do not edit below this line
module.exports = repeatString;
