function ftoc(degree) {
  let converted = (degree - 32) * 5 / 9;
  return Math.round(converted * 10) / 10;
}

function ctof(degree) {
  let converted = (degree * 9 / 5) + 32;
  return Math.round(converted * 10) / 10;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
