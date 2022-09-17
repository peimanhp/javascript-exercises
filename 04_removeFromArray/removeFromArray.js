function removeFromArray() {
  const arguArr = [...arguments]; // create an array from arguments of function
  let arguTypes = Array.from([...arguments], (x) => typeof x); // create an array from type of aguments
  let isArrayArgs = Array.from([...arguments], (x) => Array.isArray(x)); // create a boolean array from witch elemts is array (not object!)
  let arrayInArgs;
  for (let i = 0; i < arguTypes.length; i++) {    // splice array element from arguments
    if (isArrayArgs[i]) {
      arrayInArgs = arguArr.splice(i, 1);
    }
  }
  let newArr = arrayInArgs.shift(); // bring out array element from agument array
  newArr = newArr.filter((val) => !arguArr.includes(val)); // compare two array and remove same elements from first array
  return newArr;
}

// Do not edit below this line
module.exports = removeFromArray;
