const fs = require('fs');

const readPromise = src => new Promise((resolve, reject) => {
  //read our file the old callback way
  fs.readFile(src, { encoding: 'utf8' }, (err, data) =>{
    //invoke the reject function with an error if unsuccessful
    if(err) return reject(err);
    //invoke the resolve method with data if successful
    resolve(data);
  });
});

readPromise('./http.md')
  .then(data => console.log(data));
