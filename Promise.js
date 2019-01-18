/* eslint-disable no-console */
const fs = require('fs');

const readPromise = src => new Promise((resolve, reject) => {
  fs.readFile(src, { encoding: 'utf8' }, (err, data) => {
    if(err) return reject(err);
    resolve(data);
  });
});

readPromise('./promises.js')
  .then(data => console.log(data));
