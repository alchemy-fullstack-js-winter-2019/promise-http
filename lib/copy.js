const fsPromises = require('fs').promises;

module.exports = ('./http.md', 'http-copy.md') => {
return fsPromises.readFile('./http.md')
  .then(data => fsPromises.writeFile('./http-copy.md', data))
  .catch(err => console.error(err));
}