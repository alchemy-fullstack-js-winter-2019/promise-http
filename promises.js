const fsPromises = require('fs').promises;


// pending -> waiting for the promise to finish
// fulfilled -> the promise finished and resolved
// rejected -> the promise finished and rejected
fsPromises.readFile('./http.md', { encoding: 'utf8' })
  .then(data => console.log(data))
  .catch(err => console.log(err));

fsPromises.writeFile('test.txt', 'Data to write')
  .then(() => console.log('DONE'))
  .catch(err => console.error(err));

fsPromises.readFile('./http.md', { encoding: 'utf8' })
  .then(data => fsPromises.writeFile('./http-copy.md', data))
  .then(() => console.log('DONE'))
  .catch(err => console.log(err));
