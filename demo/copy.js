const fsPromise = require('fs').promises;

module.exports = (src, dst) => {
  return fsPromise.readFile(src)
    .then(data => fsPromise.writeFile(dst, data))
    .catch(err => console.error(err));
};

// const fs = require('fs');

// const readPromise = src => new Promise((resolve, reject) => {

//   // read our file the old callback way
//   fs.readFile(src, { encoding: 'utf8' }, (err, data) => {
//     // invoke the reject function with an error if unsuccessful
//     if(err) reject(err);
//     // invoke the resolve function with data if successful
//     resolve(data);
//   });
// });

// module.exports = readPromise;
