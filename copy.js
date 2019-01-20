const fsPromise = require('fs').promises;

module.exports = (src, dst) => {
  return fsPromise.readFile(src)
    .then(data => fsPromise.writeFile(dst, data))
    /* eslint-disable-next-line */
    .catch(err => console.error(err));
};