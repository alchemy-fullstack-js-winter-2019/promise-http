/* eslint-disable no-console */
const fsPromises = require('fs').promises;

module.exports = (src, dst) => {
  return fsPromises.readFile(src)
    .then(data => fsPromises.writeFile(dst, data))
    .catch(err => console.error(err));
};


