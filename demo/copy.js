const fsPromise = require('fs').promises;

module.exports = (src, dst) => {
  return fsPromise.readFile(src, { encoding: 'utf8' })
    .then(data => fsPromise.writeFile(dst, data))
    .then(() => console.log('DONE!'))
    .catch(err => console.error(err));
};

// function copy(src, dst) {
//   fsPromise.readFile('./promises.md', { encoding: 'utf8' })
//     .then(data => fsPromise.writeFile('./promises-copy.md', data))
//     .then(() => console.log('done'))
//     .catch(err => console.error(err));

// }

