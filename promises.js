const fsPromises = require('fs').promises;

fsPromises.readFile(file);
  console.log(file);

  // pending -> waiting for the promise to finish
  // fulfilled -> the promise finished and resolved
  // rejected -> the promise finished and rejected
fsPromises.readFile('./http.md', { encoding: 'utf8' })
  .then(data => console.log(data));
  .catch(err => console.log(err));

fsPromises.writeFile('test.txt', 'testing123', { encoding: 'utf8' })
  .then(() => console.log('DONE'));
  .catch(err => console.error('ERROR'));
