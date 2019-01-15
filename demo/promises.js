const fsPromises = require('fs').promises;

fsPromises.readFile('./promises.md', { encoding: 'utf8' }) //pending - waiting for the promise to finish
  .then(data => console.log(data)) //fullfilled - promise is finished and resolved
  .catch(err => console.error(err)); //the promise finished and rejected


fsPromises.writeFile('./writeFile.txt', 'hello world', { encoding: 'utf8' })
  .then(() => console.log('finished!'))
  .catch(err => console.error(err));
