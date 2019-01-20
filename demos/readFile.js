const fsPromises = require('fs').promises;

fsPromises.readFile('./promises.md', { encoding: 'utf8' })
  .then(data => console.log(data)) // eslint-disable-line no-console
  .catch(err => console.log(err)); // eslint-disable-line no-console
