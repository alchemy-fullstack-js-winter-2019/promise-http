/* eslint-disable no-console */
const fsPromises = require('fs').promises;

fsPromises.readFile('./promises.md', { encoding: 'utf8' })
  .then(data => 
    fsPromises.writeFile('./promises-copy.md', data)
      .then(() => console.log('DONE!'))
      .catch(err => console.log(err))
  ).catch(err => console.log(err));

