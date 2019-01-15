const fsPromises = require('fs').promises;

const transformer = src => {
  return fsPromises.readFile(src, { encoding: 'utf8' })
    .then(removeCapitals)
    .then(makeAllLettersCapital)
    .then(reverse)
    .then(trim);
};

const removeCapitals = str => str.split('').filter(letter => {
  return letter === letter.toLowerCase();
}).join('');

const makeAllLettersCapital = str => str.toUpperCase();

const reverse = str => str.split('').reverse().join('');

const trim = str => str.trim();

module.exports = {
  transformer,
  removeCapitals,
  makeAllLettersCapital,
  reverse,
  trim
};
