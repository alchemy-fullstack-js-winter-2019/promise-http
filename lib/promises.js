/* eslint-disable no-console */
const fsPromises = require('fs').promises;
const fs = require('fs');


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

const readPromise = src => new Promise((resolve, reject) => {
  // read out file the old callback way
  readPromise('./http.md');
  fs.readFile(src, { encoding: 'utf8' }, (err, data) => {
    if(err) return reject(err);
    resolve(data);
  });
});

readPromise('./http.md')
  .then(data => console.log(data));
