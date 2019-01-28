const fs = require('fs').promises;

const read = src => fs.readFile(src, {encoding: 'utf8'});


const removeCapitals = str => {
  return str
    .split('')
    .filter(letter => {
      return letter === letter.toLowerCase();
    })
    .join('');
};

const toUpperCase = str => str.toUpperCase();
const reverse = str => str.reverse().join('');
const trim = str => str.trim();


const transformer = src => {
  // fs.readFile(src, { encoding : 'utf8' })
  return read(src)
    .then(removeCapitals)
    .then(toUpperCase)
    .then(reverse)
    .then(trim);
};
module.exports = { 
  transformer, 
  removeCapitals,
  toUpperCase,
  reverse
};
