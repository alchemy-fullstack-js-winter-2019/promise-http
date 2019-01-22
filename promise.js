const fs = require('fs');

// pending -> waiting for the promise to finish
// fulfilled
// rejected
// fsPromises.readFile('./http.md', { encoding: 'utf8'})
// .then(data => fsPromises.writeFile)



const readPromise = src => new Promise((resolve, reject) => {
  // read our file the old callback way
  fs.readFile(src, { encoding: 'utf8' }, (err, data) => {
    // invoke the reject function with an error if unsuccessful
    if(err) return reject(err);
    // invoke the resolve function with data if successful
    resolve(data);
  });
  
});

readPromise('./http.md')
  .then(data => console.log(data));
