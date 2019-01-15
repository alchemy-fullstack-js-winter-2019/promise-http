const fsPromises = require('fs').promises;
const fs = require('fs');

fsPromises.readFile('./promises.md', { encoding: 'utf8' })
    .then(data => console.log(data))
    .catch(err => console.error(err));

fsPromises.writeFile('WroteFile.txt', 'Hello world')
    .then(() => console.log('Done'));


fsPromises.readFile('./promises.md', { encoding: 'utf8' })
    .then((data) => fsPromises.writeFile('copiedFile.txt', data))
    .then(() => console.log('done'))
    .catch(err => console.error(err));
    

const readPromise = src => new Promise((resolve, reject) => { 
    
    fs.readFile(src, { encoding: 'uft8' }, (err, data) => {  
        if(err) return reject(err);
        resolve(data);
    });
});



readPromise('./transform')
    .then((data) => console.log(data));







       