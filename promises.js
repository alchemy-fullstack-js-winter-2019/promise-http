/*eslint-disable no-console*/
const fsPromises = require('fs').promises;

// pending -> waiting for the promise to finish
// fulfilled -> the promise finished and resolved
// rejected -> the promise finished and rejected
fsPromises.readFile('./http.md', { encoding: 'utf8' })
  // then is called once promise is fulfilled
  .then(data => console.log(data))
  // catches the error if rejected
  .catch(err => console.error(err));

fsPromises.writeFile('test.txt', 'testing 123')
  .then(() => console.log('Done'))
  .catch(err => console.error(err));

fsPromises.readFile('./http.md', { encoding: 'utf8' })
  .then(data => {
    fsPromises.writeFile('http-copy.md', data)
      .then(() => console.log('Done'))
      .catch(err => console.error(err));
  });
