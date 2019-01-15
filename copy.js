const fsPromises = require('fs').promises;

module.exports = (src, dst) => {
  return fsPromises.readFile('./http.md', { encoding: 'utf8' });

}