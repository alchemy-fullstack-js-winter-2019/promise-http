const fsPromises = require('fs').promises;


// pending -> waiting for the promise to finish
// fulfilled -> the promise finished and resolved
// rejected -> the promise finished and rejected

// Read a file
fsPromises.readFile('.gitignore', { encoding: 'utf8' }) // example file to read is .gitignore
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Write a file
fsPromises.writeFile('test.txt', 'Write a test') 
  .then(() => console.log('Done'))
  .catch(err => console.err(err));

// Copy file
fsPromises.readFile('.gitignore', { encoding: 'utf8' }) 
  .then(data =>
    fsPromises.writeFile('test.txt', data)) 
  .then(() => console.log('Done'))
  .catch(err => console.err(err));
  
 
