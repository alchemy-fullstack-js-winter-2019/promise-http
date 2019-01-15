const fsPromises = require('fs').promises;

  // pending -> wating for the promise to finish
  // fulfilled -> the promise finished and resolved
  // rejected -> the promise finished and rejected
  fsPromises.readFile('./http.md', { encoding: 'utf8' })
    .then(data => console.log(data))
    .catch(err => console.error(err));

  fsPromises.writeFile('test.txt', 'Data To Write')
    .then(() => console.log('DONE'))
    .catch(err => console.error('ERROR'));

  fsPromises.readFile('./http.md', { encoding: 'utf8' })
    .then(data => fsPromises.writeFile('./http-copy.md', data))
    .then(() => console.log('DONE'))
    .catch(err => console.error(err));
