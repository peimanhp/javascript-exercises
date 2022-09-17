function sumAll(a, b) {
  if (a < 0 || b < 0 || typeof a != "number" || typeof b != "number") {
    return "ERROR";
  } else {
    let min;
    let max;
    if (a < b) {
      min = a;
      max = b;
    } else {
      min = b;
      max = a;
    }
    let sum = 0;
    for (let i = min; i <= max; i++) {
      sum += i;
    }
    return sum;
  }
}

// Do not edit below this line
module.exports = sumAll;
