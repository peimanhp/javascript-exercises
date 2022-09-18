const fibonacci = function (_num) {
  let num = parseInt(_num);
  let firstNum;
  let secondNum;
  let sum = 0;
  if (num >= 0) {
    for (let i = 0; i < num; i++) {
      switch (i) {
        case 0:
          firstNum = 1;
          sum = 1;
          break;
        case 1:
          secondNum = 1;
          sum = 1;
          break;
        default:
          sum = firstNum + secondNum;
          firstNum = secondNum;
          secondNum = sum;
          break;
      }
    }
    return sum;
  } else return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
