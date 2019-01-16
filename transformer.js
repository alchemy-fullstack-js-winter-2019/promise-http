const fsPromises = require('fs').promises;

module.exports = (src) => {
  return fsPromises.readFile(src, { encoding: 'utf8' })
    .then(data => data.split(''))
    .then(data => data.filter(letter => letter === letter.toLowerCase()))
    .then(data => data.map(letter => letter.toUpperCase()))
    .then(data => data.reverse().join(''));
};

