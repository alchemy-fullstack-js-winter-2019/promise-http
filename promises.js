const fs = require('fs').promises;

//READ
fs.readFile('./.travis.yml', { encoding: 'utf-8' })
  .then(data => console.log(data))
  .catch(err => console.error(err));

//WRITE
fs.writeFile('test.txt', 'thiswrotetoyourfile', { encoding: 'utf-8' })
  .then(()=> console.log('WRITE FILE DONE!'))
  .catch(err => console.error(err));

//COPY 
fs.readFile('./.travis.yml', { encoding: 'utf-8' })
  .then(data => fs.writeFile('./.travis-copy.yml', data, { encoding: 'utf-8' }))
  .then(()=> console.log('COPY FILE DONE!'))
  .catch(err => console.error(err));

//OLD SCHOOL
const readPromise = src => new Promise((resolve, reject) => {
  //read our file the old skool way
  fs.readFile(src, { encoding: 'utf8' }, (err, data) => {
    if(err) return reject(err);
    resolve(data);
  });
});
readPromise('./.travis.yml')
  .then(data => console.log(data));


//Promise States:
//pending state ->waiting for the promise to finish
//fulfilled -> the promised finished & resolved
//rejected -> the promise finished & rejected




