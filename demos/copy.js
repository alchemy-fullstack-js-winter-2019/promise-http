const fsPromises = require('fs').promises;

module.exports = (src, dst) => {
  return fsPromises.readFile(src, { encoding: 'utf8' })
  .then(data => fsPromises.writeFile(dst, data))
  .then(() => console.log('done!'))
  .catch(err => console.log(err))
}