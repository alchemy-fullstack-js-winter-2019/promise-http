const fsPromises = require('fs').promises;
fsPromises.readFile('./promises.md', { encoding: 'utf8' })
    .then(data => console.log(data))
    .catch(err => console.error(err));

fsPromises.writeFile('WroteFile.txt', 'Hello world')
    .then(() => console.log('Done'));


fsPromises.readFile('./promises.md', { encoding: 'utf8' })
    .then((data) => fsPromises.writeFile('copiedFile.txt', data))
    .then(() => console.log('done'))
    .catch(err => console.error(err));
    


