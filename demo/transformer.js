const fsPromise = require('fs').promises;

const removeCapitals = str => {
  return str
    .split('')
    .filter(l => {
      return l === l.toLowerCase();
    })
    .join('');
};

const makeAllLettersCapital = str => str.toUpperCase();
const reverse = str => str.split('').reverse().join('');
const trim = str => str.trim();
const read = src => fsPromise.readFile(src, { encoding: 'utf8' });

module.exports = (src) => {
  return read(src)
    .then(removeCapitals)
    .then(makeAllLettersCapital)
    .then(reverse)
    .then(trim);
  // what i was working on...
  // data.split('').filter(l => {
  //   if(l.match(/\w*[A-Z]/g)) ;
  // });
};
