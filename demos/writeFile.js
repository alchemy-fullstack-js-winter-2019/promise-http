const fsPromises = require('fs').promises;

fsPromises.writeFile('./promises-copy.md', 'Writing stuff', { encoding: 'utf8' })
  .then(data => data)
  .catch(err => console.log(err));
//OR
fsPromises.writeFile('./promises-copy.md', 'Writing MORE stuff')
  .then(() => console.log('done!'))
  .catch(err => console.log(err));
