const fsPromises = require('fs').promises;

// fsPromises.readFile('./promises.md', { encoding: 'utf8' })
//   .then(data => 
//     fsPromises.writeFile('./promises-copy.md', data)
//       .then(() => console.log('done!'))
//       .catch(err => console.log(err))
//   ).catch(err => console.log(err));

//OR
fsPromises.readFile('./promises.md', { encoding: 'utf8' })
  .then(data => fsPromises.writeFile('./promises-copy.md', data))
  .then(() => console.log('done!'))
  .catch(err => console.log(err))

//OR
// fsPromises.readFile('./promises.md', { encoding: 'utf8' })
//   .then(data => {
//     return fsPromises.writeFile('./promises-copy.md', data)
//   })
//   .then(() => console.log('done!'))
//   .catch(err => console.log(err))