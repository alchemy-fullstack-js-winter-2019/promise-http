const fsPromises = require('fs').promises;

const removeCaps = str => {
  return str
    .split('')
    .filter(letter => {
      return letter === letter.toLowerCase();
    })
    .join('');
};
const makeCaps = str => str.toUpperCase();
const reverse = str => str.split('').reverse().join('');
const trim = str => str.trim();

const transform = src => {
  return fsPromises.readFile(src, { encoding: 'utf8' })
    .then(data => removeCaps(data))
    .then(data => makeCaps(data))
    .then(data => reverse(data))
    .then(data => trim(data))
    .catch(err => console.log(err));
};

module.exports = { 
  removeCaps, transform
};
