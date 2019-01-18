const fsPromises = require('fs').promises;

fsPromises.writeFile('./promises-copy.md', 'Writing stuff', { encoding: 'utf8' })
  .then(data => data)
  .catch(err => console.log(err)); // eslint-disable-line no-console
//OR
fsPromises.writeFile('./promises-copy.md', 'Writing MORE stuff')
  .then(() => console.log('done!')) // eslint-disable-line no-console
  .catch(err => console.log(err)); // eslint-disable-line no-console
