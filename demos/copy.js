const fsPromises = require('fs').promises;

module.exports = (src, dst) => {
  return fsPromises.readFile(src, { encoding: 'utf8' })
    .then(data => fsPromises.writeFile(dst, data))
    .catch(err => console.log(err));
};
