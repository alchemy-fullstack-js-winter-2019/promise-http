/*eslint-disable no-console*/
const fsPromise = require('fs').promises;

// pending -> waiting for the promise to finish
// fulfilled -> the promise finished and resolved
// rejected -> the promise finished and rejected
fsPromise.readFile('./http.md', { encoding: 'utf8' })
  // then is called once promise is fulfilled
  .then(data => console.log(data))
  // catches the error if rejected
  .catch(err => console.error(err));

fsPromise.writeFile('test.txt', 'testing 123')
  .then(() => console.log('Done'))
  .catch(err => console.error(err));

function copyFile(src, dst) {
  fsPromise.readFile(src, { encoding: 'utf8' })
    .then(data => fsPromise.writeFile(dst, data)
      .then(() => console.log('Done'))
      .catch(err => console.error(err))
    );  
}

module.exports = { copyFile };

