// const fsPromises = require('fs').promises;

// fsPromises.readFile('./http.md', { encoding: 'utf8' })
//   .then(data => fsPromises.writeFile('./http-copy.md', data))
//   .then(() => console.log('DONE'))
//   .catch(err => console.error(err));


const fs = require('fs');
const readPromise = src => new Promise((resolve, reject) => {
  fs.readFile(src, { encoding: 'utf8' }, (err, data) => {
    if(err) return reject(err);
    resolve(data);
  });
});

readPromise('./http.md')
  .then(data => console.log(data));
