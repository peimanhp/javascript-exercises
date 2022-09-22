const findTheOldest = function (people) {
  const getAge = (yearOfBirth, yearOfDeath) => {
    if (!yearOfDeath) {
      yearOfDeath = new Date().getFullYear();
      return yearOfDeath - yearOfBirth;
    } else return yearOfDeath - yearOfBirth;
  };

  let oldestPerson = people.reduce((previousPerson, currentPerson) => {
    previousAge = getAge(
      previousPerson.yearOfBirth,
      previousPerson.yearOfDeath
    );
    currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
    if (currentAge > previousAge) return currentPerson;
    else return previousPerson;
  });
  return oldestPerson.name;
};

// Do not edit below this line
module.exports = findTheOldest;
