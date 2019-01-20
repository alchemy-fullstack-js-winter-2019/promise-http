/* eslint-disable no-console */
const fsPromises = require('fs').promises;

fsPromises.writeFile('./promises-copy.md', 'Writing stuff', { encoding: 'utf8' })
  .then(data => {
    console.log('DONE!');
    return data;
  })
  .catch(err => console.log(err));
