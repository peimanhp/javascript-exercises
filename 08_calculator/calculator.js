const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let total = 0;
  for (const iterator of array) {
    total += iterator;
  }
  return total;
};

const multiply = function (array) {
  let total = 1;
  for (const iterator of array) {
    total *= iterator;
  }
  return total;
};

const power = function (a, b) {
  let result = a;
  for (let i = 1; i < b; i++) {
    result *= a;    
  }
  return result;
};

const factorial = function (a) {
  let result = 1;
  if (a == 0) {
    return result;
  } else {
    for (let i = 1; i <= a ; i++) {
      result *= i;      
    }
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
