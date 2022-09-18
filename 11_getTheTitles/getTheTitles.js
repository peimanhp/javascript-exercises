const getTheTitles = function (booksArray) {
  let titlesArray = [];
  for (let i = 0; i < booksArray.length; i++) {
    titlesArray.push(booksArray[i].title);
    }
    return titlesArray;
};

// Do not edit below this line
module.exports = getTheTitles;
